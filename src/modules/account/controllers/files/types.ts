import type { User } from '@/modules/user/controllers/files/types.ts';

export type AccountToCreate = {
  firstName: User['personalData']['firstName'];
  lastName: User['personalData']['lastName'];
  email: User['account']['email'];
  password: string;
};
