import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  slides = [
    {
      imgURL:
        'https://us.123rf.com/450wm/koldunovaaa/koldunovaaa1809/koldunovaaa180900058/108050218-foto-para-documento-o-c%C3%A9dula-de-pasaporte-hombre-cauc%C3%A1sico-maduro-en-traje-y-camisa-blanca.jpg',
      job: 'Arquitecto recibido de la Universidad de Flores (Sede Comahue) en Cipolletti, Río Negro (2010)',
      name: 'Sebastían Dromaz',
      text:
        'Formó parte de equipos de proyecto desde el 2005 al 2012 produciendo documentación ténica, proyectista y posteriormente gestionando obras paraestudios de arquitectura del alto valle rionegrino.' +
        'Entre el 2012 y el 2018 desempeña su profesión de manera independiente comprendiendo obras de pequeña y mediana escala en el ámbito público y privado.' +
        'En el año 2018 conforma el estudio de Arquitectura DSP Arquitectos donde cumple su principal Rol como Proyectista, Ejecución de documentación técnica y Director Administrador de Obras.',
    },
    {
      imgURL:
        'https://st2.depositphotos.com/2783505/7767/i/450/depositphotos_77676472-stock-photo-portrait-of-a-blonde-german.jpg',
      job: 'Arquitecta recibida de la Universidad de Flores (Sede Comahue) en Cipolletti, Río Negro (2017)',
      name: 'Sonzogni Jhoana',
      text:
        ' Desde el 2015 desempeña su actividad profesional como colobaradora y asociada de proyectos para estudios de arquitectura y empresas constructoras de la región.' +
        ' En el año 2018 conforma el estudio de Arquitectura DSP Arquitectos donde cumple su principal funcion como Proyectista, Ejecución de documentación técnica y Directora de obras.',
    },
    {
      imgURL:
        'https://img.freepik.com/fotos-premium/retrato-hombre-primer-plano-sobre-fondo-blanco-camiseta-blanca-fotos-documentos_292419-5514.jpg',
      job: 'Arquitecto recibido de la Universidad de Flores (SedeComahue) en Cipolletti, Río Negro (2010)',
      name: 'Nicolas Pojmaevich',
      text:
        ' Trabajó como colaborador de documentaciones ejecutivas y director de obra para diversos profesionales de la zona.' +
        ' Especialización en visualización arquitectónica, desarrollando imágenes realisticas para el interior y exterior del país.' +
        ' En el año 2018 conforma el estudio de Arquitectura DSP Arquitectos donde cumple su principal funcion como Proyectista, Ejecución de documentación técnica y Directora de obras.',
    },
  ];

  //ldjsflkjasld

  indicatorsVisible = true;
  animationSpeed = 300;
  autoPlay = false;
  autoPlaySpeed = 1000;
  currentSlide = 0;
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;
  hidden = false;

  next() {
    let currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.jumpToSlide(currentSlide);
  }

  previous() {
    let currentSlide =
      (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.jumpToSlide(currentSlide);
  }

  jumpToSlide(index: number) {
    this.hidden = true;
    setTimeout(() => {
      this.currentSlide = index;
      this.hidden = false;
    }, this.animationSpeed);
  }

  ngOnInit() {
    if (this.autoPlay) {
      setInterval(() => {
        this.next();
      }, this.autoPlaySpeed);
    }
  }
}
