sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("STARSchedule.login.controller.login", {
		
		onInit: function(){
			this.getView().setModel(this.getOwnerComponent().getModel(),"mainModel");
		}

	});

});