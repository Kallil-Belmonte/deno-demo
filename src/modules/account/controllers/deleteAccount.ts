import { success } from '@/core/router/responses.ts';

const deleteAccount = (request: Request) => success(request, `Endpoint: deleteAccount`);

export default deleteAccount;
