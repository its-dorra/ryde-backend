import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './src/modules/drizzle/migrations',
  schema: './src/modules/drizzle/schema/*.ts',
  dialect: 'postgresql',
  casing: 'snake_case',
  tablesFilter: ['side_project_ryde_*'],
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
