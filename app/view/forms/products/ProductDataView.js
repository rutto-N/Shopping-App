Ext.define('ShoppingApp.view.forms.products.ProductDataView',{
    extend:'Ext.panel.Panel',
    xtype:'productdataview',
    requires:[

        'ShoppingApp.view.forms.products.ProductDataViewController',
        

    ],
  
    items:[
      {

        frame: true,
        collapsible: true,
        width: 535,
        layout:'hbox',
        xtype:'dataview',
        reference: 'productdataview',
        store:{
          type:'products'
        },
        scrollable: true,
        tpl:new Ext.XTemplate(
          '<tpl for=".">',
              '<div style="margin-bottom: 10px;" class="thumb-wrap">',
                '<img width="50" height="50" src="{image}" />',//image
                '<br/><span>Kshs {price}</span>',//title
                // '<br/><p>{description}</p>',//description
              '</div>',
          '</tpl>',
    
      ),
      height: 310,
      // trackOver: true,
      overItemCls: 'x-item-over',
      itemSelector: 'div.thumb-wrap',
      emptyText: 'No images to display',
        itemSelector: 'div.thumb-wrap',
        emptyText: 'No images available',
     
      }
    ],listeners:{
      itemclick:'onDataItemClick'
    }
  });



