import { registerAs } from '@nestjs/config';
import { Book } from 'src/entities/book.entity';
import { Category } from 'src/entities/category.entity';
import { DataSource, DataSourceOptions } from 'typeorm';

export const databaseConfig = {
  type: 'mysql',
  host: `${process.env.DATABASE_HOST}`,
  port: +`${process.env.DATABASE_PORT}`,
  username: `${process.env.DATABASE_USERNAME}`,
  password: `${process.env.DATABASE_PASSWORD}`,
  database: `${process.env.DATABASE_NAME}`,
  logging: false,
  entities: [Book, Category],
  migrations: [__dirname + '/migrations/*{.js,.ts}'],
  synchronize: false,
};

export default registerAs('typeorm', () => databaseConfig);
export const connectionSource = new DataSource(
  databaseConfig as DataSourceOptions,
);
