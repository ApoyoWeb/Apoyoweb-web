import { Routes } from '@angular/router';
import { ClienteLayoutComponent } from './cliente-layout/cliente-layout.component';
import { BuscarTutoresComponent } from './buscar-tutores/buscar-tutores.component';
import { ModificarPerfilComponent } from './modificar-perfil/modificar-perfil.component';
import { PagarTutoriaComponent } from './pagar-tutoria/pagar-tutoria.component';
import { ReservaTutoriaComponent } from './reserva-tutoria/reserva-tutoria.component';
import { HomepageClienteComponent } from './homepage-cliente/homepage-cliente.component';
import { ContactanosComponent } from './contactanos/contactanos.component';


export const clienteRoutes: Routes = [
  {path: '', component: ClienteLayoutComponent,
  children: [
    {path: 'buscar-tutores', component:BuscarTutoresComponent,},
    {path: 'modificar-perfil',component: ModificarPerfilComponent},
    {path: 'pagar-tutoria',component:PagarTutoriaComponent},
    {path: 'reserva-tutoria', component: ReservaTutoriaComponent},
    {path: 'homepage-cliente', component: HomepageClienteComponent},
{path: 'contactanos',component: ContactanosComponent},
  ]

  },
];
