import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    dbName: process.env.DATABASE_NAME,
    dbPort: process.env.DATABASE_PORT,
    environment: process.env.ENVIRONMENT,

    postgres: {
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT, 10),
      database: process.env.POSTGRES_DB,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
    },
  };
});
