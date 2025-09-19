import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path:'',
    children: [
      {
        path: 'faq',
        loadComponent: () => import('./faq.component').then(m => m.FaqComponent),
        data: { title: 'Components', breadcrumb: { label: 'Components', des:'FAq' } },

      },
         
    ]
    }

    
]