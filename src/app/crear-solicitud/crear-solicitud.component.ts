
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SolicitudModel } from '../models/solicitudModel';

@Component({
  selector: 'app-crear-solicitud',
  templateUrl: './crear-solicitud.component.html',
  styleUrls: ['./crear-solicitud.component.css']
})
export class CrearSolicitudComponent {


  typeRequest = ['PETICION','QUEJA'];

  myHero =  new SolicitudModel('SkyDog',
                       'PETICION');  


  onSubmit(){
    console.warn(this.form.value)
  }


  form: FormGroup;
  typeRequestControl = new FormControl('',Validators.required);
  requestDescriptionControl = new FormControl('',Validators.required)

  constructor(){
    this.form = new FormGroup({
      typeR: this.typeRequestControl,
      requestDescription: this.requestDescriptionControl
    })
  }

}
