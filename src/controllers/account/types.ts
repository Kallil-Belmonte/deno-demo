import type { User } from '@/controllers/user/types.ts';

export type AccountToCreate = {
  firstName: User['personalData']['firstName'];
  lastName: User['personalData']['lastName'];
  email: User['account']['email'];
  password: string;
};
