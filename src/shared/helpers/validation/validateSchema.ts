import { type ObjectSchema, type ObjectIssue, safeParse } from '@valibot/valibot';

import type { ObjectType } from '@/shared/files/types.ts';

/**
 * @function validateSchema
 * @description Validates an object base on a Valibot schema.
 * @param { ObjectType | null } object - Object to validate.
 * @param { ObjectSchema<ObjectEntries, ErrorMessage<ObjectIssue>> } schema - Valibot schema.
 */

const validateSchema = (object: ObjectType | null, schema: ObjectSchema<any, any>) => {
  if (!object) return { valid: false, messages: ['Invalid object.'] };
  const { success, issues = [] } = safeParse(schema, object);
  return { valid: success, messages: issues.map((issue: ObjectIssue) => issue.message) };
};

export default validateSchema;
