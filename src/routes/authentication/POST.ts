import { login, forgotPassword, resetPassword } from '@/controllers/mod.ts';
import { loginUrl, forgotPasswordUrl, resetPasswordUrl } from './endpoints.ts';

const POST = {
  [loginUrl]: login,
  [forgotPasswordUrl]: forgotPassword,
  [resetPasswordUrl]: resetPassword,
};

export default POST;
