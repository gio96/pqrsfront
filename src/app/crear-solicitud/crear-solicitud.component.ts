
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SolicitudCreateModel } from '../models/solicitudModel';
import { SolicitudService } from '../shared/solicitud.service';

@Component({
  selector: 'app-crear-solicitud',
  templateUrl: './crear-solicitud.component.html',
  styleUrls: ['./crear-solicitud.component.css']
})
export class CrearSolicitudComponent {


  typeRequest = ['PETICION','QUEJA'];

  myHero =  new SolicitudCreateModel('SkyDog',
                       'PETICION');


  form: FormGroup;
  typeRequestControl = new FormControl('',Validators.required);
  requestDescriptionControl = new FormControl('',Validators.required)

  constructor(private solicitudService: SolicitudService){
    this.form = new FormGroup({
      typeR: this.typeRequestControl,
      requestDescription: this.requestDescriptionControl
    })
  }

  onSubmit(){
    this.solicitudService.createSolicitud(new SolicitudCreateModel(this.form.value.requestDescription,this.form.value.typeR)).subscribe(() => {
      window.alert("La solicitud ha sido creada")
      this.typeRequestControl.setValue('')
      this.requestDescriptionControl.setValue('')
    })
  }

}
