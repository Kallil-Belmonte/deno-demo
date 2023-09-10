import type { Endpoints } from '@/routes/_files/types.ts';
import POST from './POST.ts';
import DELETE from './DELETE.ts';

const account = (request: Request) => {
  const { method } = request;

  const methods: Endpoints = {
    POST,
    DELETE,
  };

  return methods[method](request);
};

export default account;
