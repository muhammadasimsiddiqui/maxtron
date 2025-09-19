import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path:'',
    children: [
      {
        path: 'google',
        loadComponent: () => import('./google-maps/google-maps.component').then(m => m.GoogleMapsComponent),
        data: { title: 'Components', breadcrumb: { label: 'Components', des:'Google Maps' } },
      },
      {
        path: 'vector',
        loadComponent: () => import('./vector-maps/vector-maps.component').then(m => m.VectorMapsComponent),
        data: { title: 'Components', breadcrumb: { label: 'Components', des:'Vector Maps' } },
      },
         
    ]
    }

    
]