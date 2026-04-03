import { forgotPassword, login, resetPassword } from '../controllers/mod.ts';
import { forgotPasswordUrl, loginUrl, resetPasswordUrl } from './endpoints.ts';

const authentication = {
  [loginUrl]: {
    POST: login,
  },
  [forgotPasswordUrl]: {
    POST: forgotPassword,
  },
  [resetPasswordUrl]: {
    POST: resetPassword,
  },
};

export default authentication;
