from odoo import http
from odoo.http import request

class HePageController(http.Controller):

    @http.route('/he_page', type='http', auth='public', website=True)
    def he_page(self, **kwargs):
        # Render the form page template
        return request.render('custom_TA.he_template', {})