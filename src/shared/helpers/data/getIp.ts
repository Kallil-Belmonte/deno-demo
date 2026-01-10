/**
 * @function getIp
 * @description Gets the request IP.
 * @param request - Request object.
 */

const getIp = (request: Request) => request.headers.get('x-forwarded-for') || 'unknown';

export default getIp;
