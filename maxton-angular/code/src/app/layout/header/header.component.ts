import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  windowScroll() {    
    const navbar = document.querySelector('.navbar');
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {     
      navbar?.classList.add('sticky-header');
    }
    else {
      navbar?.classList.remove('sticky-header');
    }
  }

  // Mode Type
  changeMenu() {
    window.document.body.classList.toggle('toggled');
  }
}
