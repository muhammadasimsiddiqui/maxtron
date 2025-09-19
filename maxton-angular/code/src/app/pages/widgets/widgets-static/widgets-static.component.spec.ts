import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsStaticComponent } from './widgets-static.component';

describe('WidgetsStaticComponent', () => {
  let component: WidgetsStaticComponent;
  let fixture: ComponentFixture<WidgetsStaticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetsStaticComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WidgetsStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
