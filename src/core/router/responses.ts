import type { RequestError } from '@/shared/files/types.ts';
import { getOrigin } from '@/shared/helpers/mod.ts';
import { minimunDelayBetweenRequests } from '@/shared/helpers/validation/isFlood.ts';

/**
 * @see HttpResponseStatusCodes {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status}
 */

const { stringify } = JSON;

const getHeaders = (request: Request) => ({
  'Access-Control-Allow-Origin': `${getOrigin(request)}`,
  'Access-Control-Allow-Headers': 'Authorization, Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
});

export const success = <RequestResponse>(request: Request, response: RequestResponse) =>
  new Response(stringify(response), {
    status: 200,
    headers: getHeaders(request),
  });

export const badRequest = (request: Request, response: RequestError) =>
  new Response(stringify(response), {
    status: 400,
    headers: getHeaders(request),
  });

export const unauthorized = (request: Request, response: RequestError) =>
  new Response(stringify(response), {
    status: 401,
    headers: getHeaders(request),
  });

export const forbidden = (request: Request, response: RequestError) =>
  new Response(stringify(response), {
    status: 403,
    headers: getHeaders(request),
  });

export const tooManyRequests = (request: Request, response: RequestError) =>
  new Response(stringify(response), {
    status: 429,
    headers: {
      ...getHeaders(request),
      'Retry-After': `${minimunDelayBetweenRequests / 1000}`,
    },
  });
