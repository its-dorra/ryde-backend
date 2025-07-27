import db from './drizzle.instance';

import { Provider } from '@nestjs/common';

export const DrizzleProvider: Provider = {
  provide: 'DRIZZLE',
  useValue: db,
};
