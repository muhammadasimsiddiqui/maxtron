import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path:'',
    children: [
        {
            path: 'data',
            loadComponent: () => import('./widgets-data/widgets-data.component').then(m => m.WidgetsDataComponent),
            data: { title: 'Widgets Data', breadcrumb: { label: 'Widgets', des:'Data Widgets' } },
        },
        {
            path: 'static',
            loadComponent: () => import('./widgets-static/widgets-static.component').then(m => m.WidgetsStaticComponent),
            data: { title: 'Widgets Static', breadcrumb: { label: 'Widgets', des:'Static' } },
        },
    ]
    }
]