import { Routes } from '@angular/router';
import { TutorLayoutComponent } from './tutor-layout/tutor-layout.component';
import { AsignarTareaComponent } from './asignar-tarea/asignar-tarea.component';
import { EvaluarDesempenoComponent } from './evaluar-desempeno/evaluar-desempeno.component';
import { ModificarPerfilComponent } from './modificar-perfil/modificar-perfil.component';
import { SubirFeedbackComponent } from './subir-feedback/subir-feedback.component';
import { SubirMaterialComponent } from './subir-material/subir-material.component';
import { GestionGrabacionesComponent } from './gestion-grabaciones/gestion-grabaciones.component';
import { GestionTutoriaComponent } from './gestion-tutoria/gestion-tutoria.component';
import { HomepageTutorComponent } from './homepage-tutor/homepage-tutor.component';
import { CursosGeneralComponent } from './cursos-general/cursos-general.component';
import { CursoIndividualComponent } from './curso-individual/curso-individual.component';
import { CrearTutoriaComponent } from './crear-tutoria/crear-tutoria.component';
import { CrearTutoriaPersonalComponent } from './crear-tutoria-personal/crear-tutoria-personal.component';
import { AsignarExamenComponent } from './asignar-examen/asignar-examen.component';





export const tutorRoutes: Routes = [
  {path:'',
    component: TutorLayoutComponent,
    children: [
      {
        path: 'asignar-tarea', component: AsignarTareaComponent,
      },


      {
        path:'evaluar-desempeno', component: EvaluarDesempenoComponent,
      },

      {
        path:'modificar-perfil', component: ModificarPerfilComponent,
      },

      {
        path:'subir-feedback', component: SubirFeedbackComponent,
      },

      {
        path: 'subir-material', component: SubirMaterialComponent,
      },

      { path: 'gestion-grabaciones', component: GestionGrabacionesComponent },

      { path: 'gestion-tutoria', component: GestionTutoriaComponent },
      {path: 'homepage-tutor', component: HomepageTutorComponent},
      {path: 'cursos-general', component: CursosGeneralComponent},
      {path: 'curso-individual/:curso', component: CursoIndividualComponent},
      {path: 'crear-tutoria', component: CrearTutoriaComponent},
      {path: 'crear-tutoria-personal', component: CrearTutoriaPersonalComponent},
      {path: 'asignar-examen',component: AsignarExamenComponent},
      {
        path: 'tutor/asignar-tarea/:courseName',
        component: AsignarTareaComponent,
      },
      {
        path: 'tutor/curso-individual/:courseName',
        component: CursoIndividualComponent,
      },
      {},

    ]



  }
];
