import { type ObjectIssue, type ObjectSchema, safeParse } from '@valibot/valibot';

import type { ObjectType } from '@/shared/files/types.ts';

/**
 * @function validateSchema
 * @description Validates an object base on a Valibot schema.
 * @param object - Object to validate.
 * @param schema - Valibot schema.
 */

const validateSchema = (object: ObjectType | null, schema: ObjectSchema<any, any>) => {
  if (!object) return { valid: false, messages: ['Invalid object.'] };
  const { success, issues = [] } = safeParse(schema, object);
  return { valid: success, messages: issues.map((issue: ObjectIssue) => issue.message) };
};

export default validateSchema;
