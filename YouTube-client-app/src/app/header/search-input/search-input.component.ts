import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../sharedUI/button/button.component';
import { SearchQueryService } from '../../services/search.service';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [ButtonComponent, FormsModule],
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent {
  searchValue: string = '';

  constructor(private searchQueryService: SearchQueryService) {}

  onSearch() {
    if (this.searchValue.trim()) {
      this.searchQueryService.updateSearchQuery(this.searchValue);
      console.log(this.searchValue);
    }
  }
}
