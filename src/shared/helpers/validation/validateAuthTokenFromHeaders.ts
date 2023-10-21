import type { ObjectType } from '@/shared/files/types.ts';
import { accountUrl } from '@/routes/account/endpoints.ts';
import {
  loginUrl,
  forgotPasswordUrl,
  resetPasswordUrl,
} from '@/routes/authentication/endpoints.ts';
import { unauthorized, forbidden } from '@/routes/_files/responses.ts';
import isValidAuthToken from './isValidAuthToken.ts';

const urlsWithoutAuthToken: ObjectType = {
  POST: [accountUrl, loginUrl, forgotPasswordUrl, resetPasswordUrl],
};

/**
 * @function validateAuthTokenFromHeaders
 * @description Checks if the auth token from the headers is valid.
 * @param { Headers } headers - Headers.
 */

const validateAuthTokenFromHeaders = async (request: Request) => {
  const { headers, method, url } = request;
  const { pathname } = new URL(url);

  if (urlsWithoutAuthToken[method]?.includes(pathname)) return null;

  const authHeader = headers.get('Authorization');
  if (!authHeader?.startsWith('Bearer '))
    return unauthorized({ messages: ['Authentication token is required.'] });

  const authToken = authHeader.replace('Bearer ', '');
  const isValid = await isValidAuthToken(authToken);
  return isValid ? null : forbidden({ messages: ['Invalid authentication token.'] });
};

export default validateAuthTokenFromHeaders;
