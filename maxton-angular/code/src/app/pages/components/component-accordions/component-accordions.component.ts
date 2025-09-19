import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-component-accordions',
  standalone: true,
  imports: [NgbAccordionModule],
  templateUrl: './component-accordions.component.html',
  styleUrl: './component-accordions.component.scss'
})
export class ComponentAccordionsComponent {
	items = ['First', 'Second', 'Third'];

}
