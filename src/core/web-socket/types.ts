import type { ObjectType } from '@/shared/files/types.ts';

export type WebSocketFrontendEvents =
  | 'delete-chat-messages'
  | 'edit-chat-message'
  | 'get-chat-messages'
  | 'send-chat-message'
  | 'set-chat-message-status';

export type WebSocketBackendEvents =
  | 'add-chat-message'
  | 'remove-chat-messages'
  | 'set-chat-messages'
  | 'update-chat-message'
  | 'update-chat-message-status';

export type WebSocketFrontendData = {
  event: WebSocketFrontendEvents;
  payload: ObjectType;
};

export type WebSocketBackendData<Payload> = {
  event: WebSocketBackendEvents;
  payload: Payload;
};

export type WebSocketParams<Payload> = {
  payload: Payload;
};
