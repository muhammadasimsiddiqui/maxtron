import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentModalsComponent } from './component-modals.component';

describe('ComponentModalsComponent', () => {
  let component: ComponentModalsComponent;
  let fixture: ComponentFixture<ComponentModalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentModalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentModalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
