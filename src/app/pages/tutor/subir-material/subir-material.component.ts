import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { NavbarTutorComponent } from '../../../shared/components/navbar-tutor/navbar-tutor.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { NgIf, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-subir-material',
  standalone: true,
  imports: [
    FooterComponent,
    NavbarTutorComponent,
    MatSnackBarModule,
    NgIf,
    NgFor,
    RouterLink,
    MatLabel, MatFormField, NgIf, FormsModule,
  ],
  templateUrl: './subir-material.component.html',
  styleUrls: ['./subir-material.component.css']
})
export class SubirMaterialComponent {
  constructor(private snackBar: MatSnackBar, private router: Router) {}
  unidadSeleccionada: string = '';
  semanaSeleccionada: string = '';
  subirMaterial(): void {
    this.snackBar.open('El material se publicó correctamente', 'Cerrar', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
    setTimeout(() => {
      this.router.navigate(['/tutor/cursos-general']);
    }, 3000);
  }
}

export class AppModule { }
