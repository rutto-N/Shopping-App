Ext.define('ShoppingApp.store.Products', {
    extend: 'Ext.data.Store',

    alias: 'store.products',
    
    id:'products',

    model: 'ShoppingApp.model.Product',

    proxy: {
    type: 'rest',
    url: 'http://localhost:3000/products',
    reader: {
        type: 'json',
        rootProperty: 'products'
    }
},
autoLoad: true,
sortOnLoad:true,
sorters: [{
    property: 'title',
    direction: 'ASC'
}],
pageSize: 10
    
});

