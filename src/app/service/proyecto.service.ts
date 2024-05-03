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
      nombre: 'LAB',
      introduccion:
        'askjdnkajsndkjansdkjansdkjnaskjdnasjkdnakjsdnkjandjskandksjndkjans',
      descripcion:
        'asjindiaushdiouhasioudhasiouhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhdhd',
      servicios: 'asdasdnkjansd aksjndkajnsdkajnsd akjsndkajnsdkjand',
      LOD: '250',
      area: '1500m2',
      imagenUrl: 'assets/carrucel4.5.jpg',
    },
    // ... una lista estática de proyectos para el ejemplo
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
