sap.ui.define([
	"sap/ui/cove/mvc/Controller",
	"sap/m/MessageToast"
],{
	function ( Controller , MessageToast )
	{
		"use strict";
		return Controller.extend("ztest_ank.Home",{
			onPress : function ( ){
				MessageToast.show("working");
			}
			
		});
	}
});