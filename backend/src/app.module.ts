import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from './common/common.module';
import { BookModule } from './book/book.module';

@Module({
  imports: [AuthModule, BookModule, CommonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
