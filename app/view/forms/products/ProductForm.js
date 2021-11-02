Ext.define('ShoppingApp.view.forms.products.ProductForm',{
    extend:'Ext.form.Panel',
    xtype:'productform',
    controller:'productformcontroller',
    width:500,
    items:[{
        xtype:'form',
        title:'New Product',
        reference: 'add-productform',
        defaults: {
            anchor: '100%'
        },
        items :[
                {
                    fieldLabel: 'Product Category',
                    xtype:'combo',
                    store:{
                        type:'categories'
                    },
                    queryMode: 'remote',
                    name:'category',
                    valueField: 'name',
                    displayField:'name',
                    forceSelection:true
                
                },
                {
                    fieldLabel: 'Product Name',
                    xtype:'textfield',
                    name: 'title',
                    allowBlank:false
                },
                {
                    fieldLabel: 'Product Price',
                    xtype:'numberfield',
                    name: 'price',
                    allowBlank:false,
                    hideTrigger:true
                },
               {
                    fieldLabel: 'Product Description',
                    xtype:'textarea',
                    name: 'description',
                    allowBlank:true
                },{
                    xtype: 'filefield',
                    name: 'image',
                    fieldLabel: 'Photo',
                    msgTarget: 'side',
                    allowBlank: false,
                    buttonText: 'Select Image...',
                },{
                    fieldLabel: '',
                    xtype:'textarea',
                    name: 'rate',
                    hidden:true
                },{
                    fieldLabel: '',
                    xtype:'textarea',
                    name: 'count',
                    hidden:true
                }
        
                
        ]
      
        }],
        buttons:[{
            text:'Save',
            formBind:'true',
            handler:'onFormSubmit'
        }]
   
});