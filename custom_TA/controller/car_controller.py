from odoo import http
from odoo.http import request

class CarPageController(http.Controller):

    @http.route('/car_page', type='http', auth='public', website=True)
    def car_page(self, **kwargs):
        # Render the car page template
        return request.render('custom_TA.car_template', {})

    @http.route('/role_page', type='http', auth='public', website=True)
    def role_page(self, **kwargs):
        # Render the role page template
        return request.render('custom_TA.role_template', {})
class RoleController(http.Controller):

    @http.route('/verify_auth_pass', type='json', auth='public', methods=['POST'])
    def verify_auth_pass(self, auth_pass, role_type):
        # Pencarian berdasarkan role dan is_company
        if role_type == 'car_owner':
            # Car Owner adalah is_company = False
            owner = request.env['res.partner'].search([('auth_pass', '=', auth_pass), ('is_company', '=', False)], limit=1)
            if owner:
                return {'status': 'success', 'message': 'Car Owner found', 'data': owner.name}
            else:
                return {'status': 'error', 'message': 'Car Owner not found'}
        
        elif role_type == 'business_owner':
            # Business Owner adalah is_company = True
            owner = request.env['res.partner'].search([('auth_pass', '=', auth_pass), ('is_company', '=', True)], limit=1)
            if owner:
                return {'status': 'success', 'message': 'Business Owner found', 'data': owner.name}
            else:
                return {'status': 'error', 'message': 'Business Owner not found'}
        
        return {'status': 'error', 'message': 'Invalid role type'}