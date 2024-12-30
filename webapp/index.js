sap.ui.define([
	"sap/ui/core/ComponentContainer"
], (ComponentContainer) => {
	"use strict";

	new ComponentContainer({
		name: "ui5.tutorial",
		settings : {
			id : "tutorial"
		},
		async: true
	}).placeAt("content");
});