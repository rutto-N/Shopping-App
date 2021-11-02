Ext.define('ShoppingApp.view.login.LoginForm',{
    extend:'Ext.window.Window',
    xtype:'loginform',
    controller:'loginformcontroller',
    title:'Login',
    closable:false,
    autoShow:true,   
    hidden:true,
    bodyPadding: 10,
    items: {
        xtype: 'form',
        reference: 'loginform',
        items: [{
            xtype: 'textfield',
            name: 'username',
            fieldLabel: 'Username',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'Password',
            allowBlank: false,
            minLength:8,
        }],
        buttons: [{
            text: 'Login',
            formBind: true,
            handler:'onLoginClick'
        }]
    }

});