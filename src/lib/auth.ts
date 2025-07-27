import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import db from '../modules/drizzle/drizzle.instance';
import * as schema from '../modules/drizzle/schema';
import { resend } from '../modules/email/email.instance';
import { render } from '@react-email/render';
import VerificationEmail from '../modules/email/templates/verification-email';
import { expo } from '@better-auth/expo';
import 'dotenv/config';

export const auth = betterAuth({
  trustedOrigins: ['ryde://'],
  database: drizzleAdapter(db, {
    provider: 'pg',
    schema,
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
  },
  emailVerification: {
    sendVerificationEmail: async ({ user, url }) => {
      const html = await render(
        VerificationEmail({ name: user.name, verificationUrl: url }),
      );
      await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: [user.email],
        subject: 'Email Verification',
        html,
      });
    },
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  plugins: [expo()],
});
