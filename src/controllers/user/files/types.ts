import { ObjectId } from 'mongo';

import type { IdParam, Option } from '@/shared/files/types.ts';
import type { LoggedUser } from '@/controllers/authentication/files/types.ts';

export type Language = 'pt-br' | 'pt-pt' | 'en-us';

export type Location = {
  country: string;
  state: string;
  city: string;
};

export type Addictions = {
  smoker: Option;
  drinksAlcohol: Option;
  drinksWine: Option;
};

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

export type ZodiacSign =
  | 'Aquarius'
  | 'Aries'
  | 'Cancer'
  | 'Capricorn'
  | 'Gemini'
  | 'Leo'
  | 'Libra'
  | 'Pisces'
  | 'Sagittarius'
  | 'Scorpio'
  | 'Taurus'
  | 'Virgo';

export type GetUserParams = Partial<IdParam> & {
  email?: string;
};

export type GetUsersParams = {
  ids?: string[];
  emails?: string[];
};

export type User = {
  _id: ObjectId;
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

export type FullUser = LoggedUser & {
  account: {
    password: string;
  };
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
