import { Component,OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { SimplebarAngularModule } from 'simplebar-angular';
// import * as $ from 'jquery'; // Import jQuery

// import { MetismenuAngularModule } from "@metismenu/angular";
// import { BrowserModule } from '@angular/platform-browser';




@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,NgbCollapseModule,SimplebarAngularModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
	isCollapsed = false;
  constructor() { }  

    

  ngOnInit(): void {
    this.highlightActiveMenu();
    eval('$("#metismenu").metisMenu();')
  }

  highlightActiveMenu(): void {
    const currentUrl = window.location.href;
    const menuItems = document.querySelectorAll('.metismenu li a');
    
    setTimeout(() => {
      menuItems.forEach((menuItem) => {
        const a = (menuItem as HTMLAnchorElement)
        
        if (a.href === currentUrl) {
          console.log(5555);
          
          let parentLi = menuItem.parentElement;
  
          if (parentLi) {
            parentLi.classList.add('mm-active');
  
            while (parentLi && parentLi.tagName === 'LI') {
              const parentUl = parentLi.parentElement;
  
              if (parentUl) {
                parentUl.classList.add('mm-show');
                parentLi = parentUl.parentElement as HTMLElement;
  
                if (parentLi && parentLi.tagName === 'LI') {
                  parentLi.classList.add('mm-active');
                }
              } else {
                break;
              }
            }
          }
        }
      });
      
    }, 800);

  }
}
