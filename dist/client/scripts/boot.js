System.register(['angular2/core', 'angular2/platform/browser', './app.component', 'angular2/router', 'angular2/http', './shared/users.service', './shared/globalHandler.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, browser_1, app_component_1, router_1, http_1, users_service_1, globalHandler_service_1;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (globalHandler_service_1_1) {
                globalHandler_service_1 = globalHandler_service_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [
                router_1.ROUTER_PROVIDERS,
                http_1.HTTP_PROVIDERS,
                users_service_1.UsersService,
                globalHandler_service_1.GlobalHandlerService,
                core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVdBLG1CQUFTLENBQUMsNEJBQVksRUFBRTtnQkFDdkIseUJBQWdCO2dCQUNoQixxQkFBYztnQkFDZCw0QkFBWTtnQkFDWiw0Q0FBb0I7Z0JBQ3BCLGNBQU8sQ0FBQyx5QkFBZ0IsRUFBRSxFQUFFLFFBQVEsRUFBRSw2QkFBb0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImJvb3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3Byb3ZpZGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtib290c3RyYXB9ICAgIGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInXG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSAnLi9hcHAuY29tcG9uZW50J1xuaW1wb3J0IHtcblx0XHRST1VURVJfUFJPVklERVJTLFxuXHRcdEhhc2hMb2NhdGlvblN0cmF0ZWd5LFxuXHRcdExvY2F0aW9uU3RyYXRlZ3l9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcidcbmltcG9ydCB7SFRUUF9QUk9WSURFUlN9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnXG5pbXBvcnQge1VzZXJzU2VydmljZX0gZnJvbSAnLi9zaGFyZWQvdXNlcnMuc2VydmljZSc7XG5pbXBvcnQge0dsb2JhbEhhbmRsZXJTZXJ2aWNlfSBmcm9tICcuL3NoYXJlZC9nbG9iYWxIYW5kbGVyLnNlcnZpY2UnO1xuXG5ib290c3RyYXAoQXBwQ29tcG9uZW50LCBbXG5cdFJPVVRFUl9QUk9WSURFUlMsIFxuXHRIVFRQX1BST1ZJREVSUywgXG5cdFVzZXJzU2VydmljZSxcblx0R2xvYmFsSGFuZGxlclNlcnZpY2UsXG5cdHByb3ZpZGUoTG9jYXRpb25TdHJhdGVneSwgeyB1c2VDbGFzczogSGFzaExvY2F0aW9uU3RyYXRlZ3kgfSldKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
