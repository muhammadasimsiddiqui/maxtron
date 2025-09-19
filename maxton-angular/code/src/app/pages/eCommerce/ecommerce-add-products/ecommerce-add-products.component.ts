import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgxDropzoneModule } from 'ngx-dropzone';

@Component({
  selector: 'app-ecommerce-add-products',
  standalone: true,
  imports: [RouterLink,NgxDropzoneModule],
  templateUrl: './ecommerce-add-products.component.html',
  styleUrl: './ecommerce-add-products.component.scss'
})
export class EcommerceAddProductsComponent {
  files: File[] = [];

  onSelect(event: { addedFiles: File[] }): void {
    console.log(event);
    this.files.push(...event.addedFiles);
    const files = event.addedFiles;

  }

  onRemove(event: File): void {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
}
