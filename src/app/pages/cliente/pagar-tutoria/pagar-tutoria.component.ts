import { Component, NgModule } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { NavbarClienteComponent } from '../../../shared/components/navbar-cliente/navbar-cliente.component';
import { RouterLink } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';
import { CurrencyPipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-pagar-tutoria',
  standalone: true,
  imports: [
    FooterComponent,
    NavbarClienteComponent,
    RouterLink,
    FormsModule,
    NgClass, CurrencyPipe
  ],
  templateUrl: './pagar-tutoria.component.html',
  styleUrls: ['./pagar-tutoria.component.css'],
})
export class PagarTutoriaComponent {
  tutorName: string = '';
  totalPrice: number = 0;
  cardName: string = '';
  cardNumber: string = '';
  expirationDate: string = '';
  securityCode: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe((params) => {
      this.tutorName = params['tutorName'] || 'Tutor no especificado';
      this.totalPrice = +params['totalAmount'] || 0;
    });
  }

  submitPayment(): void {
    if (this.cardName && this.cardNumber && this.expirationDate && this.securityCode) {
      alert('Pago realizado exitosamente');
      this.router.navigate(['/cliente/homepage-cliente']);
    } else {
      alert('Por favor, completa todos los campos');
    }
  }
}
