import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateTimePickesComponent } from './date-time-pickes.component';

describe('DateTimePickesComponent', () => {
  let component: DateTimePickesComponent;
  let fixture: ComponentFixture<DateTimePickesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateTimePickesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DateTimePickesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
