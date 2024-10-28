import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
  path:'',
  component: HomeComponent,
  },

  {
    path: 'tutor',
    loadChildren: ()=> import('./pages/tutor/tutor.routes').then(m=>m.tutorRoutes)
  },
  {
    path: 'cliente',
    loadChildren: ()=> import('./pages/cliente/cliente.routes').then(m=>m.clienteRoutes)
  },
  {
    path: 'auth',
    loadChildren: ()=> import('./pages/auth/auth.routes').then(m=>m.authRoutes)
  },
  {
    path:'**',
    redirectTo: '',
  },
];










