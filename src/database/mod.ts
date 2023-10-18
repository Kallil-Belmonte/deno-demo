import { MongoClient } from 'mongo';

import type { User } from '@/controllers/user/files/types.ts';

const client = new MongoClient();
await client.connect('mongodb://127.0.0.1:27017');

export const database = client.database('demo');

export const usersCollection = database.collection<User>('users');
