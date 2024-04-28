import { Injectable } from '@angular/core';
import { Proyecto } from '../models/proyectos.interface';

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
      LOD: 250,
      area: '1500m2',
      imagenUrl: 'assets/carrucel4.5.jpg',
    },
    // ... una lista estática de proyectos para el ejemplo
  ];

  constructor() {}

  getProyectos(): Proyecto[] {
    return this.proyectos;
  }
}
