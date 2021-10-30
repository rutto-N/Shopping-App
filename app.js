/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'ShoppingApp.Application',

    name: 'ShoppingApp',

    requires: [
        // This will automatically load all classes in the ShoppingApp namespace
        // so that application classes do not need to require each other.
        'ShoppingApp.*'
    ],

    // The name of the initial view to create.
    mainView: 'ShoppingApp.view.main.Main'
});
