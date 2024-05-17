import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ProyectoService } from '../../service/proyecto.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manage-project',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule, // Importa RouterModule si usas la navegación
  ],
  templateUrl: './manage-project.component.html',
  styleUrls: ['./manage-project.component.css'],
})
export class ManageProjectComponent implements OnInit {
  projectForm: FormGroup;
  currentProjectId: string | null = null;

  constructor(
    private proyectoService: ProyectoService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.projectForm = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      servicios: new FormControl('', [Validators.required]),
      area: new FormControl('', [Validators.required]),
      LOD: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.currentProjectId = id;
        this.proyectoService.obtenerProyectoPorId(id).subscribe((project) => {
          this.projectForm.patchValue(project);
        });
      }
    });
  }

  submitForm() {
    if (this.projectForm.valid) {
      if (this.currentProjectId) {
        this.proyectoService
          .updateProyecto(this.projectForm.value, this.currentProjectId)
          .then(() => {
            this.router.navigate(['/projects']);
          });
      } else {
        this.proyectoService.createProyecto(this.projectForm.value).then(() => {
          this.router.navigate(['/projects']);
        });
      }
    }
  }

  deleteProject() {
    if (this.currentProjectId) {
      this.proyectoService.deleteProyecto(this.currentProjectId).then(() => {
        this.router.navigate(['/projects']);
      });
    }
  }
}
