import type { ObjectType } from '@/shared/files/types.ts';
import { validateAuthTokenFromHeaders } from '@/shared/helpers/mod.ts';
import { success } from '@/routes/_files/responses.ts';
import account from './account/mod.ts';
import authentication from './authentication/mod.ts';
import user from './user/mod.ts';

const router = async (request: Request) => {
  const { method, url } = request;
  const { pathname } = new URL(url);

  // Preflight request
  if (method === 'OPTIONS') return success(null);

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
