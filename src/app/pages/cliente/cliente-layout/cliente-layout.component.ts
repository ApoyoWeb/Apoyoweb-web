import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarClienteComponent } from '../../../shared/components/navbar-cliente/navbar-cliente.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-cliente-layout',
  standalone: true,
  imports: [RouterLink,NavbarClienteComponent,FooterComponent,RouterOutlet],
  templateUrl: './cliente-layout.component.html',
  styleUrl: './cliente-layout.component.css'
})
export class ClienteLayoutComponent {

}
