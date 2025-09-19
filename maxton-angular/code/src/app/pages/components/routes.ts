import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path:'',
    children: [
      {
        path: 'alerts',
        loadComponent: () => import('./component-alerts/component-alerts.component').then(m => m.ComponentAlertsComponent),
        // data: { title: 'Email Box', breadcrumb: { label: 'Application', des:'Email Box' } },
      },
      {
        path: 'accordions',
        loadComponent: () => import('./component-accordions/component-accordions.component').then(m => m.ComponentAccordionsComponent),
        data: { breadcrumb: { label: 'Components', des:'Accordions' } },
      },
      {
        path: 'badges',
        loadComponent: () => import('./component-badges/component-badges.component').then(m => m.ComponentBadgesComponent),
        data: { breadcrumb: { label: 'Components',  des:'Accordions' } },
      },
      {
        path: 'buttons',
        loadComponent: () => import('./component-buttons/component-buttons.component').then(m => m.ComponentButtonsComponent),
        data: { breadcrumb: { label: 'Components',  des:'Buttons' } },
      },
      {
        path: 'carousels',
        loadComponent: () => import('./component-carousels/component-carousels.component').then(m => m.ComponentCarouselsComponent),
        data: { breadcrumb: { label: 'Components',  des:'Carousels' } },
      },
      {
        path: 'media',
        loadComponent: () => import('./component-media-object/component-media-object.component').then(m => m.ComponentMediaObjectComponent),
        data: { breadcrumb: { label: 'Components',  des:'Starter Page' } },
      },
      {
        path: 'modals',
        loadComponent: () => import('./component-modals/component-modals.component').then(m => m.ComponentModalsComponent),
        data: { breadcrumb: { label: 'Components',  des:'Modals' } },
      },
      {
        path: 'navs',
        loadComponent: () => import('./component-navs-tabs/component-navs-tabs.component').then(m => m.ComponentNavsTabsComponent),
        data: { breadcrumb: { label: 'Components',  des:'Navs & Tabs' } },
      },
      {
        path: 'navbar',
        loadComponent: () => import('./navbar/navbar.component').then(m => m.NavbarComponent),
        data: { breadcrumb: { label: 'Components',  des:'Navbars' } },
      },
      {
        path: 'paginations',
        loadComponent: () => import('./paginations/paginations.component').then(m => m.PaginationsComponent),
        data: { breadcrumb: { label: 'Components',  des:'Starter Page' } },
      },
      {
        path: 'popovers',
        loadComponent: () => import('./popovers-tooltips/popovers-tooltips.component').then(m => m.PopoversTooltipsComponent),
        data: { breadcrumb: { label: 'Components',  des:'Starter Page' } },
      },
      {
        path: 'progressbars',
        loadComponent: () => import('./progress-bars/progress-bars.component').then(m => m.ProgressBarsComponent),
        data: { breadcrumb: { label: 'Components',  des:'Progress Bar' } },
      },
      {
        path: 'spinners',
        loadComponent: () => import('./spinners/spinners.component').then(m => m.SpinnersComponent),
        data: { breadcrumb: { label: 'Components',  des:'Spinners' } },
      },
      {
        path: 'notifications',
        loadComponent: () => import('./notifications/notifications.component').then(m => m.NotificationsComponent),
        data: { breadcrumb: { label: 'Components',  des:'Notifications' } },
      },
      {
        path: 'avtars',
        loadComponent: () => import('./avtars-chips/avtars-chips.component').then(m => m.AvtarsChipsComponent),
        data: { breadcrumb: { label: 'Components',  des:'Avtars Chips' } },
      },
      {
        path: 'typography',
        loadComponent: () => import('./typography/typography.component').then(m => m.TypographyComponent),
        data: { breadcrumb: { label: 'Components',  des:'Typography' } },
      },
      {
        path: 'utilities',
        loadComponent: () => import('./text-utilities/text-utilities.component').then(m => m.TextUtilitiesComponent),
        data: { breadcrumb: { label: 'Components',  des:'Text Utilities' } },
      },
    //   {
    //     path: 'index2',
    //     loadComponent: () => import('./index2/index2.component').then(m => m.Index2Component),
    //     data: { title: 'Dashboard', breadcrumb: { label: 'Dashboard' } },
    //   },    
    ]
    }
]