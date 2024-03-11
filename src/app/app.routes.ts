import { Routes } from '@angular/router';

export const routes: Routes = [ 
    
  { path: '##', redirectTo: '   ', pathMatch: 'full' },
    {
    path:'', loadComponent: ()=> import ('./pages/home/home.component').then(c => c.HomeComponent)
    },
    {
    path:'nosotros', loadComponent: ()=> import ('./pages/about/about.component').then(c => c.AboutComponent)
    },
    {
    path:'contacto', loadComponent: ()=> import ('./pages/contact/contact.component').then(c => c.ContactComponent)
    },
    {
    path:'', loadComponent: ()=> import ('./pages/home/home.component').then(c => c.HomeComponent)
    },
];
