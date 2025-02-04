from odoo import http
from odoo.http import request

class HomePageController(http.Controller):

    @http.route('/home_page', type='http', auth='public', website=True)
    def home_page(self, **kwargs):
        # Render the form page template
        return request.render('custom_TA.home_template', {})