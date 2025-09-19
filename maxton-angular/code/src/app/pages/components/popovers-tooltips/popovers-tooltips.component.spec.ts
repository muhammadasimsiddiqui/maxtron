import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoversTooltipsComponent } from './popovers-tooltips.component';

describe('PopoversTooltipsComponent', () => {
  let component: PopoversTooltipsComponent;
  let fixture: ComponentFixture<PopoversTooltipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopoversTooltipsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopoversTooltipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
