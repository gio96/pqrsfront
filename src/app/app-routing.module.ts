import { SolicitudComponent } from './solicitud/solicitud.component';
import { CrearSolicitudComponent } from './crear-solicitud/crear-solicitud.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesSolicitudComponent } from './detalles-solicitud/detalles-solicitud.component';

const routes: Routes = [
  {
    path: 'crear-solicitud', component: CrearSolicitudComponent
    //path: 'crear-solicitud', component: DetallesSolicitudComponent
  },
  {
    path: 'solicitud', component: SolicitudComponent
  },
  {
    path: 'detalles/:id', component: DetallesSolicitudComponent
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
