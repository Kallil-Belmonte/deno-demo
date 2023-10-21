import type { Endpoints } from '@/routes/_files/types.ts';
import { login, forgotPassword, resetPassword } from '@/controllers/mod.ts';
import { loginUrl, forgotPasswordUrl, resetPasswordUrl } from './endpoints.ts';

const POST = (request: Request) => {
  const { url } = request;
  const { pathname } = new URL(url);

  const endpoints: Endpoints = {
    [loginUrl]: login,
    [forgotPasswordUrl]: forgotPassword,
    [resetPasswordUrl]: resetPassword,
  };

  return endpoints[pathname](request);
};

export default POST;
