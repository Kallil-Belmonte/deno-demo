import { connections } from '../mod.ts';

type Params = {
  event: Event;
  request: Request;
};

const open = ({ event, request }: Params) => {
  const url = new URL(request.url);
  const userId = url.searchParams.get('userId') as string;

  connections.set(userId, event.target as WebSocket);
};

export default open;
