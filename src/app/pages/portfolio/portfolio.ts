import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project, WebsiteDataService } from '../../services/website-data.service';

@Component({
  selector: 'app-portfolio',
  imports: [RouterLink],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {
  readonly data = inject(WebsiteDataService);
  readonly categories = ['All', 'Branding', 'Web Design', 'E-commerce'];
  selectedCategory = 'All';

  get filteredProjects(): Project[] {
    if (this.selectedCategory === 'All') {
      return this.data.projects;
    }

    return this.data.projects.filter((project) => project.category === this.selectedCategory);
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }
}
