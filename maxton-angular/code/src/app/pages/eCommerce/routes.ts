import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path:'',
    children: [
        {
            path: 'addProducts',
            loadComponent: () => import('./ecommerce-add-products/ecommerce-add-products.component').then(m => m.EcommerceAddProductsComponent),
            data: {breadcrumb: { label: 'Products' , des:'Starter Page'} },
        },
        {
            path: 'products',
            loadComponent: () => import('./ecommerce-products/ecommerce-products.component').then(m => m.EcommerceProductsComponent),
            data: {breadcrumb: { label: 'eCommerce', des:'Products'} },
        },
        {
            path: 'customers',
            loadComponent: () => import('./ecommerce-customers/ecommerce-customers.component').then(m => m.EcommerceCustomersComponent),
            data: { breadcrumb: { label: 'Components' , des:'Customers'} },
        },
        {
            path: 'customerdetails',
            loadComponent: () => import('./ecommerce-customer-details/ecommerce-customer-details.component').then(m => m.EcommerceCustomerDetailsComponent),
            data: { breadcrumb: { label: 'Components', des:'Customer Details' } },

        },
        {
            path: 'orders',
            loadComponent: () => import('./ecommerce-orders/ecommerce-orders.component').then(m => m.EcommerceOrdersComponent),
            data: {breadcrumb: { label: 'Components' , des:'Products'} },
        },
        {
            path: 'orderdetails',
            loadComponent: () => import('./ecommerce-order-details/ecommerce-order-details.component').then(m => m.EcommerceOrderDetailsComponent),
            data: {breadcrumb: { label: 'Components' , des:'Order Details'} },
        },
    ]
    }
]