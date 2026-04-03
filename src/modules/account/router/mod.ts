import { createAccount, deleteAccount } from '../controllers/mod.ts';
import { accountUrl } from './endpoints.ts';

const account = {
  [accountUrl]: {
    POST: createAccount,
    DELETE: deleteAccount,
  },
};

export default account;
