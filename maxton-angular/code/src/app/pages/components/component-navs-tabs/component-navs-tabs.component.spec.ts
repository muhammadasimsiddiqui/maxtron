import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentNavsTabsComponent } from './component-navs-tabs.component';

describe('ComponentNavsTabsComponent', () => {
  let component: ComponentNavsTabsComponent;
  let fixture: ComponentFixture<ComponentNavsTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentNavsTabsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentNavsTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
