import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css',
})
export class ProyectosComponent {
  slides = [
    {
      cards: [
        { title: 'Nombre 1', text: 'introduccion 1' },
        { title: 'Nombre 2', text: 'introduccion 2' },
        { title: 'Nombre 3', text: 'introduccion 3' },
        { title: 'Nombre 4', text: 'introduccion 4' },
      ],
    },
    // ... más objetos de slide con tarjetas
  ];
}
