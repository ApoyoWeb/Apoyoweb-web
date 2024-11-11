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
    // Agrega más tutores aquí según sea necesario
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
