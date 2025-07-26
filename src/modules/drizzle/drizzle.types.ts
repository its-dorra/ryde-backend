import * as schema from './schema';
import { NeonHttpDatabase } from 'drizzle-orm/neon-http';

export type Drizzle = NeonHttpDatabase<typeof schema>;
