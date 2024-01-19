import { Component, Input } from '@angular/core';

export enum GradientButtonType {
  Primary,
  Secondary,
  Third,
}

@Component({
  selector: 'app-gradient-button',
  standalone: true,
  imports: [],
  templateUrl: './gradient-button.component.html',
  styleUrl: './gradient-button.component.scss',
})
export class GradientButtonComponent {
  @Input() label?: string;
  @Input() mode?: number = GradientButtonType.Primary;
}
