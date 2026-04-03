import { editUser, getUsers } from '../controllers/mod.ts';
import { usersUrl, userUrl } from './endpoints.ts';

const user = {
  [usersUrl]: {
    GET: getUsers,
  },
  [userUrl]: {
    PUT: editUser,
  },
};

export default user;
