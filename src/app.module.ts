import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloModule } from './modules/hello/hello.module';
import { ConfigModule } from '@nestjs/config';
import { EnvSchema } from './config/env.schema';
import { AuthModule } from '@thallesp/nestjs-better-auth';
import { z } from 'zod';
import { auth } from './lib/auth';
import { DrizzleModule } from './modules/drizzle/drizzle.module';

@Module({
  controllers: [AppController],
  imports: [
    AuthModule.forRoot(auth),
    ConfigModule.forRoot({
      isGlobal: true,
      validate: (config) => {
        const result = EnvSchema.safeParse(config);

        if (!result.success) {
          throw new Error(z.prettifyError(result.error));
        }

        return result.data;
      },
    }),
    HelloModule,
    DrizzleModule,
  ],
  providers: [AppService],
})
export class AppModule {}
