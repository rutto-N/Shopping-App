/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ShoppingApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'ShoppingApp.view.main.MainController',
        'ShoppingApp.view.main.MainModel',
        'ShoppingApp.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Home',
        iconCls: 'fa-home',
        items: [{
            // xtype: 'productdataview',
            xtype: 'productview',

        }]
    }, {
        title: 'Category',
        items:[
            {
                xtype:'categoryform'

            }
        ]
    },
    {
        title: 'Product',
        items:[
            {
                xtype:'productform'

            }
        ]
    },
    {
        title:'Login',
        items:[
        {
            xtype:'loginform',
        title: 'Orders - Click here',
        iconCls: 'fa-user',
        items: [
            {
                xtype: 'borderlayout'
            }
        ]
    },
    {
        title: 'Groups',
        items:[
            {
                xtype:'productdataview'
            }
        ]
    }
    ]
       
    }, {
        title: 'Settings',
        iconCls: 'fa-cog',
        bind: {
            html: '{loremIpsum}'
        }
    }]
});
