import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiosAndCheckboxesComponent } from './radios-and-checkboxes.component';

describe('RadiosAndCheckboxesComponent', () => {
  let component: RadiosAndCheckboxesComponent;
  let fixture: ComponentFixture<RadiosAndCheckboxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadiosAndCheckboxesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RadiosAndCheckboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
