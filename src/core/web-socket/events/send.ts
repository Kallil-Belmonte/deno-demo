import type { WebSocketBackendData } from '@/core/web-socket/types.ts';
import { connections } from '../mod.ts';

const { stringify } = JSON;

type SocketSendParams<Payload> = {
  usersIds: string[];
} & WebSocketBackendData<Payload>;

const send = <Payload>({ usersIds, event, payload }: SocketSendParams<Payload>) => {
  for (const userId of usersIds) {
    const webSocketConnection = connections.get(userId);

    if (webSocketConnection?.readyState === WebSocket.OPEN) {
      webSocketConnection.send(stringify({ event, payload }));
    }
  }
};

export default send;
