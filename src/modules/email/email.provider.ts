import { Provider } from '@nestjs/common';
import { resend } from './email.instance';

export const EmailProvider: Provider = {
  provide: 'RESEND',
  useValue: resend,
};
