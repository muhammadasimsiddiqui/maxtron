import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFullcalenderComponent } from './app-fullcalender.component';

describe('AppFullcalenderComponent', () => {
  let component: AppFullcalenderComponent;
  let fixture: ComponentFixture<AppFullcalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppFullcalenderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppFullcalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
