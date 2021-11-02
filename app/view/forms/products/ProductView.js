Ext.define('ShoppingApp.view.forms.products.ProductView',{
    extend:'Ext.grid.Panel',
    xtype:'productview',
    cls: 'product-view',
    controller:'productviewcontroller',
    store:{
        type:'products'
    },
    requires: [
        'ShoppingApp.store.Products',
        'Ext.grid.column.Column',
        // 'Ext.grid.cell.*'
    ],
    title: 'Products',
    selModel:{
        type:'checkboxmodel',
        mode:'SINGLE'

    },
    
    columns:[       
        { text: '#', dataIndex: 'id' },
        { text: 'Name', dataIndex: 'title' },
        { text: 'Price', dataIndex: 'price'},
        { text: 'Desc', dataIndex: 'description',     flex: 1},
        {
            text: 'Thumbnail',
            dataIndex: 'image',
            tpl: '<div  class="grid-image" style="background-image:url(\'{image}\')"></div>',
            cell: {
                encodeHtml: false
            },  flex: 3
          
        }

    ],
    tbar:[
        {
            text:'Details',
            handler:'onDetailsClick'
        }
    ]


});
