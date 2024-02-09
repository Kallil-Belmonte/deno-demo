import { MongoClient, Collection } from 'mongo';

import type { CollectionDataItem } from '@/shared/files/types.ts';
import type { User } from '@/controllers/user/files/types.ts';

export type Environment = 'dev' | 'prod' | null;

export type CollectionName = 'genders' | 'sexual-orientations' | 'users';

type CollectionReturn<T> = T extends 'genders'
  ? Collection<CollectionDataItem>
  : T extends 'sexual-orientations'
  ? Collection<CollectionDataItem>
  : T extends 'users'
  ? Collection<User>
  : never;

const client = new MongoClient();
await client.connect('mongodb://127.0.0.1:27017');

export const getEnvironment = (request: Request) =>
  request.headers.get('Environment') as Environment;

export const getCollection = <Type extends CollectionName>(
  name: Type,
  environment: Environment,
): CollectionReturn<Type> => {
  const databaseName = `name${environment && environment !== 'prod' ? `-${environment}` : ''}`;
  const database = client.database(databaseName);
  const collection = database.collection(name) as CollectionReturn<Type>;
  return collection;
};
