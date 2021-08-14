import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReclamoPopupComponent } from '../reclamo-popup/reclamo-popup.component';

@Component({
  selector: 'app-detalles-solicitud',
  templateUrl: './detalles-solicitud.component.html',
  styleUrls: ['./detalles-solicitud.component.css']
})
export class DetallesSolicitudComponent implements OnInit {

  solicitudModel: any = {}
  textoDefecto = 'Sin respuesta'

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.solicitudModel = JSON.parse(localStorage.getItem('solicitudDetails') || '{}');
  }

  crearReclamo(): void {
    this.dialog.open(ReclamoPopupComponent,{
      data: { Idsolicitud: this.solicitudModel.id}
    })
  }

}
