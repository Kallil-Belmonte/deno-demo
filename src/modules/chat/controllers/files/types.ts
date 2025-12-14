import { ObjectId } from 'mongodb';

import { UserIdParam } from '@/shared/files/types.ts';

export type ChatMessageStatus = 'sent' | 'viewed';

export type ChatMessage = {
  _id: ObjectId;
  author: {
    _id: ObjectId;
    name: string;
  };
  time: Date;
  message: string;
  replyFrom: ObjectId | null;
  status: ChatMessageStatus;
  deletedFor: string | null;
};

export type Chat = {
  _id: ObjectId;
  users: ObjectId[];
  chat: ChatMessage[];
};

export type ChatMessageToSend = Pick<ChatMessage, 'author' | 'replyFrom' | 'message'> & {
  time: string;
  notificationToken: string;
};

export type ChatMessageToEdit =
  & UserIdParam
  & Pick<ChatMessage, 'message'>
  & {
    messageId: string;
  };

export type ChatMessageToUpdateStatus =
  & UserIdParam
  & Pick<ChatMessage, 'status'>
  & {
    messageId: string;
  };

export type ChatMessageToDelete = UserIdParam & {
  messagesIds: string[];
  both: boolean;
};

export type ChatMessageStatusUpdateResult = Pick<ChatMessage, 'status'> & {
  messageId: string;
};
