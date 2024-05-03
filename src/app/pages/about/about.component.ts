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

    if (
      infoAdicional.style.maxHeight &&
      infoAdicional.style.maxHeight !== '0px'
    ) {
      infoAdicional.style.maxHeight = '0px'; // Asigna "0px" en lugar de null
      verMas.textContent = 'Ver más';
    } else {
      infoAdicional.style.maxHeight = `${infoAdicional.scrollHeight}px`;
      verMas.textContent = 'Ver menos';
    }
  }
}
