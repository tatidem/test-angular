import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonDropComponent } from '../../sharedUI/button-up/button-drop.component';

@Component({
  selector: 'app-sort-block',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonDropComponent],
  templateUrl: './filters-sort.component.html',
  styleUrls: ['./filters-sort.component.scss'],
})
export class SortComponent {
  options = [
    { label: 'Date', value: 'date' },
    { label: 'Views', value: 'views' },
  ];

  selectedOption: string = this.options[0].value;

  onOptionChange() {
    this.sortData();
  }

  sortData() {
    if (this.selectedOption === 'date') {
      console.log('Sorting by date');
    } else if (this.selectedOption === 'views') {
      console.log('Sorting by views');
    }
  }
}
