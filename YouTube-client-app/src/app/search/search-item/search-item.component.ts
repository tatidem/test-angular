import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchItem } from '../search-item.model';
import { ButtonComponent } from '../../sharedUI/button/button.component';

@Component({
  selector: 'app-search-item',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './search-item.component.html',
  styleUrl: './search-item.component.scss',
})
export class SearchItemComponent {
  @Input() item?: SearchItem;

  getBorderColorClass(): string {
    if (!this.item?.snippet.publishedAt) {
      return '';
    }

    const currentDate = new Date();
    const itemDate = new Date(this.item.snippet.publishedAt);
    const differenceInDays = (currentDate.getTime() - itemDate.getTime()) / (1000 * 3600 * 24);

    if (differenceInDays > 180) {
      return 'border-red';
    }
    if (differenceInDays >= 30) {
      return 'border-yellow';
    }
    if (differenceInDays >= 7) {
      return 'border-green';
    }
    return 'border-blue';
  }
}
