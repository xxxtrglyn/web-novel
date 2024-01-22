import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from 'src/book/entities/book.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 8282,
      username: 'root',
      password: 'root',
      database: 'webnovel',
      synchronize: false,
      entities: [Book],
      migrations: [],
      migrationsTableName: 'book_migrations',
    }),
  ],
})
export class DatabaseModule {}
