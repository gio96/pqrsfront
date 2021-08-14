import { ReclamoService } from './../shared/servicios/reclamo.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SolicitudGetModel } from '../shared/models/solicitudModel';
import { SolicitudService } from '../shared/servicios/solicitud.service';

@Component({
  selector: 'app-reclamo',
  templateUrl: './reclamo.component.html',
  styleUrls: ['./reclamo.component.css']
})
export class ReclamoComponent implements OnInit {

  displayedColumns: string[] = ['radicado', 'fecha', 'descripcion'];
  dataSource: any = []
  valorBusqueda: string = ''

  constructor(private router: Router, private reclamoService:ReclamoService) { }

  selectedRow(row: SolicitudGetModel) {
    localStorage.setItem("solicitudDetails", JSON.stringify(row))
    this.router.navigate(['/detalles', row.id])
  }

  buscar() {
    if (this.valorBusqueda.trim() !== '') {
      this.getReclamoId(this.valorBusqueda)
    } else {
      this.getAllReclamo();
    }
  }

  ngOnInit(): void {
    this.getAllReclamo();
  }

  getAllReclamo() {
    return this.reclamoService.getAllReclamo().subscribe((data: {}) => {
      this.dataSource = data
    })
  }

  getReclamoId(idReclamo: string) {
    return this.reclamoService.getReclamoById(idReclamo).subscribe((data: {}) => {
      this.dataSource = [data]
    })
  }

}
