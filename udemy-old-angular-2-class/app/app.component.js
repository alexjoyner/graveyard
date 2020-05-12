System.register(['angular2/core', './http.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_httpService) {
                    this._httpService = _httpService;
                }
                ;
                AppComponent.prototype.onGetPosts = function () {
                    var _this = this;
                    this._httpService.getPosts()
                        .subscribe(function (response) { return _this.response = response; }, function (error) { return console.log(error); });
                };
                AppComponent.prototype.onPost = function (title, body, userId) {
                    var _this = this;
                    console.log('testing');
                    this._httpService.createPost({ title: title, body: body, userId: userId })
                        .subscribe(function (response) { return _this.response = response; }, function (error) { return console.log(error); });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    \t<div>\n\t\t    <div class=\"input\">\n\t\t        <label for=\"title\">Title</label>\n\t\t        <input type=\"text\" id=\"title\" #title>\n\t\t        <p></p>\n\t\t    </div>\n\t\t    <div class=\"input\">\n\t\t        <label for=\"body\">Body</label>\n\t\t        <input type=\"text\" id=\"body\" #body>\n\t\t        <p></p>\n\t\t    </div>\n\t\t    <div class=\"input\">\n\t\t        <label for=\"user-id\">User ID</label>\n\t\t        <input type=\"text\" id=\"user-id\" #userId>\n\t\t        <p></p>\n\t\t    </div>\n\t\t    <button (click)=\"onPost(title.value, body.value, userId.value)\">Post Data</button>\n\t\t    <button (click)=\"onGetPosts()\">Get All Posts</button>\n\t\t    <p>Response: {{response | json}}</p>\n\t\t</div>\n    ",
                        providers: [http_service_1.HttpService]
                    }), 
                    __metadata('design:paramtypes', [http_service_1.HttpService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE2QkE7Z0JBRUMsc0JBQW9CLFlBQXlCO29CQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtnQkFBRyxDQUFDOztnQkFDakQsaUNBQVUsR0FBVjtvQkFBQSxpQkFNQztvQkFMQSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRTt5QkFDMUIsU0FBUyxDQUNULFVBQUEsUUFBUSxJQUFJLE9BQUEsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLEVBQXhCLENBQXdCLEVBQ3BDLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsQ0FDM0IsQ0FBQTtnQkFDSCxDQUFDO2dCQUNELDZCQUFNLEdBQU4sVUFBTyxLQUFhLEVBQUUsSUFBWSxFQUFFLE1BQWM7b0JBQWxELGlCQU9DO29CQU5BLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUE7b0JBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUMsQ0FBQzt5QkFDdEUsU0FBUyxDQUNULFVBQUEsUUFBUSxJQUFJLE9BQUEsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLEVBQXhCLENBQXdCLEVBQ3BDLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsQ0FDM0IsQ0FBQTtnQkFDSCxDQUFDO2dCQTNDRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUsa3ZCQXFCVDt3QkFDRCxTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO3FCQUMzQixDQUFDOztnQ0FBQTtnQkFtQkYsbUJBQUM7WUFBRCxDQWxCQSxBQWtCQyxJQUFBO1lBbEJELHVDQWtCQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0h0dHBTZXJ2aWNlfSBmcm9tICcuL2h0dHAuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIFx0PGRpdj5cblx0XHQgICAgPGRpdiBjbGFzcz1cImlucHV0XCI+XG5cdFx0ICAgICAgICA8bGFiZWwgZm9yPVwidGl0bGVcIj5UaXRsZTwvbGFiZWw+XG5cdFx0ICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRpdGxlXCIgI3RpdGxlPlxuXHRcdCAgICAgICAgPHA+PC9wPlxuXHRcdCAgICA8L2Rpdj5cblx0XHQgICAgPGRpdiBjbGFzcz1cImlucHV0XCI+XG5cdFx0ICAgICAgICA8bGFiZWwgZm9yPVwiYm9keVwiPkJvZHk8L2xhYmVsPlxuXHRcdCAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJib2R5XCIgI2JvZHk+XG5cdFx0ICAgICAgICA8cD48L3A+XG5cdFx0ICAgIDwvZGl2PlxuXHRcdCAgICA8ZGl2IGNsYXNzPVwiaW5wdXRcIj5cblx0XHQgICAgICAgIDxsYWJlbCBmb3I9XCJ1c2VyLWlkXCI+VXNlciBJRDwvbGFiZWw+XG5cdFx0ICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInVzZXItaWRcIiAjdXNlcklkPlxuXHRcdCAgICAgICAgPHA+PC9wPlxuXHRcdCAgICA8L2Rpdj5cblx0XHQgICAgPGJ1dHRvbiAoY2xpY2spPVwib25Qb3N0KHRpdGxlLnZhbHVlLCBib2R5LnZhbHVlLCB1c2VySWQudmFsdWUpXCI+UG9zdCBEYXRhPC9idXR0b24+XG5cdFx0ICAgIDxidXR0b24gKGNsaWNrKT1cIm9uR2V0UG9zdHMoKVwiPkdldCBBbGwgUG9zdHM8L2J1dHRvbj5cblx0XHQgICAgPHA+UmVzcG9uc2U6IHt7cmVzcG9uc2UgfCBqc29ufX08L3A+XG5cdFx0PC9kaXY+XG4gICAgYCxcbiAgICBwcm92aWRlcnM6IFtIdHRwU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblx0cmVzcG9uc2U6IHN0cmluZztcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cFNlcnZpY2U6IEh0dHBTZXJ2aWNlKSB7fTtcblx0b25HZXRQb3N0cygpIHtcblx0XHR0aGlzLl9odHRwU2VydmljZS5nZXRQb3N0cygpXG5cdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0XHRyZXNwb25zZSA9PiB0aGlzLnJlc3BvbnNlID0gcmVzcG9uc2UsXG5cdFx0XHRcdGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxuXHRcdFx0KVxuXHR9XG5cdG9uUG9zdCh0aXRsZTogc3RyaW5nLCBib2R5OiBzdHJpbmcsIHVzZXJJZDogc3RyaW5nKXtcblx0XHRjb25zb2xlLmxvZygndGVzdGluZycpXG5cdFx0dGhpcy5faHR0cFNlcnZpY2UuY3JlYXRlUG9zdCh7dGl0bGU6IHRpdGxlLCBib2R5OiBib2R5LCB1c2VySWQ6IHVzZXJJZH0pXG5cdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0XHRyZXNwb25zZSA9PiB0aGlzLnJlc3BvbnNlID0gcmVzcG9uc2UsXG5cdFx0XHRcdGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxuXHRcdFx0KVx0XHRcblx0fSBcbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
