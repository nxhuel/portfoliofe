import { Component } from '@angular/core';
import { url } from 'inspector';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  isSidebarHovered = false;
  activeItem: any = null;

  menuItems = [
    { label: 'Inicio' },
    { label: 'Sobre Mí' },
    { label: 'Proyectos Destacados' },
    { label: 'Contacto' },
  ];
}
