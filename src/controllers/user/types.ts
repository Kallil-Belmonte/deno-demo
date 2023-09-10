import type { IdParam } from '@/shared/files/types.ts';

export type Gender =
  | 'Agender'
  | 'Bigender'
  | 'Cisgender man'
  | 'Cisgender woman'
  | 'Fluid'
  | 'Non-binary'
  | 'Transgender man'
  | 'Transgender woman';

export type SexualOrientation =
  | 'Asexual'
  | 'Bisexual'
  | 'Demisexual'
  | 'Heterosexual'
  | 'Homosexual'
  | 'Pansexual'
  | 'Polysexual'
  | 'Queer';

export type Language = 'pt-br' | 'pt-pt' | 'en-us';

export type Location = {
  country: string;
  state: string;
  city: string;
};

export type Addictions = {
  smoker: boolean;
  drinksAlcohol: boolean;
  drinksWine: boolean;
};

export type GetUserParams = Partial<IdParam> & {
  email?: string;
};

export type GetUsersParams = {
  ids?: string[];
  emails?: string[];
};

export type User = {
  _id: string;
  personalData: {
    photo: string;
    firstName: string;
    lastName: string;
    gender: Gender;
    sexualOrientation: SexualOrientation;
    birthdate: string;
  };
  account: {
    email: string;
    cellphone: string;
    language: Language;
  };
  location: Location;
};

export type UserToEdit = IdParam & {
  email?: User['account']['email'];
  passwordRecoveryEmail?: User['account']['email'];
  password?: string;
  cellphone?: User['account']['cellphone'];
  language?: User['account']['language'];
  gender?: User['personalData']['gender'];
  sexualOrientation?: User['personalData']['sexualOrientation'];
  country?: Location['country'];
  state?: Location['state'];
  city?: Location['city'];
};
