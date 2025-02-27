import { ALLOWED_ORIGINS, WEBSITE_URL } from '@/shared/files/consts.ts';
import type { RequestError } from '@/shared/files/types.ts';
import { getOrigin } from '@/shared/helpers/mod.ts';

/**
 * @see HttpResponseStatusCodes {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status}
 */

const { stringify } = JSON;

const getHeaders = (origin: string) => ({
  'Access-Control-Allow-Origin': ALLOWED_ORIGINS.includes(origin) ? origin : WEBSITE_URL,
  'Access-Control-Allow-Headers': 'Authorization, Content-Type, Environment',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
});

export const success = <RequestResponse>(request: Request, response: RequestResponse) =>
  new Response(stringify(response), {
    status: 200,
    headers: getHeaders(getOrigin(request)),
  });

export const badRequest = (request: Request, response: RequestError) =>
  new Response(stringify(response), {
    status: 400,
    headers: getHeaders(getOrigin(request)),
  });

export const unauthorized = (request: Request, response: RequestError) =>
  new Response(stringify(response), {
    status: 401,
    headers: getHeaders(getOrigin(request)),
  });

export const forbidden = (request: Request, response: RequestError) =>
  new Response(stringify(response), {
    status: 403,
    headers: getHeaders(getOrigin(request)),
  });
