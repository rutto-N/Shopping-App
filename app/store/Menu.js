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
                        url: 'products',
                        leaf: true,
                        xtype: 'countypanel',
                    },
                    {
                        text: 'Add Product',
                        leaf: true,
                        url: 'add-county',
                        xtype: 'countyformpanel',
                    }
                ]
            }, {
                text: 'Users',
                expanded: true,
                children: [{
                        text: 'Users',
                        leaf: true,
                        url: 'users',
                        xtype: 'studentview',
                        iconCls: 'fas fa-users',
                    },
                    {
                        text: 'Add User',
                        leaf: true,
                        url: 'student-form-panel',
                        xtype: 'studentformpanel',
                        iconCls: 'fas fa-user-edit'
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
                    {
                        text: 'algebra',
                        leaf: true
                    }
                ]
            },
            {
                text: 'Posts',
                expanded: true,
                children: []
            }
        ]
    }

});