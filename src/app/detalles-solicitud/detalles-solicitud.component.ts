import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CrearSolicitudComponent } from '../crear-solicitud/crear-solicitud.component';
import { ReclamoPopupComponent } from '../reclamo-popup/reclamo-popup.component';

@Component({
  selector: 'app-detalles-solicitud',
  templateUrl: './detalles-solicitud.component.html',
  styleUrls: ['./detalles-solicitud.component.css']
})
export class DetallesSolicitudComponent implements OnInit {

  constructor(private route: ActivatedRoute, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getDetailsSolicitud();
  }

  getDetailsSolicitud(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    console.warn("Estoy en detallles con el id" + id)
  }

  crearReclamo(): void {
    this.dialog.open(ReclamoPopupComponent)
  }

}
