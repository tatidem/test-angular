import { Component } from '@angular/core';
import { SortComponent } from './sort/filters-sort.component';
import { KeyWordFilterComponent } from './key-word-filter/key-word-filter.component';

@Component({
  selector: 'app-filters-block',
  standalone: true,
  imports: [SortComponent, KeyWordFilterComponent],
  templateUrl: './filters-block.component.html',
  styleUrl: './filters-block.component.scss',
})
export class FiltersBlockComponent {}
