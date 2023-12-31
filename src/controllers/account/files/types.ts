import type { User } from '@/controllers/user/files/types.ts';

export type AccountToCreate = {
  firstName: User['personalData']['firstName'];
  lastName: User['personalData']['lastName'];
  email: User['account']['email'];
  password: string;
};
