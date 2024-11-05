import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { NavbarHomeComponent } from '../../../shared/components/navbar-home/navbar-home.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [
    RouterLink, FooterComponent, NavbarHomeComponent, FormsModule, ReactiveFormsModule,
    MatSnackBarModule, MatInputModule, MatCardModule, MatButtonModule, NgIf,
  ],
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  resetPasswordForm: FormGroup;
  private fb = inject(FormBuilder);
  private snackBar = inject(MatSnackBar);
  private router = inject(Router);

  constructor() {
    this.resetPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  controlHasError(control: string, error: string) {
    return this.resetPasswordForm.controls[control].hasError(error);
  }

  private showSnackBar(message: string) {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

  onSubmit() {
    if (this.resetPasswordForm.valid) {
      const email = this.resetPasswordForm.value.email;
      
    
      console.log(`Simulación: Se envió un enlace de restablecimiento de contraseña a ${email}`);
      this.showSnackBar('Se ha enviado un enlace para restablecer la contraseña a su correo.');

      this.router.navigate(['/auth/login']);
    }
  }
}
