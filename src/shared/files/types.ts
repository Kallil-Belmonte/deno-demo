export type ObjectType = {
  [key: string]: any;
};

export type Schema<Type = ObjectType> = {
  [K in keyof Type]: string;
};

export type IdParam = {
  id: string;
};

export type IdsParam = {
  ids: string[];
};

export type UserIdParam = {
  userId: string;
};

export type Option = 'yes' | 'no';

export type DataItem<Title = string> = {
  _id: string;
  title: Title;
  quantity: number;
};

export type CollectionDataItem = Pick<DataItem, '_id' | 'title'>;

export type RequestError = {
  messages: string[];
};
