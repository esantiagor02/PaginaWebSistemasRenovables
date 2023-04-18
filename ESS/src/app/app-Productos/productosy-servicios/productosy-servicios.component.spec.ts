import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosyServiciosComponent } from './productosy-servicios.component';

describe('ProductosyServiciosComponent', () => {
  let component: ProductosyServiciosComponent;
  let fixture: ComponentFixture<ProductosyServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosyServiciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosyServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
