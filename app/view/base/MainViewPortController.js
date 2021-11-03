Ext.define('ShoppingApp.view.base.MainViewPortController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mainviewportcontroller',
    /**
     * Called when the view is created
     */
    mixins: [

    ],
    routes: {
        'students': 'onStudentUrlActivated',
        'counties': 'onCountiesActivated',
        'student-form-panel': {
            before: 'checkIfHasAdminRights',
            action: 'onShowStudentFormPanel',
        },

        "students/:regNo": {
            action: 'onStudentRegistration',
            conditions: {
                ':regNo': '([0-9]{10})'
            }
        },
        "students/:id": {
            action: 'onShowStudentWithId',
            conditions: {
                ':id': '([0-9]{2})'
            }
        },
    },
    checkIfHasAdminRights: function() {
        //* Case 1 => Calling stop/resume on the action
        //* The function should be receiving the last parameter as 
        //! ACTION
        // //? make a request to the server to check if the user has the right to access this page.

        // let hasAccess = false;
        // if (hasAccess) {
        //     //? process the request
        //     action.resume();
        // } else {
        //     //? stop the current request
        //     TrainingJs.Util.showError("You do not have permission to access this page", action);
        //     action.stop();
        // }

        //* Case 2 => making use of promises
        //? return a promise

        return new Promise(function(resolve, reject) {
            //? make the request to the server to determine if the user is allowed to access this page.
            let hasAccess = false;
            //? if successful
            if (hasAccess) {
                //? return resolve
                resolve();

            } else {
                //! return reject
                reject("You do not have permission to access this page.");
            }

        });


    },
    onStudentRegistration: function(regNo) {
        console.log(regNo);
    },
    onShowStudentWithId: function(id) {
        console.log("Student with id routes was executed");
        //? show form panel
        this.onShowStudentFormPanel();
        //? fill the form with the data
        //! http://localhost:3000/students/2
        let form = Ext.ComponentQuery.query('studentformpanel')[0];
        form.load({
            url: `http://localhost:3000/students/${id}`,
            method: 'GET',
            failure: function(form, action) {
                console.log(action.responseText);
                // Ext.Msg.alert("Load failed", action.result.errorMessage);
            }
        });



    },
    onShowStudentFormPanel: function() {
        console.log("Student new form  was executed");
        //? show add form panel
        this.showView('Add Student', 'studentformpanel', 'fa fa-plus-square');
    },

    onStudentUrlActivated: function() {
        this.showView("Students", "studentview", "fa fa-list-alt");
    },
    showView: function(title, xtype, iconCls) {
        //? get hold of the center panel 
        var centerPanel = Ext.ComponentQuery.query('mainviewport #center')[0];
        //? create the view with students 
        let tab = centerPanel.items.findBy((item, index) => {
            return title === item.title;
        });
        //? add the view to the tabpanel and make it active
        if (!tab) {
            tab = centerPanel.add({
                xtype: xtype,
                title: title,
                iconCls: iconCls,
                closable: true,
            });
        }
        //? make the item active
        centerPanel.setActiveItem(tab);

    },

    onCountiesActivated: function() {
        this.showView("Counties", "countypanel", "fa fa-list-alt");
    },
    init: function() {
        var me = this,
            viewport = me.getView(),
            center = viewport.lookupReference('center');
        // console.log(center);
    },
    onLogout: function() {
        var me = this,
            view = me.getView(),
            model = me.getViewModel(),
            refs = me.getReferences();

        localStorage.removeItem('isLoggedIn');
        view.destroy();
        Ext.create({
            xtype: 'loginwindow'
        });

    }
});