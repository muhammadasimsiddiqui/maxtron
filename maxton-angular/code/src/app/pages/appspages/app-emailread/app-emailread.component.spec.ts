import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppEmailreadComponent } from './app-emailread.component';

describe('AppEmailreadComponent', () => {
  let component: AppEmailreadComponent;
  let fixture: ComponentFixture<AppEmailreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppEmailreadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppEmailreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
