import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../sharedUI/button/button.component';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [ButtonComponent, FormsModule],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.scss',
})
export class SearchInputComponent {
  searchValue: string = '';

  @Output() searchEvent = new EventEmitter<string>();

  onSearch() {
    this.searchEvent.emit(this.searchValue);
    console.log(this.searchValue);
  }
}
