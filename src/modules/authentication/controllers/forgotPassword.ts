import { success } from '@/core/router/responses.ts';

const forgotPassword = (request: Request) => success(request, `Endpoint: forgotPassword`);

export default forgotPassword;
