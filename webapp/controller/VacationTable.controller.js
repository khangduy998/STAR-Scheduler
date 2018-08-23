sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"STARSchedule/STARSchedule/controller/BaseController"
], function (Controller,BaseController) {
	"use strict";

	return BaseController.extend("STARSchedule.STARSchedule.controller.VacationTable", {
			onInit: function(){
				
				//this.getView().setModel(this.getOwnerComponent().getModel("Managers"),"Managers");
				//this.getRouter().getRoute("ManagerInternTable").attachPatternMatched(this._onObjectMatched, this);
				var currentTime=new Date();
				var oData=this.getOwnerComponent().getModel("Managers").getData();
				var aBigFilters=[];
				var aFilters=[];
				for(var i=0;i<oData[0].Intern.length;i++){
					
					for(var j=0;j<oData[0].Intern[i].Vacations.length;j++){
						var oVacationStart= new Date(oData[0].Intern[i].Vacations[j].Start);
						var oVacationEnd= new Date(oData[0].Intern[i].Vacations[j].End);
						if(oVacationStart<currentTime && currentTime<oVacationEnd){
							this.getView().byId("starttime").bindText({path:"Managers>Vacations/"+j+"/Start"});
							this.getView().byId("endtime").bindText({path:"Managers>Vacations/"+j+"/End"});
							break;
						}
						else if(j===oData[0].Intern[i].Vacations.length-1){
							var oFilter=new sap.ui.model.Filter("Name",sap.ui.model.FilterOperator.NE,oData[0].Intern[i].Name);
							aFilters.push(oFilter);
							break;
						}
					}
				}
				this.getView().setModel(this.getOwnerComponent().getModel("Managers"),"Managers");
				var oBigFilter= new sap.ui.model.Filter({filters: aFilters, and:true});
				 aBigFilters.push(oBigFilter);
				this.getView().byId("interntable").getBinding("items").filter(aBigFilters);
				this.onSortButtonPressed();
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