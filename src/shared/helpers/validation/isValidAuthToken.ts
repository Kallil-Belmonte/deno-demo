import { ObjectId } from 'mongo';
import { verify } from '@zaubrik/djwt';

import { type Environment, getCollection } from '@/database/mod.ts';
import getAuthTokenKey from '../auth/getAuthTokenKey.ts';
import isValidObjectId from './isValidObjectId.ts';

const API_KEYS: Parameters<typeof getAuthTokenKey>[0][] = ['DEV', 'ANALYTICS', 'USER'];

/**
 * @function isValidAuthToken
 * @description Checks if the auth token is valid.
 * @param { string } authToken - Auth token.
 * @param { Environment } environment - Environment.
 */

const isValidAuthToken = async (authToken: string, environment: Environment) => {
  let valid = false;

  for (const apiKey of API_KEYS) {
    try {
      const key = await getAuthTokenKey(apiKey);
      const { sub = '' } = await verify(authToken, key);

      // Dev
      // Analytics
      if (sub === 'dev' || sub === 'analytics') {
        valid = true;
        break;
      }

      // User
      if (isValidObjectId(sub)) {
        const user = await getCollection('users', environment).findOne(
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
