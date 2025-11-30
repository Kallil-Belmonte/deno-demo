import account from '../../modules/account/router/mod.ts';
import authentication from '../../modules/authentication/router/mod.ts';
import user from '../../modules/user/router/mod.ts';
import type { ObjectType } from '../../shared/files/types.ts';
import { isFlood, validateAuthTokenFromHeaders, validateCORS } from '../../shared/helpers/mod.ts';
import { success } from './responses.ts';

const router = async (request: Request) => {
  const { method, url } = request;
  const { pathname } = new URL(url);

  // Preflight request
  if (method === 'OPTIONS') return success(request, null);

  // Validate CORS
  const corsError = validateCORS(request);
  if (corsError) return corsError;

  // Validate auth token from headers
  const authTokenError = await validateAuthTokenFromHeaders(request);
  if (authTokenError) return authTokenError;

  // Validate flood limit
  const floodError = isFlood(request);
  if (floodError) return floodError;

  const routes: ObjectType = {
    GET: {
      ...user.GET,
    },
    POST: {
      ...account.POST,
      ...authentication.POST,
    },
    PUT: {
      ...user.PUT,
    },
    DELETE: {
      ...account.DELETE,
    },
  };

  if (!routes[method][pathname]) return new Response('Route not found.');
  return routes[method][pathname](request);
};

export default router;
