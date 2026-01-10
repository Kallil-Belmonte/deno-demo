import { verify } from '@zaubrik/djwt';
import { ObjectId } from 'mongodb';

import { getCollection } from '@/core/database/mod.ts';
import getAuthTokenKey from '../auth/getAuthTokenKey.ts';
import isValidObjectId from './isValidObjectId.ts';

/**
 * @function isValidAuthToken
 * @description Checks if the auth token is valid.
 * @param auth - Authorization.
 */

const isValidAuthToken = async (auth: string) => {
  if (Deno.env.has('DEV')) return true;
  if (!auth.startsWith('Bearer ')) return false;

  const authToken = auth.replace('Bearer ', '');

  try {
    const key = await getAuthTokenKey();
    const { sub = '' } = await verify(authToken, key);

    if (isValidObjectId(sub)) {
      const user = await getCollection('users').findOne(
        { _id: new ObjectId(sub) },
        { projection: { token: 1 } },
      );
      if (!user) return false;

      return user?.token.auth === authToken;
    }
  } catch {
    return false;
  }

  return false;
};

export default isValidAuthToken;
