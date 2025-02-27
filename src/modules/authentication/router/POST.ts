import { forgotPassword, login, resetPassword } from '../controllers/mod.ts';
import { forgotPasswordUrl, loginUrl, resetPasswordUrl } from './endpoints.ts';

const POST = {
  [loginUrl]: login,
  [forgotPasswordUrl]: forgotPassword,
  [resetPasswordUrl]: resetPassword,
};

export default POST;
