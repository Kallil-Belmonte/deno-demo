import { Collection, MongoClient } from 'mongo';

import type { FullUser } from '../../modules/user/controllers/files/types.ts';
import type { CollectionDataItem } from '../../shared/files/types.ts';

export type CollectionName = 'genders' | 'sexual-orientations' | 'users';

type CollectionReturn<T> = T extends 'genders' ? Collection<CollectionDataItem>
  : T extends 'sexual-orientations' ? Collection<CollectionDataItem>
  : T extends 'users' ? Collection<FullUser>
  : never;

const client = new MongoClient();
await client.connect(
  Deno.env.has('DEV') ? 'mongodb://127.0.0.1:27017' : Deno.env.get('DATABASE_CONNECTION')!,
);

export const getCollection = <Type extends CollectionName>(
  name: Type,
): CollectionReturn<Type> => {
  const database = client.database('name');
  const collection = database.collection(name) as CollectionReturn<Type>;
  return collection;
};
