import { Component } from '@angular/core';
import { ProductsModel } from './model';
import { Productsdata } from './data';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ecommerce-products',
  standalone: true,
  imports: [CommonModule,NgbDropdownModule,RouterLink],
  templateUrl: './ecommerce-products.component.html',
  styleUrl: './ecommerce-products.component.scss'
})
export class EcommerceProductsComponent {
  Productsdata!: ProductsModel[];

  constructor() {
    this.Productsdata = Productsdata;
  }

}
