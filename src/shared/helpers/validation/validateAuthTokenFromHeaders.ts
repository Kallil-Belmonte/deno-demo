import { forbidden, unauthorized } from '@/core/router/responses.ts';
import { accountUrl } from '../../../modules/account/router/endpoints.ts';
import {
  forgotPasswordUrl,
  loginUrl,
  resetPasswordUrl,
} from '../../../modules/authentication/router/endpoints.ts';
import type { ObjectType } from '../../files/types.ts';
import isValidAuthToken from './isValidAuthToken.ts';

const urlsWithoutAuthToken: ObjectType = {
  POST: [accountUrl, loginUrl, forgotPasswordUrl, resetPasswordUrl],
};

/**
 * @function validateAuthTokenFromHeaders
 * @description Checks if the auth token from the headers is valid.
 * @param { Request } request - Request object.
 */

const validateAuthTokenFromHeaders = async (request: Request) => {
  const { headers, method, url } = request;
  const { pathname } = new URL(url);

  if (urlsWithoutAuthToken[method]?.includes(pathname)) return null;

  const auth = headers.get('Authorization');
  if (!auth) return unauthorized(request, { messages: ['Authentication token is required.'] });

  const isValid = await isValidAuthToken(auth);
  return isValid ? null : forbidden(request, { messages: ['Invalid authentication token.'] });
};

export default validateAuthTokenFromHeaders;
