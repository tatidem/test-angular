import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SortComponent } from './sort/filters-sort.component';
import { FilterService } from '../services/filter.service';
import { KeyWordFilterComponent } from './key-word-filter/key-word-filter.component';

@Component({
  selector: 'app-filters-block',
  standalone: true,
  imports: [SortComponent, KeyWordFilterComponent],
  templateUrl: './filters-block.component.html',
  styleUrl: './filters-block.component.scss',
})
export class FiltersBlockComponent implements OnInit, OnDestroy {
  isVisible = false;

  @HostBinding('class.hidden') get isHidden() {
    return !this.isVisible;
  }

  private subscription!: Subscription;

  constructor(private filterService: FilterService) {}

  ngOnInit() {
    this.subscription = this.filterService.showFilters$.subscribe((show) => {
      this.isVisible = show;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
