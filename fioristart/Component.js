jQuery.sap.declare("com.nepraunig.fioristart.Component");

sap.ui.core.UIComponent.extend("com.nepraunig.fioristart.Component", {

	createContent : function() {

		// create root view

        /* https://sapui5.hana.ondemand.com/sdk/docs/guide/91f277516f4d1014b6dd926db0e91070.html
        */

        /* viewData

        Only used for JS views; this property contains user-specific data that is available during the whole lifecycle of the view and the controller
        */
		var oView = sap.ui.view({
			id : "app",
			viewName : "com.nepraunig.fioristart.view.App",
			type : "JS",
			viewData : { component : this }
		});

//		// Using OData model to connect against a real service
//		var url = "/proxy/http/<server>:<port>/sap/opu/odata/sap/ZGWSAMPLE_SRV/";
//		var oModel = new sap.ui.model.odata.ODataModel(url, true, "<user>", "<password>");
//		oView.setModel(oModel);

		// Using a local model for offline development
		var oModel = new sap.ui.model.json.JSONModel("model/mock.json");
		oView.setModel(oModel);

        // set i18n model
        var i18nModel = new sap.ui.model.resource.ResourceModel({
            bundleUrl : "i18n/messageBundle.properties"
        });
        oView.setModel(i18nModel, "i18n");

        // done
		return oView;
	}
});