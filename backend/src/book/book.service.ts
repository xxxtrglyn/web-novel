import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Repository } from 'typeorm';
import { Book } from 'src/entities/book.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book) private bookRepository: Repository<Book>,
  ) {}
  async create(createBookDto: CreateBookDto) {
    const book = this.bookRepository.create(createBookDto);
    await this.bookRepository.save(book);
    return book;
  }

  findAll() {
    return this.bookRepository.find();
  }

  findOne(id: number) {
    return this.bookRepository.findOne({ where: { id: id } });
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
