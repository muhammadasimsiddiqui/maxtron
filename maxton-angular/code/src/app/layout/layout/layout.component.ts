import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { VerticalComponent } from '../vertical/vertical.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule,VerticalComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  layoutType!: string;
  nav: string | null | undefined;

  ngOnInit(): void {
    this.nav = localStorage.getItem('navbar') ?? 'side';
    this.layoutType = this.nav;
  }

  /**
  * Check if the vertical layout is requested
  */
  isVerticalLayoutRequested() {
    return this.layoutType === 'side';
  }
}
