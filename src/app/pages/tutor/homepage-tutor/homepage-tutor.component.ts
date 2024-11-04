import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarTutorComponent } from '../../../shared/components/navbar-tutor/navbar-tutor.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-homepage-tutor',
  standalone: true,
  imports: [RouterLink, NavbarTutorComponent, RouterOutlet,FooterComponent],
  templateUrl: './homepage-tutor.component.html',
  styleUrl: './homepage-tutor.component.css'
})
export class HomepageTutorComponent {

}
