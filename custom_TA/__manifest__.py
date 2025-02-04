{
    'name': 'Trinity Page',
    'version': '1.0',
    'summary': 'Trinity Auto Web Page',
    'description': 'Web Design Development',
    'category': 'Website',
    'author': '-',
    'depends': ['website', 'sale', 'contacts'],
    'data': [
        'views/assets.xml',  # File untuk mengelola asset tambahan
        'views/home/home.xml',  # Template untuk halaman utama
        'views/car/car.xml', 
        'views/he/he.xml', 
        'views/ulin/ulin.xml',
        
        'views/car/navbar_car.xml', 
        'views/car/body_car.xml', 
        'views/car/user_pick.xml',
        'views/car/business_owner.xml',
        'views/car/car_owner.xml',


        'views/sale_order.xml',
        'views/res_partner_views.xml',
    ],
    'qweb': [],  # Jika ada QWeb template tambahan, masukkan di sini
    'installable': True,
    'application': True,
    'license': 'LGPL-3',
    'assets': {
        'web.assets_frontend': [
            'custom_TA/static/src/css/style.css',
            'custom_TA/static/src/css/ulin.css'
        ],
    },
}
