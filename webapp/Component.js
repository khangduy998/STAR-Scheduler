sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"STARSchedule/STARSchedule/model/models",
	"sap/ui/model/json/JSONModel"
], function (UIComponent, Device, models, JSONModel) {
	"use strict";

	return UIComponent.extend("STARSchedule.STARSchedule.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			
			var InternModel = new JSONModel("localService/mockdata/Interns.json");
			var ManagerModel = new JSONModel("localService/mockdata/Managers.json");
			this.setModel(InternModel, "Interns");
			this.setModel(ManagerModel, "Managers");

			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});