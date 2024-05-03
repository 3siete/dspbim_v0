import { Component } from '@angular/core';

@Component({
  selector: 'app-det-con',
  standalone: true,
  imports: [],
  templateUrl: './det-con.component.html',
  styleUrl: './det-con.component.css',
})
export class DetConComponent {
  toggleInfo(tarjeta: HTMLElement): void {
    const infoAdicional = tarjeta.querySelector(
      '.informacion-adicional'
    ) as HTMLElement;
    const verMas = tarjeta.querySelector('.ver-mas i') as HTMLElement; // Selecciona el elemento <i> dentro de .ver-mas

    if (
      infoAdicional.style.maxHeight &&
      infoAdicional.style.maxHeight !== '0px'
    ) {
      infoAdicional.style.maxHeight = '0px'; // Oculta la información adicional
      verMas.classList.remove('fa-minus'); // Elimina la clase de ícono de menos
      verMas.classList.add('fa-plus'); // Agrega la clase de ícono de más
    } else {
      infoAdicional.style.maxHeight = `${infoAdicional.scrollHeight}px`; // Muestra la información adicional
      verMas.classList.remove('fa-plus'); // Elimina la clase de ícono de más
      verMas.classList.add('fa-minus'); // Agrega la clase de ícono de menos
    }
  }
}
