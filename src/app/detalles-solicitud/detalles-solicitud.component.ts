import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-solicitud',
  templateUrl: './detalles-solicitud.component.html',
  styleUrls: ['./detalles-solicitud.component.css']
})
export class DetallesSolicitudComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getDetailsSolicitud();
  }

  getDetailsSolicitud(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    console.warn("Estoy en detallles con el id" + id)
  }

}
