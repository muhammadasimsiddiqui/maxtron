import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path:'',
    children: [
      {
        path: 'apex',
        loadComponent: () => import('./apex-chart/apex-chart.component').then(m => m.ApexChartComponent),
        data: { breadcrumb: { label: 'Components', des:'Apex Chart' } },
      },
      {
        path: 'chartjs',
        loadComponent: () => import('./chartjs/chartjs.component').then(m => m.ChartjsComponent),
        data: {breadcrumb: { label: 'Components', des:'Chart Js' } },
      }, 
    ]
    }

    
]