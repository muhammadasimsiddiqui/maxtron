import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path:'',
    children: [
        {
            path: 'emailbox',
            loadComponent: () => import('./app-emailbox/app-emailbox.component').then(m => m.AppEmailboxComponent),
            data: { title: 'Email Box', breadcrumb: { label: 'Application', des:'Email Box' } },
        },
        {
            path: 'emailread',
            loadComponent: () => import('./app-emailread/app-emailread.component').then(m => m.AppEmailreadComponent),
            data: { title: 'Email Read', breadcrumb: { label: 'Application', des:'Email Box' } },
        },
        {
            path: 'chatbox',
            loadComponent: () => import('./app-chat-box/app-chat-box.component').then(m => m.AppChatBoxComponent),
            // data: { title: 'Chat Box', breadcrumb: { label: 'Application', des:'Chat Box' ,showBreadcru } },
        },
        {
            path: 'calender',
            loadComponent: () => import('./app-fullcalender/app-fullcalender.component').then(m => m.AppFullcalenderComponent),
            data: { title: 'Calendar', breadcrumb: { label: 'Components', des:'Calendar' } },
        },
        {
            path: 'todo',
            loadComponent: () => import('./app-to-do/app-to-do.component').then(m => m.AppToDoComponent),
            data: { title: 'To Do List', breadcrumb: { label: 'Applications', des:'To Do List' } },
        },
        {
            path: 'invoice',
            loadComponent: () => import('./app-invoice/app-invoice.component').then(m => m.AppInvoiceComponent),
            data: { title: 'Invoice', breadcrumb: { label: 'Components', des:'Invoice' } },
        },
        
    ]
    }
]