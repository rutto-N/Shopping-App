Ext.define('ShoppingApp.view.forms.category.CategoryFormController',{
    extend:'Ext.app.ViewController',
    alias:'controller.categoryformcontroller',
    onFormSubmit:function(){

                let me=this,
                window=me.getView();
                form =window.lookupReference('add-categoryform').getForm();
                
                var url = ' http://localhost:3000/categories';
                let method='POST';

                if (form.isValid()) {
                    form.submit({
                      url: url,
                      method: method,
                      success: function(form, action) {
                        Ext.Msg.alert('Success', action.result.msg);

                      },
                      failure: function(form, action) {
                        if (action.response.status === 201 || action.response.status === 200) {

                          Ext.Msg.alert('Success', 'Saved successfully');
                          form.reset();
                        } else {
                          switch (action.failureType) {
                            case Ext.form.action.Action.CLIENT_INVALID:
                              Ext.Msg.alert(
                                'Failure',
                                'Form fields may not be submitted with invalid values'
                              );
                              break;
                            case Ext.form.action.Action.CONNECT_FAILURE:
                              Ext.Msg.alert('Failure', 'Ajax communication failed');
                              break;
                            case Ext.form.action.Action.SERVER_INVALID:
                              Ext.Msg.alert('Failure', action.result.msg);
                          }
                        }
                      }
                    });
                  } else {
                    alert('Not valid details');
                  }



        


    }
    
});