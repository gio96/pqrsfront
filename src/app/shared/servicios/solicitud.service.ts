import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {retry, catchError} from 'rxjs/operators'
import { environment } from 'src/environments/environment';
import { SolicitudCreateModel, SolicitudGetModel } from '../models/solicitudModel';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getAllSolicitud(): Observable<SolicitudGetModel[]> {
    return this.http.get<SolicitudGetModel[]>(environment.baseUrl+ '/solicitud',this.httpOptions)
  }

  getSolicitudById(id: string): Observable<SolicitudGetModel>{
    return this.http.get<SolicitudGetModel>(environment.baseUrl+ '/solicitud/'+ id,this.httpOptions)
  }

  createSolicitud(solicitud: SolicitudCreateModel){
    return this.http.post<void>(environment.baseUrl+ '/solicitud',JSON.stringify(solicitud),this.httpOptions)
  }
}
