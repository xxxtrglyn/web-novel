import { DataSource } from 'typeorm';
import { config } from 'dotenv';

config();

export default new DataSource({
  type: 'mysql',
  host: `${process.env.DATABASE_HOST}`,
  port: +`${process.env.DATABASE_PORT}`,
  username: `${process.env.DATABASE_USERNAME}`,
  password: `${process.env.DATABASE_PASSWORD}`,
  database: `${process.env.DATABASE_NAME}`,
  entities: ['src/entities/*{.js,.ts}'],
  migrations: ['./migrations/*{.js,.ts}'],
});
