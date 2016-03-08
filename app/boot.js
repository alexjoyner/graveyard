System.register(['angular2/platform/browser', './app.component', './services/logging.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_component_1, logging_service_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (logging_service_1_1) {
                logging_service_1 = logging_service_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [logging_service_1.LoggingService]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztZQUlBLG1CQUFTLENBQUMsNEJBQVksRUFBRSxDQUFDLGdDQUFjLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImJvb3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Jvb3RzdHJhcH0gICAgZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3NlcidcbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tICcuL2FwcC5jb21wb25lbnQnXG5pbXBvcnQge0xvZ2dpbmdTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL2xvZ2dpbmcuc2VydmljZSc7XG5cbmJvb3RzdHJhcChBcHBDb21wb25lbnQsIFtMb2dnaW5nU2VydmljZV0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
