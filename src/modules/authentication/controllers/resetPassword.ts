import { success } from '@/core/router/responses.ts';

const resetPassword = (request: Request) => success(request, `Endpoint: resetPassword`);

export default resetPassword;
