import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Book } from '../../../models/book.model';

@Component({
  selector: 'app-book-slider',
  standalone: true,
  imports: [],
  templateUrl: './book-slider.component.html',
  styleUrl: './book-slider.component.scss',
})
export class BookSliderComponent implements AfterViewInit {
  @Input({ required: true }) data: Book[] = [];
  index = 0;
  scrollInterval: any;

  ngAfterViewInit(): void {
    this.startAutoScroll();
  }

  indexChangeHandler(idx: number) {
    this.index = idx;
    this.startAutoScroll();
  }

  startAutoScroll() {
    if (!this.data) {
      return;
    }

    if (this.scrollInterval) {
      clearInterval(this.scrollInterval);
    }
    this.scrollInterval = setInterval(() => {
      if (this.index === this.data!.length - 1) {
        this.index = 0;
      } else {
        this.index++;
      }
    }, 2000);
  }
}
