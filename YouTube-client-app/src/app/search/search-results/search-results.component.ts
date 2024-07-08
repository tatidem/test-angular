import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchItemComponent } from '../search-item/search-item.component';
import { SearchService } from '../../services/http-client.service';
import { SearchItem } from '../search-item.model';
import { SearchQueryService } from '../../services/search.service';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [SearchItemComponent, CommonModule],
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  providers: [SearchService],
})
export class SearchResultsComponent implements OnInit {
  searchItems: SearchItem[] = [];

  constructor(
    private searchService: SearchService,
    private searchQueryService: SearchQueryService
  ) {}

  ngOnInit() {
    this.searchQueryService.currentSearchQuery.subscribe((query) => {
      if (query) {
        this.searchService.getSearchResults().subscribe((data) => {
          this.searchItems = data.items;
        });
      }
    });
  }
}
