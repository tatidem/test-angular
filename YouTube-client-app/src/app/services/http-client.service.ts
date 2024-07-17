import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchItem } from '../search-results/search-item.model';

@Injectable({ providedIn: 'root' })
export class SearchService {
  constructor(private http: HttpClient) {}

  getSearchResults() {
    return this.http.get<{ items: SearchItem[] }>('./response.json');
  }
}
