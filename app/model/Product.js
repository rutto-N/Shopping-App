Ext.define('ShoppingApp.model.Product', {
    extend: 'Ext.data.Model',

    fields: [
        {
        name:'id',
        type: 'int'
    },
    {
        name:'title',//name
        type:'string'

    },
    {
        name:'category',
        type:'string',
        reference:'category'

    },
    {
        name:'price',
        type:'int',

    },
    {
        name:'description',
        type:'string'

    },
    {
        name:'image',
        type:'string'

    },
    {
        name:'rating.rate',
        type:'int'
    },
    {
        name:'rating.count',
        type:'int'
    }
       

    ]
});