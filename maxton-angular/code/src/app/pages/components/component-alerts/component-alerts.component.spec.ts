import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentAlertsComponent } from './component-alerts.component';

describe('ComponentAlertsComponent', () => {
  let component: ComponentAlertsComponent;
  let fixture: ComponentFixture<ComponentAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentAlertsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
