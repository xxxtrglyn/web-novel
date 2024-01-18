import { Component } from '@angular/core';
import { BookSliderComponent } from '../../shared/components/book/book-slider/book-slider.component';
import { SectionComponent } from '../../shared/components/templates/section/section.component';
import { HorizontalBookListComponent } from '../../shared/components/book/horizontal-book-list/horizontal-book-list.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [BookSliderComponent, SectionComponent, HorizontalBookListComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
