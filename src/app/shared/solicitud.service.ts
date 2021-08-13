import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { SolicitudGetModel } from '../models/solicitudModel';
import {retry, catchError} from 'rxjs/operators'

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
    .pipe(
      retry(1),
      //catchError(this.handleError)
      catchError(error => {
        console.log('Ocurrio un error' + error)
        //throw new Error('Result has failed')
        return throwError(error);
      })
    )
  }

  getSolicitudById(id: string): Observable<SolicitudGetModel>{
    return this.http.get<SolicitudGetModel>(environment.baseUrl+ '/solicitud/'+ id,this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  handleError(error: any){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
      // client-side error
      errorMessage = error.error.message;
    }else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}