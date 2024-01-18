import { Component } from '@angular/core';
import { BookSliderComponent } from '../../shared/components/book/book-slider/book-slider.component';
import { SectionComponent } from '../../shared/components/templates/section/section.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [BookSliderComponent, SectionComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
