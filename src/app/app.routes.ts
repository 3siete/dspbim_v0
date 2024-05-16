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
    path: 'D-E',
    loadComponent: () =>
      import('./pages/services/D-E/docu-ejec/docu-ejec.component').then(
        (c) => c.DocuEjecComponent
      ),
  },
  {
    path: 'D-C',
    loadComponent: () =>
      import('./pages/services/D-C/det-con/det-con.component').then(
        (c) => c.DetConComponent
      ),
  },
  {
    path: 'MEP',
    loadComponent: () =>
      import('./pages/services/MEP/mep/mep.component').then(
        (c) => c.MepComponent
      ),
  },
  {
    path: 'B-E',
    loadComponent: () =>
      import('./pages/services/B-E/bim-est/bim-est.component').then(
        (c) => c.BimEstComponent
      ),
  },
  {
    path: 'B-A',
    loadComponent: () =>
      import('./pages/services/B-A/bim-arq/bim-arq.component').then(
        (c) => c.BimArqComponent
      ),
  },
  {
    path: 'A-B',
    loadComponent: () =>
      import('./pages/services/A-B/as-built/as-built.component').then(
        (c) => c.AsBuiltComponent
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
