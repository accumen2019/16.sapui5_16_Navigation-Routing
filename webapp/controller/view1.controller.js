sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("DemoRouting1DemoRouting1.controller.view1", {
		onClick  :function(){
			var abc = "Hello";
			var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
			loRouter.navTo("view2",{value:abc});
		}

	});
});