import { Component, Input } from '@angular/core';
import { BookTag } from '../../../models/book-tag.model';

const DUMMY_DATA: BookTag[] = [
  {
    id: '1',
    label: 'ISEKAI',
  },
  {
    id: '2',
    label: 'ANIME',
  },
  {
    id: '3',
    label: 'NARUTO',
  },
  {
    id: '4',
    label: 'MARVEL',
  },
  {
    id: '5',
    label: 'ONEPIECE',
  },
  {
    id: '6',
    label: 'HARRYPORTTER',
  },
  {
    id: '7',
    label: 'MHA',
  },
  {
    id: '8',
    label: 'DC',
  },
  {
    id: '9',
    label: 'POKEMON',
  },
  {
    id: '10',
    label: 'BNHA',
  },
  {
    id: '11',
    label: 'DANMACHI',
  },
  {
    id: '12',
    label: 'ISEKAI',
  },
  {
    id: '13',
    label: 'ISEKAI',
  },
  {
    id: '14',
    label: 'ISEKAI',
  },
  {
    id: '15',
    label: 'ISEKAI',
  },
];

@Component({
  selector: 'app-book-tags',
  standalone: true,
  imports: [],
  templateUrl: './book-tags.component.html',
  styleUrl: './book-tags.component.scss',
})
export class BookTagsComponent {
  @Input() data?: BookTag[] = DUMMY_DATA;
}
