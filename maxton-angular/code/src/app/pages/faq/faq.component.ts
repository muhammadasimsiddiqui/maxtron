import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
// import { FaqModel } from './model';
// import { Faqdata } from './data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [NgbAccordionModule,CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  // Faqdata!: FaqModel[];

	items = ['First', 'Second', 'Third'];
}
