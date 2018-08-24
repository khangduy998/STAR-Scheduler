sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"STARSchedule/STARSchedule/controller/BaseController"
], function (Controller,BaseController) {
	"use strict";

	return BaseController.extend("STARSchedule.STARSchedule.controller.internSchedule", {
		onSave: function(){
			sap.m.MessageToast.show("Schedule saved and sent to manager for review");
		}
	});

}, /* bExport= */ true);