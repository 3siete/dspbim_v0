import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ProyectoService } from '../../service/proyecto.service';
import { Proyecto } from '../../models/proyectos.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proyecto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css'],
})
export class ProyectoComponent implements OnInit {
  proyecto!: Proyecto; // Asumimos que proyecto siempre va a existir.
  contenidoActual: string = '';
  contentHidden: boolean = false;
  tituloActual: string = 'Introducción'; // Puedes inicializarlo con el primer título
  detalles: (keyof Proyecto)[] = [
    'introduccion',
    'descripcion',
    'servicios',
    'area',
    'LOD',
  ];
  indiceDetalleActual: number = 0;

  constructor(
    private route: ActivatedRoute,
    private proyectoService: ProyectoService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.proyectoService.obtenerProyectoPorId(+id).subscribe({
        next: (proyecto) => {
          if (proyecto) {
            this.proyecto = proyecto;
            const detalle = this.detalles[this.indiceDetalleActual];
            // Asegúrate de que 'detalle' es una propiedad de tipo string en Proyecto.
            this.contenidoActual = proyecto[detalle] as string;
          }
        },
        error: (err) => {
          console.error(err);
          // Manejar el caso de error aquí, por ejemplo, mostrando un mensaje o redireccionando.
        },
      });
    }
  }

  cambiarContenido(): void {
    if (this.proyecto) {
      // Oculta el contenido
      this.contentHidden = true;

      // Espera que la animación de desvanecimiento termine
      setTimeout(() => {
        // Actualiza el contenido
        this.indiceDetalleActual =
          (this.indiceDetalleActual + 1) % this.detalles.length;
        this.tituloActual = this.getTitulo(
          this.detalles[this.indiceDetalleActual]
        );
        this.contenidoActual = this.proyecto[
          this.detalles[this.indiceDetalleActual]
        ] as string;

        // Muestra el contenido
        this.contentHidden = false;
      }, 500); // Ajusta este tiempo al tiempo de tu animación CSS
    }
  }
  private getTitulo(detalle: keyof Proyecto): string {
    const titulos: { [key in keyof Proyecto]?: string } = {
      introduccion: 'Introducción',
      descripcion: 'Descripción',
      servicios: 'Servicios',
      area: 'Área',
      LOD: 'Nivel de Detalle', // Si LOD es parte de los detalles que quieres mostrar
      // ... mapea el resto de las claves a los títulos deseados ...
    };
    return titulos[detalle] || detalle;
  }

  private setContenidoActual(): void {
    if (this.proyecto) {
      const detalle = this.detalles[this.indiceDetalleActual];
      this.contenidoActual = this.proyecto[detalle] as string; // TypeScript ya no debería quejarse aquí
    }
  }
}
