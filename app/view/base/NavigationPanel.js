Ext.define('ShoppingApp.view.base.NavigationPanel', {
    extend: 'Ext.tree.Panel',
    xtype: 'navigationpanel',
    controller: 'navigationpanelcontroller',
    rootVisible: false,
    store: {
        type: 'menu'
    },
    listeners: {
        // click:'onClick',
        itemclick: 'onItemClick',
    }

});