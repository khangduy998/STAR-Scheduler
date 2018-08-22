sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"STARSchedule/STARSchedule/controller/BaseController"
], function (Controller,BaseController) {
	"use strict";

	return BaseController.extend("STARSchedule.STARSchedule.controller.StudentSchedule", {
		onInit : function () {
			//console.log(this.getOwnerComponent().getRouter().getRoute("StudentSchedule").attachPatternMatched(this._onRouteMatched, this));
			this.getOwnerComponent().getRouter().getRoute("StudentSchedule").attachPatternMatched(this._onRouteMatched, this);
			
		},
		_onRouteMatched: function(oEvent) {
			//this._coopID = oEvent.getParameter("arguments").coopID;
			this.Muser = oEvent.getParameter("arguments").Muser;
			this.Iuser = oEvent.getParameter("arguments").Iuser;
			this.getView().bindElement({
				path : "/" + this.Muser + "/Intern/" + this.Iuser, 
				model : "Managers"
			});
			
		//DateTime of today, get only the day, and then get the property fields of that day as the name of that day is the key
		}
	});

}, /* bExport= */ true);