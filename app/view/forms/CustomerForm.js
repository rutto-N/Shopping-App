Ext.define('ShoppingApp.view.forms.CustomerForm',{
    extend:'Ext.form.Panel',
    xtype:'customerform',
    defaultType:'textfield',
    layout:'form',
    items:[
        {
            xtype:'fieldset',
            title:'Registration',
            items :[{
                fieldLabel: 'Email Address',
                xtype:'textfield',
                name: 'field1',
                vtype:'email'
            }, {
                fieldLabel: 'Date Of Birth',
                xtype:'datefield',
                name: 'field2'
            }]


        }
    ]
});