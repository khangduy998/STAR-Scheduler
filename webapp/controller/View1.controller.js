sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("STARSchedule.STARSchedule.controller.View1", {
			
			
			onLoggedIn: function(){
			 if(this.getView().byId("username").getValue() == "" || this.getView().byId("username").getValue() != "june") {

                           alert("Please enter your username");
				 }
			else if(this.getView().byId("password").getValue() == "" || this.getView().byId("password").getValue() != "june"){
						
						alert("Please enter your password");
				
			}
			else{
				
				this.getOwnerComponent().getRouter().navTo("LogInView");
				console.log(this.getView().getModel());
			}
			}
	});
});