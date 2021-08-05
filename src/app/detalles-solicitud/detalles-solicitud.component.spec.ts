import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesSolicitudComponent } from './detalles-solicitud.component';

describe('DetallesSolicitudComponent', () => {
  let component: DetallesSolicitudComponent;
  let fixture: ComponentFixture<DetallesSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesSolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
