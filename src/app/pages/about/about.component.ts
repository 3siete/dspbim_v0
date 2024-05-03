import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit, AfterViewInit {
  ngOnInit() {}

  ngAfterViewInit(): void {}

  toggleInfo(tarjeta: HTMLElement): void {
    const infoAdicional = tarjeta.querySelector(
      '.informacion-adicional'
    ) as HTMLElement;
    const verMas = tarjeta.querySelector('.ver-mas') as HTMLElement;
    const imagen = tarjeta.querySelector(
      '.contenedor-imagen img'
    ) as HTMLImageElement;

    if (
      infoAdicional.style.maxHeight &&
      infoAdicional.style.maxHeight !== '0px'
    ) {
      infoAdicional.style.maxHeight = '0px'; // Oculta la información adicional
      verMas.textContent = 'Ver más';
      imagen.style.transform = 'scale(1)'; // Tamaño original de la imagen
    } else {
      infoAdicional.style.maxHeight = `${infoAdicional.scrollHeight}px`; // Muestra la información adicional
      verMas.textContent = 'Ver menos';
      imagen.style.transform = 'scale(1.1)'; // Aumenta el tamaño de la imagen
    }
  }
}
