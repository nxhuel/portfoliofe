import { Component } from '@angular/core';
import { Contact } from '../../interfaces/contact';
import { Project } from '../../interfaces/project';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-main',
  imports: [TranslateModule],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {
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

  // Proyectos
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
      tags: ['c#', 'sql server', 'gitbash', 'swagger', 'docker', 'azure'],
    },
    {
      year: '2024',
      github: 'url',
      video: 'video',
      title: 'projects.Sistema de Gestión Empresarial',
      description:
        'projects.API REST completa para gestión de inventarios, ventas y clientes Implementada con microservicios y arquitectura escalable',
      tags: ['c#', 'sql server', 'gitbash', 'swagger', 'docker', 'azure'],
    },
  ];

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
