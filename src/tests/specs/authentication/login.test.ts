import { assertEquals, assert } from 'assert';
import { decode } from 'djwt';

import type { UserToLogin, LoggedUser } from '@/controllers/authentication/files/types.ts';
import { request, validateBody, isArray } from '@/shared/helpers/mod.ts';
import { loginUrl } from '@/routes/authentication/endpoints.ts';

const { stringify } = JSON;

const payload: UserToLogin = {
  email: 'jar.gomez@gmail.com',
  password: '123456',
};

const loggedUserSchema = {
  _id: 'string',
  auth: {
    token: 'string',
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
  if (!user) return;

  // Assert response
  const response = validateBody(stringify(user), loggedUserSchema);
  assertEquals(response, undefined);

  // Assert auth token
  const decodedToken = decode(user.auth.token);
  assert(isArray(decodedToken));
});
