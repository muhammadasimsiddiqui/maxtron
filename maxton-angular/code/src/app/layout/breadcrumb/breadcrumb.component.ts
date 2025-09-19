import { Component, Renderer2 } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [NgbDropdownModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent {
  routeData: any | undefined;
  breadcrumbs: { label: string; url: string }[] = [];

  constructor(private router: Router, private route: ActivatedRoute,private renderer: Renderer2) {
    this.generateBreadcrumb(this.route.root);    
    const currentUrl = this.router.url;
    const breadcrumbElement = document.querySelector('.page-breadcrumb');

    console.log('Current URL:', currentUrl);
    if (currentUrl === '/apps/chatbox') {
      if (breadcrumbElement) {
        this.renderer.addClass(breadcrumbElement, 'd-sm-flex');
      }
      console.log("Class 'd-sm-flex' added");
    } else {
      if (breadcrumbElement) {
        this.renderer.removeClass(breadcrumbElement, 'd-sm-flex');
      }
    }
  }

  ngOnInit() {
    // Click Breadcrumb
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {                
        this.generateBreadcrumb(this.route.root);
    });
  }

  // Breadcrumb Generate
  private generateBreadcrumb(
    route: ActivatedRoute
  ): void {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return;
    }

    for (const child of children) {      
      const routeLabel =
        child.snapshot.data['breadcrumb'] !== undefined
          ? child.snapshot.data['breadcrumb']
          : '';
          this.routeData = child.snapshot.data;                
          this.generateBreadcrumb(child);
    }
  }
}
