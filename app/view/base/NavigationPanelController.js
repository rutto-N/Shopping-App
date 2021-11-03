Ext.define('ShoppingApp.view.base.NavigationPanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.navigationpanelcontroller',
    /**
     * Called when the view is created
     */
    mixins: [

    ],
    init: function() {},
    onItemClick: function(treepanel, record, item, index, e, eOpts) {
        console.log(record);
        this.redirectTo(record.get('url'));

    }
});