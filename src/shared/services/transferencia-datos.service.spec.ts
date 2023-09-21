import { TestBed } from '@angular/core/testing';

import { TransferenciaDatosService } from './transferencia-datos.service';

describe('TransferenciaDatosService', () => {
  let service: TransferenciaDatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransferenciaDatosService);
  });

  it('Se ha creado TransferenciaDatosService', () => {
    expect(service).toBeTruthy();
  });

});
