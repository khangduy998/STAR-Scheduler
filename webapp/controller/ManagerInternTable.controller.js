sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"STARSchedule/STARSchedule/controller/BaseController"
], function (Controller,BaseController) {
	"use strict";

	return BaseController.extend("STARSchedule.STARSchedule.controller.ManagerInternTable", {
			onInit: function(){
				
				//this.getView().setModel(this.getOwnerComponent().getModel("Managers"),"Managers");
				this.getRouter().getRoute("ManagerInternTable").attachPatternMatched(this._onObjectMatched, this);
			},
			onItemPressed:function(oEvent){
				var sKey=oEvent.getParameter("listItem").getId().substr(-1);
				this.getOwnerComponent().getRouter().navTo("StudentSchedule", {
					Muser : 0,
					Iuser : sKey
				});
			},
			_onObjectMatched: function(oEvent) {
			var sObjectId = oEvent.getParameter("arguments").type;
			var bType=false;
			if(sObjectId==="true"){
				bType=true;
			}
			var aFilters=[];
			var oFilter=new sap.ui.model.Filter("Monday/0/Type",sap.ui.model.FilterOperator.EQ,bType);
			aFilters.push(oFilter);
			this.getView().byId("interntable").getBinding("items").filter(aFilters);
		}
	});
});
