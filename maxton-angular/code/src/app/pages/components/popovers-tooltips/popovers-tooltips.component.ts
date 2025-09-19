import { Component } from '@angular/core';
import { NgbPopoverModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-popovers-tooltips',
  standalone: true,
  imports: [NgbPopoverModule,NgbTooltipModule],
  templateUrl: './popovers-tooltips.component.html',
  styleUrl: './popovers-tooltips.component.scss'
})
export class PopoversTooltipsComponent {

}
