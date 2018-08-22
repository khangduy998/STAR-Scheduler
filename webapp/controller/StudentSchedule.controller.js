sap.ui.define( ["sap/ui/core/mvc/Controller","sap/ui/core/routing/History", "sap/ui/Device"], function (Controller, History, Device) {
	"use strict";

	return Controller.extend("STARSchedule.STARSchedule.controller.StudentSchedule", {
		onInit : function () {
			//console.log(this.getOwnerComponent().getRouter().getRoute("StudentSchedule").attachPatternMatched(this._onRouteMatched, this));
			this.getOwnerComponent().getRouter().getRoute("StudentSchedule").attachPatternMatched(this._onRouteMatched, this);
			
		},
		_onRouteMatched: function(oEvent) {
			//this._coopID = oEvent.getParameter("arguments").coopID;
			console.log(oEvent);
			this.Muser = 0;
			this.Iuser = 0;
			console.log(this.getView());
			//this.getView().bindElement("/Manager/" + this.Muser + "/Intern/" + this.Iuser);
			//this.getView()
			
		},
		onSelectionChange: function(oEvent) {
	
		},
		onNavBack : function() {
			var sPreviousHash = History.getInstance().getPreviousHash();
		}

	});

}, /* bExport= */ true);