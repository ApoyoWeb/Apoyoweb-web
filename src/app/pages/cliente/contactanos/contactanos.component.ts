import { NavbarClienteComponent } from './../../../shared/components/navbar-cliente/navbar-cliente.component';
import { FooterComponent } from './../../../shared/components/footer/footer.component';
import { Component } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contactanos',
  standalone: true,
  imports: [FooterComponent, NavbarClienteComponent,MatSnackBarModule, RouterLink],
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent {
  constructor(private snackBar: MatSnackBar) {}

  onSubmit(): void {

    this.snackBar.open('Mensaje enviado con éxito', 'Cerrar', {
      duration: 1000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
