from odoo import http
from odoo.http import request

class RoleController(http.Controller):

    @http.route('/business_owner', type='http', auth='public', website=True)
    def business_owner_page(self, **kwargs):
        # Render the business owner template
        return request.render('custom_TA.business_template', {})

    @http.route('/car_owner', type='http', auth='public', website=True)
    def car_owner_page(self, **kwargs):
        # Render the car owner template
        return request.render('custom_TA.car_template', {})