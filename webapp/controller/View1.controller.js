sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("STARSchedule.STARSchedule.controller.View1", {
			
			
			onLoggedIn: function(){
				//getting username and password from Managers.json
				var ManagerModel = this.getOwnerComponent().getModel("Managers");
				var ManagerUsername = ManagerModel.getProperty("/0/Username");
				var ManagerPassword = ManagerModel.getProperty("/0/Password");
				
				

				var Intern = ManagerModel.getProperty("/0/Intern");
			/*	var InternUsername = ManagerModel.getProperty("/0/Intern/0/Username");
				var InternPassword = ManagerModel.getProperty("/0/Intern/0/Password");*/
			
			
				
			for(var i = 0; i < Intern.length; i++){
				
			var	InternUsername1 = Intern[i].Username;
			var	InternPassword1 = Intern[i].Password;
			
			if(this.getView().byId("username").getValue() == ManagerUsername && this.getView().byId("password").getValue() == ManagerPassword) {
                          this.ManagerviewRouter();
                          break;
				 }
			
			else if(this.getView().byId("username").getValue() == InternUsername1 && this.getView().byId("password").getValue() == InternPassword1){
						this.InternviewRouter();
						break;
						
			}
			else if(i==Intern.length-1){
				alert("Enter correct Username and Password");
			}
			else{
				
				
				continue;
				
			}

			}
				
			},
			ManagerviewRouter: function(){
				this.getOwnerComponent().getRouter().navTo("LogInView");
			},
			InternviewRouter: function(){
				this.getOwnerComponent().getRouter().navTo("internView");
			}
			
	});
});