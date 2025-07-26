import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloModule } from './modules/hello/hello.module';
import { ConfigModule } from '@nestjs/config';
import { EnvSchema } from './config/env.schema';
import { z } from 'zod/v4';

@Module({
  imports: [
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
