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
  scrollTo(target: string) {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

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

  // Sidebar Items
  isSidebarHovered = false;
  activeItem: any = null;

  menuItems: MenuItem[] = [
    { label: 'Inicio', url: '#inicio' },
    {
      label: 'Sobre Mí',
      url: '#sobre-mi',
      subItems: [
        { label: 'Habilidades Técnicas', url: '#habilidades-tecnicas' },
        { label: 'Formación Académica', url: '#formacion-academica' },
      ],
    },
    {
      label: 'Proyectos Destacados',
      url: '#proyectos-destacados',
      subItems: [
        {
          label: 'Gestión de Tareas',
          url: '#gestion-de-tareas',
        },
        { label: 'Clon Aula Virtual', url: '#clon-aula-virtual' },
        { label: 'Sú agip', url: '#su-agip' },
        { label: 'Ver más Proyectos', url: '#' },
      ],
    },
    {
      label: 'Experiencia Profesional',
      url: '#experiencia-profesional',
      subItems: [{ label: 'Agip', url: '#pasante-desarrollador-de-software' }],
    },
    { label: 'Contacto', url: '#contacto' },
  ];
}
