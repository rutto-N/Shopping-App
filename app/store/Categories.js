Ext.define('ShoppingApp.store.Categories', {
    extend: 'Ext.data.Store',

    alias: 'store.categories',

    model: 'ShoppingApp.model.Category',

    proxy: {
        type: 'rest',
        url:'http://localhost:3000/categories',
        reader: {
            type: 'json',
            rootProperty: 'categories'
        },
        autoload:true
    },
    
});