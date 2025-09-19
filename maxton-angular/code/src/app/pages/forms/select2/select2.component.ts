import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


@Component({
  selector: 'app-select2',
  standalone: true,
  imports: [
    FormsModule,NgMultiSelectDropDownModule],
  templateUrl: './select2.component.html',
  styleUrl: './select2.component.scss'
})
export class Select2Component {
  selectedOption: string;
  options: string[] = ['Reactive', 'Solution', 'Conglomeration', 'Algorithm', 'Holistic'];

  constructor() {
    this.selectedOption = this.options[0]; // Optionally set a default value
  }
}
  