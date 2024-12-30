sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], (Controller, MessageToast, JSONModel, ResourceModel)=>{
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

            //Set i18n model on view
            const i18nModel = new ResourceModel({
                bundleName:"ui5.tutorial.i18n.i18n"
            });
            this.getView().setModel(i18nModel,"i18n");
        },

        onShowHello(){
            //read msg from i18n model
            const oBundle = this.getView().getModel("i18n").getResourceBundle();
            const sRecipient = this.getView().getModel().getProperty("/recipient/name");
            const sMsg = oBundle.getText("helloMsg", [sRecipient]);

            //Show Message
            MessageToast.show(sMsg);
        }
    });
});