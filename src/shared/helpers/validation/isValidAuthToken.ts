import { ObjectId } from 'mongo';
import { verify } from 'djwt';

import { usersCollection } from '@/database/mod.ts';
import getAuthTokenKey from '../auth/getAuthTokenKey.ts';
import isValidObjectId from './isValidObjectId.ts';

const API_KEYS: Parameters<typeof getAuthTokenKey>[0][] = ['DEV', 'USER'];

/**
 * @function isValidAuthToken
 * @description Checks if the auth token is valid.
 */

const isValidAuthToken = async (headers: Headers) => {
  const authHeader = headers.get('Authorization');
  if (!authHeader?.startsWith('Bearer ')) return false;

  const authToken = authHeader.replace('Bearer ', '');
  let valid = false;

  for (const apiKey of API_KEYS) {
    try {
      const key = await getAuthTokenKey(apiKey);
      const { sub = '' } = await verify(authToken, key);

      // Dev
      if (sub === 'dev') {
        valid = true;
        break;
      }

      // User
      if (isValidObjectId(sub)) {
        const user = await usersCollection.findOne(
          { _id: new ObjectId(sub) },
          { projection: { auth: 1 } },
        );
        if (!user) break;

        valid = user?.auth.token === authToken;
        break;
      }
    } catch {
      valid = false;
    }
  }

  return valid;
};

export default isValidAuthToken;
