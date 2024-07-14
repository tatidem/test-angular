import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../search-results/search-item.model';

@Pipe({
  name: 'filter',
  standalone: true,
})
export class FilterPipe implements PipeTransform {
  transform(items: SearchItem[], filterValue: string): SearchItem[] {
    if (!items || !filterValue) {
      return items;
    }
    return items
      .slice()
      .filter(
        (item) =>
          item.snippet.title.toLowerCase().includes(filterValue.toLowerCase()) ||
          item.snippet.description.toLowerCase().includes(filterValue.toLowerCase())
      );
  }
}
