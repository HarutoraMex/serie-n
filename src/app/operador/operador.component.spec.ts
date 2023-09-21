import { TransferenciaDatosService } from './../../shared/services/transferencia-datos.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadorComponent } from './operador.component';

describe('OperadorComponent', () => {
  let component: OperadorComponent;
  let fixture: ComponentFixture<OperadorComponent>;
  let transferenciaDatosService:TransferenciaDatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OperadorComponent],
      providers: [TransferenciaDatosService]
    });
    fixture = TestBed.createComponent(OperadorComponent);
    transferenciaDatosService = TestBed.inject(TransferenciaDatosService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Se ha creado OperadorComponent', () => {
    expect(component).toBeTruthy();
  });


  it('Prueba con numero natural 0', (done) => {
    const numero = 0;
    const funcionAsincronaCalcularNumeroDeLaSerie = component.calcularNumeroDeLaSerie(numero);
    funcionAsincronaCalcularNumeroDeLaSerie.then(()=>{
      fixture.detectChanges();
      const resultadoOperacionObservable = transferenciaDatosService.getResultadoOperacion();
      resultadoOperacionObservable.subscribe((resultadoOperacion)=>{
        expect(resultadoOperacion).toEqual("El numero ingresado no es apto para realizar la operacion, ingrese otro numero.")
      });
    });
    done();
  });

  it('Prueba con numero natural 1', (done) => {
    const numero = 1;
    const funcionAsincronaCalcularNumeroDeLaSerie = component.calcularNumeroDeLaSerie(numero);
    funcionAsincronaCalcularNumeroDeLaSerie.then(()=>{
      fixture.detectChanges();
      const resultadoOperacionObservable = transferenciaDatosService.getResultadoOperacion();
      resultadoOperacionObservable.subscribe((resultadoOperacion)=>{
        expect(resultadoOperacion).toEqual("El numero ingresado no es apto para realizar la operacion, ingrese otro numero.")
      });
    });
    done();
  });


  it('Prueba con numero natural 2', (done) => {
    const numero = 2;
    const funcionAsincronaCalcularNumeroDeLaSerie = component.calcularNumeroDeLaSerie(numero);
    funcionAsincronaCalcularNumeroDeLaSerie.then(()=>{
      fixture.detectChanges();
      const resultadoOperacionObservable = transferenciaDatosService.getResultadoOperacion();
      resultadoOperacionObservable.subscribe((resultadoOperacion)=>{
        expect(resultadoOperacion).toEqual("El numero ingresado no es apto para realizar la operacion, ingrese otro numero.")
      });
    });
    done();
  });

  it('Prueba con numero natural 3', (done) => {
    const numero = 3;
    const funcionAsincronaCalcularNumeroDeLaSerie = component.calcularNumeroDeLaSerie(numero);
    funcionAsincronaCalcularNumeroDeLaSerie.then(()=>{
      fixture.detectChanges();
      const resultadoOperacionObservable = transferenciaDatosService.getResultadoOperacion();
      resultadoOperacionObservable.subscribe((resultadoOperacion)=>{
        expect(resultadoOperacion).toEqual("El termino n de la serie es: 20")
      });
    });
    done();
  });


  it('Prueba con numero natural 4', (done) => {
    const numero = 4;
    const funcionAsincronaCalcularNumeroDeLaSerie = component.calcularNumeroDeLaSerie(numero);
    funcionAsincronaCalcularNumeroDeLaSerie.then(()=>{
      fixture.detectChanges();
      const resultadoOperacionObservable = transferenciaDatosService.getResultadoOperacion();
      resultadoOperacionObservable.subscribe((resultadoOperacion)=>{
        expect(resultadoOperacion).toEqual("El termino n de la serie es: 43")
      });
    });
    done();
  });


  it('Prueba con numero natural 5', (done) => {
    const numero = 5;
    const funcionAsincronaCalcularNumeroDeLaSerie = component.calcularNumeroDeLaSerie(numero);
    funcionAsincronaCalcularNumeroDeLaSerie.then(()=>{
      fixture.detectChanges();
      const resultadoOperacionObservable = transferenciaDatosService.getResultadoOperacion();
      resultadoOperacionObservable.subscribe((resultadoOperacion)=>{
        expect(resultadoOperacion).toEqual("El termino n de la serie es: 71")
      });
    });
    done();
  });


  it('Prueba con numero natural 6', (done) => {
    const numero = 6;
    const funcionAsincronaCalcularNumeroDeLaSerie = component.calcularNumeroDeLaSerie(numero);
    funcionAsincronaCalcularNumeroDeLaSerie.then(()=>{
      fixture.detectChanges();
      const resultadoOperacionObservable = transferenciaDatosService.getResultadoOperacion();
      resultadoOperacionObservable.subscribe((resultadoOperacion)=>{
        expect(resultadoOperacion).toEqual("El termino n de la serie es: 108")
      });
    });
    done();
  });

  it('Prueba con numero natural 7', (done) => {
    const numero = 7;
    const funcionAsincronaCalcularNumeroDeLaSerie = component.calcularNumeroDeLaSerie(numero);
    funcionAsincronaCalcularNumeroDeLaSerie.then(()=>{
      fixture.detectChanges();
      const resultadoOperacionObservable = transferenciaDatosService.getResultadoOperacion();
      resultadoOperacionObservable.subscribe((resultadoOperacion)=>{
        expect(resultadoOperacion).toEqual("El termino n de la serie es: 153")
      });
    });
    done();
  });

  it('Prueba con numero natural 8', (done) => {
    const numero = 8;
    const funcionAsincronaCalcularNumeroDeLaSerie = component.calcularNumeroDeLaSerie(numero);
    funcionAsincronaCalcularNumeroDeLaSerie.then(()=>{
      fixture.detectChanges();
      const resultadoOperacionObservable = transferenciaDatosService.getResultadoOperacion();
      resultadoOperacionObservable.subscribe((resultadoOperacion)=>{
        expect(resultadoOperacion).toEqual("El termino n de la serie es: 209")
      });
    });
    done();
  });


  it('Prueba con numero natural 9', (done) => {
    const numero = 9;
    const funcionAsincronaCalcularNumeroDeLaSerie = component.calcularNumeroDeLaSerie(numero);
    funcionAsincronaCalcularNumeroDeLaSerie.then(()=>{
      fixture.detectChanges();
      const resultadoOperacionObservable = transferenciaDatosService.getResultadoOperacion();
      resultadoOperacionObservable.subscribe((resultadoOperacion)=>{
        expect(resultadoOperacion).toEqual("El termino n de la serie es: 277")
      });
    });
    done();
  });



});
