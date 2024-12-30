sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],(Controller,MessageToast)=>{
    "use strict";

    return Controller.extend("ui5.tutorial.controller.HelloPanel",{
        onShowHello(){
            //read message from i18n model
            const oBundle = this.getView().getModel("i18n").getResourceBundle();
            const sRecipient = this.getView().getModel().getProperty("/recipient/name");
            const sMsg = oBundle.getText("helloMsg",[sRecipient]);

            //show Message
            MessageToast.show(sMsg);
        }
    })
})