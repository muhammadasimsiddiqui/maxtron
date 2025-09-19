
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SimplebarAngularModule } from 'simplebar-angular';
import { emailboxModel } from './model';
import { emailboxdata } from './data';
import { RouterLink } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-app-emailbox',
  standalone: true,
  imports: [ SimplebarAngularModule,RouterLink,CommonModule,NgbDropdownModule],
  templateUrl: './app-emailbox.component.html',
  styleUrl: './app-emailbox.component.scss'
})
export class AppEmailboxComponent {
  // emailbox model.
  emailboxdata!: emailboxModel[];


  // Open Email Modal
  openEmail() {
    document.querySelector('.compose-mail-popup')?.classList.add('d-inline')
  }

  // Close Email Modal
  closeEmail() {
    document.querySelector('.compose-mail-popup')?.classList.remove('d-inline')
  }

  constructor() {
    this.emailboxdata = emailboxdata;
  }
}
