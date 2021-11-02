Ext.define('ShoppingApp.model.Category', {
    extend: 'Ext.data.Model',
    xtype:'category',

    fields: [
        {
        name:'id',
        type: 'int'
    },
    {
        name:'name',
        type:'string'

    },
       

    ]
});