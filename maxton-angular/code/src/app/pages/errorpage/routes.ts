import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path:'',
    children: [
      {
        path: 'error404',
        loadComponent: () => import('./error-404/error-404.component').then(m => m.Error404Component),
      },
      {
        path: 'error505',
        loadComponent: () => import('./error-505/error-505.component').then(m => m.Error505Component),
      },    
      {
        path: 'comingsoon',
        loadComponent: () => import('./coming-soon/coming-soon.component').then(m => m.ComingSoonComponent),
      },    
    ]
    }

    
]