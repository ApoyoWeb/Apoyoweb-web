import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { NavbarHomeComponent } from '../../shared/components/navbar-home/navbar-home.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,FooterComponent,NavbarHomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
