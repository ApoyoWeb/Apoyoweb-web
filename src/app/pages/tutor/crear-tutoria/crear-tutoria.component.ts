import { Component } from '@angular/core';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { NavbarTutorComponent } from '../../../shared/components/navbar-tutor/navbar-tutor.component';
import { FormControl, FormsModule, NgModel } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-crear-tutoria',
  standalone: true,
  imports: [FooterComponent, NavbarTutorComponent, FormsModule, RouterModule,  MatSnackBarModule, RouterLink, ],
  templateUrl: './crear-tutoria.component.html',
  styleUrl: './crear-tutoria.component.css'
})
export class CrearTutoriaComponent {
  cursos = ['Matemáticas', 'Programación', 'Física', 'Química']; // Ejemplo de cursos
  cursoSeleccionado = '';
  fecha: string = '';
  horaInicio: string = '';
  horaFin: string = '';
  maxAlumnos: number | null = null;
  precio: number | null = null;

  constructor(private snackBar: MatSnackBar, private router: Router) {}

  crearTutoriaGrupal(): void {
    // Aquí podrías implementar la lógica para enviar los datos al servidor

    // Muestra el mensaje de éxito
    this.snackBar.open('La tutoría grupal se creó correctamente', 'Cerrar', {
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
