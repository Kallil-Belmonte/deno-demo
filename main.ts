import router from '@/core/router/mod.ts';
import webSocket from '@/core/web-socket/mod.ts';

Deno.serve({
  port: 8000,
  handler: (request) => {
    if (request.headers.get('upgrade') === 'websocket') return webSocket(request);
    return router(request);
  },
});
