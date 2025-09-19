import { Component,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-feather-icons',
  standalone: true,
  imports: [],
  templateUrl: './feather-icons.component.html',
  styleUrl: './feather-icons.component.scss'
})
export class FeatherIconsComponent  implements AfterViewInit{
  ngAfterViewInit() {
    // @ts-ignore
    feather.replace();
  }
}
