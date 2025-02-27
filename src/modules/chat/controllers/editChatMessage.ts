import { send } from '@/core/web-socket/events/mod.ts';
import type { WebSocketParams } from '@/core/web-socket/types.ts';
import type { ChatMessageToEdit } from '@/modules/chat/controllers/files/types.ts';

const editChatMessage = async (
  { environment, payload }: WebSocketParams<ChatMessageToEdit>,
) => {
  const { userId, messageId, message } = payload;

  send({
    usersIds: [],
    event: 'update-chat-message',
    payload: {},
  });
};

export default editChatMessage;
