import { Component, Input } from '@angular/core';
import { Book } from '../../../models/book.model';

const DUMMY_DATA: Book[] = [
  {
    id: '1',
    name: 'Hyouka',
    thumbnailUrl:
      'https://upload.wikimedia.org/wikipedia/en/9/93/Hy%C5%8Dka_novel_cover.jpg',
    description: `Apathetic high school student Houtarou Oreki is forced to enter his school's Classic Literature Club upon the request of his older sister, Tomoe Oreki. This club was on the verge of being disbanded due to the absence of members. However, he founds out that club already has one member in the face of ever-curious girl called Eru Chitanda. In a little while his friends, knowledgeble Satoshi Fukube and stern Mayaka Ibara, also join in. Accompanied by his fellow club members and being pushed by Chitanda's curiosity, Oreki is forced to solve different mysteries by using his resourcefulness and hidden talents.`,
    categories: ['Games'],
    rating: 5,
  },
  {
    id: '2',
    name: 'Hyouka',
    thumbnailUrl: 'https://i.redd.it/bjpcjr0sigk41.jpg',
    description: `Apathetic high school student Houtarou Oreki is forced to enter his school's Classic Literature Club upon the request of his older sister, Tomoe Oreki. This club was on the verge of being disbanded due to the absence of members. However, he founds out that club already has one member in the face of ever-curious girl called Eru Chitanda. In a little while his friends, knowledgeble Satoshi Fukube and stern Mayaka Ibara, also join in. Accompanied by his fellow club members and being pushed by Chitanda's curiosity, Oreki is forced to solve different mysteries by using his resourcefulness and hidden talents.`,
    categories: ['Fantasy'],
    rating: 5,
  },
  {
    id: '3',
    name: 'Hyouka',
    thumbnailUrl: 'https://pbs.twimg.com/media/DyFoRcFUwAMEg3t.jpg',
    description: `Apathetic high school student Houtarou Oreki is forced to enter his school's Classic Literature Club upon the request of his older sister, Tomoe Oreki. This club was on the verge of being disbanded due to the absence of members. However, he founds out that club already has one member in the face of ever-curious girl called Eru Chitanda. In a little while his friends, knowledgeble Satoshi Fukube and stern Mayaka Ibara, also join in. Accompanied by his fellow club members and being pushed by Chitanda's curiosity, Oreki is forced to solve different mysteries by using his resourcefulness and hidden talents.`,
    categories: ['History'],
    rating: 5,
  },
  {
    id: '4',
    name: 'Hyouka',
    thumbnailUrl:
      'https://upload.wikimedia.org/wikipedia/en/9/93/Hy%C5%8Dka_novel_cover.jpg',
    description: `Apathetic high school student Houtarou Oreki is forced to enter his school's Classic Literature Club upon the request of his older sister, Tomoe Oreki. This club was on the verge of being disbanded due to the absence of members. However, he founds out that club already has one member in the face of ever-curious girl called Eru Chitanda. In a little while his friends, knowledgeble Satoshi Fukube and stern Mayaka Ibara, also join in. Accompanied by his fellow club members and being pushed by Chitanda's curiosity, Oreki is forced to solve different mysteries by using his resourcefulness and hidden talents.`,
    categories: ['Games'],
    rating: 5,
  },
  {
    id: '5',
    name: 'Hyouka',
    thumbnailUrl: 'https://i.redd.it/bjpcjr0sigk41.jpg',
    description: `Apathetic high school student Houtarou Oreki is forced to enter his school's Classic Literature Club upon the request of his older sister, Tomoe Oreki. This club was on the verge of being disbanded due to the absence of members. However, he founds out that club already has one member in the face of ever-curious girl called Eru Chitanda. In a little while his friends, knowledgeble Satoshi Fukube and stern Mayaka Ibara, also join in. Accompanied by his fellow club members and being pushed by Chitanda's curiosity, Oreki is forced to solve different mysteries by using his resourcefulness and hidden talents.`,
    categories: ['Fantasy'],
    rating: 5,
  },
  {
    id: '6',
    name: 'Hyouka',
    thumbnailUrl: 'https://pbs.twimg.com/media/DyFoRcFUwAMEg3t.jpg',
    description: `Apathetic high school student Houtarou Oreki is forced to enter his school's Classic Literature Club upon the request of his older sister, Tomoe Oreki. This club was on the verge of being disbanded due to the absence of members. However, he founds out that club already has one member in the face of ever-curious girl called Eru Chitanda. In a little while his friends, knowledgeble Satoshi Fukube and stern Mayaka Ibara, also join in. Accompanied by his fellow club members and being pushed by Chitanda's curiosity, Oreki is forced to solve different mysteries by using his resourcefulness and hidden talents.`,
    categories: ['History'],
    rating: 5,
  },
  {
    id: '7',
    name: 'Hyouka',
    thumbnailUrl:
      'https://upload.wikimedia.org/wikipedia/en/9/93/Hy%C5%8Dka_novel_cover.jpg',
    description: `Apathetic high school student Houtarou Oreki is forced to enter his school's Classic Literature Club upon the request of his older sister, Tomoe Oreki. This club was on the verge of being disbanded due to the absence of members. However, he founds out that club already has one member in the face of ever-curious girl called Eru Chitanda. In a little while his friends, knowledgeble Satoshi Fukube and stern Mayaka Ibara, also join in. Accompanied by his fellow club members and being pushed by Chitanda's curiosity, Oreki is forced to solve different mysteries by using his resourcefulness and hidden talents.`,
    categories: ['Games'],
    rating: 5,
  },
  {
    id: '8',
    name: 'Hyouka',
    thumbnailUrl: 'https://i.redd.it/bjpcjr0sigk41.jpg',
    description: `Apathetic high school student Houtarou Oreki is forced to enter his school's Classic Literature Club upon the request of his older sister, Tomoe Oreki. This club was on the verge of being disbanded due to the absence of members. However, he founds out that club already has one member in the face of ever-curious girl called Eru Chitanda. In a little while his friends, knowledgeble Satoshi Fukube and stern Mayaka Ibara, also join in. Accompanied by his fellow club members and being pushed by Chitanda's curiosity, Oreki is forced to solve different mysteries by using his resourcefulness and hidden talents.`,
    categories: ['Fantasy'],
    rating: 5,
  },
  {
    id: '9',
    name: 'Hyouka',
    thumbnailUrl: 'https://pbs.twimg.com/media/DyFoRcFUwAMEg3t.jpg',
    description: `Apathetic high school student Houtarou Oreki is forced to enter his school's Classic Literature Club upon the request of his older sister, Tomoe Oreki. This club was on the verge of being disbanded due to the absence of members. However, he founds out that club already has one member in the face of ever-curious girl called Eru Chitanda. In a little while his friends, knowledgeble Satoshi Fukube and stern Mayaka Ibara, also join in. Accompanied by his fellow club members and being pushed by Chitanda's curiosity, Oreki is forced to solve different mysteries by using his resourcefulness and hidden talents.`,
    categories: ['History'],
    rating: 5,
  },
];

@Component({
  selector: 'app-vertical-book-list',
  standalone: true,
  imports: [],
  templateUrl: './vertical-book-list.component.html',
  styleUrl: './vertical-book-list.component.scss',
})
export class VerticalBookListComponent {
  @Input() data?: Book[] = DUMMY_DATA;
}
