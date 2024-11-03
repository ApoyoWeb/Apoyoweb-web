import { Component } from '@angular/core';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { NavbarTutorComponent } from '../../../shared/components/navbar-tutor/navbar-tutor.component';
import { CurrencyPipe, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gestion-tutoria',
  standalone: true,
  imports: [FooterComponent, NavbarTutorComponent, CurrencyPipe, NgFor, RouterLink],
  templateUrl: './gestion-tutoria.component.html',
  styleUrl: './gestion-tutoria.component.css'
})
export class GestionTutoriaComponent {
  tutorias = [
    {
      nombre: 'Fundamentos de Programación',
      horaInicio: '10:00 AM',
      horaFin: '12:00 PM',
      precio: 50
    },
    {
      nombre: 'Estructura de Datos',
      horaInicio: '2:00 PM',
      horaFin: '4:00 PM',
      precio: 60
    },
    {
      nombre: 'Algoritmos Avanzados',
      horaInicio: '6:00 PM',
      horaFin: '8:00 PM',
      precio: 75
    },
    {
      nombre: 'Desarrollo Web',
      horaInicio: '9:00 AM',
      horaFin: '11:00 AM',
      precio: 55
    },
    {
      nombre: 'Bases de Datos',
      horaInicio: '3:00 PM',
      horaFin: '5:00 PM',
      precio: 65
    }
  ];
}
