import { Component, Input } from '@angular/core';
import { SearchItem } from '../search-item.model';
import { ButtonComponent } from '../../sharedUI/button/button.component';

@Component({
  selector: 'app-search-item',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './search-item.component.html',
  styleUrl: './search-item.component.scss',
})
export class SearchItemComponent {
  @Input() item?: SearchItem;
}
