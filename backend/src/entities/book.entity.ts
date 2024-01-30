import { IsNotEmpty } from 'class-validator';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from './category.entity';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column()
  name: string;

  @Column()
  description: string;

  @IsNotEmpty()
  @Column()
  thumbnailUrl: string;

  @ManyToMany(() => Category)
  @JoinTable()
  categories: Category[];

  // @Column()
  // rating?:
}
