import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Proyecto } from '../../models/proyectos.interface';
import { ProyectoService } from '../../service/proyecto.service';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css',
})
export class ProyectosComponent {
  proyectos: Proyecto[] = [];
  constructor(private proyectoService: ProyectoService) {}
  ngOnInit(): void {
    this.proyectos = this.proyectoService.getProyectos();
  }
}
