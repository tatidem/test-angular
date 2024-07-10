import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-key-word-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './key-word-filter.component.html',
  styleUrl: './key-word-filter.component.scss',
})
export class KeyWordFilterComponent {
  filterValue: string = '';

  onSearch() {
    if (this.filterValue.trim()) {
      console.log(this.filterValue);
    }
  }
}
