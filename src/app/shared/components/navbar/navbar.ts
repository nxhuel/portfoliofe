import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements OnInit {
  // Language toggle state
  isEnglish: boolean = false;

  constructor(public translate: TranslateService) {
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang('es');
    this.translate.use(this.translate.getBrowserLang() || 'es');
  }

  toggleLanguage(): void {
    const nextLang = this.translate.currentLang === 'en' ? 'es' : 'en';
    this.translate.use(nextLang);
    this.isEnglish = nextLang === 'en';
  }

  // Theme toggle state
  isDark: boolean = false;

  ngOnInit(): void {
    const currentTheme = localStorage.getItem('bsTheme') || 'dark';
    this.isDark = currentTheme === 'dark';
    document.documentElement.setAttribute('data-bs-theme', currentTheme);
  }

  toggleTheme(): void {
    this.isDark = !this.isDark;
    const newTheme = this.isDark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-bs-theme', newTheme);
    localStorage.setItem('bsTheme', newTheme);
  }

  // Navbar Items
  isSidebarHovered = false;
  activeItem: any = null;

  menuItems = [
    { label: 'Inicio' },
    { label: 'Sobre Mí' },
    { label: 'Proyectos Destacados' },
    { label: 'Contacto' },
  ];
}
