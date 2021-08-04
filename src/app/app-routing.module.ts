import { SolicitudComponent } from './solicitud/solicitud.component';
import { CrearSolicitudComponent } from './crear-solicitud/crear-solicitud.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'crear-solicitud', component: CrearSolicitudComponent
  },
  {
    path: 'solicitud', component: SolicitudComponent
  },
  {
    path: '', redirectTo:'/crear-solicitud', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
