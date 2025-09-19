import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceAddProductsComponent } from './ecommerce-add-products.component';

describe('EcommerceAddProductsComponent', () => {
  let component: EcommerceAddProductsComponent;
  let fixture: ComponentFixture<EcommerceAddProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcommerceAddProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EcommerceAddProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
