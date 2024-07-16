import { Component } from '@angular/core';
import { SearchItemComponent } from './search-item/search-item.component';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [SearchItemComponent],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss',
})
export class SearchResultsComponent {}
