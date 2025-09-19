import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AlertModel, BorderModel, ColorModel, SimpleModel } from './model';
import { Alertdata, Borderdata, Colordata, Simpledata } from './data';

@Component({
  selector: 'app-component-alerts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component-alerts.component.html',
  styleUrl: './component-alerts.component.scss'
})
export class ComponentAlertsComponent {
  Alertdata!: AlertModel[];
  Colordata!: ColorModel[];
  Borderdata!: BorderModel[];
  Simpledata!: SimpleModel[];

  constructor() {
    this.Alertdata = Alertdata;
    this.Colordata = Colordata;
    this.Borderdata = Borderdata;
    this.Simpledata = Simpledata;
}
}
