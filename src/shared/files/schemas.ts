import {
  array,
  blob,
  boolean,
  custom,
  email,
  everyItem,
  maxLength,
  minLength,
  nonEmpty,
  number,
  object,
  partial,
  pipe,
  string,
} from '@valibot/valibot';

import type { Option } from '@/shared/files/types.ts';
import type {
  Gender,
  Language,
  SexualOrientation,
  ZodiacSign,
} from '@/controllers/user/files/types.ts';
import {
  COUNTRIES,
  GENDERS,
  LANGUAGES,
  OPTIONS,
  SEXUAL_ORIENTATIONS,
  ZODIAC_SIGNS,
} from '@/shared/files/consts.ts';
import { isValidObjectId } from '@/shared/helpers/mod.ts';

/**
 * @see Valibot {@link https://valibot.dev}
 */

export const EmailSchema = pipe(string("Invalid 'email' type: Expected string."), email());

const cellphoneLength = 5;

export const CellphoneSchema = pipe(
  string("Invalid 'cellphone' type: Expected string."),
  minLength(
    cellphoneLength,
    `Invalid 'cellphone' length: Expected at least ${cellphoneLength} characters.`,
  ),
);

export const LanguageSchema = pipe(
  string("Invalid 'language' type: Expected string."),
  custom((input: any) => LANGUAGES.includes(input as Language), "Invalid 'language'."),
);

export const CountrySchema = pipe(
  string("Invalid 'country' type: Expected string."),
  custom((input: any) => COUNTRIES.includes(input), "Some value in 'country' is not valid."),
);

export const GenderSchema = pipe(
  string("Invalid 'gender' type: Expected string."),
  custom((input: any) => GENDERS.includes(input as Gender), "Invalid 'gender'."),
);

export const GendersSchema = pipe(
  array(string("Invalid 'genders' type: Expected string[].")),
  everyItem((item) => GENDERS.includes(item as Gender), "Some value in 'genders' is not valid."),
);

export const SexualOrientationSchema = pipe(
  string("Invalid 'sexualOrientation' type: Expected string."),
  custom(
    (input: any) => SEXUAL_ORIENTATIONS.includes(input as SexualOrientation),
    "Invalid 'sexualOrientation'.",
  ),
);

export const SexualOrientationsSchema = pipe(
  array(string("Invalid 'sexuaOrientations' type: Expected string[].")),
  everyItem(
    (item) => SEXUAL_ORIENTATIONS.includes(item as SexualOrientation),
    "Some value in 'sexuaOrientations' is not valid.",
  ),
);

export const ZodiacSignSchema = pipe(
  string("Invalid 'zodiacSign' type: Expected string."),
  custom((input: any) => ZODIAC_SIGNS.includes(input as ZodiacSign), "Invalid 'zodiacSign'."),
);

export const ZodiacSignsSchema = pipe(
  array(string("Invalid 'zodiacSigns' type: Expected string[].")),
  everyItem(
    (item) => ZODIAC_SIGNS.includes(item as ZodiacSign),
    "Some value in 'zodiacSigns' is not valid.",
  ),
);

export const getObjectIdSchema = (field = 'id') =>
  custom((input: any) => isValidObjectId(input), `Invalid '${field}' type: Expected ObjectId.`);

export const getBooleanSchema = (field: string) =>
  boolean(`Invalid '${field}' type: Expected boolean.`);

export const getNumberSchema = (field: string) =>
  number(`Invalid '${field}' type: Expected number.`);

export const getBlobSchema = (field: string) => blob(`Invalid '${field}' type: Expected blob.`);

export const getStringSchema = (field: string) =>
  pipe(
    string(`Invalid '${field}' type: Expected string.`),
    nonEmpty(`Invalid '${field}' length: Expected length > 0.`),
  );

export const getMinLengthSchema = (field: string, min: number) =>
  pipe(
    string(`Invalid '${field}' type: Expected string.`),
    minLength(min, `Invalid '${field}' length: Expected at least ${min} characters.`),
  );

export const getMaxLengthSchema = (field: string, max: number) =>
  pipe(
    string(`Invalid '${field}' type: Expected string.`),
    maxLength(max, `Invalid '${field}' length: Expected a maximum of ${max} characters.`),
  );

export const getMinMaxLengthSchema = (field: string, min: number, max: number) =>
  pipe(
    string(`Invalid '${field}' type: Expected string.`),
    minLength(min, `Invalid '${field}' length: Expected at least ${min} characters.`),
    maxLength(max, `Invalid '${field}' length: Expected a maximum of ${max} characters.`),
  );

export const getNameSchema = (field: string) => getMinMaxLengthSchema(field, 2, 150);

export const getOptionSchema = (field: string) =>
  pipe(
    string(`Invalid '${field}' type: Expected string.`),
    custom((input: any) => OPTIONS.includes(input as Option), `Invalid '${field}'.`),
  );

export const IdParamSchema = object({
  id: getObjectIdSchema(),
});

export const IdsParamSchema = object({
  ids: array(getObjectIdSchema()),
});

export const UserIdParamSchema = object({
  userId: getObjectIdSchema('userId'),
});

export const PartialIdsParamSchema = partial(IdsParamSchema);
