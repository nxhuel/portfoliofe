import { Component } from '@angular/core';
import { Contact } from '../../interfaces/contact';
import { Project } from '../../interfaces/project';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {
  // Inicio - networking
  contacts: Contact[] = [
    {
      name: 'GitHub',
      icon: 'bi bi-github',
      url: '',
    },
    {
      name: 'LinkedIn',
      icon: 'bi bi-github',
      url: '',
    },
    {
      name: 'Email',
      icon: 'bi bi-github',
      url: '',
    },
    {
      name: 'Blog',
      icon: 'bi bi-github',
      url: '',
    },
  ];

  // Sobre mi
  infos: { title: string; description: string }[] = [
    {
      title: 'Back-end',
      description: 'APIs & Microservicios',
    },
    {
      title: 'Base de Datos',
      description: 'Diseño & Implementación',
    },
    {
      title: 'Análisis',
      description: 'Relevamiento, Documentación, <br> UML & Arquitectura',
    },
    {
      title: 'Front-end',
      description: 'Buena experiencia de usuario',
    },
  ];

  // Proyectos
  projects: Project[] = [
    {
      year: '2024',
      github: 'url',
      video: 'video',
      title: 'Sistema de Gestión Empresarial',
      description:
        'API REST completa para gestión de inventarios, ventas y clientes. Implementada con microservicios y arquitectura escalable.',
      tags: ['c#', 'sql server', 'gitbash', 'swagger', 'docker', 'azure'],
    },
    {
      year: '2024',
      github: 'url',
      video: 'video',
      title: 'Sistema de Gestión Empresarial',
      description:
        'API REST completa para gestión de inventarios, ventas y clientes. Implementada con microservicios y arquitectura escalable.',
      tags: ['c#', 'sql server', 'gitbash', 'swagger', 'docker', 'azure'],
    },
    {
      year: '2024',
      github: 'url',
      video: 'video',
      title: 'Sistema de Gestión Empresarial',
      description:
        'API REST completa para gestión de inventarios, ventas y clientes. Implementada con microservicios y arquitectura escalable.',
      tags: ['c#', 'sql server', 'gitbash', 'swagger', 'docker', 'azure'],
    },
  ];

  // Contact - Job

  contactsJobs: Contact[] = [
    {
      name: 'GitHub',
      icon: 'bi bi-github',
      url: '',
    },
    {
      name: 'LinkedIn',
      icon: 'bi bi-github',
      url: '',
    },
  ];
}
