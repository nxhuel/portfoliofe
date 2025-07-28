import { Component } from '@angular/core';
import { Project } from '../../../core/interfaces/project';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects-section',
  imports: [TranslateModule],
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.scss',
})
export class ProjectsSection {
  // Filtered Projects
  uniqueTags: string[] = [];
  filteredProjects: Project[] = [];
  selectedTag: string | null = null;

  ngOnInit(): void {
    const allTags = this.projects.flatMap((p) => p.tags);
    this.uniqueTags = [...new Set(allTags)];
    this.filteredProjects = this.projects;
  }

  filterByTag(tag: string): void {
    this.selectedTag = tag;
    this.filteredProjects = this.projects.filter((p) => p.tags.includes(tag));
  }

  clearFilter(): void {
    this.selectedTag = null;
    this.filteredProjects = this.projects;
  }

  // All Projects
  projects: Project[] = [
    {
      id: 'gestion-de-tareas',
      year: '2025',
      github: 'https://github.com/nxhuel/toDoList',
      video: '../../../../assets/videos/toDoListDoc.webm',
      type: 'video/webm',
      title: 'projects.Gestión de Tareas Diarias',
      description:
        'projects.Software completo para la gestión de tareas personales, diseñada para ofrecer una experiencia ágil, organizada y moderna Permite crear, editar y eliminar tareas, con una interfaz clara y responsive Desarrollada con Angular, Bootstrap y SCSS en el frontend, y ASP NET Core con SQL Server en el backend Incluye pruebas con XUnit y documentación de API con Swagger',
      tags: [
        'HTML5',
        'SCSS',
        'TypeScript',
        'Angular',
        'Bootstrap',
        'C#',
        'ASP.NET Core',
        'SQL Server',
        'XUnit',
        'GitBash',
        'Swagger',
        'FullStack',
      ],
    },
    {
      id: 'clon-aula-virtual',
      year: '2025',
      github: 'url',
      video: '../../../../assets/videos/aulaVirtualDoc.webm',
      type: 'video/webm',
      title: 'projects.Clon Aula Virtual - IFTS 21',
      description:
        'projects.Plataforma integral para instituciones educativas que permite gestionar usuarios, materias e inscripciones de forma ágil y segura Desarrollada con Java (Spring Boot) y FrontEnd web rapida y facil de mantener, con arquitectura REST y enfoque escalable Actualmente el servidor se encuentra pausado por cuestiones económicas, pero puede activarse para su revisión bajo solicitud',
      tags: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'Java',
        'Spring Boot',
        'Spring Security',
        'Swagger',
        'GitBash',
        'Postman',
        'FullStack',
      ],
    },
    {
      id: 'su-agip',
      year: '2024',
      github: 'https://github.com/nxhuel/SistemaUtilesAgip',
      video: '../../../../assets/videos/Suagipdoc.mp4',
      type: 'video/mp4',
      title: 'projects.Sistema de Útiles - AGIP',
      description:
        'projects.Sistema completo para gestión de útiles provenientes de todas las áreas del organismo, permitiendo tener información actualizada del stock disponible, objeto que se pide, y toda la información correspondiente para ser auditada Implementada con arquitectura Modelo-Vista-Plantilla (MVT) y Shared-Nothing (Múltiples aplicaciones independientes que forman el proyecto completo)',
      tags: [
        'Python',
        'Django',
        'Jinja2',
        'SQLServer',
        'HTML5',
        'CSS3',
        'JavaScript',
        'Bootstrap',
        'GitBash',
        'Postman',
        'FullStack',
      ],
    },
  ];
}
