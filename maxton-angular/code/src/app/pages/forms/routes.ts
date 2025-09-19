import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path:'',
    children: [ 
        {
            path: 'inputgroup', 
            loadComponent: () => import('./input-group/input-group.component').then(m => m.InputGroupComponent),
            data: { breadcrumb: { label: 'Components', des: 'Input Group' } },
          },
          {
            path: 'elements', 
            loadComponent: () => import('./elements/elements.component').then(m => m.ElementsComponent),
            data: { breadcrumb: { label: 'Components', des: 'Input Group' } },
          },
        {
            path: 'checkboxe', 
            loadComponent: () => import('./radios-and-checkboxes/radios-and-checkboxes.component').then(m => m.RadiosAndCheckboxesComponent),
            data: { breadcrumb: { label: 'Components', des: 'Checkboxes' } },
          },
        {
            path: 'layouts', 
            loadComponent: () => import('./layouts/layouts.component').then(m => m.LayoutsComponent),
            data: { breadcrumb: { label: 'Components', des: 'Form Layouts' } },
          },
        {
            path: 'validations', 
            loadComponent: () => import('./validations/validations.component').then(m => m.ValidationsComponent),
            data: { breadcrumb: { label: 'Components', des: 'Validations' } },
          },
        {
            path: 'wizard', 
            loadComponent: () => import('./wizard/wizard.component').then(m => m.WizardComponent),
            data: { breadcrumb: { label: 'Components', des: 'Wizard' } },
          },
        {
            path: 'fileupload', 
            loadComponent: () => import('./file-upload/file-upload.component').then(m => m.FileUploadComponent),
            data: { breadcrumb: { label: 'Components', des: 'File Upload' } },
        },
        {
            path: 'datetime', 
            loadComponent: () => import('./date-time-pickes/date-time-pickes.component').then(m => m.DateTimePickesComponent),
            data: { breadcrumb: { label: 'Components', des: 'Date Time Pickers' } },
        },
        {
            path: 'select2', 
            loadComponent: () => import('./select2/select2.component').then(m => m.Select2Component),
            data: { breadcrumb: { label: 'Components', des: 'Select2' } },
        },
        {
            path: 'repeater', 
            loadComponent: () => import('./repeater/repeater.component').then(m => m.RepeaterComponent),
            data: { breadcrumb: { label: 'Components', des: 'Starter Page' } },
        },
    ]
    }
]