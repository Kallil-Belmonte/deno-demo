import account from '@/modules/account/router/mod.ts';
import authentication from '@/modules/authentication/router/mod.ts';
import user from '@/modules/user/router/mod.ts';
import type { ObjectType } from '@/shared/files/types.ts';
import { validateAuthTokenFromHeaders, validateCORS } from '@/shared/helpers/mod.ts';
import { noContent } from './responses.ts';

const router = async (request: Request) => {
  const { method, url } = request;
  const { pathname } = new URL(url);

  // Preflight request
  if (method === 'OPTIONS') return noContent(request);

  // Validate CORS
  const corsError = validateCORS(request);
  if (corsError) return corsError;

  // Validate auth token from headers
  const authTokenError = await validateAuthTokenFromHeaders(request);
  if (authTokenError) return authTokenError;

  const routes: ObjectType = {
    ...authentication,
    ...account,
    ...user,
  };

  if (!routes[pathname]?.[method]) return new Response('Route not found.');
  return routes[pathname][method](request);
};

export default router;
