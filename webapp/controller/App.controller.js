sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], (Controller, MessageToast, JSONModel)=>{
    "use strict"

    return Controller.extend("ui5.tutorial.controller.App",{
        onInit(){
            //set Data model on View
            const oData = {
                recipient:{
                    name: "Camarada"
                }
            };
            const oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
        },

        onShowHello(){
            MessageToast.show("Fala MANO BROW!");
        }
    });
});