import type { Endpoints } from '@/routes/_files/types.ts';
import { login, resetPassword } from '@/controllers/mod.ts';
import { loginUrl, resetPasswordUrl } from './endpoints.ts';

const POST = (request: Request) => {
  const { url } = request;
  const { pathname } = new URL(url);

  const endpoints: Endpoints = {
    [loginUrl]: login,
    [resetPasswordUrl]: resetPassword,
  };

  return endpoints[pathname](request);
};

export default POST;
