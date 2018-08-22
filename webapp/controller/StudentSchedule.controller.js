sap.ui.define( ["sap/ui/core/mvc/Controller","sap/ui/core/routing/History", "sap/ui/Device"], function (Controller, History, Device) {
	"use strict";

	return Controller.extend("STARSchedule.STARSchedule.controller.StudentSchedule", {
		onInit : function () {
			this.getOwnerComponent().getRouter().getRoute("StudentSchedule").attachPatternMatched(this._onRouteMatched, this);
		},
		_onRouteMatched: function(oEvent) {
			//this._coopID = oEvent.getParameter("arguments").coopID;
			this.user = '0';
			this.getView().bindElement("/StudentSchedule/" + this.user);
		},
		onSelectionChange: function(oEvent) {
	
		},
		onNavBack : function() {
			var sPreviousHash = History.getInstance().getPreviousHash();
		}

	});

}, /* bExport= */ true);
