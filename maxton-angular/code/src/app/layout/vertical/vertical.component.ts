import { Component, inject, TemplateRef } from '@angular/core';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-vertical',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, RouterOutlet, FooterComponent,BreadcrumbComponent],
  templateUrl: './vertical.component.html',
  styleUrl: './vertical.component.scss'
})
export class VerticalComponent {
  private offcanvasService = inject(NgbOffcanvas);
  mode: string | undefined;
  

  constructor() {
    document.documentElement.setAttribute('data-bs-theme', 'blue-theme');
  }

  // Offcanvas Open
  openEnd(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { position: 'end' });
	}

  // Mode Type
  changeMode(mode: string) {
    this.mode = mode;
    document.documentElement.setAttribute('data-bs-theme', mode);
  }
}
