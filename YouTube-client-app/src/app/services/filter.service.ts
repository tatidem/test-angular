import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private showFiltersBlock = new BehaviorSubject<boolean>(false);

  showFilters$ = this.showFiltersBlock.asObservable();

  toggleFilters() {
    this.showFiltersBlock.next(!this.showFiltersBlock.value);
  }
}
