import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-key-word-filter',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './key-word-filter.component.html',
  styleUrl: './key-word-filter.component.scss',
})
export class KeyWordFilterComponent {
  filterValue: string = '';

  constructor(private filterService: FilterService) {}

  onSearch() {
    if (this.filterValue.trim()) {
      this.filterService.setFilterValue(this.filterValue);
    } else {
      this.filterService.resetFilterValue();
    }
  }

  clearFilter() {
    this.filterValue = '';
    this.filterService.resetFilterValue();
  }
}
