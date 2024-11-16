import { Component, NgModule } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { NavbarClienteComponent } from '../../../shared/components/navbar-cliente/navbar-cliente.component';
import { RouterLink } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';
import { CurrencyPipe, NgClass, NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-reserva-tutoria',
  standalone: true,
  imports: [FooterComponent, NavbarClienteComponent, RouterLink, CurrencyPipe, NgComponentOutlet, FormsModule],
  templateUrl: './reserva-tutoria.component.html',
  styleUrls: ['./reserva-tutoria.component.css'],
})
export class ReservaTutoriaComponent {
  tutorName: string = '';
  pricePerHour: number = 0;
  selectedDuration: number = 1;
  totalPrice: number = 0;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe((params) => {
      this.tutorName = params['tutorName'] || 'Tutor no especificado';
      this.pricePerHour = +params['pricePerHour'] || 0;
      this.updatePrice(); // Inicializa el precio total
    });
  }

  updatePrice(): void {
    this.totalPrice = this.pricePerHour * this.selectedDuration;
  }

  confirmReservation(): void {
    this.router.navigate(['/pagar-tutoria'], {
      queryParams: {
        tutorName: this.tutorName,
        totalAmount: this.totalPrice,
      },
    });
  }
}
