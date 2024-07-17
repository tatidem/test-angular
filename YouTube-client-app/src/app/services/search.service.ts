import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchQueryService {
  private searchQuerySource = new BehaviorSubject<string>('');

  currentSearchQuery = this.searchQuerySource.asObservable();

  updateSearchQuery(query: string) {
    this.searchQuerySource.next(query);
  }
}