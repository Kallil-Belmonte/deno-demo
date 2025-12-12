import { forbidden } from '@/core/router/responses.ts';
import { ALLOWED_ORIGINS } from '@/shared/files/consts.ts';
import getOrigin from '../data/getOrigin.ts';

/**
 * @function validateCORS
 * @description Checks if the origin is valid.
 * @param { Request } request - Request object.
 */

const validateCORS = (request: Request) =>
  Deno.env.has('DEV') || ALLOWED_ORIGINS.some((regex) => regex.test(getOrigin(request)))
    ? null
    : forbidden(request, { messages: ['CORS blocked: Origin not allowed.'] });

export default validateCORS;
