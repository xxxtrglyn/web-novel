import { Component } from '@angular/core';
import { BookSliderComponent } from '../../shared/components/book/book-slider/book-slider.component';
import { SectionComponent } from '../../shared/components/templates/section/section.component';
import { HorizontalBookListComponent } from '../../shared/components/book/horizontal-book-list/horizontal-book-list.component';
import { BookCarouselComponent } from '../../shared/components/book/book-carousel/book-carousel.component';
import { VerticalBookListComponent } from '../../shared/components/book/vertical-book-list/vertical-book-list.component';
import { BookTagsComponent } from '../../shared/components/book/book-tags/book-tags.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    BookSliderComponent,
    SectionComponent,
    HorizontalBookListComponent,
    BookCarouselComponent,
    VerticalBookListComponent,
    BookTagsComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
