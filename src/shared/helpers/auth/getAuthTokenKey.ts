import { load } from '@std/dotenv';

type ApiKey = 'DEV' | 'ANALYTICS' | 'USER';

/**
 * @function getAuthTokenKey
 * @description Gets the auth token key.
 */

const getAuthTokenKey = async (apiKey: ApiKey) => {
  await load({ export: true });
  const keyString = Deno.env.get(`API_${apiKey}_KEY`);
  const encoder = new TextEncoder();
  const keyBytes = encoder.encode(keyString);
  const algorithm: HmacImportParams = { name: 'HMAC', hash: 'SHA-512' };
  const extractable = true;
  const keyUsages: KeyUsage[] = ['sign', 'verify'];

  const key = await crypto.subtle.importKey('raw', keyBytes, algorithm, extractable, keyUsages);
  return key;
};

export default getAuthTokenKey;
