import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path:'',
    children: [
        {
            path: 'userprofile',
            loadComponent: () => import('./user-profile.component').then(m => m.UserProfileComponent),
            data: { title: 'Components', breadcrumb: { label: 'Components', des:'User Profile' } },
        },

    ]
    }
]