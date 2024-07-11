import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonDropComponent } from '../../sharedUI/button-up/button-drop.component';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-sort-block',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonDropComponent],
  templateUrl: './filters-sort.component.html',
  styleUrls: ['./filters-sort.component.scss'],
})
export class SortComponent {
  options = [
    { label: 'None', value: 'none' },
    { label: 'Date', value: 'date' },
    { label: 'Views', value: 'views' },
  ];

  selectedOption: string = this.options[0].value;

  ascending: boolean = true;

  constructor(private filterService: FilterService) {}

  onOptionChange() {
    this.filterService.setSortCriteria(this.selectedOption, this.ascending);
  }

  toggleSortDirection() {
    this.ascending = !this.ascending;
    this.filterService.setSortCriteria(this.selectedOption, this.ascending);
  }
}
