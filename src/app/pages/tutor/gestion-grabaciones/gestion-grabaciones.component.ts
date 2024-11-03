import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { NavbarTutorComponent } from '../../../shared/components/navbar-tutor/navbar-tutor.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { NgFor, NgIf } from '@angular/common';

interface Grabacion {
  titulo: string;
  descripcion: string;
}

@Component({
  selector: 'app-gestion-grabaciones',
  standalone: true,
  imports: [RouterLink, FooterComponent, NavbarTutorComponent, MatSnackBarModule, NgFor, NgIf],
  templateUrl: './gestion-grabaciones.component.html',
  styleUrl: './gestion-grabaciones.component.css'
})
export class GestionGrabacionesComponent {
  grabaciones: Grabacion[] = [
    { titulo: 'Grabación 1', descripcion: 'Descripción de la grabación 1.' },
    { titulo: 'Grabación 2', descripcion: 'Descripción de la grabación 2.' },
    { titulo: 'Grabación 3', descripcion: 'Descripción de la grabación 3.' },
  ];

  constructor(private snackBar: MatSnackBar) {}

  eliminarGrabacion(grabacion: Grabacion): void {
    this.grabaciones = this.grabaciones.filter(g => g !== grabacion);
    this.snackBar.open('Grabación eliminada correctamente', 'Cerrar', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }
}
