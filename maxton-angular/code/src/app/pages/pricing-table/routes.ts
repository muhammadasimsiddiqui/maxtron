import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path:'',
    children: [
      {
        path: 'pricingtable',
        loadComponent: () => import('./pricing-table.component').then(m => m.PricingTableComponent),
        data: { title: 'Components', breadcrumb: { label: 'Components', des:'Pricing Table' } },

      },
         
    ]
    }

    
]