import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
import {  FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-repeater',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './repeater.component.html',
  styleUrl: './repeater.component.scss'
})
export class RepeaterComponent {
  formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      items: this.fb.array([]) // Initialize FormArray
    });

    // Optionally add an initial item
    this.addRepeater();
  }

  get items(): FormArray {
    return this.formGroup.get('items') as FormArray;
  }

  addRepeater(): void {
    const item = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

    this.items.push(item);
  }

  removeRepeater(index: number): void {
    this.items.removeAt(index);
  }

}
