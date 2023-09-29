export type ObjectType = {
  [key: string]: any;
};

export type Structure<Type> = {
  [K in keyof Type]: string;
};

export type IdParam = {
  id: string;
};

export type IdsParam = {
  ids: string[];
};

export type RequestError = {
  messages: string[];
};
