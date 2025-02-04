from odoo import http
from odoo.http import request

class RoleController(http.Controller):

      @http.route('/business_owner', type='http', auth='public', website=True)
      def business_owner_page(self, **kwargs):
        # Ambil partner yang merupakan perusahaan dan memiliki invoice
        partners = request.env['res.partner'].search([
            ('is_company', '=', True),  # Hanya Business Owner (Perusahaan)
            ('invoice_ids', '!=', False)  # Hanya yang memiliki invoice
        ])
        
        # Kirim data ke template
        return request.render('custom_TA.business_template', {
            'partners': partners,
        })

      @http.route('/car_owner', type='http', auth='public', website=True)
      def car_owner_page(self, **kwargs):
        # Ambil partner yang memiliki invoice (status posted)
        partners = request.env['res.partner'].search([
            ('is_company', '=', False),
            ('invoice_ids', '!=', False)  # Pastikan partner memiliki invoice
        ])
        
        # Kirim data ke template
        return request.render('custom_TA.car_template', {
            'partners': partners,
        })

