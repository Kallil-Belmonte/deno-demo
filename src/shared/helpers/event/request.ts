type Config = {
  url: RequestInfo | URL;
  init?: RequestInit | undefined;
};

const { stringify } = JSON;

const INIT = {
  method: 'GET',
};

const HEADERS = {
  'Content-Type': 'application/json',
};

const AUTH_TOKEN =
  'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhcGkuZGVtby5jb20iLCJzdWIiOiJ0ZXN0IiwiaWF0IjoxNzY0NTQ3MDAwLCJleHAiOjE2OTc5ODcyNjM0NDJ9.KRnenTDvP_kzKQHCbYBsMjOvWMvN6dZE16ICw29Uu4H7jwyiDdYx6G3ve25SlpAiwDLnOss1THQ4zAQlI3B-WQ';

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
