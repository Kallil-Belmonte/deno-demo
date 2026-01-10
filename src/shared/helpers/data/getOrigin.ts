/**
 * @function getOrigin
 * @description Gets the request origin.
 * @param request - Request object.
 */

const getOrigin = (request: Request) => request.headers.get('origin') || '';

export default getOrigin;
