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