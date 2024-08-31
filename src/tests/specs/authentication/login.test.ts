import { assertEquals, assert } from '@std/assert';
import { decode } from '@zaubrik/djwt';

import type { UserToLogin, LoggedUser } from '@/controllers/authentication/files/types.ts';
import { request, validateBody, isArray } from '@/shared/helpers/mod.ts';
import { loginUrl } from '@/routes/authentication/endpoints.ts';
import { getCollection } from '@/database/mod.ts';

const { stringify } = JSON;

const payload: UserToLogin = {
  email: 'jar.gomez@gmail.com',
  password: '123456',
};

const loggedUserSchema = {
  _id: 'string',
  token: {
    auth: 'string',
  },
  personalData: {
    photo: 'string',
    firstName: 'string',
    lastName: 'string',
    gender: 'string',
    sexualOrientation: 'string',
    birthdate: 'string',
    zodiacSign: 'string',
    identityDocument: 'object',
  },
  account: {
    email: 'string',
    passwordRecoveryEmail: 'string',
    cellphone: 'string',
    language: 'string',
    plan: 'string',
    createdAt: 'string',
  },
  location: 'object',
  addictions: 'object',
  characteristics: 'object',
  match: 'object',
};

const login = (body: UserToLogin): Promise<LoggedUser | null> =>
  request({ url: `login`, init: { method: 'POST', body: stringify(body) } });

Deno.test(loginUrl, async () => {
  const user = await login(payload);

  // Assert response
  const response = validateBody(stringify(user), loggedUserSchema);
  assertEquals(response, undefined);

  // Assert auth token
  const decodedToken = decode(user?.token.auth || '');
  assert(isArray(decodedToken));

  // Assert database
  const usersCollection = getCollection('users', 'dev');
  const databaseUser = await usersCollection.findOne({ 'account.email': payload.email });
  assertEquals(databaseUser?.token.auth, user?.token.auth);
});
