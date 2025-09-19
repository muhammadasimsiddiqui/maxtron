from flask import Flask, render_template

app = Flask(__name__)

# @app.route("/")
# def home():
#     return render_template('index.html', title='Server Management')
# Route handler for dynamic URLs

@app.route("/", defaults={'path': 'index'})
@app.route("/<path:path>")
def dynamic(path):
    # Map paths to templates
    templates = {
        'icons-feather-icons' : 'icons-feather-icons.html',
        'icons-line-icons' : 'icons-line-icons.html',
        'index' : 'index.html',
        'index2' : 'index2.html',
        'map-google-maps' : 'map-google-maps.html',
        'map-vector-maps' : 'map-vector-maps.html',
        'pages-coming-soon' : 'pages-coming-soon.html',
        'pages-error-403' : 'pages-error-403.html',
        'pages-error-404' : 'pages-error-404.html',
        'pages-error-505' : 'pages-error-505.html',
        'pages-starter-page' : 'pages-starter-page.html',
        'pricing-table' : 'pricing-table.html',
        'table-basic-table' : 'table-basic-table.html',
        'table-datatable' : 'table-datatable.html',
        'timeline' : 'timeline.html',
        'user-profile' : 'user-profile.html',
        'widgets-data' : 'widgets-data.html',
        'widgets-static' : 'widgets-static.html',
        'app-chat-box' : 'app-chat-box.html',
        'app-emailbox' : 'app-emailbox.html',
        'app-emailread' : 'app-emailread.html',
        'app-file-manager' : 'app-file-manager.html',
        'app-fullcalender' : 'app-fullcalender.html',
        'app-invoice' : 'app-invoice.html',
        'app-to-do' : 'app-to-do.html',
        'auth-basic-forgot-password' : 'auth-basic-forgot-password.html',
        'auth-basic-login' : 'auth-basic-login.html',
        'auth-basic-register' : 'auth-basic-register.html',
        'auth-basic-reset-password' : 'auth-basic-reset-password.html',
        'auth-boxed-forgot-password' : 'auth-boxed-forgot-password.html',
        'auth-boxed-login' : 'auth-boxed-login.html',
        'auth-boxed-register' : 'auth-boxed-register.html',
        'auth-boxed-reset-password' : 'auth-boxed-reset-password.html',
        'auth-cover-forgot-password' : 'auth-cover-forgot-password.html',
        'auth-cover-login' : 'auth-cover-login.html',
        'auth-cover-register' : 'auth-cover-register.html',
        'auth-cover-reset-password' : 'auth-cover-reset-password.html',
        'cards' : 'cards.html',
        'charts-apex-chart' : 'charts-apex-chart.html',
        'charts-chartjs' : 'charts-chartjs.html',
        'component-accordions' : 'component-accordions.html',
        'component-alerts' : 'component-alerts.html',
        'component-avtars-chips' : 'component-avtars-chips.html',
        'component-badges' : 'component-badges.html',
        'component-buttons' : 'component-buttons.html',
        'component-cards-advance' : 'component-cards-advance.html',
        'component-cards-basic' : 'component-cards-basic.html',
        'component-cards-contact' : 'component-cards-contact.html',
        'component-carousels' : 'component-carousels.html',
        'component-media-object' : 'component-media-object.html',
        'component-modals' : 'component-modals.html',
        'component-navbar' : 'component-navbar.html',
        'component-navs-tabs' : 'component-navs-tabs.html',
        'component-notifications' : 'component-notifications.html',
        'component-paginations' : 'component-paginations.html',
        'component-popovers-tooltips' : 'component-popovers-tooltips.html',
        'component-progress-bars' : 'component-progress-bars.html',
        'component-spinners' : 'component-spinners.html',
        'component-text-utilities' : 'component-text-utilities.html',
        'component-typography' : 'component-typography.html',
        'ecommerce-add-product' : 'ecommerce-add-product.html',
        'ecommerce-customer-details' : 'ecommerce-customer-details.html',
        'ecommerce-customers' : 'ecommerce-customers.html',
        'ecommerce-order-details' : 'ecommerce-order-details.html',
        'ecommerce-orders' : 'ecommerce-orders.html',
        'ecommerce-products' : 'ecommerce-products.html',
        'faq' : 'faq.html',
        'form-date-time-pickes' : 'form-date-time-pickes.html',
        'form-elements' : 'form-elements.html',
        'form-file-upload' : 'form-file-upload.html',
        'form-input-group' : 'form-input-group.html',
        'form-layouts' : 'form-layouts.html',
        'form-radios-and-checkboxes' : 'form-radios-and-checkboxes.html',
        'form-repeater' : 'form-repeater.html',
        'form-select2' : 'form-select2.html',
        'form-validations' : 'form-validations.html',
        'form-wizard' : 'form-wizard.html',
        'icons-boxicons' : 'icons-boxicons.html',
    }

    # Check if the path exists in the templates mapping
    if path in templates:
        return render_template(templates[path], title=path.capitalize())
    else:
        return render_template('pages-error-404.html', title='Page Not Found'), 404


if __name__ == '__main__':
    app.run(debug=True,port=5050)