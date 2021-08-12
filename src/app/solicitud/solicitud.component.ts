import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SolicitudGetModel } from '../models/solicitudModel';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  displayedColumns: string[] = ['radicado', 'fecha', 'descripcion', 'estado'];
  dataSource = ELEMENT_DATA;
  valorBusqueda: String = ''


  constructor(private router: Router, private route: ActivatedRoute) { }

  selectedRow(row: SolicitudGetModel) {
    this.router.navigate(['/detalles',row.id])
  }

  buscar(){

    if(this.valorBusqueda.trim() !== ''){
      this.dataSource = [
        { id: '0dfgdfsd754sd1', fechaSolicitud: '04/08/2021', descripcionSolicitud: 'descripcion', respuestaAdministrativa: 'H' }
      ]
    }else{
      this.dataSource = [
        { id: '0dfgdfsd754sd1', fechaSolicitud: '04/08/2021', descripcionSolicitud: 'descripcion', respuestaAdministrativa: 'H' },
        { id: '0dfgdfsd754sd2', fechaSolicitud: '30/01/2020', descripcionSolicitud: 'descripcion', respuestaAdministrativa: '' },
        { id: '0dfgdfsd754sd3', fechaSolicitud: '04/08/2019', descripcionSolicitud: 'descripcion', respuestaAdministrativa: 'Li' },
        { id: '0dfgdfsd754sd4', fechaSolicitud: '25/02/2021', descripcionSolicitud: 'descripcion', respuestaAdministrativa: 'Be' },
        { id: '0dfgdfsd754sd5', fechaSolicitud: '04/08/2021', descripcionSolicitud: 'descripcion', respuestaAdministrativa: 'B' },
      ];
    }
  }

  ngOnInit(): void {
  }

}



const ELEMENT_DATA: SolicitudGetModel[] = [
  { id: '0dfgdfsd754sd1', fechaSolicitud: '04/08/2021', descripcionSolicitud: 'descripcion', respuestaAdministrativa: 'H' },
  { id: '0dfgdfsd754sd2', fechaSolicitud: '30/01/2020', descripcionSolicitud: 'descripcion', respuestaAdministrativa: '' },
  { id: '0dfgdfsd754sd3', fechaSolicitud: '04/08/2019', descripcionSolicitud: 'descripcion', respuestaAdministrativa: 'Li' },
  { id: '0dfgdfsd754sd4', fechaSolicitud: '25/02/2021', descripcionSolicitud: 'descripcion', respuestaAdministrativa: 'Be' },
  { id: '0dfgdfsd754sd5', fechaSolicitud: '04/08/2021', descripcionSolicitud: 'descripcion', respuestaAdministrativa: 'B' },
];
