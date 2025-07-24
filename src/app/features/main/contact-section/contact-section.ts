import { Component } from '@angular/core';
import { Contact } from '../../../core/interfaces/contact';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-section',
  imports: [TranslateModule],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.scss',
})
export class ContactSection {
  // Contact - Job

  contactsJobs: Contact[] = [
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
  ];
}
