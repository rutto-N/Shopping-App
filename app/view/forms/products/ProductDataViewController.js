Ext.define('ShoppingApp.view.forms.products.ProductDataViewController',{
    extend:'Ext.app.ViewController',
    alias:'controller.productdataviewcontroller',
    ready: false,
    init:function(){
        var me=this,
       view = me.getView(),
       store=view.getStore();
       console.log(store);
       store.load();
    },onDataItemClick:function( panel, record, item, index, e, eOpts ){

        console.log("dfsdfrt");
        // let me=this;
        // view=me.lookupReference('productdataview');
        console.log(record);
        console.log(item);

        
    }
    
});