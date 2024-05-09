import type { User } from '@/controllers/user/files/types.ts';

export type UserToLogin = {
  email: string;
  password: string;
};

export type UserToResetPassword = {
  email: string;
};

export type LoggedUser = User & {
  token: {
    auth: string;
  };
};

export type ResetedPassword = {
  recoveryEmail: string;
};
