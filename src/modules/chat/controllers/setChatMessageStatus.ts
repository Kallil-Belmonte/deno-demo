import { send } from '@/core/web-socket/events/mod.ts';
import type { WebSocketParams } from '@/core/web-socket/types.ts';
import type { ChatMessageToUpdateStatus } from './files/types.ts';

const setChatMessageStatus = async (
  { payload }: WebSocketParams<ChatMessageToUpdateStatus>,
) => {
  const { userId, messageId, status } = payload;

  send({
    usersIds: [],
    event: 'update-chat-message-status',
    payload: {},
  });
};

export default setChatMessageStatus;
