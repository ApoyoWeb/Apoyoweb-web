import { Component } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { NavbarTutorComponent } from '../../../shared/components/navbar-tutor/navbar-tutor.component';
import { NgClass } from '@angular/common';
import { FormControl, FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-evaluar-desempeno',
  standalone: true,
  imports: [MatSnackBarModule, FooterComponent, NavbarTutorComponent, NgClass, FormsModule,],
  templateUrl: './evaluar-desempeno.component.html',
  styleUrl: './evaluar-desempeno.component.css'
})
export class EvaluarDesempenoComponent {
  students = ['Estudiante 1', 'Estudiante 2', 'Estudiante 3'];
  selectedStudent: string | null = null;
  reportTitle = '';
  reportDescription = '';

  constructor(private snackBar: MatSnackBar) {}

  generarReporteGeneral(): void {
    this.snackBar.open('El reporte general fue generado correctamente.', 'Cerrar', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  generarReportePersonalizado(): void {
    if (!this.selectedStudent || !this.reportTitle || !this.reportDescription) {
      this.snackBar.open('Por favor, completa todos los campos para el reporte personalizado.', 'Cerrar', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
      return;
    }

    this.snackBar.open('El reporte personalizado fue generado correctamente.', 'Cerrar', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });

    this.selectedStudent = null;
    this.reportTitle = '';
    this.reportDescription = '';
  }
}
