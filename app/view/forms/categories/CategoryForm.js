Ext.define('ShoppingApp.view.forms.category.CategoryForm',{
    extend:'Ext.form.Panel',
    xtype:'categoryform',
    controller:'categoryformcontroller',
    width:500,
    items:[{
        xtype:'form',
        title:'New Customer',
        reference: 'add-categoryform',
        defaults: {
            anchor: '100%'
        },
        items :[
                
                {
                    fieldLabel: 'Category Name',
                    xtype:'textfield',
                    name: 'name',
                    allowBlank:false
                },
                
        ],
        }],
    buttons:[{
        text:'Save',
        formBind:'true',
        handler:'onFormSubmit'
    }]
});