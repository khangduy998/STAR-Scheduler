sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"STARSchedule/STARSchedule/controller/BaseController"
], function (Controller,BaseController) {
	"use strict";

	return BaseController.extend("STARSchedule.STARSchedule.controller.InternList", {
			onInit: function(){
				
				//this.getView().setModel(this.getOwnerComponent().getModel("Managers"),"Managers");
				//this.getRouter().getRoute("ManagerInternTable").attachPatternMatched(this._onObjectMatched, this);
				var currentTime=new Date();
				var currentDay=currentTime.getDay();
				switch(currentDay){
					case 1:
						
						this.getView().byId("checkin").bindText({path:"Managers>Monday/0/Check"});
						break;
					case 2:
						
						this.getView().byId("checkin").bindText({path:"Managers>Tuesday/0/Check"});
						break;
					case 3:
						
						this.getView().byId("checkin").bindText({path:"Managers>Wednesday/0/Check"});
						break;
					case 4:
						
						this.getView().byId("checkin").bindText({path:"Managers>Thursday/0/Check"});
						break;
					case 5:
						
						this.getView().byId("checkin").bindText({path:"Managers>Friday/0/Check"});
						break;
				}
				this.getView().setModel(this.getOwnerComponent().getModel("Managers"),"Managers");
				this.onSortButtonPressed();
			},
			onItemPressed:function(oEvent){
				var sKey=oEvent.getParameter("listItem").getBindingContext("Managers").sPath.substr(-1);
				this.getOwnerComponent().getRouter().navTo("StudentSchedule", {
					Muser : 0,
					Iuser : sKey
				});
			},
			
		onSearch : function (oEvt) {

			// add filter for search
			var aFilters = [];
			var sQuery = oEvt.getSource().getValue();
			if (sQuery && sQuery.length > 0) {
				var filter = new sap.ui.model.Filter("Name", sap.ui.model.FilterOperator.Contains, sQuery);
				aFilters.push(filter);
			}

			// update list binding
			var list = this.byId("interntable");
			var binding = list.getBinding("items");
			binding.filter(aFilters);
		},
		onSortButtonPressed:function(){
			var aSorters=[];
			var bDescending=true;
			if(this.getView().byId("interntable").getBinding("items").aSorters.length===0){
				bDescending=false;
			}
			else {
				bDescending=!this.getView().byId("interntable").getBinding("items").aSorters[0].bDescending;
			}
			var vSorter=new sap.ui.model.Sorter("Name",bDescending);
			aSorters.push(vSorter);
			this.getView().byId("interntable").getBinding("items").sort(aSorters);
		}
	});
});