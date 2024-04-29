import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'nosotros',
    loadComponent: () =>
      import('./pages/about/about.component').then((c) => c.AboutComponent),
  },
  {
    path: 'contacto',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(
        (c) => c.ContactComponent
      ),
  },
  {
    path: 'servicio',
    loadComponent: () =>
      import('./pages/services/services.component').then(
        (c) => c.ServicesComponent
      ),
  },
  {
    path: 'proyectos',
    loadComponent: () =>
      import('./pages/proyectos/proyectos.component').then(
        (c) => c.ProyectosComponent
      ),
  },
  {
    path: 'proyecto/:id',
    loadComponent: () =>
      import('./pages/proyecto/proyecto.component').then(
        (m) => m.ProyectoComponent
      ),
  },
  {
    path: '##',
    redirectTo: '',
    pathMatch: 'full',
  },
];
