import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SearchItemComponent } from './search-results/search-item/search-item.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { FiltersBlockComponent } from './filters-block/filters-block.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FiltersBlockComponent,
    SearchItemComponent,
    SearchResultsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'YouTube-client-app';
}
