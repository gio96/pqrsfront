import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamoPopupComponent } from './reclamo-popup.component';

describe('ReclamoPopupComponent', () => {
  let component: ReclamoPopupComponent;
  let fixture: ComponentFixture<ReclamoPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclamoPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamoPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
