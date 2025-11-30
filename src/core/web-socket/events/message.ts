import {
  deleteChatMessages,
  editChatMessage,
  getChatMessages,
  sendChatMessage,
  setChatMessageStatus,
} from '../../../modules/chat/controllers/mod.ts';
import type { WebSocketFrontendData, WebSocketParams } from '../types.ts';

const { parse } = JSON;

type Params = {
  event: MessageEvent<any>;
  request: Request;
};

const message = ({ event }: Params) => {
  const data: WebSocketFrontendData = parse(event.data);

  type Events = Record<
    WebSocketFrontendData['event'],
    (params: WebSocketParams<any>) => Promise<void>
  >;

  const events: Events = {
    'delete-chat-messages': deleteChatMessages,
    'edit-chat-message': editChatMessage,
    'get-chat-messages': getChatMessages,
    'send-chat-message': sendChatMessage,
    'set-chat-message-status': setChatMessageStatus,
  };

  events[data.event]({ payload: data.payload });
};

export default message;
