import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SimplebarAngularModule } from 'simplebar-angular';
import { ChatboxModel } from './model';
import { chatboxdata } from './data';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-app-chat-box',
  standalone: true,
  imports: [
    SimplebarAngularModule,
    CommonModule,
    NgbDropdownModule
  ],
  templateUrl: './app-chat-box.component.html',
  styleUrl: './app-chat-box.component.scss'
})

export class AppChatBoxComponent {
  // chatox model..
  chatboxdata!: ChatboxModel[];

  constructor() {
    this.chatboxdata = chatboxdata;
  }
}
