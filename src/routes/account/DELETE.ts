import type { Endpoints } from '@/routes/_files/types.ts';
import { deleteAccount } from '@/controllers/mod.ts';
import { accountUrl } from './endpoints.ts';

const DELETE = (request: Request) => {
  const { url } = request;
  const { pathname } = new URL(url);

  const endpoints: Endpoints = {
    [accountUrl]: deleteAccount,
  };

  return endpoints[pathname](request);
};

export default DELETE;
