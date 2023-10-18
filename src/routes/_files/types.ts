export type Endpoints = {
  [key: string]: (request: Request) => Response | Promise<Response>;
};
