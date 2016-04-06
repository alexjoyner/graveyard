System.register(['angular2/core', 'angular2/platform/browser', './app.component', 'angular2/router', 'angular2/http', './shared/users.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, browser_1, app_component_1, router_1, http_1, users_service_1;
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
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [
                router_1.ROUTER_PROVIDERS,
                http_1.HTTP_PROVIDERS,
                users_service_1.UsersService,
                core_1.provide(router_1.APP_BASE_HREF, { useValue: '/client/' })]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVNBLG1CQUFTLENBQUMsNEJBQVksRUFBRTtnQkFDdkIseUJBQWdCO2dCQUNoQixxQkFBYztnQkFDZCw0QkFBWTtnQkFDWixjQUFPLENBQUMsc0JBQWEsRUFBRSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJib290LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtwcm92aWRlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Ym9vdHN0cmFwfSAgICBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyJ1xuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gJy4vYXBwLmNvbXBvbmVudCdcbmltcG9ydCB7XG5cdFx0QVBQX0JBU0VfSFJFRixcblx0XHRST1VURVJfUFJPVklERVJTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInXG5pbXBvcnQge0hUVFBfUFJPVklERVJTfSBmcm9tICdhbmd1bGFyMi9odHRwJ1xuaW1wb3J0IHtVc2Vyc1NlcnZpY2V9IGZyb20gJy4vc2hhcmVkL3VzZXJzLnNlcnZpY2UnO1xuXG5ib290c3RyYXAoQXBwQ29tcG9uZW50LCBbXG5cdFJPVVRFUl9QUk9WSURFUlMsIFxuXHRIVFRQX1BST1ZJREVSUywgXG5cdFVzZXJzU2VydmljZSxcblx0cHJvdmlkZShBUFBfQkFTRV9IUkVGLCB7IHVzZVZhbHVlOiAnL2NsaWVudC8nIH0pXSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
