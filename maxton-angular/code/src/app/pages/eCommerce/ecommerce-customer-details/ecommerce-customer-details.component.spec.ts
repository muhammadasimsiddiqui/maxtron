import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceCustomerDetailsComponent } from './ecommerce-customer-details.component';

describe('EcommerceCustomerDetailsComponent', () => {
  let component: EcommerceCustomerDetailsComponent;
  let fixture: ComponentFixture<EcommerceCustomerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcommerceCustomerDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EcommerceCustomerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
