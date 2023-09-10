import type { Endpoints } from '@/routes/_files/types.ts';
import { createAccount } from '@/controllers/mod.ts';
import { accountUrl } from './endpoints.ts';

const POST = (request: Request) => {
  const { url } = request;
  const { pathname } = new URL(url);

  const endpoints: Endpoints = {
    [accountUrl]: createAccount,
  };

  return endpoints[pathname](request);
};

export default POST;
