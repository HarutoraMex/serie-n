import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoComponent } from './resultado.component';

describe('ResultadoComponent', () => {
  let component: ResultadoComponent;
  let fixture: ComponentFixture<ResultadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultadoComponent]
    });
    fixture = TestBed.createComponent(ResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Se ha creado ResultadoComponent', () => {
    expect(component).toBeTruthy();
  });
});
