import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {retry, catchError} from 'rxjs/operators'
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SolicitudGetModel } from '../models/solicitudModel';
import { ReclamoCreateModel } from '../models/reclamoModel';

@Injectable({
  providedIn: 'root'
})
export class ReclamoService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  createReclamo(idSolicitud: string,reclamo: ReclamoCreateModel){
    return this.http.post<void>(`${environment.baseUrl}/solicitud/${idSolicitud}/reclamo`,JSON.stringify(reclamo),this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getAllReclamo(): Observable<SolicitudGetModel[]> {
    return this.http.get<SolicitudGetModel[]>(environment.baseUrl+ '/solicitud/reclamo',this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getReclamoById(idSolicitud: string,idReclamo: string): Observable<SolicitudGetModel>{
    return this.http.get<SolicitudGetModel>(`${environment.baseUrl}/solicitud/${idSolicitud}/reclamo/${idReclamo}`,this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  handleError(error: any){
    debugger;
    let errorMessage = '';
    //if(error.error instanceof ErrorEvent){
    if(error instanceof ErrorEvent){
      // client-side error
      errorMessage = error.message;
    }else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
