import { Component, NgModule } from '@angular/core';
import { NavbarClienteComponent } from "../../../shared/components/navbar-cliente/navbar-cliente.component";
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../../shared/components/footer/footer.component';


@Component({
  selector: 'app-homepage-cliente',
  standalone: true,
  imports: [NavbarClienteComponent,RouterLink, FooterComponent],
  templateUrl: './homepage-cliente.component.html',
  styleUrl: './homepage-cliente.component.css'
})
export class HomepageClienteComponent {
  showAdvancedSearch = false;

  toggleAdvancedSearch() {
    this.showAdvancedSearch = !this.showAdvancedSearch;
  }
}
