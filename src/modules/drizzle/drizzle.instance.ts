import 'dotenv/config';
import * as schema from './schema';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Drizzle } from './drizzle.types';

import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL!,
});

const db = drizzle({ client: pool, schema }) as Drizzle;

export default db;
