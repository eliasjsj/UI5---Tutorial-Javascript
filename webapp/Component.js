sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "sap/ui/Device"
 ], (UIComponent, JSONModel, ResourceModel, Device) => {
    "use strict";
 
    return UIComponent.extend("ui5.tutorial.Component", {
       metadata : {
          interfaces: ["sap.ui.core.IAsyncContentCreation"],
          metadata: "json"
       },
 
       init() {
          // call the init function of the parent
          UIComponent.prototype.init.apply(this, arguments);
          // set data model
          const oData = {
             recipient : {
                name : "Camarada"
             }
          };
          const oModel = new JSONModel(oData);
          this.setModel(oModel);

          // set device model
			const oDeviceModel = new JSONModel(Device);
			oDeviceModel.setDefaultBindingMode("OneWay");
			this.setModel(oDeviceModel, "device");

          //Creates the view based on the url/hash
          this.getRouter().initialize();
 
          // set i18n model
          const i18nModel = new ResourceModel({
             bundleName: "ui5.tutorial.i18n.i18n"
          });
          this.setModel(i18nModel, "i18n");
       },
       getContentDensityClass() {
			return Device.support.touch ? "sapUiSizeCozy" : "sapUiSizeCompact";
		}
    });
 });