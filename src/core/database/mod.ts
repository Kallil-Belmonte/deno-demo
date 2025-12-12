import { Collection } from 'mongo';

import type { FullUser } from '@/modules/user/controllers/files/types.ts';
import type { CollectionDataItem } from '@/shared/files/types.ts';
import { mongoDbClient } from '../../../main.ts';

export type CollectionName = 'genders' | 'sexual-orientations' | 'users';

type CollectionReturn<T> = T extends 'genders' ? Collection<CollectionDataItem>
  : T extends 'sexual-orientations' ? Collection<CollectionDataItem>
  : T extends 'users' ? Collection<FullUser>
  : never;

export const getCollection = <Type extends CollectionName>(
  name: Type,
): CollectionReturn<Type> => {
  const database = mongoDbClient.database('name');
  const collection = database.collection(name) as CollectionReturn<Type>;
  return collection;
};
