import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchItemComponent } from '../search-item/search-item.component';
import { SearchService } from '../../services/http-client.service';
// import { SearchItem } from '../search-item.model';
// import { SearchResponse } from '../search-response.model';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [SearchItemComponent, CommonModule],
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  providers: [SearchService],
})
export class SearchResultsComponent {
  // searchItems: SearchItem[] = [];
  // constructor(private searchService: SearchService) {
  //   this.searchService.getSearchResults().subscribe((data: SearchResponse) => {
  //     this.searchItems = data.items;
  //   });
  // }
}
