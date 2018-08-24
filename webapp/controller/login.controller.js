sap.ui.define([
		'jquery.sap.global',
		'sap/ui/core/mvc/Controller',
		'sap/ui/model/json/JSONModel',
		'sap/m/Dialog',
		'sap/m/Popover',
		'sap/m/Button',
		'sap/m/TextArea',
		'sap/m/MessageToast',
		'sap/m/Label'
	], function(jQuery, Controller, JSONModel, Dialog, Popover, Button, TextArea, MessageToast, Label) {
	"use strict";

	var PageController = Controller.extend("STARSchedule.STARSchedule.controller.login", {
		
		onInit: function(){
			this.getView().setModel(this.getOwnerComponent().getModel("Managers"),"Managers");
			var oData=this.getView().getModel("Managers").getData();
			var currentTime=new Date();
				var currentDay=currentTime.getDay();
				var countvacation=0;
				for(var i=0;i<oData[0].Intern.length;i++){
				for(var j=0;j<oData[0].Intern[i].Vacations.length;j++){
								var start= new Date(oData[0].Intern[i].Vacations[j].Start);
								var compare= new Date("August 23, 9999");
								var end= new Date(oData[0].Intern[i].Vacations[j].End);
								if(start.getTime()!==compare.getTime() && (start<currentTime && currentTime<end)){
									countvacation++;
								}
							}
				}
				this.getView().byId("vacation").setValue(countvacation);
				switch(currentDay){
					case 1:
						
						var countinoffice=0;
						var countremote=0;
						
						for(var i=0;i<oData[0].Intern.length;i++){
							for(var j=0;j<oData[0].Intern[i].Monday.length;j++){
								if(oData[0].Intern[i].Monday[j].Type===true){
									countinoffice++;
								}
								if(oData[0].Intern[i].Monday[j].Type===false){
									countremote++;
								}
							}
							
						}
						this.getView().byId("inoffice").setValue(countinoffice);
						this.getView().byId("remote").setValue(countinoffice);
						break;
					case 2:
						var countinoffice=0;
						var countremote=0;
						for(var i=0;i<oData[0].Intern.length;i++){
							for(var j=0;j<oData[0].Intern[i].Tuesday.length;j++){
								if(oData[0].Intern[i].Tuesday[j].Type===true){
									countinoffice++;
								}
								if(oData[0].Intern[i].Tuesday[j].Type===false){
									countremote++;
								}
							}
						}
						this.getView().byId("inoffice").setValue(countinoffice);
						this.getView().byId("remote").setValue(countinoffice);
						break;
					case 3:
						var countinoffice=0;
						var countremote=0;
						for(var i=0;i<oData[0].Intern.length;i++){
							for(var j=0;j<oData[0].Intern[i].Wednesday.length;j++){
								if(oData[0].Intern[i].Wednesday[j].Type===true){
									countinoffice++;
								}
								if(oData[0].Intern[i].Wednesday[j].Type===false){
									countremote++;
								}
							}
						}
						this.getView().byId("inoffice").setValue(countinoffice);
						this.getView().byId("remote").setValue(countinoffice);
						break;
					case 4:
						var countinoffice=0;
						var countremote=0;
						for(var i=0;i<oData[0].Intern.length;i++){
							for(var j=0;j<oData[0].Intern[i].Thursday.length;j++){
								if(oData[0].Intern[i].Thursday[j].Type===true){
									countinoffice++;
								}
								if(oData[0].Intern[i].Thursday[j].Type===false){
									countremote++;
								}
							}
						}
						this.getView().byId("inoffice").setValue(countinoffice);
						this.getView().byId("remote").setValue(countinoffice);
						break;
					case 5:
						var countinoffice=0;
						var countremote=0;
						for(var i=0;i<oData[0].Intern.length;i++){
							for(var j=0;j<oData[0].Intern[i].Friday.length;j++){
								if(oData[0].Intern[i].Friday[j].Type===true){
									countinoffice++;
								}
								if(oData[0].Intern[i].Friday[j].Type===false){
									countremote++;
								}
							}
						}
						this.getView().byId("inoffice").setValue(countinoffice);
						this.getView().byId("remote").setValue(countinoffice);
						break;
				}
		},
		
		
		
		handleEditPress : function (evt) {
			var oTileContainer = this.byId("container");
			var newValue = !oTileContainer.getEditable();
			oTileContainer.setEditable(newValue);
			evt.getSource().setText(newValue ? "Done" : "Edit");
		},

		handleBusyPress : function (evt) {
			var oTileContainer = this.byId("container");
			var newValue = !oTileContainer.getBusy();
			oTileContainer.setBusy(newValue);
			evt.getSource().setText(newValue ? "Done" : "Busy state");
		},

		handleTileDelete : function (evt) {
			var tile = evt.getParameter("tile");
			evt.getSource().removeTile(tile);
		},
		pressDialog: null,
		onUserNamePress: function (oEvent) {
			
			var	getrouter = this.getOwnerComponent().getRouter();
			var oPopover = new Popover({
				showHeader: false,
				placement: sap.m.PlacementType.Bottom,
				content:[
					new Button({
						text: 'Feedback',
						type: sap.m.ButtonType.Transparent,
						press: function (){
							var dialog = new Dialog({
							title: 'Feedback',
							type: 'Message',
							content: [
								new TextArea('submitDialogTextarea', {
									liveChange: function(oEvent) {
										var sText = oEvent.getParameter('value');
										var parent = oEvent.getSource().getParent();
			
										parent.getBeginButton().setEnabled(sText.length > 0);
									},
									width: '100%',
									placeholder: 'Add note (required)'
								})
							],
							beginButton: new Button({
								text: 'Submit',
								enabled: false,
								press: function () {
									var sText = sap.ui.getCore().byId('submitDialogTextarea').getValue();
									MessageToast.show('Feedback is: ' + sText);
									dialog.close();
								}
							}),
							endButton: new Button({
								text: 'Cancel',
								press: function () {
									dialog.close();
								}
							}),
							afterClose: function() {
								dialog.destroy();
							}
						});
			
						dialog.open();
						}
					}),
					new Button({
						text: 'Logout',
						type: sap.m.ButtonType.Transparent,
						press: function (){
						getrouter.navTo("RouteView1");
						}
					})
				]
			}).addStyleClass('sapMOTAPopover sapTntToolHeaderPopover');

			oPopover.openBy(oEvent.getSource());
		},
		OnNavToInOffice: function (){
			var sType="true";
			this.getOwnerComponent().getRouter().navTo("ManagerInternTable",{type:sType});
		},
		OnNavToWorkingRemotely: function (){
			this.getOwnerComponent().getRouter().navTo("ManagerInternTable");
		},
		OnNavToVacation: function (){
			this.getOwnerComponent().getRouter().navTo("VacationTable");
		},
		OnNavToAddStudent: function (){
			this.getOwnerComponent().getRouter().navTo("AddStudentForm");
		},
		OnNavToInternList: function (){
			this.getOwnerComponent().getRouter().navTo("InternList");
		},
		OnNavToEditSchedule: function(){
			this.getOwnerComponent().getRouter().navTo("EditInternSchedule");
		},
		OnCheckIn: function(oEvent){
			sap.m.MessageToast.show("Checked In");
			oEvent.getSource().setState("Disabled");
		}
	});

	return PageController;

});