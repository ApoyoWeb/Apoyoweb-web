import { Routes } from '@angular/router';
import { TutorLayoutComponent } from './tutor-layout/tutor-layout.component';
import { AsignarTareaComponent } from './asignar-tarea/asignar-tarea.component';
import { EvaluarDesempenoComponent } from './evaluar-desempeno/evaluar-desempeno.component';
import { ModificarPerfilComponent } from './modificar-perfil/modificar-perfil.component';
import { SubirFeedbackComponent } from './subir-feedback/subir-feedback.component';
import { SubirMaterialComponent } from './subir-material/subir-material.component';

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



    ]



  }
];
