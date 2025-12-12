import { send } from '@/core/web-socket/events/mod.ts';
import type { WebSocketParams } from '@/core/web-socket/types.ts';
import type { ChatMessageToDelete } from './files/types.ts';

const deleteChatMessages = async (
  { payload }: WebSocketParams<ChatMessageToDelete>,
) => {
  const { userId, messagesIds, both } = payload;

  send({
    usersIds: [],
    event: 'remove-chat-messages',
    payload: [],
  });
};

export default deleteChatMessages;
