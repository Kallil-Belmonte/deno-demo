import { success } from '@/core/router/responses.ts';

const editUser = (request: Request) => success(request, `Endpoint: editUser`);

export default editUser;
