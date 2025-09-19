import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CustomersModel } from './model';
import { Customersdata } from './data';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ecommerce-customers',
  standalone: true,
  imports: [CommonModule,NgbDropdownModule],
  templateUrl: './ecommerce-customers.component.html',
  styleUrl: './ecommerce-customers.component.scss'
})
export class EcommerceCustomersComponent {
  Customersdata!: CustomersModel[];

  constructor() {
    this.Customersdata = Customersdata;
  }
}
