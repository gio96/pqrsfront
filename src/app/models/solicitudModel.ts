export class SolicitudCreateModel{
  constructor(
    public descripcionSolicitud: string,
    public tipoSolicitud: string
  ){}
}

export interface SolicitudGetModel {
  id: string;
  fechaSolicitud: string;
  respuestaAdministrativa: string;
  descripcionSolicitud: string;
}
