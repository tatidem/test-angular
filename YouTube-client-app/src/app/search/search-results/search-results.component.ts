import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchItemComponent } from '../search-item/search-item.component';
import { SearchService } from '../../services/http-client.service';
import { SearchItem } from '../search-item.model';
import { SortPipe } from '../../pipes/sort.pipe';
import { SearchQueryService } from '../../services/search.service';
import { FilterService } from '../../services/filter.service';
import { FilterPipe } from '../../pipes/filter-key-word.pipe';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [SearchItemComponent, CommonModule, SortPipe, FilterPipe],
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  providers: [SearchService],
})
export class SearchResultsComponent implements OnInit {
  searchItems: SearchItem[] = [];

  sortCriteria: string = 'none';

  isAscending: boolean = true;

  filterValue: string = '';

  constructor(
    private searchService: SearchService,
    private searchQueryService: SearchQueryService,
    private filterService: FilterService
  ) {}

  ngOnInit() {
    this.searchQueryService.currentSearchQuery.subscribe((query) => {
      if (query) {
        this.searchService.getSearchResults().subscribe((data) => {
          this.searchItems = data.items;
        });
      }
    });

    this.filterService.sortCriteria$.subscribe((criteria) => {
      this.sortCriteria = criteria.criteria;
      this.isAscending = criteria.ascending;
    });

    this.filterService.filterValue$.subscribe((value) => {
      this.filterValue = value;
    });
  }
}
