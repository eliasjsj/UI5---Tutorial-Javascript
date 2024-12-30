sap.ui.define(() => {
    "use strict";
    return {
          name: "QUnit test suite for UI5 tutorial",
          defaults: {
                   page: "ui5://test-resources/ui5/tutorial/Test.qunit.html?testsuite={suite}&test={name}",
                   qunit: {
                         version: 2
                   },
                   ui5: {
                         theme: "sap_horizon"
                   },
                   loader: {
                         paths: {
                 "ui5/tutorial": "../"
                         }
                   }
        },
        tests: {
              "unit/unitTests": {
                     title: "UI5 tutorial - Unit Tests"
              }
        }
 };
});