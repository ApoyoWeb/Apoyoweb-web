import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { NavbarHomeComponent } from '../../../shared/components/navbar-home/navbar-home.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTabGroup } from '@angular/material/tabs';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { HomepageTutorComponent } from '../../tutor/homepage-tutor/homepage-tutor.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink, FooterComponent, NavbarHomeComponent, FormsModule, ReactiveFormsModule,
    MatSnackBarModule, MatInputModule, MatCardModule, MatButtonModule, MatTabGroup, MatRadioButton, MatRadioGroup, HomepageTutorComponent, NgIf,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  private fb = inject(FormBuilder);
  private snackBar = inject(MatSnackBar);
  private router = inject(Router);

  constructor() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      userRole: ['cliente']
    });
  }

  controlHasError(control: string, error: string) {
    return this.loginForm.controls[control].hasError(error);
  }

  private showSnackBar(message: string) {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;
      console.log("Credenciales: ", credentials);
      this.showSnackBar('Inicio de sesión exitoso');

      const userRole = this.loginForm.get('userRole')?.value;

      if (userRole === 'tutor') {
        this.router.navigate(['/tutor/homepage-tutor']);
      } else if (userRole === 'cliente') {
        this.router.navigate(['/cliente/homepage-cliente']);
      }
    }
  }
}
