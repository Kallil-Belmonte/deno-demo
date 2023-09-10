import type { Endpoints } from '@/routes/_files/types.ts';
import GET from './GET.ts';
import PUT from './PUT.ts';

const user = (request: Request) => {
  const { method } = request;

  const methods: Endpoints = {
    GET,
    PUT,
  };

  return methods[method](request);
};

export default user;
