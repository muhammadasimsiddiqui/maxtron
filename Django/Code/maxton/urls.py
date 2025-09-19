"""
URL configuration for maxton project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/dev/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.urls import include, path
from . import views

urlpatterns = [
    path('', views.IndexView),
    path('icons-feather-icons', views.IconsFeatherIconsView),
    path('icons-line-icons', views.IconsLineIconsView),
    path('index-two', views.IndexTwoView),
    path('map-google-maps', views.MapGoogleMapsView),
    path('map-vector-maps', views.MapVectorMapsView),
    path('pages-coming-soon', views.PagesComingSoonView),
    path('pages-error-403', views.PagesError403View),
    path('pages-error-404', views.PagesError404View),
    path('pages-error-505', views.PagesError505View),
    path('pages-starter-page', views.PagesStarterPageView),
    path('pricing-table', views.PricingTableView),
    path('table-basic-table', views.TableBasicTableView),
    path('table-datatable', views.TableDatatableView),
    path('timeline', views.TimelineView),
    path('user-profile', views.UserProfileView),
    path('widgets-data', views.WidgetsDataView),
    path('widgets-static', views.WidgetsStaticView),
    path('app-chat-box', views.AppChatBoxView),
    path('app-emailbox', views.AppEmailboxView),
    path('app-emailread', views.AppEmailreadView),
    path('app-file-manager', views.AppFileManagerView),
    path('app-fullcalender', views.AppFullcalenderView),
    path('app-invoice', views.AppInvoiceView),
    path('app-to-do', views.AppToDoView),
    path('auth-basic-forgot-password', views.AuthBasicForgotPasswordView),
    path('auth-basic-login', views.AuthBasicLoginView),
    path('auth-basic-register', views.AuthBasicRegisterView),
    path('auth-basic-reset-password', views.AuthBasicResetPasswordView),
    path('auth-boxed-forgot-password', views.AuthBoxedForgotPasswordView),
    path('auth-boxed-login', views.AuthBoxedLoginView),
    path('auth-boxed-register', views.AuthBoxedRegisterView),
    path('auth-boxed-reset-password', views.AuthBoxedResetPasswordView),
    path('auth-cover-forgot-password', views.AuthCoverForgotPasswordView),
    path('auth-cover-login', views.AuthCoverLoginView),
    path('auth-cover-register', views.AuthCoverRegisterView),
    path('auth-cover-reset-password', views.AuthCoverResetPasswordView),
    path('cards', views.CardsView),
    path('charts-apex-chart', views.ChartsApexChartView),
    path('charts-chartjs', views.ChartsChartjsView),
    path('component-accordions', views.ComponentAccordionsView),
    path('component-alerts', views.ComponentAlertsView),
    path('component-avtars-chips', views.ComponentAvatarsChipsView),
    path('component-badges', views.ComponentBadgesView),
    path('component-buttons', views.ComponentButtonsView),
    path('component-cards-advance', views.ComponentCardsAdvanceView),
    path('component-cards-basic', views.ComponentCardsBasicView),
    path('component-cards-contact', views.ComponentCardsContactView),
    path('component-carousels', views.ComponentCarouselsView),
    path('component-media-object', views.ComponentMediaObjectView),
    path('component-modals', views.ComponentModalsView),
    path('component-navbar', views.ComponentNavbarView),
    path('component-navs-tabs', views.ComponentNavsTabsView),
    path('component-notifications', views.ComponentNotificationsView),
    path('component-paginations', views.ComponentPaginationsView),
    path('component-popovers-tooltips', views.ComponentPopoversTooltipsView),
    path('component-progress-bars', views.ComponentProgressBarsView),
    path('component-spinners', views.ComponentSpinnersView),
    path('component-text-utilities', views.ComponentTextUtilitiesView),
    path('component-typography', views.ComponentTypographyView),
    path('ecommerce-add-product', views.EcommerceAddProductView),
    path('ecommerce-customer-details', views.EcommerceCustomerDetailsView),
    path('ecommerce-customers', views.EcommerceCustomersView),
    path('ecommerce-order-details', views.EcommerceOrderDetailsView),
    path('ecommerce-orders', views.EcommerceOrdersView),
    path('ecommerce-products', views.EcommerceProductsView),
    path('faq', views.FAQView),
    path('form-date-time-pickes', views.FormDateTimePickersView),
    path('form-elements', views.FormElementsView),
    path('form-file-upload', views.FormFileUploadView),
    path('form-input-group', views.FormInputGroupView),
    path('form-layouts', views.FormLayoutsView),
    path('form-radios-and-checkboxes', views.FormRadiosAndCheckboxesView),
    path('form-repeater', views.FormRepeaterView),
    path('form-select2', views.FormSelect2View),
    path('form-validations', views.FormValidationsView),
    path('form-wizard', views.FormWizardView),
    path('icons-boxicons', views.IconsBoxiconsView),
]
 