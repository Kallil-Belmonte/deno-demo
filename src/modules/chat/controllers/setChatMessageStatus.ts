import { send } from '@/core/web-socket/events/mod.ts';
import type { WebSocketParams } from '@/core/web-socket/types.ts';
import type { ChatMessageToUpdateStatus } from '@/modules/chat/controllers/files/types.ts';

const setChatMessageStatus = async (
  { environment, payload }: WebSocketParams<ChatMessageToUpdateStatus>,
) => {
  const { userId, messageId, status } = payload;

  send({
    usersIds: [],
    event: 'update-chat-message-status',
    payload: {},
  });
};

export default setChatMessageStatus;
