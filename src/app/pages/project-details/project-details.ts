import { Component } from '@angular/core';
import { Project } from '../../core/interfaces/project';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-project-details',
  imports: [TranslateModule],
  templateUrl: './project-details.html',
  styleUrl: './project-details.scss',
})
export class ProjectDetails {
  scrollToProject(index: number) {
    const el = document.getElementById(`proyecto-${index}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  projects: Project[] = [
    {
      id: 'foro-hub',
      year: '2025',
      github: 'https://github.com/nxhuel/foro_hub',
      video: '../../../../assets/images/foroDoc.jpg',
      type: 'image/jpg',
      title: 'API RestFull ForoHub - Alura Latam',
      description:
        'Desarrollo de una API RESTFull que  permite la gestión integral de un foro, ofreciendo operaciones para crear, leer, actualizar y eliminar temas, categorías y respuestas. Incorpora autenticación robusta y funcionalidades avanzadas como caché distribuido para un desempeño eficiente.',
      tags: [
        'Java',
        'Spring Boot',
        'Spring Data JPA',
        'Spring Security',
        'JWT',
        'MySQL',
        'Redis',
        'GitBash',
        'Postman',
        'BackEnd',
      ],
    },
    {
      id: 'pagina-web-informativa-aem',
      year: '2025',
      github: 'https://github.com/nxhuel/clases-danza-pagina-web',
      video: '../../../../assets/videos/almaEnMovDoc.mp4',
      type: 'video/mp4',
      title: 'Pagina Web Informativa “AEM”',
      description:
        'Desarrollo de una página web informativa para una bailarina y profesora de danza, orientada a mostrar su perfil artístico y educativo. Se diseñó en Figma con un enfoque visual atractivo y diferencial, y se implementó en React.js para asegurar velocidad, mantenibilidad y escalabilidad. El sitio quedó preparado para futuras funcionalidades (por ejemplo, formularios de inscripción o agenda de clases). Se utilizó GitBash para control de versiones y Vercel para el despliegue automático mediante CI/CD).',
      tags: [
        'Figma',
        'HTML5',
        'CSS3',
        'JavaScript',
        'React.js',
        'Tailwind CSS',
        'GitBash',
        'Vercel',
        'FrontEnd',
      ],
    },
    {
      id: 'bazar',
      year: '2024',
      github: 'https://github.com/nxhuel/tp_final_todoCode',
      video: '../../../../assets/images/bazarDoc.jpg',
      type: 'image/jpg',
      title: 'API RESTFull Bazar - TodoCode',
      description:
        'Desarrollo una API RESTFull para un bazar, permitiendo gestionar ventas y el stock de productos mediante operaciones CRUD para Productos, Clientes y Ventas. Incluye funcionalidades adicionales, como identificar productos con poco stock y consultar ventas por fecha o productos por venta.',
      tags: [
        'Java',
        'Spring Boot',
        'Spring Data JPA',
        'Spring Security',
        'JUnit',
        'MySQL',
        'GitBash',
        'Postman',
        'BackEnd',
      ],
    },
    {
      id: 'cifrador-texto',
      year: '2023',
      github: 'https://github.com/nxhuel/challenge-oracle',
      video: '../../../../assets/videos/cifradoTextoDoc.webm',
      type: 'video/webm',
      title: 'Cifrador de Texto - Alura Latam',
      description:
        'Desarrollo de una Pagina Web estática con el desafío de generar mi propio hash seguro e irrepetible y manejo del DOM. La aplicación permite cifrar y descifrar mensajes utilizando un algoritmo de sustitución simple, donde cada letra se reemplaza por una secuencia específica de caracteres. El proyecto incluye validaciones para asegurar que el texto ingresado sea válido y maneja errores de manera adecuada.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'GitBash', 'Vercel', 'FrontEnd'],
    },
  ];
}
