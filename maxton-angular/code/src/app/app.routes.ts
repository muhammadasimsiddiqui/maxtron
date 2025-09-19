import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { CardsComponent } from './pages/cards/cards.component';
import { StarterPageComponent } from './pages/errorpage/starter-page/starter-page.component';


export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      // dashboard routes start..........
      {
        path: '', 
        loadChildren: () => import('../app/pages/dashboard/routes').then((m) => m.routes)
      },
      // {
      //   path: 'index2',
      //   component: Index2Component,
      //   title: 'index2',
      // }, 
      // widgets routes start................
      {
        path: 'widgets', 
        loadChildren: () => import('../app/pages/widgets/routes').then((m) => m.routes)
      },
      // {
      //   path: 'widgetsdata',
      //   component: WidgetsDataComponent,
      //   title: 'widgets-data',
      // },
      // {
      //   path: 'widgetsstatic',
      //   component: WidgetsStaticComponent,
      //   title: 'widgets-static',
      // },
      // appspages routes start.............
      {
        path: 'apps', 
        loadChildren: () => import('../app/pages/appspages/routes').then((m) => m.routes)
      },
      // {
      //   path: 'emailbox',
      //   component: AppEmailboxComponent,
      //   title: 'app-emailbox',
      // },
      // {
      //   path: 'emailread',
      //   component: AppEmailreadComponent,
      //   title: 'emailread',
      // },
      // {
      //   path: 'chatbox',
      //   component: AppChatBoxComponent,
      //   title: 'chatbox',
      // },
      // {
      //   path: 'fulllcalender',
      //   component: AppFullcalenderComponent,
      //   title: 'fulllcalender',
      // },
      // {
      //   path: 'todo',
      //   component: AppToDoComponent,
      //   title: 'AppToDoComponent',
      // },
      // {
      //   path: 'invoice',
      //   component: AppInvoiceComponent,
      //   title: 'AppInvoiceComponent',
      // },
      // onli cards routes start[Symbol]........ 
      {
        path: 'cards',
        component: CardsComponent,
        // title: 'CardsComponent',
        data: {breadcrumb: { label: 'Components', des:'Cards' } },

      },
// ecommerce routes start.................
      {
        path: 'ecommerce', 
        loadChildren: () => import('../app/pages/eCommerce/routes').then((m) => m.routes)
      },
      // {
      //   path: 'addproducts',
      //   component: EcommerceAddProductsComponent,
      //   title: 'EcommerceAddProductsComponent',
      // },
      // {
      //   path: 'products',
      //   component: EcommerceProductsComponent,
      //   title: 'EcommerceProductsComponent',
      // },
      // {
      //   path: 'customers',
      //   component: EcommerceCustomersComponent,
      //   title: 'EcommerceCustomersComponent',
      // },
      // {
      //   path: 'customerdetils',
      //   component: EcommerceCustomerDetailsComponent,
      //   title: 'EcommerceCustomerDetailsComponent',
      // },
      // {
      //   path: 'orders',
      //   component: EcommerceOrdersComponent,
      //   title: 'EcommerceOrdersComponent',
      // },
      // {
      //   path: 'ordersdetails',
      //   component: EcommerceOrderDetailsComponent,
      //   title: 'EcommerceOrderDetailsComponent',
      // },
      //components  routes strat ............................
      {
        path: 'component', 
        loadChildren: () => import('../app/pages/components/routes').then((m) => m.routes)
      },
      // {
      //   path: 'alerts',
      //   component: ComponentAlertsComponent,
      //   title: 'ComponentAlertsComponent',
      // },
      // {
      //   path: 'accordions',
      //   component: ComponentAccordionsComponent,
      //   title: 'ComponentAccordionsComponent',
      // },
      // {
      //   path: 'badges',
      //   component: ComponentBadgesComponent,
      //   title: 'ComponentBadgesComponent',
      // },
      // {
      //   path: 'buttons',
      //   component: ComponentButtonsComponent,
      //   title: 'ComponentButtonsComponent',
      // },
      // {
      //   path: 'carousels',
      //   component: ComponentCarouselsComponent,
      //   title: 'ComponentCarouselsComponent',
      // },
      // {
      //   path: 'mediaobject',
      //   component: ComponentMediaObjectComponent,
      //   title: 'ComponentMediaObjectComponent',
      // },
      // {
      //   path: 'modals',
      //   component: ComponentModalsComponent,
      //   title: 'ComponentModalsComponent',
      // },
      // {
      //   path: 'navstabs',
      //   component: ComponentNavsTabsComponent,
      //   title: 'ComponentNavsTabsComponent',
      // },
      // {
      //   path: 'navbar',
      //   component: NavbarComponent,
      //   title: 'NavbarComponent',
      // },
      // {
      //   path: 'paginations',
      //   component: PaginationsComponent,
      //   title: 'PaginationsComponent',
      // },
      // {
      //   path: 'popoverstooltips',
      //   component: PopoversTooltipsComponent,
      //   title: 'PopoversTooltipsComponent',
      // },
      // icons routes start........................
      {
        path: 'icons', 
        loadChildren: () => import('../app/pages/icons/routes').then((m) => m.routes)
      },
      // forms routes strat..................
      {
        path: 'forms', 
        loadChildren: () => import('../app/pages/forms/routes').then((m) => m.routes)
      },
      // tables routes start..................
      {
        path: 'tables', 
        loadChildren: () => import('../app/pages/tables/routes').then((m) => m.routes)
      },
        // user profile routes start.............
      {
        path: '', 
        loadChildren: () => import('../app/pages/user-profile/routes').then((m) => m.routes)
      },
      // timeline routes start................
      {
        path: '', 
        loadChildren: () => import('../app/pages/timeline/routes').then((m) => m.routes)
      },
      // errorpage onliyblankpage routes start..........
      {
        path: 'StarterPage',
        component: StarterPageComponent,
        data: { title: 'Components', breadcrumb: { label: 'Dashboard', des:'Blank page' } },
      },
      // faq routes start................
      {
        path: '', 
        loadChildren: () => import('../app/pages/faq/routes').then((m) => m.routes)
      },
      // pricing table routes start.........
      {
        path: '', 
        loadChildren: () => import('../app/pages/pricing-table/routes').then((m) => m.routes)
      },
      // charts routes strat......................
      {
        path: 'charts', 
        loadChildren: () => import('../app/pages/charts/routes').then((m) => m.routes)
      },
      // maps routes strat......................
      {
        path: 'maps', 
        loadChildren: () => import('../app/pages/maps/routes').then((m) => m.routes)
      },
    ],
    
  },

  //authentication bascic routes start............................
  {
    path: 'basic', 
    loadChildren: () => import('../app/pages/authentication/basic/routes').then((m) => m.routes)
  },
  // uauthentication cover routes start............
  {
    path: 'cover', 
    loadChildren: () => import('../app/pages/authentication/cover/routes').then((m) => m.routes)
  },
// authentication boxed routes start...............
  {
    path: 'boxed', 
    loadChildren: () => import('../app/pages/authentication/boxed/routes').then((m) => m.routes)
  },

  // error pages routes start...../
  {
    path: 'error', 
    loadChildren: () => import('../app/pages/errorpage/routes').then((m) => m.routes)
  },

];
