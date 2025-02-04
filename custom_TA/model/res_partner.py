from odoo import models, fields

class ResPartner(models.Model):
    _inherit = 'res.partner'

    authpass = fields.Char(string='Auth Pass', help='Untuk pencarian User Car')
