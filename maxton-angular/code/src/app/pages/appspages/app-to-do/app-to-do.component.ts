import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
// todo service
// import { TodoService, Todo } from './todo.service';

@Component({
  selector: 'app-app-to-do',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './app-to-do.component.html',
  styleUrl: './app-to-do.component.scss'
})
export class AppToDoComponent {  
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
