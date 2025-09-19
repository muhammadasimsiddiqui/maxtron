import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path:'',
    children: [
        {
            path: 'timeline',
            loadComponent: () => import('./timeline.component').then(m => m.TimelineComponent),
            data: { title: 'Components', breadcrumb: { label: 'Components', des:'Timeline' } },
        },

    ]
    }
]