import { success } from '@/core/router/responses.ts';

const login = (request: Request) => success(request, `Endpoint: login`);

export default login;
