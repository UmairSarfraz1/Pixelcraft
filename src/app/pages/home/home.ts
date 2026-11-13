import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WebsiteDataService } from '../../services/website-data.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  readonly data = inject(WebsiteDataService);
}
