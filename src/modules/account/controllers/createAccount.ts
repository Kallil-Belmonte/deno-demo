import { success } from '@/core/router/responses.ts';

const createAccount = (request: Request) => success(request, `Endpoint: createAccount`);

export default createAccount;
