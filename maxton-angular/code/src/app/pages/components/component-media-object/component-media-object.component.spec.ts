import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentMediaObjectComponent } from './component-media-object.component';

describe('ComponentMediaObjectComponent', () => {
  let component: ComponentMediaObjectComponent;
  let fixture: ComponentFixture<ComponentMediaObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentMediaObjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentMediaObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
