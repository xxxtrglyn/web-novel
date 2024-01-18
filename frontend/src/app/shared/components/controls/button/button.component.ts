import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input({ required: true }) label?: string;
  @Output() clicked = new EventEmitter<void>();

  clickHandler() {
    this.clicked.emit();
  }
}
