import { Component, NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { NavbarClienteComponent } from '../../../shared/components/navbar-cliente/navbar-cliente.component';
import { FormsModule, NgModel } from '@angular/forms';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-buscar-tutores',
  standalone: true,
  imports: [RouterLink, FooterComponent, NavbarClienteComponent, NgIf, NgClass, FormsModule, NgFor, MatPaginatorModule],
  templateUrl: './buscar-tutores.component.html',
  styleUrl: './buscar-tutores.component.css'
})
export class BuscarTutoresComponent {
  searchName = '';
  searchCategory = '';
  availability = '';
  priceMin: number | null = null;
  priceMax: number | null = null;
  sortOrder = 'ranking';
  showAdvancedSearch = false;
  searchPerformed = false;
  currentPage = 0;
  pageSize = 5;

  tutors = [
    { name: 'Carlos Pérez', category: 'Matemáticas', ranking: 4.8, price: 50, availability: 'mañana' },
    { name: 'Ana López', category: 'Física', ranking: 4.5, price: 40, availability: 'tarde' },
    { name: 'José Ramírez', category: 'Programación', ranking: 4.9, price: 60, availability: 'noche' },
    { name: 'Lucía Torres', category: 'Matemáticas', ranking: 4.3, price: 35, availability: 'mañana' },
    { name: 'Laura Fernández', category: 'Química', ranking: 3.7, price: 25, availability: 'tarde' },
    { name: 'Daniel Vega', category: 'Biología', ranking: 3.9, price: 30, availability: 'mañana' },
    { name: 'Marcela Ortiz', category: 'Historia', ranking: 4.2, price: 20, availability: 'tarde' },
    { name: 'Rosa Sánchez', category: 'Filosofía', ranking: 3.5, price: 15, availability: 'noche' },
    { name: 'Juan Herrera', category: 'Literatura', ranking: 4.6, price: 55, availability: 'mañana' },
    { name: 'Elena Ruiz', category: 'Inglés', ranking: 4.0, price: 25, availability: 'noche' },
    { name: 'Roberto Díaz', category: 'Programación', ranking: 4.7, price: 65, availability: 'tarde' },
    { name: 'Carmen Jiménez', category: 'Química', ranking: 3.6, price: 20, availability: 'mañana' },
    { name: 'Luis Mora', category: 'Física', ranking: 4.1, price: 45, availability: 'noche' },
    { name: 'Patricia Castro', category: 'Matemáticas', ranking: 3.4, price: 18, availability: 'mañana' },
    { name: 'Sofía Martínez', category: 'Biología', ranking: 4.8, price: 70, availability: 'noche' },
    { name: 'Miguel Rivera', category: 'Historia', ranking: 4.3, price: 40, availability: 'tarde' },
    { name: 'Andrea Gómez', category: 'Filosofía', ranking: 3.8, price: 22, availability: 'mañana' },
    { name: 'Fernando Torres', category: 'Matemáticas', ranking: 4.9, price: 80, availability: 'tarde' },
    { name: 'Alejandro Ramos', category: 'Química', ranking: 3.5, price: 17, availability: 'mañana' },
    { name: 'Marta Aguirre', category: 'Inglés', ranking: 4.7, price: 50, availability: 'tarde' },
    { name: 'Marcela Ortiz', category: 'Historia', ranking: 4.2, price: 20, availability: 'tarde' },
    { name: 'Rosa Sánchez', category: 'Filosofía', ranking: 3.5, price: 15, availability: 'noche' },
    { name: 'Juan Herrera', category: 'Literatura', ranking: 4.6, price: 55, availability: 'mañana' },
    { name: 'Elena Ruiz', category: 'Inglés', ranking: 4.0, price: 25, availability: 'noche' },
    { name: 'Roberto Díaz', category: 'Programación', ranking: 4.7, price: 65, availability: 'tarde' },
    { name: 'Carmen Jiménez', category: 'Química', ranking: 3.6, price: 20, availability: 'mañana' },
    { name: 'Luis Mora', category: 'Física', ranking: 4.1, price: 45, availability: 'noche' },
    { name: 'Patricia Castro', category: 'Matemáticas', ranking: 3.4, price: 18, availability: 'mañana' },
    { name: 'Sofía Martínez', category: 'Biología', ranking: 4.8, price: 70, availability: 'noche' },
    { name: 'Miguel Rivera', category: 'Historia', ranking: 4.3, price: 40, availability: 'tarde' },
    { name: 'Andrea Gómez', category: 'Filosofía', ranking: 3.8, price: 22, availability: 'mañana' },
    { name: 'Fernando Torres', category: 'Matemáticas', ranking: 4.9, price: 80, availability: 'tarde' },
    { name: 'Alejandro Ramos', category: 'Química', ranking: 3.5, price: 17, availability: 'mañana' },
    { name: 'Marta Aguirre', category: 'Inglés', ranking: 4.7, price: 50, availability: 'tarde' },
    { name: 'Diego León', category: 'Programación', ranking: 4.1, price: 60, availability: 'noche' },
    { name: 'Verónica Navarro', category: 'Matemáticas', ranking: 4.4, price: 32, availability: 'mañana' },
    { name: 'Sara Campos', category: 'Física', ranking: 4.6, price: 38, availability: 'noche' },
    { name: 'Pablo García', category: 'Literatura', ranking: 3.9, price: 28, availability: 'mañana' },
    { name: 'Claudia Espinoza', category: 'Biología', ranking: 4.2, price: 45, availability: 'tarde' },
    { name: 'Tomás Pérez', category: 'Historia', ranking: 3.7, price: 26, availability: 'noche' },
    { name: 'Isabel Herrera', category: 'Matemáticas', ranking: 4.5, price: 60, availability: 'tarde' },
    { name: 'Raúl Peña', category: 'Filosofía', ranking: 4.1, price: 34, availability: 'mañana' },
    { name: 'Monica Ríos', category: 'Inglés', ranking: 4.8, price: 75, availability: 'mañana' },
    { name: 'Nicolás González', category: 'Programación', ranking: 4.0, price: 40, availability: 'tarde' },
    { name: 'Yolanda Morales', category: 'Química', ranking: 3.6, price: 20, availability: 'noche' },
    { name: 'Pedro Paredes', category: 'Física', ranking: 4.3, price: 30, availability: 'mañana' },
    { name: 'Gloria López', category: 'Biología', ranking: 3.9, price: 27, availability: 'tarde' },
    { name: 'Ignacio Flores', category: 'Historia', ranking: 4.4, price: 52, availability: 'mañana' },
    { name: 'Javier Méndez', category: 'Matemáticas', ranking: 3.7, price: 22, availability: 'noche' },
    { name: 'Valeria Suárez', category: 'Literatura', ranking: 4.5, price: 45, availability: 'tarde' },
  ];

  filteredTutors = [...this.tutors];
  paginatedTutors: { name: string; category: string; ranking: number; price: number; availability: string }[] = [];

  constructor() {
    this.updatePaginatedTutors();
  }

  toggleAdvancedSearch() {
    this.showAdvancedSearch = !this.showAdvancedSearch;
  }

  searchTutors() {
    this.searchPerformed = true;
    this.filteredTutors = this.tutors.filter(tutor => {
      return (
        (this.searchName ? tutor.name.toLowerCase().includes(this.searchName.toLowerCase()) : true) &&
        (this.searchCategory ? tutor.category === this.searchCategory : true) &&
        (this.availability ? tutor.availability === this.availability : true) &&
        (this.priceMin !== null ? tutor.price >= this.priceMin : true) &&
        (this.priceMax !== null ? tutor.price <= this.priceMax : true)
      );
    });

    if (this.sortOrder === 'ranking') {
      this.filteredTutors.sort((a, b) => b.ranking - a.ranking);
    } else if (this.sortOrder === 'precio') {
      this.filteredTutors.sort((a, b) => a.price - b.price);
    }

    this.updatePaginatedTutors();
  }

  onPageChange(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePaginatedTutors();
  }

  updatePaginatedTutors() {
    const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedTutors = this.filteredTutors.slice(start, end);
  }
}
