import type { Endpoints } from '@/routes/_files/types.ts';
import { editUser } from '@/controllers/mod.ts';
import { userUrl } from './endpoints.ts';

const PUT = (request: Request) => {
  const { url } = request;
  const { pathname } = new URL(url);

  const endpoints: Endpoints = {
    [userUrl]: editUser,
  };

  return endpoints[pathname](request);
};

export default PUT;
