/**
 * @see HttpResponseStatusCodes {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status}
 */

const { stringify } = JSON;

export const success = <Data>(data: Data) =>
  new Response(stringify(data), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });

export const badRequest = <Data>(data: Data) =>
  new Response(stringify(data), {
    status: 400,
    headers: { 'Content-Type': 'application/json' },
  });
