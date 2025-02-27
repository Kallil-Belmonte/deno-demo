import { editUser } from '../controllers/mod.ts';
import { userUrl } from './endpoints.ts';

const PUT = {
  [userUrl]: editUser,
};

export default PUT;
