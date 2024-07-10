import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() buttonText: string = '';

  @Input() buttonClass: string = '';

  @Input() disabled: boolean = false;

  @Output() clickEvent = new EventEmitter<void>();

  onClick() {
    if (!this.disabled) {
      this.clickEvent.emit();
    }
  }
}
