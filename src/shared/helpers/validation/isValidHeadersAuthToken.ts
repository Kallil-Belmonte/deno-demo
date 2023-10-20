import isValidAuthToken from './isValidAuthToken.ts';

/**
 * @function isValidHeadersAuthToken
 * @description Checks if the auth token from the headers is valid.
 */

const isValidHeadersAuthToken = (headers: Headers) => {
  const authHeader = headers.get('Authorization');
  if (!authHeader?.startsWith('Bearer ')) return false;

  const authToken = authHeader.replace('Bearer ', '');
  return isValidAuthToken(authToken);
};

export default isValidHeadersAuthToken;
