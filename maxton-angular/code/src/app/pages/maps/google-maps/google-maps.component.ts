import { CommonModule } from '@angular/common';
import { Component  } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-google-maps',
  standalone: true,
  imports: [RouterOutlet ,CommonModule,RouterModule ,],
  templateUrl: './google-maps.component.html',
  styleUrl: './google-maps.component.scss',
  providers: [],

  
})
export class GoogleMapsComponent    {

  
  }