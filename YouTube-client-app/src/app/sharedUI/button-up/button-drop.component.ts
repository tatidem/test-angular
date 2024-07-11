import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-up',
  standalone: true,
  imports: [],
  templateUrl: './button-drop.component.html',
  styleUrl: './button-drop.component.scss',
})
export class ButtonDropComponent {
  @Input() icon: string = '';

  @Input() className?: string;

  @Input() disabled: boolean = false;
}
