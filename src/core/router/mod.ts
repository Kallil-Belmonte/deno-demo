import account from '@/modules/account/router/mod.ts';
import authentication from '@/modules/authentication/router/mod.ts';
import user from '@/modules/user/router/mod.ts';
import type { ObjectType } from '@/shared/files/types.ts';
import { validateAuthTokenFromHeaders } from '@/shared/helpers/mod.ts';
import { success } from './responses.ts';

const router = async (request: Request) => {
  const { method, url } = request;
  const { pathname } = new URL(url);

  // Preflight request
  if (method === 'OPTIONS') return success(request, null);

  // Validate auth token from headers
  const response = await validateAuthTokenFromHeaders(request);
  if (response) return response;

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
