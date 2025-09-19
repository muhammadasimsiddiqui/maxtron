import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SimplebarAngularModule } from 'simplebar-angular';

@Component({
  selector: 'app-app-emailread',
  standalone: true,
  imports: [SimplebarAngularModule,NgbDropdownModule],
  templateUrl: './app-emailread.component.html',
  styleUrl: './app-emailread.component.scss'
})
export class AppEmailreadComponent {
 // Open Email Modal
 openEmail() {
  document.querySelector('.compose-mail-popup')?.classList.add('d-inline')
}

// Close Email Modal
closeEmail() {
  document.querySelector('.compose-mail-popup')?.classList.remove('d-inline')
}
}
