import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-settings-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './settings-button.component.html',
  styleUrl: './settings-button.component.scss',
})
export class SettingsButtonComponent {
  isActive = false;

  constructor(private filterService: FilterService) {}

  onClick() {
    this.isActive = !this.isActive;
    this.filterService.toggleFilters();
  }
}
