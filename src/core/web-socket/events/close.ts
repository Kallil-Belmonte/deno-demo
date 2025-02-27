import { connections } from '../mod.ts';

type Params = {
  event: CloseEvent;
  request: Request;
};

const close = ({ request }: Params) => {
  const url = new URL(request.url);
  const userId = url.searchParams.get('userId') as string;

  connections.delete(userId);
};

export default close;
