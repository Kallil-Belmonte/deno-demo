import { MongoClient } from 'mongo';

import router from '@/core/router/mod.ts';
import webSocket from '@/core/web-socket/mod.ts';

export const mongoDbClient = new MongoClient();
await mongoDbClient.connect(
  Deno.env.has('DEV') ? 'mongodb://127.0.0.1:27017' : Deno.env.get('DATABASE_CONNECTION')!,
);

Deno.serve({
  port: 8000,
  handler: (request) => {
    if (request.headers.get('upgrade') === 'websocket') return webSocket(request);
    return router(request);
  },
});
