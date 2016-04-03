System.register(['angular2/http', 'angular2/core', 'rxjs/Rx', '../config/config', 'angular2/router'], function(exports_1, context_1) {
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
    var http_1, core_1, config_1, router_1;
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
            }],
        execute: function() {
            AuthService = (function () {
                function AuthService(_http, _router) {
                    this._http = _http;
                    this._router = _router;
                    this.endpoint = config_1.Config.endpoint;
                    this._userLoggedOut = new core_1.EventEmitter();
                }
                /* GET */
                /* POST */
                AuthService.prototype.attemptLogin = function (user) {
                    var body = JSON.stringify(user);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this._http.post(this.endpoint + '/auth/login', body, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                AuthService.prototype.attemptSignup = function (user) {
                    var body = JSON.stringify(user);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this._http.post(this.endpoint + '/auth/signup', body, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                /* DELETE */
                //delete accout
                // Misc
                AuthService.prototype.logout = function () {
                    localStorage.removeItem('token');
                    this._userLoggedOut.emit(null);
                };
                /* Made so the root component can access the  event emitter
                of the userLoggedOut event And subscribe to listen to it
                */
                AuthService.prototype.getLoggedOutEvent = function () {
                    return this._userLoggedOut;
                };
                AuthService.prototype.checkValid = function () {
                    if (localStorage.getItem('token') !== null) {
                        return true;
                    }
                    else {
                        this._router.navigate(['Auth']);
                    }
                };
                AuthService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, router_1.Router])
                ], AuthService);
                return AuthService;
            }());
            exports_1("AuthService", AuthService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9hdXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUUE7Z0JBR0MscUJBQ1MsS0FBVyxFQUNYLE9BQWU7b0JBRGYsVUFBSyxHQUFMLEtBQUssQ0FBTTtvQkFDWCxZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUpoQixhQUFRLEdBQVcsZUFBTSxDQUFDLFFBQVEsQ0FBQztvQkFDbkMsbUJBQWMsR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7Z0JBR25DLENBQUM7Z0JBQzdCLFNBQVM7Z0JBRVQsVUFBVTtnQkFDVixrQ0FBWSxHQUFaLFVBQWEsSUFBVTtvQkFDdEIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDbEMsSUFBTSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztvQkFDOUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztvQkFDbkQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLGFBQWEsRUFDN0IsSUFBSSxFQUNKLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO3lCQUNwQixHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7Z0JBQzFCLENBQUM7Z0JBQ0QsbUNBQWEsR0FBYixVQUFjLElBQVU7b0JBQ3ZCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2xDLElBQU0sT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7b0JBQzlCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7b0JBQ25ELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFjLEVBQzlCLElBQUksRUFDSixFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQzt5QkFDcEIsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO2dCQUMxQixDQUFDO2dCQUVELFlBQVk7Z0JBQ1osZUFBZTtnQkFHZixPQUFPO2dCQUNQLDRCQUFNLEdBQU47b0JBQ0MsWUFBWSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDakMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2hDLENBQUM7Z0JBRUQ7O2tCQUVFO2dCQUNGLHVDQUFpQixHQUFqQjtvQkFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztnQkFDNUIsQ0FBQztnQkFDRCxnQ0FBVSxHQUFWO29CQUNDLEVBQUUsQ0FBQSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUEsQ0FBQzt3QkFDMUMsTUFBTSxDQUFDLElBQUksQ0FBQztvQkFDYixDQUFDO29CQUFBLElBQUksQ0FBQSxDQUFDO3dCQUNMLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDakMsQ0FBQztnQkFDRixDQUFDO2dCQXJERjtvQkFBQyxpQkFBVSxFQUFFOzsrQkFBQTtnQkFzRGIsa0JBQUM7WUFBRCxDQXJEQSxBQXFEQyxJQUFBO1lBckRELHFDQXFEQyxDQUFBIiwiZmlsZSI6InNoYXJlZC9hdXRoLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0IHtJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtVc2VyfSBmcm9tICcuL3VzZXInO1xuaW1wb3J0ICdyeGpzL1J4JztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7Q29uZmlnfSBmcm9tICcuLi9jb25maWcvY29uZmlnJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcblx0cHJpdmF0ZSBlbmRwb2ludDogc3RyaW5nID0gQ29uZmlnLmVuZHBvaW50O1xuXHRwcml2YXRlIF91c2VyTG9nZ2VkT3V0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBfaHR0cDogSHR0cCxcblx0XHRwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikgeyB9XG5cdC8qIEdFVCAqL1xuXG5cdC8qIFBPU1QgKi9cblx0YXR0ZW1wdExvZ2luKHVzZXI6IFVzZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh1c2VyKTtcblx0XHRjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcblx0XHRoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcblx0XHRyZXR1cm4gdGhpcy5faHR0cC5wb3N0KFxuXHRcdFx0dGhpcy5lbmRwb2ludCArICcvYXV0aC9sb2dpbicsXG5cdFx0XHRib2R5LFxuXHRcdFx0eyBoZWFkZXJzOiBoZWFkZXJzIH0pXG5cdFx0XHQubWFwKHJlcyA9PiByZXMuanNvbigpKTtcblx0fVxuXHRhdHRlbXB0U2lnbnVwKHVzZXI6IFVzZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh1c2VyKTtcblx0XHRjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcblx0XHRoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcblx0XHRyZXR1cm4gdGhpcy5faHR0cC5wb3N0KFxuXHRcdFx0dGhpcy5lbmRwb2ludCArICcvYXV0aC9zaWdudXAnLFxuXHRcdFx0Ym9keSxcblx0XHRcdHsgaGVhZGVyczogaGVhZGVycyB9KVxuXHRcdFx0Lm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG5cdH1cblxuXHQvKiBERUxFVEUgKi9cblx0Ly9kZWxldGUgYWNjb3V0XG5cblxuXHQvLyBNaXNjXG5cdGxvZ291dCgpIHtcblx0XHRsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcblx0XHR0aGlzLl91c2VyTG9nZ2VkT3V0LmVtaXQobnVsbCk7XG5cdH1cblxuXHQvKiBNYWRlIHNvIHRoZSByb290IGNvbXBvbmVudCBjYW4gYWNjZXNzIHRoZSAgZXZlbnQgZW1pdHRlclxuXHRvZiB0aGUgdXNlckxvZ2dlZE91dCBldmVudCBBbmQgc3Vic2NyaWJlIHRvIGxpc3RlbiB0byBpdFxuXHQqL1xuXHRnZXRMb2dnZWRPdXRFdmVudCgpOiBFdmVudEVtaXR0ZXI8YW55PiB7XG5cdFx0cmV0dXJuIHRoaXMuX3VzZXJMb2dnZWRPdXQ7XG5cdH1cblx0Y2hlY2tWYWxpZCgpOiBib29sZWFue1xuXHRcdGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpICE9PSBudWxsKXtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1lbHNle1xuXHRcdFx0dGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnQXV0aCddKTtcblx0XHR9XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
