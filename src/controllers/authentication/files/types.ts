import type { User } from '@/controllers/user/files/types.ts';

export type UserToLogin = {
  email: string;
  password: string;
};

export type UserToResetPassword = {
  email: string;
};

export type LoggedUser = User & {
  auth: {
    token: string;
    expiresIn: number;
  };
};

export type ResetedPassword = {
  recoveryEmail: string;
};
