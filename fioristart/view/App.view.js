sap.ui.jsview("com.nepraunig.fioristart.view.App", {

	getControllerName: function () {
		return "com.nepraunig.fioristart.view.App";
	},
	
	createContent: function (oController) {
		
		// to avoid scroll bars on desktop the root view must be set to block display
		this.setDisplayBlock(true);
		
		// create app
		this.app = new sap.m.SplitApp();
		
		// load the master page
		var master = sap.ui.xmlview("Master", "com.nepraunig.fioristart.view.Master");
		master.getController().nav = this.getController();
		this.app.addPage(master, true);


        // load an empty page
        var empty = sap.ui.xmlview("Empty", "com.nepraunig.fioristart.view.Empty");
        empty.getControllerName().nav = this.getController();
        this.app.addPage(empty, false);

		/*
		Nope, we start with an empty page
		// load the detail page
		var detail = sap.ui.xmlview("Detail", "com.nepraunig.fioristart.view.Detail");
		detail.getController().nav = this.getController();
		this.app.addPage(detail, false);
		*/
		
		// done
		return this.app;
	}
});