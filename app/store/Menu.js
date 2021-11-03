Ext.define('ShoppingApp.store.Menu', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.menu',
    storeId: 'menu',

    root: {
        expanded: true,
        children: [{
                text: 'Products',
                expanded: true,
                children: [{
                        text: 'Products',
                        leaf: true,
                        xtype: 'productdataview',
                    },
                    {
                        text: 'Add Product',
                        leaf: true,
                        xtype: 'productform',
                    }
                ]
            }, {
                text: 'Category',
                expanded: true,
                children: [{
                        text: 'Category Form',
                        leaf: true,
                        xtype: 'categoryform',
                    }
                ]
            },
            {
                text: 'Orders',
                expanded: true,
                children: [{
                        text: 'Users',
                        leaf: true,
                        xtype: 'userview'
                    },
                    
                ]
            },
            {
                text: 'Login',
                expanded: true,
                children: [
                    {
                        text: 'Form',
                        leaf: true,
                        xtype: 'loginform'
                    },
                ]
            }
        ]
    }

});