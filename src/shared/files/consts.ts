import type { Option } from '@/shared/files/types.ts';
import type {
  Gender,
  Language,
  SexualOrientation,
  ZodiacSign,
} from '@/controllers/user/files/types.ts';

export const PROJECT_TITLE = 'Demo';

export const PROJECT_DOMAIN = PROJECT_TITLE.toLocaleLowerCase();

export const AUTH_TOKEN_ISSUER = `api.${PROJECT_DOMAIN}.com`;

export const OPTIONS: Option[] = ['yes', 'no'];

export const LANGUAGES: Language[] = ['pt-br', 'pt-pt', 'en-us'];

export const COUNTRIES = ['Brazil', 'Portugal', 'United States'];

export const GENDERS: Gender[] = [
  'Agender',
  'Bigender',
  'Cisgender man',
  'Cisgender woman',
  'Fluid',
  'Non-binary',
  'Transgender man',
  'Transgender woman',
];

export const SEXUAL_ORIENTATIONS: SexualOrientation[] = [
  'Asexual',
  'Bisexual',
  'Demisexual',
  'Heterosexual',
  'Homosexual',
  'Pansexual',
  'Polysexual',
  'Queer',
];

export const ZODIAC_SIGNS: ZodiacSign[] = [
  'Aquarius',
  'Aries',
  'Cancer',
  'Capricorn',
  'Gemini',
  'Leo',
  'Libra',
  'Pisces',
  'Sagittarius',
  'Scorpio',
  'Taurus',
  'Virgo',
];
