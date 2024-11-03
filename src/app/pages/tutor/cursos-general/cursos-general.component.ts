import { Router, RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import { FooterComponent } from "../../../shared/components/footer/footer.component";
import { NavbarTutorComponent } from '../../../shared/components/navbar-tutor/navbar-tutor.component';

@Component({
  selector: 'app-cursos-general',
  standalone: true,
  imports: [FooterComponent,NavbarTutorComponent,RouterLink],
  templateUrl: './cursos-general.component.html',
  styleUrl: './cursos-general.component.css'
})
export class CursosGeneralComponent {
  selectedCurso: string | null = null;

  constructor(private router: Router) {}

  selectCurso(curso: string) {
    this.selectedCurso = curso;
    this.router.navigate(['/tutor/curso-individual', curso]);
  }
}
