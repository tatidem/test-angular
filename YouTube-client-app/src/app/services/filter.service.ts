import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private showFiltersBlock = new BehaviorSubject<boolean>(false);

  private sortCriteria = new BehaviorSubject<{ criteria: string; ascending: boolean }>({
    criteria: 'date',
    ascending: true,
  });

  showFilters$ = this.showFiltersBlock.asObservable();

  sortCriteria$ = this.sortCriteria.asObservable();

  toggleFilters() {
    this.showFiltersBlock.next(!this.showFiltersBlock.value);
  }

  setSortCriteria(criteria: string, ascending: boolean) {
    this.sortCriteria.next({ criteria, ascending });
  }
}
