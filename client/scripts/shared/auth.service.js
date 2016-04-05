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
                    __metadata('design:paramtypes', [http_1.Http, router_1.Router])
                ], AuthService);
                return AuthService;
            }());
            exports_1("AuthService", AuthService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,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LHFDQTBEQyxDQUFBIiwiZmlsZSI6InNoYXJlZC9hdXRoLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0IHtJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtVc2VyfSBmcm9tICcuL3VzZXInO1xuaW1wb3J0ICdyeGpzL1J4JztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7Q29uZmlnfSBmcm9tICcuLi9jb25maWcvY29uZmlnJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcblx0cHJpdmF0ZSBlbmRwb2ludDogc3RyaW5nID0gQ29uZmlnLmVuZHBvaW50O1xuXHRwcml2YXRlIF91c2VyTG9nZ2VkT3V0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBfaHR0cDogSHR0cCxcblx0XHRwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikgeyB9XG5cdC8qIEdFVCAqL1xuXG5cdC8qIFBPU1QgKi9cblx0YXR0ZW1wdExvZ2luKHVzZXI/OiBVc2VyKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkodXNlcik7XG5cdFx0Y29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG5cdFx0aGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG5cdFx0cmV0dXJuIHRoaXMuX2h0dHAucG9zdChcblx0XHRcdHRoaXMuZW5kcG9pbnQgKyAnL2F1dGgvbG9naW4nLFxuXHRcdFx0Ym9keSxcblx0XHRcdHsgaGVhZGVyczogaGVhZGVycyB9KVxuXHRcdFx0Lm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG5cdH1cblx0YXR0ZW1wdFNpZ251cCh1c2VyOiBVc2VyKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkodXNlcik7XG5cdFx0Y29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG5cdFx0aGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG5cdFx0cmV0dXJuIHRoaXMuX2h0dHAucG9zdChcblx0XHRcdHRoaXMuZW5kcG9pbnQgKyAnL2F1dGgvc2lnbnVwJyxcblx0XHRcdGJvZHksXG5cdFx0XHR7IGhlYWRlcnM6IGhlYWRlcnMgfSlcblx0XHRcdC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuXHR9XG5cblx0LyogREVMRVRFICovXG5cdC8vZGVsZXRlIGFjY291dFxuXG5cblx0Ly8gTWlzY1xuXHRsb2dvdXQoKSB7XG5cdFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7XG5cdFx0dGhpcy5fdXNlckxvZ2dlZE91dC5lbWl0KG51bGwpO1xuXHRcdHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ0F1dGgnXSk7XG5cdH1cblxuXHQvKiBNYWRlIHNvIHRoZSByb290IGNvbXBvbmVudCBjYW4gYWNjZXNzIHRoZSAgZXZlbnQgZW1pdHRlclxuXHRvZiB0aGUgdXNlckxvZ2dlZE91dCBldmVudCBBbmQgc3Vic2NyaWJlIHRvIGxpc3RlbiB0byBpdFxuXHQqL1xuXHRnZXRMb2dnZWRPdXRFdmVudCgpOiBFdmVudEVtaXR0ZXI8YW55PiB7XG5cdFx0cmV0dXJuIHRoaXMuX3VzZXJMb2dnZWRPdXQ7XG5cdH1cblx0Y2hlY2tWYWxpZChmbGFnPzogYm9vbGVhbik6IGJvb2xlYW57XG5cdFx0aWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgIT09IG51bGwpe1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fWVsc2V7XG5cdFx0XHRpZihmbGFnKXtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ0F1dGgnXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
