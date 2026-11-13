import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WebsiteDataService } from '../../services/website-data.service';

@Component({
  selector: 'app-services',
  imports: [RouterLink],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  readonly data = inject(WebsiteDataService);
}
