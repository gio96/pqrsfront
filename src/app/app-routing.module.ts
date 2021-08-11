import { SolicitudComponent } from './solicitud/solicitud.component';
import { CrearSolicitudComponent } from './crear-solicitud/crear-solicitud.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesSolicitudComponent } from './detalles-solicitud/detalles-solicitud.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'crear-solicitud', component: CrearSolicitudComponent
  },
  {
    path: 'solicitud', component: SolicitudComponent
  },
  {
    path: 'detalles/:id', component: DetallesSolicitudComponent
  },
  {
    path: '', redirectTo:'/crear-solicitud', pathMatch: 'full'
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
