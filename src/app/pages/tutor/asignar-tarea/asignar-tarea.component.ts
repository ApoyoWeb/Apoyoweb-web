import { Component, NgModule } from '@angular/core';
import {  ActivatedRoute, Router, RouterLink } from '@angular/router';
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
  courseName: string | null = null;

  constructor(
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.courseName = this.route.snapshot.paramMap.get('courseName');
  }

  publicarTarea(): void {
    this.snackBar.open('La tarea se publicó correctamente', 'Cerrar', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });

    setTimeout(() => {
      if (this.courseName) {
        this.router.navigate([`/tutor/curso-individual/${this.courseName}`]);
      } else {
        this.router.navigate(['/tutor/cursos-general']);
      }
    }, 3000);
  }
}
