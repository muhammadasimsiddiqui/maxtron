<!-- index.php -->
<?php
$page = isset($_GET['page']) ? $_GET['page'] : 'index';
$include_layout = true; // Variable to control layout inclusion
$content = null;
$extra_css = [];
$extra_js = [];
$inline_js = '';

switch ($page) {
    case 'index':
        $content = 'pages/index.php';
        break;
    case 'index2':
        $content = 'pages/index2.php';
        break;
    case 'timeline':
        $content = 'pages/timeline.php';
        break;
    case 'index':
        $content = 'pages/index.php';
        break;
    case 'index-two':
        $content = 'pages/index-two.php';
        break;
    case 'icons-feather-icons':
        $content = 'pages/icons-feather-icons.php';
        break;
    case 'icons-line-icons':
        $content = 'pages/icons-line-icons.php';
        break;
    case 'map-google-maps':
        $content = 'pages/map-google-maps.php';
        break;
    case 'map-vector-maps':
        $content = 'pages/map-vector-maps.php';
        break;
    case 'pages-coming-soon':
        $content = 'pages/pages-coming-soon.php';
        $include_layout = false; //

        break;
    case 'pages-error-403':
        $content = 'pages/pages-error-403.php';
        $include_layout = false; //

        break;
    case 'pages-error-404':
        $content = 'pages/pages-error-404.php';
        $include_layout = false; //

        break;
    case 'pages-error-505':
        $content = 'pages/pages-error-505.php';
        $include_layout = false; //

        break;
    case 'pages-starter-page':
        $content = 'pages/pages-starter-page.php';

        break;
    case 'pricing-table':
        $content = 'pages/pricing-table.php';
        break;
    case 'table-basic-table':
        $content = 'pages/table-basic-table.php';
        break;
    case 'table-datatable':
        $content = 'pages/table-datatable.php';
        break;
    case 'user-profile':
        $content = 'pages/user-profile.php';
        break;
    case 'widgets-data':
        $content = 'pages/widgets-data.php';
        break;
    case 'widgets-static':
        $content = 'pages/widgets-static.php';
        break;
    case 'app-chat-box':
        $content = 'pages/app-chat-box.php';
        break;
    case 'app-emailbox':
        $content = 'pages/app-emailbox.php';
        break;
    case 'app-emailread':
        $content = 'pages/app-emailread.php';
        break;
    case 'app-file-manager':
        $content = 'pages/app-file-manager.php';
        break;
    case 'app-fullcalender':
        $content = 'pages/app-fullcalender.php';
        break;
    case 'app-to-do':
        $content = 'pages/app-to-do.php';
        break;
    case 'auth-basic-forgot-password':
        $content = 'pages/auth-basic-forgot-password.php';
        $include_layout = false; //
        break;
    case 'auth-basic-login':
        $content = 'pages/auth-basic-login.php';
         $include_layout = false; //
        break;
    case 'app-invoice':
        $content = 'pages/app-invoice.php';
        break;
    case 'auth-basic-register':
        $content = 'pages/auth-basic-register.php';
         $include_layout = false; //
        break;
    case 'auth-basic-reset-password':
        $content = 'pages/auth-basic-reset-password.php';
         $include_layout = false; //
        break;
    case 'auth-boxed-forgot-password':
        $content = 'pages/auth-boxed-forgot-password.php';
         $include_layout = false; //
        break;
    case 'auth-boxed-login':
        $content = 'pages/auth-boxed-login.php';
         $include_layout = false; //
        break;
    case 'auth-boxed-register':
        $content = 'pages/auth-boxed-register.php';
         $include_layout = false; //
        break;
    case 'auth-boxed-reset-password':
        $content = 'pages/auth-boxed-reset-password.php';
         $include_layout = false; //
        break;
    case 'auth-cover-forgot-password':
        $content = 'pages/auth-cover-forgot-password.php';
         $include_layout = false; //
        break;
    case 'auth-cover-login':
        $content = 'pages/auth-cover-login.php';
         $include_layout = false; //
        break;
    case 'auth-cover-register':
        $content = 'pages/auth-cover-register.php';
         $include_layout = false; //
        break;
    case 'auth-cover-reset-password':
        $content = 'pages/auth-cover-reset-password.php';
         $include_layout = false; //
        break;
    case 'cards':
        $content = 'pages/cards.php';
        break;
    case 'charts-apex-chart':
        $content = 'pages/charts-apex-chart.php';
        break;
    case 'charts-chartjs':
        $content = 'pages/charts-chartjs.php';
        break;
    case 'component-accordions':
        $content = 'pages/component-accordions.php';
        break;
    case 'component-alerts':
        $content = 'pages/component-alerts.php';
        break;
    case 'component-avtars-chips':
        $content = 'pages/component-avtars-chips.php';
        break;
    case 'component-badges':
        $content = 'pages/component-badges.php';
        break;
    case 'component-buttons':
        $content = 'pages/component-buttons.php';
        break;
    case 'component-cards-advance':
        $content = 'pages/component-cards-advance.php';
        break;
    case 'component-cards-basic':
        $content = 'pages/component-cards-basic.php';
        break;
    case 'component-cards-contact':
        $content = 'pages/component-cards-contact.php';
        break;
    case 'component-carousels':
        $content = 'pages/component-carousels.php';
        break;
    case 'component-media-object':
        $content = 'pages/component-media-object.php';
        break;
    case 'component-modals':
        $content = 'pages/component-modals.php';
        break;
    case 'component-navbar':
        $content = 'pages/component-navbar.php';
        break;
    case 'component-navs-tabs':
        $content = 'pages/component-navs-tabs.php';
        break;
    case 'component-notifications':
        $content = 'pages/component-notifications.php';
        break;
    case 'component-paginations':
        $content = 'pages/component-paginations.php';
        break;
    case 'component-popovers-tooltips':
        $content = 'pages/component-popovers-tooltips.php';
        break;
    case 'component-progress-bars':
        $content = 'pages/component-progress-bars.php';
        break;
    case 'component-spinners':
        $content = 'pages/component-spinners.php';
        break;
    case 'component-text-utilities':
        $content = 'pages/component-text-utilities.php';
        break;
    case 'component-typography':
        $content = 'pages/component-typography.php';
        break;
    case 'ecommerce-add-product':
        $content = 'pages/ecommerce-add-product.php';
        break;
    case 'ecommerce-customer-details':
        $content = 'pages/ecommerce-customer-details.php';
        break;
    case 'ecommerce-customers':
        $content = 'pages/ecommerce-customers.php';
        break;
    case 'ecommerce-order-details':
        $content = 'pages/ecommerce-order-details.php';
        break;
    case 'ecommerce-orders':
        $content = 'pages/ecommerce-orders.php';
        break;
    case 'ecommerce-products':
        $content = 'pages/ecommerce-products.php';
        break;
    case 'faq':
        $content = 'pages/faq.php';
        break;
    case 'form-date-time-pickes':
        $content = 'pages/form-date-time-pickes.php';
        break;
    case 'form-elements':
        $content = 'pages/form-elements.php';
        break;
    case 'form-file-upload':
        $content = 'pages/form-file-upload.php';
        break;
    case 'form-input-group':
        $content = 'pages/form-input-group.php';
        break;
    case 'form-layouts':
        $content = 'pages/form-layouts.php';
        break;
    case 'form-radios-and-checkboxes':
        $content = 'pages/form-radios-and-checkboxes.php';
        break;
    case 'form-repeater':
        $content = 'pages/form-repeater.php';
        break;
    case 'form-select2':
        $content = 'pages/form-select2.php';
        break;
    case 'form-validations':
        $content = 'pages/form-validations.php';
        break;
    case 'form-wizard':
        $content = 'pages/form-wizard.php';
        break;
    case 'icons-boxicons':
        $content = 'pages/icons-boxicons.php';
        break;

        $content = null;
        break;
}

include 'base.php';
?>
