sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"STARSchedule/STARSchedule/controller/BaseController"
], function (Controller,BaseController) {
	"use strict";

	return BaseController.extend("STARSchedule.STARSchedule.controller.ManagerInternTable", {
			onInit: function(){
				this.getRouter().getRoute("ManagerInternTable").attachPatternMatched(this._onObjectMatched, this);
				var currentTime=new Date();
				var currentDay=currentTime.getDay();
				switch(currentDay){
					case 1:
						this.getView().byId("starttime").bindText({path:"Managers>Monday/0/Start"});
						this.getView().byId("starttime2").bindText({path:"Managers>Monday/1/Start"});
						this.getView().byId("endtime").bindText({path:"Managers>Monday/0/End"});
						this.getView().byId("endtime2").bindText({path:"Managers>Monday/1/End"});
						this.getView().byId("checkin").bindText({path:"Managers>Monday/0/Check"});
						break;
					case 2:
						this.getView().byId("starttime").bindText({path:"Managers>Tuesday/0/Start"});
						this.getView().byId("starttime2").bindText({path:"Managers>Tuesday/1/Start"});
						this.getView().byId("endtime").bindText({path:"Managers>Tuesday/0/End"});
						this.getView().byId("endtime2").bindText({path:"Managers>Tuesday/1/End"});
						this.getView().byId("checkin").bindText({path:"Managers>Tuesday/0/Check"});
						break;
					case 3:
						this.getView().byId("starttime").bindText({path:"Managers>Wednesday/0/Start"});
						this.getView().byId("starttime2").bindText({path:"Managers>Wednesday/1/Start"});
						this.getView().byId("endtime").bindText({path:"Managers>Wednesday/0/End"});
						this.getView().byId("endtime2").bindText({path:"Managers>Wednesday/1/End"});
						this.getView().byId("checkin").bindText({path:"Managers>Wednesday/0/Check"});
						break;
					case 4:
						this.getView().byId("starttime").bindText({path:"Managers>Thursday/0/Start"});
						this.getView().byId("starttime2").bindText({path:"Managers>Thursday/1/Start"});
						this.getView().byId("endtime").bindText({path:"Managers>Thursday/0/End"});
						this.getView().byId("endtime2").bindText({path:"Managers>Thursday/1/End"});
						this.getView().byId("checkin").bindText({path:"Managers>Thursday/0/Check"});
						break;
					case 5:
						this.getView().byId("starttime").bindText({path:"Managers>Friday/0/Start"});
						this.getView().byId("starttime2").bindText({path:"Managers>Friday/1/Start"});
						this.getView().byId("endtime").bindText({path:"Managers>Friday/0/End"});
						this.getView().byId("endtime2").bindText({path:"Managers>Friday/1/End"});
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
			_onObjectMatched: function(oEvent) {
			var sObjectId = oEvent.getParameter("arguments").type;
			var bType=false;
			if(sObjectId==="true"){
				bType=true;
			}
			var aFilters=[];
			var currentTime=new Date();
			var currentDay=currentTime.getDay();
			var oFilter;
			switch(currentDay){
				case 1:
					oFilter=new sap.ui.model.Filter("Monday/0/Type",sap.ui.model.FilterOperator.EQ,bType);
					break;
				case 2:
					oFilter=new sap.ui.model.Filter("Tuesday/0/Type",sap.ui.model.FilterOperator.EQ,bType);
					break;
				case 3:
					oFilter=new sap.ui.model.Filter("Wednesday/0/Type",sap.ui.model.FilterOperator.EQ,bType);
					break;
				case 4:
					oFilter=new sap.ui.model.Filter("Thursday/0/Type",sap.ui.model.FilterOperator.EQ,bType);
					break;
				case 5:
					oFilter=new sap.ui.model.Filter("Friday/0/Type",sap.ui.model.FilterOperator.EQ,bType);
					break;
			}
			
			aFilters.push(oFilter);
			this.getView().byId("interntable").getBinding("items").filter(aFilters);
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