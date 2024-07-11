import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../search/search-item.model';

@Pipe({
  name: 'sort',
  standalone: true,
})
export class SortPipe implements PipeTransform {
  transform(
    items: SearchItem[],
    criteria: string,
    ascending: boolean
    // searchItemsSaved: SearchItem[]
  ): SearchItem[] {
    if (!items || !criteria || criteria === 'none') {
      return items;
    }

    return items.slice().sort((a, b) => {
      let comparison = 0;
      if (criteria === 'date') {
        comparison =
          new Date(a.snippet.publishedAt).getTime() - new Date(b.snippet.publishedAt).getTime();
      } else if (criteria === 'views') {
        const viewCountA = Number(a.statistics?.viewCount ?? 0);
        const viewCountB = Number(b.statistics?.viewCount ?? 0);
        comparison = viewCountA - viewCountB;
      }

      return ascending ? comparison : -comparison;
    });
  }
}
