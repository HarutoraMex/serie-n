import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaDatosService {

  private numeroObservable:BehaviorSubject<any> = new BehaviorSubject<any>('');
  private resultadoOperacion:BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() { }


  getNumeroObservable():Observable<any>{
    return this.numeroObservable;
  }

  setNumeroObserable(numero:any):void{
    this.numeroObservable.next(numero);
  }

  getResultadoOperacion():Observable<any>{
    return this.resultadoOperacion;
  }

  setResultadoOperacion(resultadoOperacion:string):void{
    this.resultadoOperacion.next(resultadoOperacion);
  }



}
