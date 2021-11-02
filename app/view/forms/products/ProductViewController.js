// onDetailsClick

Ext.define('ShoppingApp.view.forms.products.ProductViewController',{
    extend:'Ext.app.ViewController',
    alias:'controller.productviewcontroller',
    ready: false,
    init:function(){
        var me=this,
       view = me.getView(),
       store=view.getStore();
       console.log(store);
       store.load();
    },onDetailsClick:function(){
        var me=this,
       view = me.getView();
       var records = view.getSelectionModel().getSelection();

       console.log(records);

    }
    
});