import { Injectable } from '@angular/core';
import { Proyecto } from '../models/proyectos.interface';
import { Observable, throwError } from 'rxjs';
import { of } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class ProyectoService {
  private proyectos: Proyecto[] = [
    {
      id: 1,
      nombre: 'LAB',
      introduccion:
        'Proyecto arquitectónico de oficinas y laboratorio ortopédico. Remodelación y ampliación',
      descripcion:
        'El proyecto cumple con el desafio de remodelar un galpón existente, para que funcione un laboratorio ortopedico. Se amplia superficie nueva con oficinas anexas. El sistema de construcción que resuelva el proyecto es el tradicional. ',
      servicios: 'asdasdnkjansd aksjndkajnsdkajnsd akjsndkajnsdkjand',
      LOD: '250',
      area: '1500m2',
      imagenUrl: 'assets/carrucel4.5.jpg',
    },
    // ... una lista estática de proyectos para el ejemplo
  ];

  constructor(private firestore: AngularFirestore) {}

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
  createProyecto(proyecto: Proyecto) {
    return this.firestore.collection('proyectos').add(proyecto);
  }

  updateProyecto(proyecto: Proyecto, id: string) {
    return this.firestore.collection('proyectos').doc(id).update(proyecto);
  }

  deleteProyecto(id: string) {
    return this.firestore.collection('proyectos').doc(id).delete();
  }
}
