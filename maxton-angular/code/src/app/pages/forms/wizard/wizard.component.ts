import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-wizard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wizard.component.html',
  styleUrl: './wizard.component.scss'
})
export class WizardComponent {
  // Non Linear...........................
  s: number = 1; // Declare a class property
  next(): void { // Declare a class method
    this.s = this.s + 1; // Use `this` to refer to the class property
  }
  previous(): void {
    if (this.s > 1) { // Ensure value does not go below 1
      this.s = this.s - 1; // Decrement the value
    }
  }

  // Linear Stepper.......................
  p: number = 1; // Declare a class property
  next2(): void { // Declare a class method
    this.p = this.p + 1; // Use `this` to refer to the class property
  }
  previous2(): void {
    if (this.p > 1) { // Ensure value does not go below 1
      this.p = this.p - 1; // Decrement the value
    }
  }
  // Non Linear Vertical................
  i: number = 1; // Declare a class property
  next3(): void { // Declare a class method
    this.i = this.i + 1; // Use `this` to refer to the class property
  }
  previous3(): void {
    if (this.i > 1) { // Ensure value does not go below 1
      this.i = this.i - 1; // Decrement the value
    }
  }
  
}

