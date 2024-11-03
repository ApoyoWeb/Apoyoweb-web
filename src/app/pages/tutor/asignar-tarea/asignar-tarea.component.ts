import { Component, NgModule } from '@angular/core';
import {  Router, RouterLink } from '@angular/router';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { NavbarTutorComponent } from '../../../shared/components/navbar-tutor/navbar-tutor.component';
import { NgFor } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-asignar-tarea',
  standalone: true,
  imports: [RouterLink, FooterComponent,NavbarTutorComponent, NgFor, MatSnackBarModule],
  templateUrl: './asignar-tarea.component.html',
  styleUrl: './asignar-tarea.component.css'
})
export class AsignarTareaComponent {
  constructor(private snackBar: MatSnackBar, private router: Router) {}

  publicarTarea(): void {
    this.snackBar.open('La tarea se publicó correctamente', 'Cerrar', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });

    setTimeout(() => {
      this.router.navigate(['/tutor/homepage-tutor']);
    }, 3000);
  }
}
