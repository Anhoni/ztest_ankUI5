sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/Button",
	"sap/m/MessageToast"
],
	function ( Controller ,Button, MessageToast )
	{
		"use strict";
		return Controller.extend( "ztest_ank.home", {
			onPress: function ( ) {
				var butt = $("#idHome1--helloButton--BDI--content");
				$("#idHome1--helloButton-BDI-content").html('ddhefddfgre');
				MessageToast.show("working");
			}
			
		});
	});