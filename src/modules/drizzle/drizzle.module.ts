import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { neon } from '@neondatabase/serverless';
import * as schema from './schema';
import { drizzle } from 'drizzle-orm/neon-http';
import { Drizzle } from './drizzle.types';

export const DRIZZLE = Symbol('drizzle');

@Module({
  providers: [
    {
      provide: DRIZZLE,
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const databaseUrl = config.get<string>('DATABASE_URL');

        const sql = neon(databaseUrl!);

        return drizzle(sql, { schema }) as Drizzle;
      },
    },
  ],
  exports: [DRIZZLE],
})
export class DrizzleModule {}
