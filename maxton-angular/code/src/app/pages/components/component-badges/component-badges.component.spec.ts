import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentBadgesComponent } from './component-badges.component';

describe('ComponentBadgesComponent', () => {
  let component: ComponentBadgesComponent;
  let fixture: ComponentFixture<ComponentBadgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentBadgesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentBadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
