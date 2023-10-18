import { type Header, type Payload, create } from 'djwt';

import { AUTH_TOKEN_ISSUER } from '@/shared/files/consts.ts';
import getAuthTokenKey from './getAuthTokenKey.ts';

// iss (Issuer): The issuer of the JWT token, i.e. the entity that issued the token.
// sub (Subject): The subject of the token, i.e. the user or entity that the token represents.
// aud (Audience): The audience of the token, i.e. the expected recipients of the token. It can be a single string or an array of strings.
// exp (Expiration Time): The expiration time of the token, after which it is no longer valid.
// nbf (Not Before): The time at which the token becomes valid, i.e. it can only be used after that moment.
// iat (Issued At): The time at which the token was issued.
// jti (JWT ID): A unique identifier for the JWT token, used to avoid reusing tokens.

/**
 * @function generateAuthToken
 * @description Generates the auth token.
 * @param { ApiKey } apiKey - Token subject.
 * @param { string } sub - Token subject.
 * @param { number } [tokenDuration=7] - Token duration in days.
 */

const generateAuthToken = async (
  apiKey: Parameters<typeof getAuthTokenKey>[0],
  sub: string,
  tokenDuration = 7,
) => {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + tokenDuration);

  const header: Header = { alg: 'HS512', typ: 'JWT' };
  const payload: Payload = {
    iss: AUTH_TOKEN_ISSUER,
    sub,
    iat: new Date().getTime(),
    exp: expirationDate.getTime(),
  };
  const key = await getAuthTokenKey(apiKey);
  const token = await create(header, payload, key);

  return token;
};

export default generateAuthToken;
