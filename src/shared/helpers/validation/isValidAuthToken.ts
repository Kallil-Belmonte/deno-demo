import { verify } from '@zaubrik/djwt';
import { ObjectId } from 'mongo';

import { getCollection } from '../../../core/database/mod.ts';
import getAuthTokenKey from '../auth/getAuthTokenKey.ts';
import isValidObjectId from './isValidObjectId.ts';

const API_KEYS: Parameters<typeof getAuthTokenKey>[0][] = ['TEST', 'USER'];

/**
 * @function isValidAuthToken
 * @description Checks if the auth token is valid.
 * @param { string } auth - Authorization.
 */

const isValidAuthToken = async (auth: string) => {
  let valid = false;

  if (!auth.startsWith('Bearer ')) return valid;

  const authToken = auth.replace('Bearer ', '');

  for (const apiKey of API_KEYS) {
    try {
      const key = await getAuthTokenKey(apiKey);
      const { sub = '' } = await verify(authToken, key);

      // Test
      if (sub === 'test') {
        valid = true;
        break;
      }

      // User
      if (isValidObjectId(sub)) {
        const user = await getCollection('users').findOne(
          { _id: new ObjectId(sub) },
          { projection: { token: 1 } },
        );
        if (!user) break;

        valid = user?.token.auth === authToken;
        break;
      }
    } catch {
      valid = false;
    }
  }

  return valid;
};

export default isValidAuthToken;
