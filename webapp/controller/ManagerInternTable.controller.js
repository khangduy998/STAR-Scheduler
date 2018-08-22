sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"STARSchedule/STARSchedule/controller/BaseController"
], function (Controller,BaseController) {
	"use strict";

	return BaseController.extend("STARSchedule.STARSchedule.controller.ManagerInternTable", {
			onInit: function(){
				
				this.getView().setModel(this.getOwnerComponent().getModel("Managers"),"Managers");
			},
			onItemPressed:function(oEvent){
				var sKey=oEvent.getParameter("listItem").getId().substr(-1);
				this.getRouter().navTo("StudentSchedule", {
					Muser : "0",
					Iuser : sKey
				});
			}
	});
});