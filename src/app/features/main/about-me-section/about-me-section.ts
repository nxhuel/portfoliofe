import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me-section',
  imports: [TranslateModule],
  templateUrl: './about-me-section.html',
  styleUrl: './about-me-section.scss',
})
export class AboutMeSection {
  // Sobre mi
  infos: { title: string; description: string }[] = [
    {
      title: 'infos.Back-end',
      description: 'infos.APIs & Microservicios',
    },
    {
      title: 'infos.Base de Datos',
      description: 'infos.Diseño & Implementación',
    },
    {
      title: 'infos.Análisis',
      description: 'infos.Relevamiento, Documentación, <br> UML & Arquitectura',
    },
    {
      title: 'infos.Front-end',
      description: 'infos.Buena experiencia de usuario',
    },
  ];
}
