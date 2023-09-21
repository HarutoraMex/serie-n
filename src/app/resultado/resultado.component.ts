import { TransferenciaDatosService } from './../../shared/services/transferencia-datos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  resultadoOperacion: string = '';


  constructor(
    private transferenciaDatosService:TransferenciaDatosService
  ){

  }

  ngOnInit(): void {
    this.obtenerResultado();
  }

  obtenerResultado():void{
      this.transferenciaDatosService.getResultadoOperacion().subscribe((resultadoOperacion:string)=> this.resultadoOperacion = resultadoOperacion);
  }

}
