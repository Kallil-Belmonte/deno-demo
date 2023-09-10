import type { Endpoints } from '@/routes/_files/types.ts';
import { getUser, getUsers } from '@/controllers/mod.ts';
import { userUrl, usersUrl } from './endpoints.ts';

const GET = (request: Request) => {
  const { url } = request;
  const { pathname } = new URL(url);

  const endpoints: Endpoints = {
    [userUrl]: getUser,
    [usersUrl]: getUsers,
  };

  return endpoints[pathname](request);
};

export default GET;
