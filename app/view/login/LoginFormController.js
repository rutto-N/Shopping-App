Ext.define('ShoppingApp.view.login.LoginFormController',{
    extend:'Ext.app.ViewController',
    alias:'controller.loginformcontroller',

    onLoginClick:function(){
        var me=this;
        localStorage.setItem("Logged In", true);
        me.getView().close();
        Ext.widget('mainapp');
        
    }

});