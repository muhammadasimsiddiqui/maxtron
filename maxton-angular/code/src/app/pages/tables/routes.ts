import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
        {
            path: 'basictable', 
            loadComponent: () => import('./basic-table/basic-table.component').then(m => m.BasicTableComponent),
            data: { breadcrumb: { label: 'Components', des: 'Basic Table' } },
          },
        {
            path: 'datatable', 
            loadComponent: () => import('./datatable/datatable.component').then(m => m.DatatableComponent),
            data: { breadcrumb: { label: 'Components', des: 'Data Table' } },
          },
    ],
  },
];
