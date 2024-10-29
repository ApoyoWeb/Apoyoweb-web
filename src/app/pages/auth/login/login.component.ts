import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { NavbarHomeComponent } from '../../../shared/components/navbar-home/navbar-home.component';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,FooterComponent,NavbarHomeComponent,FormsModule,ReactiveFormsModule,
    MatSnackBarModule, MatInputModule, MatCardModule, MatButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  private fb = inject(FormBuilder);
  private snackBar = inject(MatSnackBar)
  constructor(){
    this.loginForm = this.fb.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(6)]]
    });


  }
  controlHasError(control:string, error:string){
    return this.loginForm.controls[control].hasError(error);
  }
  private showSnackBar(message:string){
    this.snackBar.open(message, 'Cerrar', {
      duration:3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
  onSubmit(){
    if(this.loginForm.valid){
      const credentials = this.loginForm.value;
      console.log("Credenciales: ", credentials);
      this.showSnackBar('Inicio de sesion exitoso');
    }
  }

}
