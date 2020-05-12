System.register(['angular2/http', 'angular2/core', 'rxjs/Rx', '../config/config', 'angular2/router', './globalHandler.service', './users.service'], function(exports_1, context_1) {
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
    var http_1, core_1, config_1, router_1, globalHandler_service_1, users_service_1;
    var AuthService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (config_1_1) {
                config_1 = config_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (globalHandler_service_1_1) {
                globalHandler_service_1 = globalHandler_service_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            }],
        execute: function() {
            AuthService = (function () {
                function AuthService(_http, _router, _globalHandlerService, _usersService) {
                    this._http = _http;
                    this._router = _router;
                    this._globalHandlerService = _globalHandlerService;
                    this._usersService = _usersService;
                    this.endpoint = config_1.Config.endpoint;
                    this._userLoggedOut = new core_1.EventEmitter();
                }
                /* GET */
                /* POST */
                AuthService.prototype.attemptLogin = function (user) {
                    var _this = this;
                    var body = JSON.stringify(user);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    var res = this._http.post(this.endpoint + '/auth/login', body, { headers: headers })
                        .map(function (res) { return res.json(); });
                    res.subscribe(function (data) {
                        console.log('DATA: ', data);
                        //if(this.remember){
                        localStorage.setItem('token', data.token);
                        //}
                        _this._usersService.profile = data.profile;
                        _this._router.navigate(['Home']);
                    }, function (err) {
                        _this._globalHandlerService.emitStatusMessage({
                            status: err.status,
                            body: err._body
                        });
                    });
                    return res;
                };
                AuthService.prototype.attemptSignup = function (user) {
                    var _this = this;
                    var body = JSON.stringify(user);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    var res = this._http.post(this.endpoint + '/auth/signup', body, { headers: headers })
                        .map(function (res) { return res.json(); });
                    res.subscribe(function (data) {
                        //if(this.remember){
                        localStorage.setItem('token', data.token);
                        //}
                        _this._usersService.profile = data.profile;
                        _this._router.navigate(['Home']);
                    }, function (err) {
                        _this._globalHandlerService.emitStatusMessage({
                            status: err.status,
                            body: err._body
                        });
                    });
                    return res;
                };
                /* DELETE */
                //delete accout
                // Misc
                AuthService.prototype.logout = function () {
                    localStorage.removeItem('token');
                    this._userLoggedOut.emit(null);
                    this._router.navigate(['Auth']);
                };
                /* Made so the root component can access the  event emitter
                of the userLoggedOut event And subscribe to listen to it
                */
                AuthService.prototype.getLoggedOutEvent = function () {
                    return this._userLoggedOut;
                };
                AuthService.prototype.checkValid = function (flag) {
                    if (localStorage.getItem('token') !== null) {
                        return true;
                    }
                    else {
                        if (flag) {
                            return false;
                        }
                        else {
                            this._router.navigate(['Auth']);
                        }
                    }
                };
                AuthService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, router_1.Router, globalHandler_service_1.GlobalHandlerService, users_service_1.UsersService])
                ], AuthService);
                return AuthService;
            }());
            exports_1("AuthService", AuthService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,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LE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO3dCQUNqQyxDQUFDO29CQUNGLENBQUM7Z0JBQ0YsQ0FBQztnQkEzRkY7b0JBQUMsaUJBQVUsRUFBRTs7K0JBQUE7Z0JBNEZiLGtCQUFDO1lBQUQsQ0EzRkEsQUEyRkMsSUFBQTtZQTNGRCxxQ0EyRkMsQ0FBQSIsImZpbGUiOiJzaGFyZWQvYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwLCBIZWFkZXJzfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCB7SW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7VXNlcn0gZnJvbSAnLi91c2VyJztcbmltcG9ydCAncnhqcy9SeCc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQge0NvbmZpZ30gZnJvbSAnLi4vY29uZmlnL2NvbmZpZyc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7R2xvYmFsSGFuZGxlclNlcnZpY2V9IGZyb20gJy4vZ2xvYmFsSGFuZGxlci5zZXJ2aWNlJztcbmltcG9ydCB7VXNlcnNTZXJ2aWNlfSBmcm9tICcuL3VzZXJzLnNlcnZpY2UnO1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcblx0cHJpdmF0ZSBlbmRwb2ludDogc3RyaW5nID0gQ29uZmlnLmVuZHBvaW50O1xuXHRwcml2YXRlIF91c2VyTG9nZ2VkT3V0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBfaHR0cDogSHR0cCxcblx0XHRwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcblx0XHRwcml2YXRlIF9nbG9iYWxIYW5kbGVyU2VydmljZTogR2xvYmFsSGFuZGxlclNlcnZpY2UsXG5cdFx0cHJpdmF0ZSBfdXNlcnNTZXJ2aWNlOiBVc2Vyc1NlcnZpY2UpIHsgfVxuXHQvKiBHRVQgKi9cblxuXHQvKiBQT1NUICovXG5cdGF0dGVtcHRMb2dpbih1c2VyPzogVXNlcik6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0Y29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHVzZXIpO1xuXHRcdGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuXHRcdGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuXHRcdGxldCByZXMgPSB0aGlzLl9odHRwLnBvc3QoXG5cdFx0XHR0aGlzLmVuZHBvaW50ICsgJy9hdXRoL2xvZ2luJyxcblx0XHRcdGJvZHksXG5cdFx0XHR7IGhlYWRlcnM6IGhlYWRlcnMgfSlcblx0XHRcdC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuXHRcdHJlcy5zdWJzY3JpYmUoXG5cdFx0XHRkYXRhID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ0RBVEE6ICcsIGRhdGEpO1xuXHRcdFx0XHQvL2lmKHRoaXMucmVtZW1iZXIpe1xuXHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBkYXRhLnRva2VuKTtcblx0XHRcdFx0Ly99XG5cdFx0XHRcdHRoaXMuX3VzZXJzU2VydmljZS5wcm9maWxlID0gZGF0YS5wcm9maWxlO1xuXHRcdFx0XHR0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydIb21lJ10pXG5cdFx0XHR9LFxuXHRcdFx0ZXJyID0+IHtcblx0XHRcdFx0dGhpcy5fZ2xvYmFsSGFuZGxlclNlcnZpY2UuZW1pdFN0YXR1c01lc3NhZ2Uoe1xuXHRcdFx0XHRcdHN0YXR1czogZXJyLnN0YXR1cyxcblx0XHRcdFx0XHRib2R5OiBlcnIuX2JvZHlcblx0XHRcdFx0fSlcblx0XHRcdH0pXG5cdFx0cmV0dXJuIHJlcztcblx0fVxuXHRhdHRlbXB0U2lnbnVwKHVzZXI6IFVzZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh1c2VyKTtcblx0XHRjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcblx0XHRoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcblx0XHRsZXQgcmVzIHRoaXMuX2h0dHAucG9zdChcblx0XHRcdHRoaXMuZW5kcG9pbnQgKyAnL2F1dGgvc2lnbnVwJyxcblx0XHRcdGJvZHksXG5cdFx0XHR7IGhlYWRlcnM6IGhlYWRlcnMgfSlcblx0XHRcdC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuXHRcdHJlcy5zdWJzY3JpYmUoXG5cdFx0XHRkYXRhID0+IHtcblx0XHRcdFx0Ly9pZih0aGlzLnJlbWVtYmVyKXtcblx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgZGF0YS50b2tlbik7XG5cdFx0XHRcdC8vfVxuXHRcdFx0XHR0aGlzLl91c2Vyc1NlcnZpY2UucHJvZmlsZSA9IGRhdGEucHJvZmlsZTtcblx0XHRcdFx0dGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnSG9tZSddKTtcblx0XHRcdH0sXG5cdFx0XHRlcnIgPT4ge1xuXHRcdFx0XHR0aGlzLl9nbG9iYWxIYW5kbGVyU2VydmljZS5lbWl0U3RhdHVzTWVzc2FnZSh7XG5cdFx0XHRcdFx0c3RhdHVzOiBlcnIuc3RhdHVzLFxuXHRcdFx0XHRcdGJvZHk6IGVyci5fYm9keVxuXHRcdFx0XHR9KVxuXHRcdFx0fSlcblx0XHRyZXR1cm4gcmVzO1xuXHR9XG5cblx0LyogREVMRVRFICovXG5cdC8vZGVsZXRlIGFjY291dFxuXG5cblx0Ly8gTWlzY1xuXHRsb2dvdXQoKSB7XG5cdFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7XG5cdFx0dGhpcy5fdXNlckxvZ2dlZE91dC5lbWl0KG51bGwpO1xuXHRcdHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ0F1dGgnXSk7XG5cdH1cblxuXHQvKiBNYWRlIHNvIHRoZSByb290IGNvbXBvbmVudCBjYW4gYWNjZXNzIHRoZSAgZXZlbnQgZW1pdHRlclxuXHRvZiB0aGUgdXNlckxvZ2dlZE91dCBldmVudCBBbmQgc3Vic2NyaWJlIHRvIGxpc3RlbiB0byBpdFxuXHQqL1xuXHRnZXRMb2dnZWRPdXRFdmVudCgpOiBFdmVudEVtaXR0ZXI8YW55PiB7XG5cdFx0cmV0dXJuIHRoaXMuX3VzZXJMb2dnZWRPdXQ7XG5cdH1cblx0Y2hlY2tWYWxpZChmbGFnPzogYm9vbGVhbik6IGJvb2xlYW57XG5cdFx0aWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgIT09IG51bGwpe1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fWVsc2V7XG5cdFx0XHRpZihmbGFnKXtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ0F1dGgnXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
