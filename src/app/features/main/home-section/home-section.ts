import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Contact } from '../../../core/interfaces/contact';

@Component({
  selector: 'app-home-section',
  imports: [TranslateModule],
  templateUrl: './home-section.html',
  styleUrl: './home-section.scss',
})
export class HomeSection {
  // Inicio - networking
  contacts: Contact[] = [
    {
      name: 'GitHub',
      icon: 'bi bi-github',
      url: 'https://github.com/nxhuel',
    },
    {
      name: 'LinkedIn',
      icon: 'bi bi-linkedin',
      url: 'https://www.linkedin.com/in/tisera-nahuel-ab3864219/',
    },
    {
      name: 'Email',
      icon: 'bi bi-envelope',
      url: 'mailto:nahueltisera03@gmail.com',
    },
    {
      name: 'Blog',
      icon: 'bi bi-dev-to',
      url: 'https://dev.to/nxhuel',
    },
  ];
}
