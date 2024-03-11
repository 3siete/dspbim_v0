import { Component } from '@angular/core';
import { HomeSliderComponent } from '../../layout/home-slider/home-slider.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeSliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  services = [
    {
      number: 'n1',
      name: 'Documentación Ejecutiva',
      description: 'Dibujos, planos y documentos técnicos a partir de Modelos BIM' 
    },
    {
      number: 'n2',
      name: 'BIM Arquitectónico',
      description: 'Modelado Arquitectónico a partir de documentación 2D a 3D BIM' 
    },
    {
      number: 'n3',
      name: 'BIM estructural',
      description: 'Modelado Estructural 3D BIM a partir de archivos IFC del departamento de ingeniería.' 
    },
    {
      number: 'n4',
      name: 'MEP',
      description: 'Modelado de instalaciones, cordinación con todas las diciplinas y documentación ejecutiva.'
    },
    {
      number: 'n5',
      name: 'Detección de conflictos',
      description:'Detección de interferencias interdisciplinarias (Arquitectónico, Estructural, MEP y otros) con informes para solucionar a través del diseño la mejor solución.' 
    },
    {
      number: 'n6',
      name: 'AS BUILT',
      description:'Dibujos, planos y documentos técnicos de lo realmente ejecutado a traves de escaneo 3D' 
    },

  ];
}
