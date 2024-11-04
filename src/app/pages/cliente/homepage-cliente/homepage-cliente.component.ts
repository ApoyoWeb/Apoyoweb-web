import { Component, NgModule } from '@angular/core';
import { NavbarClienteComponent } from "../../../shared/components/navbar-cliente/navbar-cliente.component";
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { NgModel } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-homepage-cliente',
  standalone: true,
  imports: [NavbarClienteComponent,RouterLink, FooterComponent, NgIf],
  templateUrl: './homepage-cliente.component.html',
  styleUrl: './homepage-cliente.component.css'
})
export class HomepageClienteComponent {
  showAdvancedSearch = false;

  toggleAdvancedSearch() {
    this.showAdvancedSearch = !this.showAdvancedSearch;
  }
}
