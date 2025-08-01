import * as schema from './schema';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';

export type Drizzle = NodePgDatabase<typeof schema>;
