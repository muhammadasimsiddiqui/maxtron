import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path:'',
    children: [
      {
        path: '',
        loadComponent: () => import('./index/index.component').then(m => m.IndexComponent),
        data: { title: 'Dashboard Analysis', breadcrumb: { label: 'Dashboard', des:'Analysis' } },
      },
      {
        path: 'index2',
        loadComponent: () => import('./index2/index2.component').then(m => m.Index2Component),
        data: { title: 'Dashboard eCommerce', breadcrumb: { label: 'Dashboard', des:'eCommerce' } },
      },    
    ]
    }

    
]