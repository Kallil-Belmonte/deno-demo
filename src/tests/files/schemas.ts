import { object, null as vNull, string } from '@valibot/valibot';

import {
  EmailSchema,
  LanguageSchema,
  CountrySchema,
  GenderSchema,
  SexualOrientationSchema,
  ZodiacSignSchema,
  getStringSchema,
  getOptionSchema,
} from '@/shared/files/schemas.ts';

export const PersonalDataSchema = object({
  photo: string(),
  firstName: getStringSchema('firstName'),
  lastName: getStringSchema('lastName'),
  gender: GenderSchema,
  sexualOrientation: SexualOrientationSchema,
  birthdate: getStringSchema('birthdate'),
  zodiacSign: ZodiacSignSchema,
  identityDocument: object({
    cpf: object({
      initials: getStringSchema('initials'),
      name: getStringSchema('name'),
      number: string(),
      country: CountrySchema,
    }),
    curp: object({
      initials: getStringSchema('initials'),
      name: getStringSchema('name'),
      number: string(),
      country: string(),
    }),
    nif: object({
      initials: getStringSchema('initials'),
      name: getStringSchema('name'),
      number: string(),
      country: vNull(),
    }),
    ssn: object({
      initials: getStringSchema('initials'),
      name: getStringSchema('name'),
      number: string(),
      country: CountrySchema,
    }),
  }),
});

export const AccountSchema = object({
  email: EmailSchema,
  passwordRecoveryEmail: EmailSchema,
  cellphone: getStringSchema('cellphone'),
  language: LanguageSchema,
  createdAt: getStringSchema('createdAt'),
});

export const LocationSchema = object({
  country: CountrySchema,
  state: getStringSchema('state'),
  city: getStringSchema('city'),
});

export const AddictionsSchema = object({
  smoker: getOptionSchema('smoker'),
  drinksAlcohol: getOptionSchema('drinksAlcohol'),
  drinksWine: getOptionSchema('drinksWine'),
});
