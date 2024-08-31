import { createAccount } from '@/controllers/mod.ts';
import { accountUrl } from './endpoints.ts';

const POST = {
  [accountUrl]: createAccount,
};

export default POST;
