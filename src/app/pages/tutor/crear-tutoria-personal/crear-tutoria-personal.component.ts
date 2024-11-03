import { Component, NgModule } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { NavbarTutorComponent } from '../../../shared/components/navbar-tutor/navbar-tutor.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-crear-tutoria-personal',
  standalone: true,
  imports: [RouterLink, FooterComponent, NavbarTutorComponent, MatSnackBarModule, FormsModule],
  templateUrl: './crear-tutoria-personal.component.html',
  styleUrl: './crear-tutoria-personal.component.css'
})
export class CrearTutoriaPersonalComponent {
  codigoAlumno: string = '';
  fecha: string = '';
  horaInicio: string = '';
  horaFin: string = '';
  descripcion: string = '';

  constructor(private snackbar: MatSnackBar, private router: Router) {}

  crearTutoriaPersonal(): void {
    // Aquí podrías implementar la lógica para enviar los datos al servidor

    // Muestra el mensaje de éxito
    this.snackbar.open('La tutoría personal se creó correctamente', 'Cerrar', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });

    // Redirige a la página de gestión de tutorías después de un breve retraso
    setTimeout(() => {
      this.router.navigate(['/tutor/gestion-tutoria']);
    }, 3000);
  }
}
