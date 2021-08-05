import { Component, OnInit } from '@angular/core';
import { SolicitudGetModel } from '../models/solicitudModel';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  selectedRow(row: SolicitudGetModel) {
    console.log('selectedRow', row)
  }

  constructor() { }

  ngOnInit(): void {
  }

}



const ELEMENT_DATA: SolicitudGetModel[] = [
  { id: '0dfgdfsd754sdf', fechaSolicitud: '04/08/2021', descripcionSolicitud: 'descripcion', respuestaAdministrativa: 'H' },
  { id: '0dfgdfsd754sdf', fechaSolicitud: '30/01/2020', descripcionSolicitud: 'descripcion', respuestaAdministrativa: '' },
  { id: '0dfgdfsd754sdf', fechaSolicitud: '04/08/2019', descripcionSolicitud: 'descripcion', respuestaAdministrativa: 'Li' },
  { id: '0dfgdfsd754sdf', fechaSolicitud: '25/02/2021', descripcionSolicitud: 'descripcion', respuestaAdministrativa: 'Be' },
  { id: '0dfgdfsd754sdf', fechaSolicitud: '04/08/2021', descripcionSolicitud: 'descripcion', respuestaAdministrativa: 'B' },
];
