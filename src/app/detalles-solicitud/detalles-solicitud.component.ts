import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CrearSolicitudComponent } from '../crear-solicitud/crear-solicitud.component';
import { SolicitudGetModel } from '../models/solicitudModel';
import { ReclamoPopupComponent } from '../reclamo-popup/reclamo-popup.component';

@Component({
  selector: 'app-detalles-solicitud',
  templateUrl: './detalles-solicitud.component.html',
  styleUrls: ['./detalles-solicitud.component.css']
})
export class DetallesSolicitudComponent implements OnInit {

  solicitudModel: any = {}
  textoDefecto = 'Sin respuesta'


  constructor(private route: ActivatedRoute, private dialog: MatDialog,private location: Location) { }

  ngOnInit(): void {
    let solicitud = this.location.getState() as SolicitudGetModel
    this.getDetailsSolicitud(solicitud);
  }

  getDetailsSolicitud(solicitud: SolicitudGetModel): void {
    this.solicitudModel = solicitud
  }

  crearReclamo(): void {
    this.dialog.open(ReclamoPopupComponent)
  }

}
