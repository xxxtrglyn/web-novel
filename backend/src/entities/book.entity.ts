import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

  // @Column()
  // categories:

  // @Column()
  // rating?:
}
