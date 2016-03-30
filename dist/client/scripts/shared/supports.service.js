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
    var SupportsService;
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
            SupportsService = (function () {
                function SupportsService(_http) {
                    this._http = _http;
                    this.endpoint = config_1.Config.endpoint;
                }
                /* GET */
                SupportsService.prototype.getSupports = function (pointId) {
                    return this._http.get(this.endpoint +
                        '/supports/getSupport/' +
                        pointId)
                        .map(function (res) { return res.json(); });
                };
                SupportsService.prototype.getSupport = function (_id) {
                };
                /* POST */
                SupportsService.prototype.insertSupport = function (support) {
                    var body = JSON.stringify(support);
                    var headers = new http_1.Headers();
                    console.log('Posting: ', support);
                    headers.append('Content-Type', 'application/json');
                    return this._http.post(this.endpoint +
                        '/supports/createSupportPoint', body, { headers: headers })
                        .map(function (res) { return res; });
                };
                /* DELETE */
                SupportsService.prototype.deleteSupport = function (supportId) {
                    // id in the future
                    return this._http.delete(this.endpoint +
                        '/supports/removeSupportPoint/' +
                        supportId)
                        .map(function (res) { return res; });
                };
                SupportsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], SupportsService);
                return SupportsService;
            }());
            exports_1("SupportsService", SupportsService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zdXBwb3J0cy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVFBO2dCQUVDLHlCQUNTLEtBQVc7b0JBQVgsVUFBSyxHQUFMLEtBQUssQ0FBTTtvQkFGWixhQUFRLEdBQVcsZUFBTSxDQUFDLFFBQVEsQ0FBQztnQkFFbkIsQ0FBQztnQkFDekIsU0FBUztnQkFDVCxxQ0FBVyxHQUFYLFVBQVksT0FBZTtvQkFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUNwQixJQUFJLENBQUMsUUFBUTt3QkFDYix1QkFBdUI7d0JBQ3ZCLE9BQU8sQ0FBQzt5QkFDUixHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7Z0JBQ3pCLENBQUM7Z0JBQ0Qsb0NBQVUsR0FBVixVQUFXLEdBQVc7Z0JBRXRCLENBQUM7Z0JBRUQsVUFBVTtnQkFDVix1Q0FBYSxHQUFiLFVBQWMsT0FBZ0I7b0JBQzdCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3JDLElBQU0sT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7b0JBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDO29CQUNsQyxPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO29CQUNuRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3JCLElBQUksQ0FBQyxRQUFRO3dCQUNiLDhCQUE4QixFQUM5QixJQUFJLEVBQ0osRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7eUJBQ3BCLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsRUFBSCxDQUFHLENBQUMsQ0FBQztnQkFDbkIsQ0FBQztnQkFFRCxZQUFZO2dCQUNaLHVDQUFhLEdBQWIsVUFBYyxTQUFpQjtvQkFDOUIsbUJBQW1CO29CQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQ3ZCLElBQUksQ0FBQyxRQUFRO3dCQUNiLCtCQUErQjt3QkFDL0IsU0FBUyxDQUFDO3lCQUNULEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsRUFBSCxDQUFHLENBQUMsQ0FBQztnQkFDbkIsQ0FBQztnQkF2Q0Y7b0JBQUMsaUJBQVUsRUFBRTs7bUNBQUE7Z0JBd0NiLHNCQUFDO1lBQUQsQ0F2Q0EsQUF1Q0MsSUFBQTtZQXZDRCw2Q0F1Q0MsQ0FBQSIsImZpbGUiOiJzaGFyZWQvc3VwcG9ydHMuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1N1cHBvcnR9IGZyb20gJy4vc3VwcG9ydCc7XG5pbXBvcnQgJ3J4anMvUngnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHtIdHRwLCBIZWFkZXJzfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCB7Q29uZmlnfSBmcm9tICcuLi9jb25maWcvY29uZmlnJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN1cHBvcnRzU2VydmljZSB7XG5cdHByaXZhdGUgZW5kcG9pbnQ6IHN0cmluZyA9IENvbmZpZy5lbmRwb2ludDtcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBfaHR0cDogSHR0cCkgeyB9XG5cdC8qIEdFVCAqL1xuXHRnZXRTdXBwb3J0cyhwb2ludElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdHJldHVybiB0aGlzLl9odHRwLmdldChcblx0XHRcdHRoaXMuZW5kcG9pbnQgKyBcblx0XHRcdCcvc3VwcG9ydHMvZ2V0U3VwcG9ydC8nICsgXG5cdFx0XHRwb2ludElkKVxuXHRcdC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuXHR9XG5cdGdldFN1cHBvcnQoX2lkOiBzdHJpbmcpe1xuXG5cdH1cblxuXHQvKiBQT1NUICovXG5cdGluc2VydFN1cHBvcnQoc3VwcG9ydDogU3VwcG9ydCk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0Y29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHN1cHBvcnQpO1xuXHRcdGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuXHRcdGNvbnNvbGUubG9nKCdQb3N0aW5nOiAnLCBzdXBwb3J0KTtcblx0XHRoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcblx0XHRyZXR1cm4gdGhpcy5faHR0cC5wb3N0KFxuXHRcdFx0dGhpcy5lbmRwb2ludCArXG5cdFx0XHQnL3N1cHBvcnRzL2NyZWF0ZVN1cHBvcnRQb2ludCcsXG5cdFx0XHRib2R5LFxuXHRcdFx0eyBoZWFkZXJzOiBoZWFkZXJzIH0pXG5cdFx0XHQubWFwKHJlcyA9PiByZXMpO1xuXHR9XG5cblx0LyogREVMRVRFICovXG5cdGRlbGV0ZVN1cHBvcnQoc3VwcG9ydElkOiBzdHJpbmcpe1xuXHRcdC8vIGlkIGluIHRoZSBmdXR1cmVcblx0XHRyZXR1cm4gdGhpcy5faHR0cC5kZWxldGUoXG5cdFx0XHR0aGlzLmVuZHBvaW50ICtcblx0XHRcdCcvc3VwcG9ydHMvcmVtb3ZlU3VwcG9ydFBvaW50LycgK1xuXHRcdFx0c3VwcG9ydElkKVxuXHRcdFx0Lm1hcChyZXMgPT4gcmVzKTtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
