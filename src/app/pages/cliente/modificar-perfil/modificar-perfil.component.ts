import { Component, inject } from '@angular/core';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { NavbarClienteComponent } from '../../../shared/components/navbar-cliente/navbar-cliente.component';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-modificar-perfil',
  standalone: true,
  imports: [FooterComponent, NavbarClienteComponent, RouterLink, ReactiveFormsModule, MatSnackBarModule],
  templateUrl: './modificar-perfil.component.html',
  styleUrls: ['./modificar-perfil.component.css']
})
export class ModificarPerfilComponent {
  profileForm: FormGroup;
  private fb = inject(FormBuilder);
  private snackBar = inject(MatSnackBar);
  private router = inject(Router);

  constructor() {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      password: ['', Validators.minLength(6)]
    });

    this.profileForm.patchValue({
      name: 'Nombre Actual',
      email: 'correo@ejemplo.com',
      phone: '123456789'
    });
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      this.snackBar.open('Perfil actualizado exitosamente', 'Cerrar', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      });
      this.router.navigate(['/cliente/homepage-cliente']);
    }
  }

  onCancel(): void {
    this.router.navigate(['/cliente/homepage-cliente']);
  }
}
