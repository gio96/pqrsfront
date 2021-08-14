import { SolicitudGetModel } from './../models/solicitudModel';
import { ReclamoCreateModel } from './../models/reclamoModel';
import { ReclamoService } from './../shared/reclamo.service';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-reclamo-popup',
  templateUrl: './reclamo-popup.component.html',
  styleUrls: ['./reclamo-popup.component.css']
})
export class ReclamoPopupComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ReclamoPopupComponent>, private reclamoService: ReclamoService, @Optional() @Inject(MAT_DIALOG_DATA) public data: any) { }

  descripcionReclamo: string = ''

  crearReclamo() {
    let reclamo: ReclamoCreateModel = { descripcionSolicitud: this.descripcionReclamo }
    //TODO recargar pagina para ver el cambio o devolver el valor al componente y llamar el servicio desde alla
    //TODO capturar el error que se genera en el back
    this.reclamoService.createReclamo(this.data.Idsolicitud, reclamo).subscribe(() => {
      window.alert("El reclamo ha sido creado")
      this.dialogRef.close()
    })
  }

  ngOnInit(): void {
  }

}
