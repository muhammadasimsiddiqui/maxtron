import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { Router, RouterOutlet, NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private titleService: Title, private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const pageTitle = this.getPageTitle(this.router.routerState, this.router.routerState.root).join(' | ');
        this.titleService.setTitle(pageTitle);
      }
    });
  }

  private getPageTitle(state: any, parent: any): string[] {
    const data: string[] = [];
    if (parent && parent.snapshot.data && parent.snapshot.data['title']) {
      data.push(parent.snapshot.data['title']);
    }

    if (state && parent) {
      data.push(... this.getPageTitle(state, state.firstChild(parent)));
    }


    return data;
  }
}
