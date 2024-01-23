import { registerAs } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';

export const databaseConfig = {
  type: 'mysql',
  host: `${process.env.DATABASE_HOST}`,
  port: +`${process.env.DATABASE_PORT}`,
  username: `${process.env.DATABASE_USERNAME}`,
  password: `${process.env.DATABASE_PASSWORD}`,
  database: `${process.env.DATABASE_NAME}`,
  entities: [`${__dirname}/../src/entities/*.entity{.ts,.js}`],
  migrations: [`${__dirname}/migrations/*{.ts,.js}`],
  autoLoadEntities: true,
  synchronize: true,
};

export default registerAs('typeorm', () => databaseConfig);
export const connectionSource = new DataSource(
  databaseConfig as DataSourceOptions,
);
