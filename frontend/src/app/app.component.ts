import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './shared/components/layouts/layout/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'frontend';
}
