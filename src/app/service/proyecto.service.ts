import { Injectable } from '@angular/core';
import { Proyecto } from '../models/proyectos.interface';
import { Observable, throwError } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProyectoService {
  private proyectos: Proyecto[] = [
    {
      id: 1,
      nombre: 'SMS',
      introduccion:
        'Proyecto Arquitectónico de locales comerciales. Obra nueva',
      descripcion:
        'Este proyecto propone el desarrollo de dos locales comerciales, diseñados para maximizar la funcionalidad y estética mediante la integración de sistemas de construcción modular y tradicional. ',  
      servicios: 'Modelado arquitectónico, Documentacion Arquitectonica, Modelado de estructura, Modelado MEP, Documentación MEP (Sanitaria, desagües, gas, climatización, y eléctricidad)' ,
      LOD: '350',
      area: '137,22 m² ',
      imagenUrl: 'assets/carrucel4.5.jpg',
    },
    {
      id: 2,
      nombre: 'LAB',
      introduccion:
        'Proyecto arquitectónico de oficinas y laboratorio ortopédico. Remodelación y ampliación',
      descripcion:
        'El proyecto cumple con el desafio de remodelar un galpón existente, para que funcione un laboratorio ortopedico. Se amplia superficie nueva con oficinas anexas. El sistema de construcción que resuelva el proyecto es el tradicional. ',
      servicios: 'Modelado arquitectónico, Documentacion Arquitectonica, Modelado de estructura, Modelado MEP, Documentación MEP (Sanitaria, desagües, gas, climatización, y eléctricidad)' ,
      LOD: '300',
      area: '346 m² ',
      imagenUrl: 'assets/carrucel4.5.jpg',
    },
    {
      id: 3,
      nombre: 'ISA',
      introduccion:
        'Proyecto Arquitectónico de locales comerciales. Obra nueva',
      descripcion:
        'Este proyecto propone el desarrollo de dos locales comerciales, diseñados para maximizar la funcionalidad y estética mediante la integración de sistemas de construcción modular y tradicional. ',
      servicios: 'Modelado arquitectónico, Documentacion Arquitectonica, Modelado de estructura, Modelado MEP, Documentación MEP (Sanitaria, desagües, gas, climatización, y eléctricidad)' ,
      LOD: '350',
      area: '137,22 m² ',
      imagenUrl: 'assets/carrucel4.5.jpg',
    },
    {
      id: 4,
      nombre: 'SMS',
      introduccion:
        'Proyecto Arquitectónico de locales comerciales. Obra nueva',
      descripcion:
        'Este proyecto propone el desarrollo de dos locales comerciales, diseñados para maximizar la funcionalidad y estética mediante la integración de sistemas de construcción modular y tradicional. ',
      
      
      servicios: 'Modelado arquitectónico, Documentacion Arquitectonica, Modelado de estructura, Modelado MEP, Documentación MEP (Sanitaria, desagües, gas, climatización, y eléctricidad)' ,


      LOD: '350',
      area: '137,22 m² ',
      imagenUrl: 'assets/carrucel4.5.jpg',
    },
    {
      id: 5,
      nombre: 'SMS',
      introduccion:
        'Proyecto Arquitectónico de locales comerciales. Obra nueva',
      descripcion:
        'Este proyecto propone el desarrollo de dos locales comerciales, diseñados para maximizar la funcionalidad y estética mediante la integración de sistemas de construcción modular y tradicional. ',
      
      
      servicios: 'Modelado arquitectónico, Documentacion Arquitectonica, Modelado de estructura, Modelado MEP, Documentación MEP (Sanitaria, desagües, gas, climatización, y eléctricidad)' ,


      LOD: '350',
      area: '137,22 m² ',
      imagenUrl: 'assets/carrucel4.5.jpg',
    },
    
  ];

  constructor() {}

  getProyectos(): Proyecto[] {
    return this.proyectos;
  }
  obtenerProyectoPorId(id: number): Observable<Proyecto> {
    const proyecto = this.proyectos.find((p) => p.id === id);
    if (proyecto) {
      return of(proyecto); // 'of' es un operador de RxJS que transforma los datos en un Observable.
    } else {
      return throwError(() => new Error('Proyecto no encontrado')); // Emite un error si no se encuentra el proyecto.
    }
  }
}
