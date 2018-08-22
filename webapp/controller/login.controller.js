sap.ui.define([
		'jquery.sap.global',
		'sap/ui/core/mvc/Controller',
		'sap/ui/model/json/JSONModel',
			'sap/m/Popover',
			'sap/m/Button'
	], function(jQuery, Controller, JSONModel, Popover, Button) {
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
		onUserNamePress: function (oEvent) {
			var oPopover = new Popover({
				showHeader: false,
				placement: sap.m.PlacementType.Bottom,
				content:[
					new Button({
						text: 'Feedback',
						type: sap.m.ButtonType.Transparent
					}),
					new Button({
						text: 'Help',
						type: sap.m.ButtonType.Transparent
					}),
					new Button({
						text: 'Logout',
						type: sap.m.ButtonType.Transparent
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
			this.getOwnerComponent().getRouter().navTo("ManagerInternTable");
		}
	});

	return PageController;

});