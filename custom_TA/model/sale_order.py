from odoo import models, fields

class SaleOrder(models.Model):
    _inherit = 'sale.order'

    owner_id = fields.Many2one(
        'res.partner', 
        string='Pemilik', 
        domain="[('is_company', '=', False)]",
        help="Pilih pemilik kendaraan"
    )

    insurance_type = fields.Selection([
        ('insurance', 'Asuransi'),
        ('non_insurance', 'Non-Asuransi')
    ], string="Tipe Asuransi", default='non_insurance', help="Pilih tipe asuransi untuk pesanan ini")


