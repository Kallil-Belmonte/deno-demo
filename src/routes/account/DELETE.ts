import { deleteAccount } from '@/controllers/mod.ts';
import { accountUrl } from './endpoints.ts';

const DELETE = {
  [accountUrl]: deleteAccount,
};

export default DELETE;
