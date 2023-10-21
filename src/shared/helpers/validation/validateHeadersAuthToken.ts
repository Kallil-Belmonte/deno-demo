import { unauthorized, forbidden } from '@/routes/_files/responses.ts';
import isValidAuthToken from './isValidAuthToken.ts';

/**
 * @function validateHeadersAuthToken
 * @description Checks if the auth token from the headers is valid.
 * @param { Headers } headers - Headers.
 */

const validateHeadersAuthToken = async (headers: Headers) => {
  const authHeader = headers.get('Authorization');
  if (!authHeader?.startsWith('Bearer '))
    return unauthorized({ messages: ['Authentication token is required.'] });

  const authToken = authHeader.replace('Bearer ', '');
  const isValid = await isValidAuthToken(authToken);
  return isValid ? null : forbidden({ messages: ['Invalid authentication token.'] });
};

export default validateHeadersAuthToken;
