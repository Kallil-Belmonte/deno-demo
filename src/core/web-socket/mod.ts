import type { Environment } from '@/core/database/mod.ts';
import { ALLOWED_ORIGINS } from '@/shared/files/consts.ts';
import { getOrigin, isValidAuthToken } from '@/shared/helpers/mod.ts';
import { close, message, open } from './events/mod.ts';

export const connections = new Map<string, WebSocket>();

const webSocket = async (request: Request) => {
  const { socket, response } = Deno.upgradeWebSocket(request);

  const url = new URL(request.url);
  const auth = url.searchParams.get('Authorization') as string;
  const environment = url.searchParams.get('Environment') as Environment;
  const isValidAuth = await isValidAuthToken(auth, environment);

  if (!ALLOWED_ORIGINS.includes(getOrigin(request)) || !auth || !isValidAuth) return response;

  socket.addEventListener('open', (event) => open({ event, request }));

  socket.addEventListener('message', (event) => message({ event, request }));

  socket.addEventListener('close', (event) => close({ event, request }));

  // socket.addEventListener('error', (event) => console.log('Error', event));

  return response;
};

export default webSocket;
