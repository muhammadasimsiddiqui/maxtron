import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppChatBoxComponent } from './app-chat-box.component';

describe('AppChatBoxComponent', () => {
  let component: AppChatBoxComponent;
  let fixture: ComponentFixture<AppChatBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppChatBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppChatBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
