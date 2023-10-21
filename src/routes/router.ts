import { validateHeadersAuthToken } from '@/shared/helpers/mod.ts';
import accountEndpoints from './account/endpoints.ts';
import account from './account/mod.ts';
import authenticationEndpoints from './authentication/endpoints.ts';
import authentication from './authentication/mod.ts';
import userEndpoints from './user/endpoints.ts';
import user from './user/mod.ts';

const router = async (request: Request) => {
  const { headers, url } = request;
  const { pathname } = new URL(url);

  // Validate headers auth token
  const response = await validateHeadersAuthToken(headers);
  if (response) return response;

  if (accountEndpoints.includes(pathname)) return account(request);
  if (authenticationEndpoints.includes(pathname)) return authentication(request);
  if (userEndpoints.includes(pathname)) return user(request);

  return new Response('Message not found here.');
};

export default router;
