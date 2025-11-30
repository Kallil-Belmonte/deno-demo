/**
 * @function getIp
 * @description Gets the request IP.
 * @param { Request } request - Request object.
 */

const getIp = (request: Request) => request.headers.get('x-forwarded-for') || 'unknown';

export default getIp;
