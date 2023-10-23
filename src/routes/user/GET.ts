import type { Endpoints } from '@/routes/_files/types.ts';
import { getUsers } from '@/controllers/mod.ts';
import { usersUrl } from './endpoints.ts';

const GET = (request: Request) => {
  const { url } = request;
  const { pathname } = new URL(url);

  const endpoints: Endpoints = {
    [usersUrl]: getUsers,
  };

  return endpoints[pathname](request);
};

export default GET;
