sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/PDFViewer"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, PDFViewer) {
        "use strict";

        return Controller.extend("ar.com.zrtdemopdfviewer.controller.main", {
            onInit: function () {

            },
            onshowPDF: function (oEvent) {
                var opdfViewer = new PDFViewer();
                this.getView().addDependent(opdfViewer);
                var sServiceURL = this.getView().getModel().sServiceUrl;
                var sSource = sServiceURL + "/ZAttachTrainMaterialSet(Filename='Klickanleitung%20Gesellschaft.pdf',ID='ZD2F_DIF_ATTACH04')/$value";
                opdfViewer.setSource(sSource);
                opdfViewer.setTitle("My PDF");
                opdfViewer.open();
            }
        });
    });
