import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private showFiltersBlock = new BehaviorSubject<boolean>(false);

  private sortCriteria = new BehaviorSubject<{ criteria: string; ascending: boolean }>({
    criteria: 'none',
    ascending: true,
  });

  showFilters$ = this.showFiltersBlock.asObservable();

  sortCriteria$ = this.sortCriteria.asObservable();

  toggleFilters() {
    this.showFiltersBlock.next(!this.showFiltersBlock.value);
  }

  setSortCriteria(criteria: string, ascending: boolean) {
    console.log('Setting sort criteria:', criteria, 'ascending:', ascending);
    this.sortCriteria.next({ criteria, ascending });
  }
}
