import { Component, OnInit } from '@angular/core';
import { TransferenciaDatosService } from 'src/shared/services/transferencia-datos.service';

@Component({
  selector: 'app-operador',
  templateUrl: './operador.component.html',
  styleUrls: ['./operador.component.css']
})
export class OperadorComponent implements OnInit {

  constructor(
    private transferenciaDatosService:TransferenciaDatosService
  ) { }

  ngOnInit(): void {
    this.obtenerValorFormulario();
  }

  obtenerValorFormulario(): void {
    this.transferenciaDatosService.getNumeroObservable()
    .subscribe((numero)=>{
      if(numero !== '' && numero !== null){
        this.calcularNumeroDeLaSerie(numero);
      }else{
        this.transferenciaDatosService.setResultadoOperacion('');
      }
    })
  }

  async calcularNumeroDeLaSerie(numero: number){
    try {
      let numeroTriangular: number = await this.calcularNumeroTriangular(numero - 2);
      let numeroEnesimoFibonacci: number = await this.calcularNumeroEnesimoEnfibonacci(numero);
      let numeroPrimo: number = await this.calcularNumeroPrimo(numero + 2);
      let resultadoFinal: number = (2 * numeroPrimo * 3 * numeroTriangular) / (7 * numeroEnesimoFibonacci);
      this.transferenciaDatosService.setResultadoOperacion(isNaN(resultadoFinal) ? 'Resultado indefinido' : `El termino n de la serie es: ${Math.round(resultadoFinal)}`);
    } catch (e) {
    }
  };

  calcularNumeroTriangular(numero: number): number {
    if (numero >= 1) {
      let resultado: number = numero * (numero + 1) / 2;
      return resultado;
    } else {
      const mensajeError: string = "El numero ingresado no es apto para realizar la operacion, ingrese otro numero.";
      this.transferenciaDatosService.setResultadoOperacion(mensajeError);
      throw mensajeError;
    }
  };


  calcularNumeroEnesimoEnfibonacci(numero: number): number {
    if (numero === 0 || numero === 1) {
      return numero;
    }
    let resultado: number = (numero - 1) + (numero - 2)
    return resultado;
  };

  calcularNumeroPrimo(numero: number): number {
    let resultado: number = Math.pow(numero, 2) + numero + 41;
    return resultado;
  };

}
