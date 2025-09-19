import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppInvoiceComponent } from './app-invoice.component';

describe('AppInvoiceComponent', () => {
  let component: AppInvoiceComponent;
  let fixture: ComponentFixture<AppInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppInvoiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
