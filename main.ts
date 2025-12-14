import { MongoClient } from 'mongodb';

import router from '@/core/router/mod.ts';
import webSocket from '@/core/web-socket/mod.ts';

export const mongoDbClient = new MongoClient(
  Deno.env.has('DEV') ? 'mongodb://127.0.0.1:27017' : Deno.env.get('DATABASE_CONNECTION')!,
);
await mongoDbClient.connect();

Deno.serve({
  port: 8000,
  handler: (request) => {
    if (request.headers.get('upgrade') === 'websocket') return webSocket(request);
    return router(request);
  },
});
