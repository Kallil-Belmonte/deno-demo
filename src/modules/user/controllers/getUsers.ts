import { success } from '@/core/router/responses.ts';

const getUsers = (request: Request) => success(request, `Endpoint: getUsers`);

export default getUsers;
