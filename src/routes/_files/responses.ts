import type { RequestError } from '@/shared/files/types.ts';

/**
 * @see HttpResponseStatusCodes {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status}
 */

const { stringify } = JSON;

const HEADERS = { 'Content-Type': 'application/json' };

export const success = <RequestResponse>(
  response: RequestResponse,
  headers: HeadersInit = HEADERS,
) =>
  new Response(stringify(response), {
    status: 200,
    headers,
  });

export const badRequest = (response: RequestError, headers: HeadersInit = HEADERS) =>
  new Response(stringify(response), {
    status: 400,
    headers,
  });

export const unauthorized = (response: RequestError, headers: HeadersInit = HEADERS) =>
  new Response(stringify(response), {
    status: 401,
    headers,
  });

export const forbidden = (response: RequestError, headers: HeadersInit = HEADERS) =>
  new Response(stringify(response), {
    status: 403,
    headers,
  });
