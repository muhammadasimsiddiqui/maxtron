import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppEmailboxComponent } from './app-emailbox.component';

describe('AppEmailboxComponent', () => {
  let component: AppEmailboxComponent;
  let fixture: ComponentFixture<AppEmailboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppEmailboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppEmailboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
