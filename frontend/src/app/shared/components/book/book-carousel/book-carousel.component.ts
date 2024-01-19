import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { Book } from '../../../models/book.model';

const DUMMY_DATA: Book[] = [
  {
    id: '1',
    name: 'Hyouka',
    thumbnailUrl:
      'https://upload.wikimedia.org/wikipedia/en/9/93/Hy%C5%8Dka_novel_cover.jpg',
    description: `Apathetic high school student Houtarou Oreki is forced to enter his school's Classic Literature Club upon the request of his older sister, Tomoe Oreki. This club was on the verge of being disbanded due to the absence of members. However, he founds out that club already has one member in the face of ever-curious girl called Eru Chitanda. In a little while his friends, knowledgeble Satoshi Fukube and stern Mayaka Ibara, also join in. Accompanied by his fellow club members and being pushed by Chitanda's curiosity, Oreki is forced to solve different mysteries by using his resourcefulness and hidden talents.`,
    categories: ['Games'],
  },
  {
    id: '2',
    name: 'Hyouka',
    thumbnailUrl: 'https://i.redd.it/bjpcjr0sigk41.jpg',
    description: `Apathetic high school student Houtarou Oreki is forced to enter his school's Classic Literature Club upon the request of his older sister, Tomoe Oreki. This club was on the verge of being disbanded due to the absence of members. However, he founds out that club already has one member in the face of ever-curious girl called Eru Chitanda. In a little while his friends, knowledgeble Satoshi Fukube and stern Mayaka Ibara, also join in. Accompanied by his fellow club members and being pushed by Chitanda's curiosity, Oreki is forced to solve different mysteries by using his resourcefulness and hidden talents.`,
    categories: ['Fantasy'],
  },
  {
    id: '3',
    name: 'Hyouka',
    thumbnailUrl: 'https://pbs.twimg.com/media/DyFoRcFUwAMEg3t.jpg',
    description: `Apathetic high school student Houtarou Oreki is forced to enter his school's Classic Literature Club upon the request of his older sister, Tomoe Oreki. This club was on the verge of being disbanded due to the absence of members. However, he founds out that club already has one member in the face of ever-curious girl called Eru Chitanda. In a little while his friends, knowledgeble Satoshi Fukube and stern Mayaka Ibara, also join in. Accompanied by his fellow club members and being pushed by Chitanda's curiosity, Oreki is forced to solve different mysteries by using his resourcefulness and hidden talents.`,
    categories: ['History'],
  },
];

@Component({
  selector: 'app-book-carousel',
  standalone: true,
  imports: [],
  templateUrl: './book-carousel.component.html',
  styleUrl: './book-carousel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookCarouselComponent implements AfterViewInit {
  data: Book[] = DUMMY_DATA;
  position = [0, 1, 2];
  index = 0;
  scrollInterval: any;
  alpha = [100, 200, 0];
  beta = [100, -100, 0];
  delta = [-200, -100, 0];
  x = [this.alpha, this.beta, this.delta];

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.scrollHandler();
  }

  scrollHandler() {
    if (this.scrollInterval) {
      clearInterval(this.scrollInterval);
    }
    this.scrollInterval = setInterval(() => {
      const tmp = this.position.pop();
      this.position.unshift(tmp!);
      if (this.index === this.data.length - 1) {
        this.index = 0;
      } else {
        this.index++;
      }
      this.changeDetectorRef.detectChanges();
    }, 2000);
  }

  getTransform(idx: number) {
    let returnStr = `translateX(${this.x[idx][this.index]}%)`;
    if (this.position[0] === idx) {
      returnStr += ' scale(1.1)';
    }
    return returnStr;
  }
}
