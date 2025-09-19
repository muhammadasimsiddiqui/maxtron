import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvtarsChipsComponent } from './avtars-chips.component';

describe('AvtarsChipsComponent', () => {
  let component: AvtarsChipsComponent;
  let fixture: ComponentFixture<AvtarsChipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvtarsChipsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvtarsChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
