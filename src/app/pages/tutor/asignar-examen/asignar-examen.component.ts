import { Component } from '@angular/core';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { NavbarTutorComponent } from '../../../shared/components/navbar-tutor/navbar-tutor.component';
import { RouterLink } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-asignar-examen',
  standalone: true,
  imports: [FooterComponent, NavbarTutorComponent, RouterLink],
  templateUrl: './asignar-examen.component.html',
  styleUrl: './asignar-examen.component.css'
})
export class AsignarExamenComponent {
  constructor(private snackBar: MatSnackBar) {}

  publicarExamen(): void {
    this.snackBar.open('El examen se publicó correctamente', 'Cerrar', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
