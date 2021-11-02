Ext.define('ShoppingApp.view.layouts.BorderLayout', {
    extend: 'Ext.window.Window',
    xtype: 'borderlayout',
    autoShow: true,
    width: 520,
    shadow: true,
    modal: true,
    autoShow: true,
    closable: true,
    maximizable: true,
    // title: 'Border layout',
    height: 500,
    layout: 'border',
    items: [{
            title: 'Nancy & Kevin Showcase',
            region: 'north', // position for region
            xtype: 'panel',
            height: 50,
            split: true, // enable resizing
            margin: '0 5 5 5'
        }, {
            title: 'Designed by Kevin & Nancy',
            region: 'south', // position for region
            xtype: 'panel',
            height: 50,
            split: true, // enable resizing
            margin: '0 5 5 5'
        },
        {
            // xtype: 'panel' implied by default
            title: 'Choose category',
            region: 'west',
            xtype: 'panel',
            margin: '5 0 0 5',
            width: 200,
            collapsible: true, // make collapsible
            id: 'west-region-container',
            layout: 'fit'
        },
        {
            // xtype: 'panel' implied by default
            title: 'Help Centre',
            region: 'east',
            xtype: 'panel',
            margin: '5 0 0 5',
            width: 200,
            collapsible: true, // make collapsible
            id: 'east-region-container',
            layout: 'fit'
        }, {
            title: 'Top Selling Items',
            region: 'center', // center region is required, no width/height specified
            xtype: 'panel',
            layout: 'fit',
            margin: '5 5 0 0'
        },
    ],
});