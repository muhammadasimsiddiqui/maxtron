import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CustomerModel } from './model';
import { Customerdata } from './data';

@Component({
  selector: 'app-ecommerce-order-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ecommerce-order-details.component.html',
  styleUrl: './ecommerce-order-details.component.scss'
})
export class EcommerceOrderDetailsComponent {
  Customerdata!: CustomerModel[];

  constructor() {
    this.Customerdata = Customerdata;
  }
}
