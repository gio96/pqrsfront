
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SolicitudGetModel } from '../shared/models/solicitudModel';
import { SolicitudService } from '../shared/servicios/solicitud.service';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  displayedColumns: string[] = ['radicado', 'tipo','fecha', 'descripcion', 'estado'];
  dataSource: any = []
  valorBusqueda: string = ''


  constructor(private router: Router, private solicitudService: SolicitudService) { }

  selectedRow(row: SolicitudGetModel) {
    this.router.navigate(['/detalles',row.id],{state: row})
  }

  buscar(){
    if(this.valorBusqueda.trim() !== ''){
      this.getSolicitudId(this.valorBusqueda)
    }else {
      this.getAllSolicitudes();
    }
  }

  ngOnInit(): void {
    this.getAllSolicitudes();
  }

  getAllSolicitudes() {
    return this.solicitudService.getAllSolicitud().subscribe((data: {}) => {
      this.dataSource = data
    })
  }

  getSolicitudId(id: string) {
    return this.solicitudService.getSolicitudById(id).subscribe((data: {}) => {
      this.dataSource = [data]
    })
  }

}
