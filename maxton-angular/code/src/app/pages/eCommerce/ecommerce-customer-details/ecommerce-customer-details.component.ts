import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SimplebarAngularModule } from 'simplebar-angular';
import { CustomerModel } from './model';
import { Customerdata } from './data';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ecommerce-customer-details',
  standalone: true,
  imports: [SimplebarAngularModule,CommonModule,NgbDropdownModule],
  templateUrl: './ecommerce-customer-details.component.html',
  styleUrl: './ecommerce-customer-details.component.scss'
})
export class EcommerceCustomerDetailsComponent {
  Customerdata!: CustomerModel[];

  constructor() {
    this.Customerdata = Customerdata;
  }
}
