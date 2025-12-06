import type {
  Gender,
  Language,
  SexualOrientation,
  ZodiacSign,
} from '../../modules/user/controllers/files/types.ts';
import type { Option } from './types.ts';

export const PROJECT_TITLE = 'Demo';

export const DOMAIN_URL = `${PROJECT_TITLE.toLowerCase()}.com`;

export const WEBSITE_URL = `https://${DOMAIN_URL}`;

export const ALLOWED_ORIGINS = [
  new RegExp(`^(https?://)?(www.)?${DOMAIN_URL}(\\/.*)?$`),
  new RegExp(`^(https?://)?(www.)?app.${DOMAIN_URL}(\\/.*)?$`),
];

export const AUTH_TOKEN_ISSUER = `api.${DOMAIN_URL}`;

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
