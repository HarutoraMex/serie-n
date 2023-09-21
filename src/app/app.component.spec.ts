import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CardModule } from 'primeng/card';
import { OperadorComponent } from './operador/operador.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule, CardModule,
      FormsModule,
      ReactiveFormsModule,
      InputNumberModule],
    declarations: [AppComponent, FormularioComponent,
      ResultadoComponent,
      OperadorComponent]
  }));

  it('Se ha creado AppComponent', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
