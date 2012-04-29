define("vdbc/LoginPanel", [
    "dojo/_base/declare",
    "dijit/form/TextBox",
    "dijit/_Widget",
    "dijit/_Templated",
    "dojo/text!./templates/LoginPanel.html"],
    function (declare, TextBox, _Widget, _Templated, template) {
        return declare("vdbc.LoginPanel", [_Widget, _Templated], {
            loginListener:null,

            templateString:template,
            widgetsInTemplate:true,
            _userName: null,
            _password: null,

            postCreate:function () {

            }
        });
    });