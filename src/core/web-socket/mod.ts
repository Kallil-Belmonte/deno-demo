import { isValidAuthToken, validateCORS } from '../../shared/helpers/mod.ts';
import { close, message, open } from './events/mod.ts';

export const connections = new Map<string, WebSocket>();

const webSocket = async (request: Request) => {
  const { socket, response } = Deno.upgradeWebSocket(request);

  const url = new URL(request.url);
  const auth = url.searchParams.get('Authorization') || '';

  // Validate CORS
  const corsError = validateCORS(request);

  // Validate auth token
  const isValidAuth = await isValidAuthToken(auth);

  if (corsError || !isValidAuth) return response;

  socket.addEventListener('open', (event) => open({ event, request }));

  socket.addEventListener('message', (event) => message({ event, request }));

  socket.addEventListener('close', (event) => close({ event, request }));

  // socket.addEventListener('error', (event) => console.log('Error', event));

  return response;
};

export default webSocket;
