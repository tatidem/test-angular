import { Component } from '@angular/core';
import { LogoComponent } from './logo/logo.component';
import { SearchInputComponent } from './search-input/search-input/search-input.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoComponent, SearchInputComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
