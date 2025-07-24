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
      year: '2024',
      github: 'url',
      video: 'video',
      title: 'projects.Sistema de Gestión Empresarial',
      description:
        'projects.API REST completa para gestión de inventarios, ventas y clientes Implementada con microservicios y arquitectura escalable',
      tags: ['c#', 'sql server', 'gitbash', 'swagger', 'docker', 'azure'],
    },
    {
      year: '2024',
      github: 'url',
      video: 'video',
      title: 'projects.Sistema de Gestión Empresarial',
      description:
        'projects.API REST completa para gestión de inventarios, ventas y clientes Implementada con microservicios y arquitectura escalable',
      tags: ['angular', 'bootstrap', 'gitbash', 'vercel'],
    },
    {
      year: '2024',
      github: 'url',
      video: 'video',
      title: 'projects.Sistema de Gestión Empresarial',
      description:
        'projects.API REST completa para gestión de inventarios, ventas y clientes Implementada con microservicios y arquitectura escalable',
      tags: ['java', 'spring boot', 'spring security', 'swagger', 'gitbash', 'aws'],
    },
  ];
}
