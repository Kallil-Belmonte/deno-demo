import { type ValidationConfig, default as validate } from './validate.ts';

type Field = { value: string; config: ValidationConfig };

/**
 * @function validateFields
 * @description Validates multiple fields.
 * @param { Field[] } fields - Fields to validate.
 * @param { string[] } errorMessages - Array to get the error messages.
 */

const validateFields = (fields: Field[]) => {
  const errorMessages: string[] = [];

  fields.forEach(({ value, config }) => {
    const validation = validate(value, config);
    if (!validation.isValid) errorMessages.push(...validation.errorMessages);
  });

  return {
    valid: !errorMessages.length,
    errorMessages,
  };
};

export default validateFields;
