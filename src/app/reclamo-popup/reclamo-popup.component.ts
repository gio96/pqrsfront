import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-reclamo-popup',
  templateUrl: './reclamo-popup.component.html',
  styleUrls: ['./reclamo-popup.component.css']
})
export class ReclamoPopupComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ReclamoPopupComponent>) { }

  descripcionReclamo: string = ''


  requestReclamo(){
    this.dialogRef.close()
    console.warn(this.descripcionReclamo)
  }

  ngOnInit(): void {
  }

}
