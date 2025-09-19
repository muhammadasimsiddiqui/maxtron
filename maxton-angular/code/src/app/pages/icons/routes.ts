import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
        {
            path: 'box', 
            loadComponent: () => import('./boxicons/boxicons.component').then(m => m.BoxiconsComponent),
            data: {breadcrumb: { label: 'Icons', des:'Boxicons' } },
          },
        {
            path: 'line', 
            loadComponent: () => import('./line-icons/line-icons.component').then(m => m.LineIconsComponent),
            data: {breadcrumb:{ label: 'Icons', des:'Line Icons' } },
          },
        {
            path: 'feather', 
            loadComponent: () => import('./feather-icons/feather-icons.component').then(m => m.FeatherIconsComponent),
            data: {breadcrumb: { label: 'Icons', des:'Feather Icons' } },
          },
    ],
  },
];
