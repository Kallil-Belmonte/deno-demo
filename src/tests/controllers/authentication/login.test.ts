import { assert, assertEquals } from '@std/assert';
import { object, string } from '@valibot/valibot';
import { decode } from '@zaubrik/djwt';

import type { LoggedUser, UserToLogin } from '@/controllers/authentication/files/types.ts';
import { isArray, request, validateSchema } from '@/shared/helpers/mod.ts';
import { getMinLengthSchema, getObjectIdSchema } from '@/shared/files/schemas.ts';
import { loginUrl } from '@/routes/authentication/endpoints.ts';
import { getCollection } from '@/database/mod.ts';
import {
  AccountSchema,
  AddictionsSchema,
  LocationSchema,
  PersonalDataSchema,
} from '@/tests/files/schemas.ts';

const { stringify } = JSON;

const payload: UserToLogin = {
  email: 'jar.gomez@gmail.com',
  password: '123456',
};

const LoggedUserSchema = object({
  _id: getObjectIdSchema('_id'),
  token: object({
    auth: getMinLengthSchema('auth', 5),
    notification: string(),
  }),
  personalData: PersonalDataSchema,
  account: AccountSchema,
  location: LocationSchema,
  addictions: AddictionsSchema,
  match: object({}),
});

const login = (body: UserToLogin): Promise<LoggedUser | null> =>
  request({ url: `login`, init: { method: 'POST', body: stringify(body) } });

Deno.test(`POST: ${loginUrl}`, async () => {
  // Assert response
  const user = await login(payload);
  const { valid } = validateSchema(user, LoggedUserSchema);
  assertEquals(valid, true);

  // Assert auth token
  const decodedToken = decode(user?.token.auth || '');
  assert(isArray(decodedToken));

  // Assert database
  const usersCollection = getCollection('users', 'dev');
  const databaseUser = await usersCollection.findOne({ 'account.email': payload.email });
  assertEquals(databaseUser?.token.auth, user?.token.auth);
});
