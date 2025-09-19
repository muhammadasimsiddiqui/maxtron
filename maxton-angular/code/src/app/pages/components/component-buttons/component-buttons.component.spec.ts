import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentButtonsComponent } from './component-buttons.component';

describe('ComponentButtonsComponent', () => {
  let component: ComponentButtonsComponent;
  let fixture: ComponentFixture<ComponentButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentButtonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
