import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-validations',
  standalone: true,
  imports: [],
  templateUrl: './validations.component.html',
  styleUrl: './validations.component.scss'
})
export class ValidationsComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    this.applyBootstrapValidation();
  }

  private applyBootstrapValidation(): void {
    const forms = document.querySelectorAll('.needs-validation');
    
    Array.prototype.slice.call(forms).forEach((form: HTMLFormElement) => {
      form.addEventListener('submit', (event: Event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }
}