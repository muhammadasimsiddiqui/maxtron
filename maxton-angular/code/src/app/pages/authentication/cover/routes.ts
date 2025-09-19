import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path:'',
    children: [
        {
            path: 'login',
            loadComponent: () => import('./login/login.component').then(m => m.LoginComponent),
            data: { title: 'Login', breadcrumb: { label: 'Basic', des:'Login' } },
        },
        {
            path: 'register',
            loadComponent: () => import('./register/register.component').then(m => m.RegisterComponent),
            data: { title: 'Register', breadcrumb: { label: 'Basic', des:'Register' } },
        },
        {
            path: 'forgotpassword',
            loadComponent: () => import('./forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent),
            data: { title: 'Forgot Password', breadcrumb: { label: 'Basic', des:'Forgot Password' } },
        },
        {
            path: 'resetpassword',
            loadComponent: () => import('./reset-password/reset-password.component').then(m => m.ResetPasswordComponent),
            data: { title: 'Reset Password', breadcrumb: { label: 'Basic', des:'Reset Password' } },
        },
    ]
    }
]