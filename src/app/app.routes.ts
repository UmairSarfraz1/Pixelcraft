import { Routes } from '@angular/router';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Home } from './pages/home/home';
import { NotFound } from './pages/not-found/not-found';
import { Portfolio } from './pages/portfolio/portfolio';
import { Services } from './pages/services/services';

export const routes: Routes = [
  { path: '', component: Home, title: 'PixelCraft Studio | Digital experiences' },
  { path: 'about', component: About, title: 'About | PixelCraft Studio' },
  { path: 'services', component: Services, title: 'Services | PixelCraft Studio' },
  { path: 'portfolio', component: Portfolio, title: 'Portfolio | PixelCraft Studio' },
  { path: 'contact', component: Contact, title: 'Contact | PixelCraft Studio' },
  { path: '**', component: NotFound, title: 'Page not found | PixelCraft Studio' },
];
