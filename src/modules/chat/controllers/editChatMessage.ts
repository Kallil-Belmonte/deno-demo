import { send } from '@/core/web-socket/events/mod.ts';
import type { WebSocketParams } from '@/core/web-socket/types.ts';
import type { ChatMessageToEdit } from './files/types.ts';

const editChatMessage = async (
  { payload }: WebSocketParams<ChatMessageToEdit>,
) => {
  const { userId, messageId, message } = payload;

  send({
    usersIds: [],
    event: 'update-chat-message',
    payload: {},
  });
};

export default editChatMessage;
