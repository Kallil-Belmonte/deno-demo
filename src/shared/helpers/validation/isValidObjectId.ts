/**
 * @function isValidObjectId
 * @description Validates a date.
 * @param id - Id to validate.
 */

const isValidObjectId = (id: string) => {
  if (!id || typeof id !== 'string') return false;
  const pattern = /^[0-9a-fA-F]{24}$/;
  return pattern.test(id);
};

export default isValidObjectId;
