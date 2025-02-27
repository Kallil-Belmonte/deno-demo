import { send } from '@/core/web-socket/events/mod.ts';
import type { WebSocketParams } from '@/core/web-socket/types.ts';
import type { ChatMessageToDelete } from '@/modules/chat/controllers/files/types.ts';

const deleteChatMessages = async (
  { environment, payload }: WebSocketParams<ChatMessageToDelete>,
) => {
  const { userId, messagesIds, both } = payload;

  send({
    usersIds: [],
    event: 'remove-chat-messages',
    payload: [],
  });
};

export default deleteChatMessages;
