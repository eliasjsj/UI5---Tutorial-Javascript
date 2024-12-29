sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller)=>{
    "use strict"

    return Controller.extend("ui5.tutorial.controller.App",{
        onShowHello(){
            //Show a native Javascript Alert
            alert("Fala Mano!");
        }
    });
});