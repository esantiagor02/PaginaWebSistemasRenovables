import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritodeCompraComponent } from './carritode-compra.component';

describe('CarritodeCompraComponent', () => {
  let component: CarritodeCompraComponent;
  let fixture: ComponentFixture<CarritodeCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritodeCompraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarritodeCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
