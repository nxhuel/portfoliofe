import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me-section',
  imports: [TranslateModule],
  templateUrl: './about-me-section.html',
  styleUrl: './about-me-section.scss',
})
export class AboutMeSection {
  selectedInfo?: Info;
  // Sobre mi
  infos: Info[] = [
    {
      title: 'infos.Back-end',
      description: 'infos.APIs & Microservicios',
      skills: [
        { name: 'C#' },
        { name: 'ASP.NET Core' },
        { name: 'Entity Framework Core' },
        { name: 'Identity Framework Core' },
        { name: 'JWT (Autenticación)' },
        { name: 'LINQ' },
        { name: 'Middleware' },
        { name: 'Inyección de Dependencias' },
        { name: 'Unit Testing (xUnit)' },
        { name: 'Git' },
        { name: 'GitBash' },
        { name: 'Azure' },
        { name: 'Web APIs REST' },
        { name: 'Principios SOLID' },
        { name: 'Patrones de Diseño' }
      ],
    },
    {
      title: 'infos.Base de Datos',
      description: 'infos.Diseño & Implementación',
      skills: [{ name: 'SQL Server' }, { name: 'MySQL' }, { name: 'MongoDB' }],
    },
    {
      title: 'infos.Análisis',
      description: 'Requerimientos & Documentación',
      skills: [
        { name: 'Comprensión del Modelo de Negocio' },
        { name: 'Requerimientos' },
        { name: 'UML (Lenguaje Modelo Unificado)' },
        { name: 'DER (Modelo Entidad-Relación)' },
        { name: 'Proceso Unificado' },
        { name: 'Proceso Clásico' },
        { name: 'SCRUM' },
        { name: 'Postman' },
        { name: 'Swagger' },
      ],
    },
    {
      title: 'infos.Front-end',
      description: 'infos.Buena experiencia de usuario',
      skills: [
        { name: 'HTML5' },
        { name: 'CSS3' },
        { name: 'JavaScript' },

        { name: 'Angular' },
        { name: 'TypeScript' },
        { name: 'Bootstrap' },
        { name: 'Figma' },
      ],
    },
  ];
}
