import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  private ingresar:boolean = false;

  private login: boolean = false;

  constructor() { }

  public  ingresarAplicativo(obj:any):boolean{
    this.ingresar = obj.usuario == 'ferney' && obj.password=='ferney129';
      return this.ingresar;
  }

  public habilitarlogeo(){
    return this.ingresar;
  }


}
