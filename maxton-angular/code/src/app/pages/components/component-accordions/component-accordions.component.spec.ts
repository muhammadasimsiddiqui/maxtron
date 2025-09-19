import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentAccordionsComponent } from './component-accordions.component';

describe('ComponentAccordionsComponent', () => {
  let component: ComponentAccordionsComponent;
  let fixture: ComponentFixture<ComponentAccordionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentAccordionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentAccordionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
