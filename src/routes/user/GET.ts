import { getUsers } from '@/controllers/mod.ts';
import { usersUrl } from './endpoints.ts';

const GET = {
  [usersUrl]: getUsers,
};

export default GET;
