import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarTutorComponent } from '../../../shared/components/navbar-tutor/navbar-tutor.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { HomepageTutorComponent } from '../homepage-tutor/homepage-tutor.component';
import { CursosGeneralComponent } from '../cursos-general/cursos-general.component';

@Component({
  selector: 'app-tutor-layout',
  standalone: true,
  imports: [RouterLink,NavbarTutorComponent,FooterComponent,RouterOutlet,HomepageTutorComponent,CursosGeneralComponent],
  templateUrl: './tutor-layout.component.html',
  styleUrl: './tutor-layout.component.css'
})
export class TutorLayoutComponent {

}
