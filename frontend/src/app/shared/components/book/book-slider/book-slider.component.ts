import { Component } from '@angular/core';
import { Book } from '../../../models/book.model';

const DUMMY_DATA: Book[] = [
  {
    id: '1',
    name: 'Hyouka',
    thumbnailUrl:
      'https://upload.wikimedia.org/wikipedia/en/9/93/Hy%C5%8Dka_novel_cover.jpg',
    description: `Apathetic high school student Houtarou Oreki is forced to enter his school's Classic Literature Club upon the request of his older sister, Tomoe Oreki. This club was on the verge of being disbanded due to the absence of members. However, he founds out that club already has one member in the face of ever-curious girl called Eru Chitanda. In a little while his friends, knowledgeble Satoshi Fukube and stern Mayaka Ibara, also join in. Accompanied by his fellow club members and being pushed by Chitanda's curiosity, Oreki is forced to solve different mysteries by using his resourcefulness and hidden talents.`,
  },
  {
    id: '2',
    name: 'Hyouka',
    thumbnailUrl:
      'https://upload.wikimedia.org/wikipedia/en/9/93/Hy%C5%8Dka_novel_cover.jpg',
    description: `Apathetic high school student Houtarou Oreki is forced to enter his school's Classic Literature Club upon the request of his older sister, Tomoe Oreki. This club was on the verge of being disbanded due to the absence of members. However, he founds out that club already has one member in the face of ever-curious girl called Eru Chitanda. In a little while his friends, knowledgeble Satoshi Fukube and stern Mayaka Ibara, also join in. Accompanied by his fellow club members and being pushed by Chitanda's curiosity, Oreki is forced to solve different mysteries by using his resourcefulness and hidden talents.`,
  },
  {
    id: '3',
    name: 'Hyouka',
    thumbnailUrl:
      'https://upload.wikimedia.org/wikipedia/en/9/93/Hy%C5%8Dka_novel_cover.jpg',
    description: `Apathetic high school student Houtarou Oreki is forced to enter his school's Classic Literature Club upon the request of his older sister, Tomoe Oreki. This club was on the verge of being disbanded due to the absence of members. However, he founds out that club already has one member in the face of ever-curious girl called Eru Chitanda. In a little while his friends, knowledgeble Satoshi Fukube and stern Mayaka Ibara, also join in. Accompanied by his fellow club members and being pushed by Chitanda's curiosity, Oreki is forced to solve different mysteries by using his resourcefulness and hidden talents.`,
  },
];

@Component({
  selector: 'app-book-slider',
  standalone: true,
  imports: [],
  templateUrl: './book-slider.component.html',
  styleUrl: './book-slider.component.scss',
})
export class BookSliderComponent {
  data: Book[] = DUMMY_DATA;
  index = 0;
}
