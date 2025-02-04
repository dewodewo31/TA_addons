from odoo import http
from odoo.http import request

class UlinPageController(http.Controller):

    @http.route('/ulin_page', type='http', auth='public', website=True)
    def ulin_page(self, **kwargs):
        # Render the form page template
        return request.render('custom_TA.ulin_template', {})