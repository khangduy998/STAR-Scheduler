sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("STARSchedule.STARSchedule.controller.View1", {
			onLoggedIn: function(){
				this.getOwnerComponent().getRouter().navTo("LogInView");
			}
	});
});