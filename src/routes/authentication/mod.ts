import type { Endpoints } from '@/routes/_files/types.ts';
import POST from './POST.ts';

const authentication = (request: Request) => {
  const { method } = request;

  const methods: Endpoints = {
    POST,
  };

  return methods[method](request);
};

export default authentication;
