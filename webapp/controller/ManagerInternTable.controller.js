sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"STARSchedule/STARSchedule/controller/BaseController"
], function (Controller,BaseController) {
	"use strict";

	return BaseController.extend("STARSchedule.STARSchedule.controller.ManagerInternTable", {
			onInit: function(){
				
				this.getView().setModel(this.getOwnerComponent().getModel("Managers"),"Managers");
			}
	});
});