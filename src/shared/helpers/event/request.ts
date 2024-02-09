type Config = {
  url: RequestInfo | URL;
  init?: RequestInit | undefined;
};

const { stringify } = JSON;

const INIT = { method: 'GET' };
const HEADERS = {
  'Content-Type': 'application/json',
  Environment: 'dev',
};
const AUTH_TOKEN =
  'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhcGkubXlzdGVyaXR5LmNvbSIsInN1YiI6ImRldiIsImlhdCI6MTY5NzM4MjQ2MzQ0MywiZXhwIjoxNjk3OTg3MjYzNDQyfQ.s42R3mogVxnObo8q91f34EhpSYCtYpmXBLyvJhUWS5VN17OpVFLLCyuK0uwZalsPc8vQpb5h8NJes-JRWEm1iw';

/**
 * @function request
 * @description Makes a request.
 * @param { Config } config - Request information.
 */

const request = async <Type>(config: Config): Promise<Type> => {
  const { url, init = INIT } = config;

  const requestInit = {
    ...init,
    headers: { ...HEADERS, Authorization: `Bearer ${AUTH_TOKEN}` },
  };
  const response = await fetch(`http://localhost:8000/${url}`, requestInit);
  const jsonResponse: Type = await response.json();
  if (response.ok) return jsonResponse;
  throw new Error(stringify(jsonResponse));
};

export default request;
