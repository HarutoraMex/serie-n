import { TransferenciaDatosService } from './../../shared/services/transferencia-datos.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formularioSerie: FormGroup = new FormGroup({});

  constructor(
    private transferenciaDatosService: TransferenciaDatosService
  ) { }

  ngOnInit(): void {
    this.formularioSerie = new FormGroup(
      {
        numero: new FormControl(undefined)
      }
    );
  }


  enviarNumero(): void {
    this.transferenciaDatosService.setNumeroObserable(this.formularioSerie.controls['numero'].value);
  }

}
