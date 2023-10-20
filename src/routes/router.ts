import { isValidHeadersAuthToken } from '@/shared/helpers/mod.ts';
import { unauthorized } from '@/routes/_files/responses.ts';
import accountEndpoints from './account/endpoints.ts';
import account from './account/mod.ts';
import authenticationEndpoints from './authentication/endpoints.ts';
import authentication from './authentication/mod.ts';
import userEndpoints from './user/endpoints.ts';
import user from './user/mod.ts';

const router = async (request: Request) => {
  const { headers, url } = request;
  const { pathname } = new URL(url);

  // Validate auth token
  const isValid = await isValidHeadersAuthToken(headers);
  if (!isValid) return unauthorized({ messages: ['Invalid authentication token.'] });

  if (accountEndpoints.includes(pathname)) return account(request);
  if (authenticationEndpoints.includes(pathname)) return authentication(request);
  if (userEndpoints.includes(pathname)) return user(request);

  return new Response('Message not found here.');
};

export default router;
