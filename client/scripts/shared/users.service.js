System.register(['angular2/core', 'rxjs/Rx', 'angular2/http', '../config/config'], function(exports_1, context_1) {
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
    var core_1, http_1, config_1;
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
            }],
        execute: function() {
            UsersService = (function () {
                function UsersService(_http) {
                    this._http = _http;
                    this.endpoint = config_1.Config.endpoint;
                }
                /* GET */
                UsersService.prototype.getProfile = function () {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    headers.append('x-access-token', (localStorage.getItem('token')) ? localStorage.getItem('token') : null);
                    return this._http.get(this.endpoint +
                        '/users/profile', { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                UsersService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], UsersService);
                return UsersService;
            }());
            exports_1("UsersService", UsersService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC91c2Vycy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVFBO2dCQUdDLHNCQUNTLEtBQVc7b0JBQVgsVUFBSyxHQUFMLEtBQUssQ0FBTTtvQkFIWixhQUFRLEdBQVcsZUFBTSxDQUFDLFFBQVEsQ0FBQztnQkFHbkIsQ0FBQztnQkFDekIsU0FBUztnQkFDVCxpQ0FBVSxHQUFWO29CQUNDLElBQU0sT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7b0JBQzlCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7b0JBQ25ELE9BQU8sQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQzlCLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7b0JBQ3pFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FDcEIsSUFBSSxDQUFDLFFBQVE7d0JBQ2IsZ0JBQWdCLEVBQ2hCLEVBQUMsT0FBTyxFQUFHLE9BQU8sRUFBQyxDQUFDO3lCQUNwQixHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7Z0JBQ3pCLENBQUM7Z0JBakJGO29CQUFDLGlCQUFVLEVBQUU7O2dDQUFBO2dCQXFCYixtQkFBQztZQUFELENBcEJBLEFBb0JDLElBQUE7WUFwQkQsdUNBb0JDLENBQUEiLCJmaWxlIjoic2hhcmVkL3VzZXJzLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtVc2VyfSBmcm9tICcuL3VzZXInO1xuaW1wb3J0ICdyeGpzL1J4JztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7SHR0cCwgSGVhZGVyc30gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5pbXBvcnQge0NvbmZpZ30gZnJvbSAnLi4vY29uZmlnL2NvbmZpZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2Vyc1NlcnZpY2Uge1xuXHRwcml2YXRlIGVuZHBvaW50OiBzdHJpbmcgPSBDb25maWcuZW5kcG9pbnQ7XG5cdHB1YmxpYyBwcm9maWxlO1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIF9odHRwOiBIdHRwKSB7IH1cblx0LyogR0VUICovXG5cdGdldFByb2ZpbGUoKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcblx0XHRoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcblx0XHRoZWFkZXJzLmFwcGVuZCgneC1hY2Nlc3MtdG9rZW4nLFxuXHRcdFx0KGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpKSA/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpIDogbnVsbCk7XG5cdFx0cmV0dXJuIHRoaXMuX2h0dHAuZ2V0KFxuXHRcdFx0dGhpcy5lbmRwb2ludCArIFxuXHRcdFx0Jy91c2Vycy9wcm9maWxlJyxcblx0XHRcdHtoZWFkZXJzIDogaGVhZGVyc30pXG5cdFx0Lm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG5cdH1cblx0LyogUE9TVCAqL1xuXG5cdC8qIERFTEVURSAqL1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
