import { SolicitudModel } from './solicitudModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-solicitud',
  templateUrl: './crear-solicitud.component.html',
  styleUrls: ['./crear-solicitud.component.css']
})
export class CrearSolicitudComponent {


  typeRequest = ['PETICION','QUEJA'];

  myHero =  new SolicitudModel('SkyDog',
                       'PETICION');

  model = new SolicitudModel("La peticion es porque", this.typeRequest[0]);

  submitted = false;


  newSolicitud(){
    this.model = new SolicitudModel("La peticion es porque", this.typeRequest[1]);
  }


  onSubmit(){
    this.submitted = true;
  }


}
