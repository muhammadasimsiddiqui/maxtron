const express = require('express');
const route = express.Router();

const AuthController = require("../controllers/AuthController")


module.exports = function(route) {
    const allowUrls = [
        "/login",
        "/auth-validate",
        "/register",
        "/signup",
        "/forgotpassword",
        "/sendforgotpasswordlink",
        "/resetpassword",
        "/error",
        "/changepassword"
    ];

    route.use((req, res, next) => {
        const uemail = req.session.useremail;

        if (allowUrls.includes(req.path)) {
            if (uemail) {
                return res.redirect('/');
            }
        } else if (!uemail) {
            return res.redirect('/login');
        }

        next();
    });

    route.get('/', (req, res, next) => {
        res.render('index', { layout: 'layouts/layout-without-bradcrumb', title: 'Dashboard', page_title: 'Dashboard', folder: 'Analysis' });
    })
    route.get('/index', (req, res, next) => {
        res.render('index', { layout: 'layouts/layout-without-bradcrumb', title: 'Dashboard', page_title: 'Dashboard', folder: 'Analysis'  });
    })
    route.get('/index2', (req, res, next) => {
        res.render('index2', { layout: 'layouts/layout-without-bradcrumb', title: 'Dashboard', page_title: 'Dashboard', folder: 'eCommerce' });
    })
    route.get('/widgets-data', (req, res, next) => {
        res.render('widgets-data', { layout: 'layouts/layout-without-bradcrumb', title: 'Widgets', page_title: 'Widgets', folder: 'Data Widgets' });
    })
    route.get('/widgets-static', (req, res, next) => {
        res.render('widgets-static', { layout: 'layouts/layout-without-bradcrumb', title: 'Widgets', page_title: 'Widgets', folder: 'Static' });
    })
    route.get('/app-emailbox', (req, res, next) => {
        res.render('app-emailbox', { title: 'Apps', page_title: 'Email Box', folder: 'Email Box' });
    })
    route.get('/app-emailread', (req, res, next) => {
        res.render('app-emailread', { title: 'Apps', page_title: 'Email Read', folder: 'Email Read' });
    })
    route.get('/app-chat-box', (req, res, next) => {
        res.render('app-chat-box', { title: 'Apps', page_title: 'Chat', folder: 'Chat' });
    })
    route.get('/app-fullcalender', (req, res, next) => {
        res.render('app-fullcalender', { title: 'Apps', page_title: 'Calender', folder: 'Calender' });
    })
    route.get('/app-file-manager', (req, res, next) => {
        res.render('app-file-manager', { title: 'Apps', page_title: 'File Manager', folder: 'File Manager' });
    })
    route.get('/app-invoice', (req, res, next) => {
        res.render('app-invoice', { title: 'Apps', page_title: 'Invoice', folder: 'Invoice' });
    })
    route.get('/app-to-do', (req, res, next) => {
        res.render('app-to-do', { title: 'Apps', page_title: 'ToDo App', folder: 'ToDo App' });
    })
    route.get('/cards', (req, res, next) => {
        res.render('cards', { title: 'Apps', page_title: 'Cards', folder: 'Cards' });
    })
    route.get('/charts-apex-chart', (req, res, next) => {
        res.render('charts-apex-chart', { title: 'Apps', page_title: 'Charts', folder: 'Charts' });
    })
    route.get('/charts-chartjs', (req, res, next) => {
        res.render('charts-chartjs', { title: 'Apps', page_title: 'ChartsJS', folder: 'ChartsJS' });
    })
    route.get('/component-accordions', (req, res, next) => {
        res.render('component-accordions', { title: 'Ui Components', page_title: 'Accordions', folder: 'Accordions' });
    })
    route.get('/component-alerts', (req, res, next) => {
        res.render('component-alerts', { title: 'Ui Components', page_title: 'Alerts', folder: 'Alerts' });
    })
    route.get('/component-avtars-chips', (req, res, next) => {
        res.render('component-avtars-chips', { title: 'Ui Components', page_title: 'Avtar', folder: 'Avtar' });
    })
    route.get('/component-badges', (req, res, next) => {
        res.render('component-badges', { title: 'Ui Components', page_title: 'Avtar', folder: 'Avtar' });
    })
    route.get('/component-buttons', (req, res, next) => {
        res.render('component-buttons', { title: 'Ui Components', page_title: 'Button', folder: 'Button' });
    })
    route.get('/component-cards-basic', (req, res, next) => {
        res.render('component-cards-basic', { title: 'Ui Components', page_title: 'Components', folder: 'Cards Basic' });
    })
    route.get('/component-cards-contact', (req, res, next) => {
        res.render('component-cards-contact', { title: 'Ui Components', page_title: 'Components', folder: 'Cards Contact' });
    })
    route.get('/component-carousels', (req, res, next) => {
        res.render('component-carousels', { title: 'Ui Components', page_title: 'Components', folder: 'Component Carousels' });
    })
    route.get('/component-media-object', (req, res, next) => {
        res.render('component-media-object', { title: 'Ui Components', page_title: 'Components', folder: 'Media' });
    })
    route.get('/component-modals', (req, res, next) => {
        res.render('component-modals', { title: 'Ui Components', page_title: 'Components', folder: 'Modals' });
    })
    route.get('/component-navbar', (req, res, next) => {
        res.render('component-navbar', { title: 'Ui Components', page_title: 'Components', folder: 'Navbar' });
    })
    route.get('/component-navs-tabs', (req, res, next) => {
        res.render('component-navs-tabs', { title: 'Ui Components', page_title: 'Components', folder: 'Navs Tabs' });
    })
    route.get('/component-notifications', (req, res, next) => {
        res.render('component-notifications', { title: 'Ui Components', page_title: 'Components', folder: 'Notifications' });
    })
    route.get('/component-paginations', (req, res, next) => {
        res.render('component-paginations', { title: 'Ui Components', page_title: 'Components', folder: 'Paginations' });
    })
    route.get('/component-popovers-tooltips', (req, res, next) => {
        res.render('component-popovers-tooltips', { title: 'Ui Components', page_title: 'Components', folder: 'Popovers' });
    })
    route.get('/component-progress-bars', (req, res, next) => {
        res.render('component-progress-bars', { title: 'Ui Components', page_title: 'Components', folder: 'Progress' });
    })
    route.get('/component-spinners', (req, res, next) => {
        res.render('component-spinners', { title: 'Ui Components', page_title: 'Components', folder: 'Spinners' });
    })
    route.get('/component-spinners', (req, res, next) => {
        res.render('component-spinners', { title: 'Ui Components', page_title: 'Components', folder: 'Spinners' });
    })
    route.get('/component-text-utilities', (req, res, next) => {
        res.render('component-text-utilities', { title: 'Ui Components', page_title: 'Components', folder: 'Utilities' });
    })
    route.get('/component-typography', (req, res, next) => {
        res.render('component-typography', { title: 'Ui Components', page_title: 'Components', folder: 'Typography' });
    })
    route.get('/ecommerce-add-product', (req, res, next) => {
        res.render('ecommerce-add-product', { title: 'Add Product', page_title: 'Components', folder: 'Add Product' });
    })
    route.get('/ecommerce-customer-details', (req, res, next) => {
        res.render('ecommerce-customer-details', { title: 'Customer Details', page_title: 'Components', folder: 'Customer Details' });
    })
    route.get('/ecommerce-customers', (req, res, next) => {
        res.render('ecommerce-customers', { title: 'Customer', page_title: 'Components', folder: 'Customer' });
    })
    route.get('/ecommerce-order-details', (req, res, next) => {
        res.render('ecommerce-order-details', { title: 'Customer', page_title: 'Components', folder: 'Oarder' });
    })
    route.get('/ecommerce-orders', (req, res, next) => {
        res.render('ecommerce-orders', { title: 'Customer', page_title: 'Components', folder: 'Oarder' });
    })
    route.get('/ecommerce-customers', (req, res, next) => {
        res.render('ecommerce-customers', { title: 'Customer', page_title: 'Components', folder: 'Customer' });
    })
    route.get('/ecommerce-products', (req, res, next) => {
        res.render('ecommerce-product', { title: 'Products', page_title: 'Products', folder: 'Customer' });
    })
    route.get('/faq', (req, res, next) => {
        res.render('faq', { title: 'Customer', page_title: 'Components', folder: 'Faqs' });
    })
    route.get('/form-date-time-pickes', (req, res, next) => {
        res.render('form-date-time-pickes', { title: 'Customer', page_title: 'Components', folder: 'Form Date & Time Pickaes' });
    })
    route.get('/form-file-upload', (req, res, next) => {
        res.render('form-file-upload', { title: 'Customer', page_title: 'Components', folder: 'File Upload ' });
    })
    route.get('/form-input-group', (req, res, next) => {
        res.render('form-input-group', { title: 'Form', page_title: 'Forms', folder: 'Input Groups' });
    })
    route.get('/form-layouts', (req, res, next) => {
        res.render('form-layouts', { title: 'Form', page_title: 'Forms', folder: 'Layouts' });
    })
    route.get('/form-radios-and-checkboxes', (req, res, next) => {
        res.render('form-radios-and-checkboxes', { title: 'Form', page_title: 'Forms', folder: 'Radios & Checkboxes' });
    })      
    route.get('/form-repeater', (req, res, next) => {
        res.render('form-repeater', { title: 'Form', page_title: 'Forms', folder: 'Repeater' });
    })      
    route.get('/form-select2', (req, res, next) => {
        res.render('form-select2', { title: 'Form', page_title: 'Forms', folder: 'Select-2' });
    })      
    route.get('/form-validations', (req, res, next) => {
        res.render('form-validations', { title: 'Form', page_title: 'Forms', folder: 'Validation' });
    })      
    route.get('/form-wizard', (req, res, next) => {
        res.render('form-wizard', { title: 'Form', page_title: 'Forms', folder: 'Wizard' });
    })      
    route.get('/icons-feather-icons', (req, res, next) => {
        res.render('icons-feather-icons', { title: 'Icons', page_title: 'Icons', folder: 'Feather Icons' });
    })      
    route.get('/icons-line-icons', (req, res, next) => {
        res.render('icons-line-icons', { title: 'Icons', page_title: 'Icons', folder: 'Line Icons' });
    })      
    route.get('/map-google-maps', (req, res, next) => {
        res.render('map-google-maps', { title: 'Maps', page_title: 'Maps', folder: 'Google Maps' });
    })      
    route.get('/map-vector-maps', (req, res, next) => {
        res.render('map-vector-maps', { title: 'Maps', page_title: 'Maps', folder: 'Vector Maps' });
    })      
    route.get('/pages-coming-soon', (req, res, next) => {
        res.render('pages-coming-soon', {layout:'layouts/layout-without-nav', title: 'Pages', page_title: 'Pages', folder: 'Coming Soon' });
    })      
    route.get('/pages-error-403', (req, res, next) => {
        res.render('pages-error-403', {layout:'layouts/layout-without-nav', title: 'Pages', page_title: 'Pages', folder: 'Coming Soon' });
    })      
    route.get('/pages-error-404', (req, res, next) => {
        res.render('pages-error-404', {layout:'layouts/layout-without-nav', title: 'Pages', page_title: 'Pages', folder: '404 Error' });
    })      
    route.get('/pages-error-505', (req, res, next) => {
        res.render('pages-error-505', {layout:'layouts/layout-without-nav', title: 'Pages', page_title: 'Pages', folder: '505 Error' });
    })      
    route.get('/pages-starter-page', (req, res, next) => {
        res.render('pages-starter-page', {title: 'Pages', page_title: 'Pages', folder: 'Starter Pages' });
    })      
    route.get('/pricing-table', (req, res, next) => {
        res.render('pricing-table', {title: 'Pages', page_title: 'Pricing Table', folder: 'Pricing Table' });
    })      
    route.get('/table-basic-table', (req, res, next) => {
        res.render('table-basic-table', {title: 'Pages', page_title: 'Basic Table', folder: 'Basic Table' });
    })      
    route.get('/table-datatable', (req, res, next) => {
        res.render('table-datatable', {title: 'Pages', page_title: 'Datatable Table', folder: 'Datatable Table' });
    })      
    route.get('/timeline', (req, res, next) => {
        res.render('timeline', {title: 'Pages', page_title: 'Timeline', folder: 'Timeline' });
    })      
    route.get('/user-profile', (req, res, next) => {
        res.render('user-profile', {title: 'Pages', page_title: 'User Profile', folder: 'User Profile' });
    })      
    route.get('/auth-basic-login', (req, res, next) => {
        res.render('auth-basic-login', {title: 'Basic Login', page_title: 'login Pages', folder: 'Auth' ,layout:'layouts/layout-without-nav' });
    })      
    route.get('/auth-basic-forgot-password', (req, res, next) => {
        res.render('auth-basic-forgot-password', {title: 'Basic Forgot Password', page_title: 'login Pages', folder: 'Auth' ,layout:'layouts/layout-without-nav' });
    })      
    route.get('/auth-basic-register', (req, res, next) => {
        res.render('auth-basic-register', {title: 'Basic Register', page_title: 'login Pages', folder: 'Auth' ,layout:'layouts/layout-without-nav' });
    })      
    route.get('/auth-basic-reset-password', (req, res, next) => {
        res.render('auth-basic-reset-password', {title: 'Reset Password', page_title: 'login Pages', folder: 'Auth' ,layout:'layouts/layout-without-nav' });
    })      
    route.get('/auth-boxed-forgot-password', (req, res, next) => {
        res.render('auth-boxed-forgot-password', {title: 'Boxed Forgot Password', page_title: 'login Pages', folder: 'Auth' ,layout:'layouts/layout-without-nav' });
    })      
    route.get('/auth-boxed-login', (req, res, next) => {
        res.render('auth-boxed-login', {title: 'Boxed Login', page_title: 'login Pages', folder: 'Auth' ,layout:'layouts/layout-without-nav' });
    })      
    route.get('/auth-boxed-register', (req, res, next) => {
        res.render('auth-boxed-register', {title: 'Boxed Register', page_title: 'login Pages', folder: 'Auth' ,layout:'layouts/layout-without-nav' });
    })      
    route.get('/auth-boxed-reset-password', (req, res, next) => {
        res.render('auth-boxed-reset-password', {title: 'Boxed Reset password', page_title: 'login Pages', folder: 'Auth' ,layout:'layouts/layout-without-nav' });
    })      
    route.get('/auth-boxed-forgot-password', (req, res, next) => {
        res.render('auth-boxed-forgot-password', {title: 'Boxed Reset password', page_title: 'login Pages', folder: 'Auth' ,layout:'layouts/layout-without-nav' });
    })      
    route.get('/auth-cover-login', (req, res, next) => {
        res.render('auth-cover-login', {title: 'Cover Login', page_title: 'login Pages', folder: 'Auth' ,layout:'layouts/layout-without-nav' });
    })      
    route.get('/auth-cover-register', (req, res, next) => {
        res.render('auth-cover-register', {title: 'Cover register', page_title: 'register Pages', folder: 'Auth' ,layout:'layouts/layout-without-nav' });
    })      
    route.get('/auth-cover-forgot-password', (req, res, next) => {
        res.render('auth-cover-forgot-password', {title: 'Cover Forgot Password', page_title: 'register Pages', folder: 'Auth' ,layout:'layouts/layout-without-nav' });
    })      
    route.get('/auth-cover-reset-password', (req, res, next) => {
        res.render('auth-cover-reset-password', {title: 'Cover Reset Password', page_title: 'register Pages', folder: 'Auth' ,layout:'layouts/layout-without-nav' });
    })      




    // Authentication
    route.get('/login', (req, res, next) => {
        res.render('auth/login', { title: 'Login', layout: 'layouts/layout-without-nav', 'message': req.flash('message'), error: req.flash('error') })
    })

    // validate login form
    route.post("/auth-validate", AuthController.validate)

    // logout
    route.get("/logout", AuthController.logout);

    route.get('/register', (req, res, next) => {
        res.render('auth/register', { title: 'Register', layout: 'layouts/layout-without-nav', message: req.flash('message'), error: req.flash('error') })
    })

    // validate register form
    route.post("/signup", AuthController.signup)

    route.get('/forgotpassword', (req, res, next) => {
        res.render('auth/forgotpassword', { title: 'Forgot password', layout: 'layouts/layout-without-nav', message: req.flash('message'), error: req.flash('error') })
    })

    // send forgot password link on user email
    route.post("/sendforgotpasswordlink", AuthController.forgotpassword)

    // reset password
    route.get("/resetpassword", AuthController.resetpswdview);
    // Change password
    route.post("/changepassword", AuthController.changepassword);

    //500
    route.get('/error', (req, res, next) => {
        res.render('auth/auth-404', { title: '404 Error', layout: 'layouts/layout-without-nav' });
    })
}