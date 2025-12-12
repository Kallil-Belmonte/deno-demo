import { send } from '@/core/web-socket/events/mod.ts';
import type { WebSocketParams } from '@/core/web-socket/types.ts';
import type { ChatMessageToSend } from './files/types.ts';

const sendChatMessage = async (
  { payload }: WebSocketParams<ChatMessageToSend>,
) => {
  const { author, time, message, replyFrom } = payload;

  send({
    usersIds: [],
    event: 'add-chat-message',
    payload: {},
  });
};

export default sendChatMessage;
