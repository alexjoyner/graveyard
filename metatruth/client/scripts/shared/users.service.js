System.register(['angular2/core', 'rxjs/Rx', 'angular2/http', '../config/config', './globalHandler.service'], function(exports_1, context_1) {
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
    var core_1, http_1, config_1, globalHandler_service_1;
    var UsersService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            },
            function (globalHandler_service_1_1) {
                globalHandler_service_1 = globalHandler_service_1_1;
            }],
        execute: function() {
            UsersService = (function () {
                function UsersService(_http, _globalHandlerService) {
                    this._http = _http;
                    this._globalHandlerService = _globalHandlerService;
                    this.endpoint = config_1.Config.endpoint;
                }
                /* GET */
                UsersService.prototype.getProfile = function () {
                    var _this = this;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    headers.append('x-access-token', (localStorage.getItem('token')) ? localStorage.getItem('token') : null);
                    var res = this._http.get(this.endpoint +
                        '/users/profile', { headers: headers })
                        .map(function (res) { return res.json(); });
                    res.subscribe(function (data) { return null; }, function (err) {
                        _this._globalHandlerService.emitStatusMessage({
                            status: err.status,
                            body: err._body
                        });
                    });
                    return res;
                };
                UsersService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, globalHandler_service_1.GlobalHandlerService])
                ], UsersService);
                return UsersService;
            }());
            exports_1("UsersService", UsersService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC91c2Vycy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVNBO2dCQUdDLHNCQUNTLEtBQVcsRUFDWCxxQkFBMkM7b0JBRDNDLFVBQUssR0FBTCxLQUFLLENBQU07b0JBQ1gsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUFzQjtvQkFKNUMsYUFBUSxHQUFXLGVBQU0sQ0FBQyxRQUFRLENBQUM7Z0JBSWEsQ0FBQztnQkFDekQsU0FBUztnQkFDVCxpQ0FBVSxHQUFWO29CQUFBLGlCQW1CQztvQkFsQkEsSUFBTSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztvQkFDOUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztvQkFDbkQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFDOUIsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztvQkFDekUsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQ3ZCLElBQUksQ0FBQyxRQUFRO3dCQUNiLGdCQUFnQixFQUNoQixFQUFDLE9BQU8sRUFBRyxPQUFPLEVBQUMsQ0FBQzt5QkFDbkIsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO29CQUN6QixHQUFHLENBQUMsU0FBUyxDQUNaLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxFQUFKLENBQUksRUFDWixVQUFBLEdBQUc7d0JBQ0YsS0FBSSxDQUFDLHFCQUFxQixDQUFDLGlCQUFpQixDQUFDOzRCQUM1QyxNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU07NEJBQ2xCLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSzt5QkFDZixDQUFDLENBQUE7b0JBQ0gsQ0FBQyxDQUFDLENBQUE7b0JBQ0gsTUFBTSxDQUFDLEdBQUcsQ0FBQztnQkFDWixDQUFDO2dCQTNCRjtvQkFBQyxpQkFBVSxFQUFFOztnQ0FBQTtnQkErQmIsbUJBQUM7WUFBRCxDQTlCQSxBQThCQyxJQUFBO1lBOUJELHVDQThCQyxDQUFBIiwiZmlsZSI6InNoYXJlZC91c2Vycy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7VXNlcn0gZnJvbSAnLi91c2VyJztcbmltcG9ydCAncnhqcy9SeCc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0IHtDb25maWd9IGZyb20gJy4uL2NvbmZpZy9jb25maWcnO1xuaW1wb3J0IHtHbG9iYWxIYW5kbGVyU2VydmljZX0gZnJvbSAnLi9nbG9iYWxIYW5kbGVyLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlcnNTZXJ2aWNlIHtcblx0cHJpdmF0ZSBlbmRwb2ludDogc3RyaW5nID0gQ29uZmlnLmVuZHBvaW50O1xuXHRwdWJsaWMgcHJvZmlsZTtcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBfaHR0cDogSHR0cCxcblx0XHRwcml2YXRlIF9nbG9iYWxIYW5kbGVyU2VydmljZTogR2xvYmFsSGFuZGxlclNlcnZpY2UpIHsgfVxuXHQvKiBHRVQgKi9cblx0Z2V0UHJvZmlsZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuXHRcdGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuXHRcdGhlYWRlcnMuYXBwZW5kKCd4LWFjY2Vzcy10b2tlbicsXG5cdFx0XHQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykpID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgOiBudWxsKTtcblx0XHRsZXQgcmVzID0gdGhpcy5faHR0cC5nZXQoXG5cdFx0XHR0aGlzLmVuZHBvaW50ICsgXG5cdFx0XHQnL3VzZXJzL3Byb2ZpbGUnLFxuXHRcdFx0e2hlYWRlcnMgOiBoZWFkZXJzfSlcblx0XHRcdC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuXHRcdHJlcy5zdWJzY3JpYmUoXG5cdFx0XHRkYXRhID0+IG51bGwsXG5cdFx0XHRlcnIgPT4ge1xuXHRcdFx0XHR0aGlzLl9nbG9iYWxIYW5kbGVyU2VydmljZS5lbWl0U3RhdHVzTWVzc2FnZSh7XG5cdFx0XHRcdFx0c3RhdHVzOiBlcnIuc3RhdHVzLFxuXHRcdFx0XHRcdGJvZHk6IGVyci5fYm9keVxuXHRcdFx0XHR9KVxuXHRcdFx0fSlcblx0XHRyZXR1cm4gcmVzO1xuXHR9XG5cdC8qIFBPU1QgKi9cblxuXHQvKiBERUxFVEUgKi9cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
