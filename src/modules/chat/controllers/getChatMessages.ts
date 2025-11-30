import { send } from '../../../core/web-socket/events/mod.ts';
import type { WebSocketParams } from '../../../core/web-socket/types.ts';
import type { UserIdParam } from '../../../shared/files/types.ts';

const getChatMessages = async (
  { payload }: WebSocketParams<UserIdParam>,
) => {
  const { userId } = payload;

  send({
    usersIds: [],
    event: 'set-chat-messages',
    payload: [],
  });
};

export default getChatMessages;
