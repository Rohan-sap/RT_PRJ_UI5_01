/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"arcom/zrtdemo_pdf_viewer/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
