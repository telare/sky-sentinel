import 'dotenv/config';
import { defineConfig } from 'prisma/config';
import { config } from 'dotenv';
import { join } from 'path';

config({ path: join(process.cwd(), '../../.env') });

export default defineConfig({
  schema: './prisma/schema.prisma',
  migrations: {
    path: './generated/prisma/migrations',
  },
  datasource: {
    url: process.env['DATABASE_URL'],
  },
});
