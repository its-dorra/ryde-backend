import { z } from 'zod/v4';

export const EnvSchema = z.object({
  APP_NAME: z.string(),
});
