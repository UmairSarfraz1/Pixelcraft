import { Component, inject } from '@angular/core';
import { WebsiteDataService } from '../../services/website-data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  readonly data = inject(WebsiteDataService);
}
