import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { NavbarTutorComponent } from '../../../shared/components/navbar-tutor/navbar-tutor.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-curso-individual',
  standalone: true,
  imports: [FooterComponent,NavbarTutorComponent, NgIf, RouterLink],
  templateUrl: './curso-individual.component.html',
  styleUrl: './curso-individual.component.css'
})
export class CursoIndividualComponent implements OnInit {
  courseName: string = '';
  showFirstUnit = false;
  showSecondUnit = false;
  showThirdUnit = false;
  curso: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.curso = this.route.snapshot.paramMap.get('curso');
  }
  toggleUnit(unit: string): void {
    if (unit === 'first') {
      this.showFirstUnit = !this.showFirstUnit;
    } else if (unit === 'second') {
      this.showSecondUnit = !this.showSecondUnit;
    } else if (unit === 'third') {
      this.showThirdUnit = !this.showThirdUnit;
    }
  }
}
