System.register(['angular2/core', 'rxjs/Rx', 'angular2/http', '../config/config', './auth.service'], function(exports_1, context_1) {
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
    var core_1, http_1, config_1, auth_service_1;
    var PointsService;
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
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            }],
        execute: function() {
            PointsService = (function () {
                function PointsService(_http, _authService) {
                    this._http = _http;
                    this._authService = _authService;
                    this.endpoint = config_1.Config.endpoint;
                }
                /* GET */
                PointsService.prototype.getPoints = function (issueId, type) {
                    return this._http.get(this.endpoint + '/points/getPoints/' +
                        type +
                        '/' +
                        issueId)
                        .map(function (res) { return res.json(); });
                };
                PointsService.prototype.getPoint = function (pointId) {
                    // for (var i = POINTS.length - 1; i >= 0; i--) {
                    // 	if (POINTS[i]._id === pointId) {
                    // 		return POINTS[i];
                    // 	}
                    // }
                    // console.log('No point found');
                };
                /* POST */
                PointsService.prototype.insertPoint = function (point) {
                    var body = JSON.stringify(point);
                    var headers = new http_1.Headers();
                    console.log('Posting');
                    headers.append('Content-Type', 'application/json');
                    headers.append('x-access-token', (localStorage.getItem('token')) ? localStorage.getItem('token') : null);
                    return this._http.post(this.endpoint +
                        '/points/createPoint', body, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                PointsService.prototype.updatePoint = function (point) {
                    var body = JSON.stringify(point);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    headers.append('x-access-token', (localStorage.getItem('token')) ? localStorage.getItem('token') : null);
                    return this._http.post(this.endpoint + '/points/updatePoint', body, { headers: headers })
                        .map(function (res) { return res; });
                };
                /*insertSupport(pointIndx: number, support: Support):number{
                    if(this.selectedPoints[pointIndx]['supports']){
                        this.selectedPoints[pointIndx]['supports'].unshift(support);
                        return 200;
                    }else{
                        console.log('No supports');
                        return 400;
                    }
                }*/
                /* DELETE */
                PointsService.prototype.deletePoint = function (point) {
                    var headers = new http_1.Headers();
                    headers.append('x-access-token', (localStorage.getItem('token')) ? localStorage.getItem('token') : null);
                    return this._http.delete(this.endpoint +
                        '/points/deletePoint/' +
                        point.type +
                        '/' +
                        point.issue_id +
                        '/' +
                        point._id, { headers: headers })
                        .map(function (res) { return res; });
                };
                PointsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, auth_service_1.AuthService])
                ], PointsService);
                return PointsService;
            }());
            exports_1("PointsService", PointsService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,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OUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFDOUIsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztvQkFDekUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUN2QixJQUFJLENBQUMsUUFBUTt3QkFDYixzQkFBc0I7d0JBQ3RCLEtBQUssQ0FBQyxJQUFJO3dCQUNWLEdBQUc7d0JBQ0gsS0FBSyxDQUFDLFFBQVE7d0JBQ2QsR0FBRzt3QkFDSCxLQUFLLENBQUMsR0FBRyxFQUNULEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO3lCQUNwQixHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLEVBQUgsQ0FBRyxDQUFDLENBQUM7Z0JBQ25CLENBQUM7Z0JBMUVGO29CQUFDLGlCQUFVLEVBQUU7O2lDQUFBO2dCQTJFYixvQkFBQztZQUFELENBMUVBLEFBMEVDLElBQUE7WUExRUQseUNBMEVDLENBQUEiLCJmaWxlIjoic2hhcmVkL3BvaW50cy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7UG9pbnR9IGZyb20gJy4vcG9pbnQnO1xuaW1wb3J0IHtTdXBwb3J0fSBmcm9tICcuL3N1cHBvcnQnO1xuaW1wb3J0ICdyeGpzL1J4JztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7SHR0cCwgSGVhZGVyc30gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5pbXBvcnQge0NvbmZpZ30gZnJvbSAnLi4vY29uZmlnL2NvbmZpZyc7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuL2F1dGguc2VydmljZSc7XG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUG9pbnRzU2VydmljZSB7XG5cdHByaXZhdGUgZW5kcG9pbnQ6IHN0cmluZyA9IENvbmZpZy5lbmRwb2ludDtcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBfaHR0cDogSHR0cCxcblx0XHRwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2UpIHsgfVxuXHQvKiBHRVQgKi9cblx0Z2V0UG9pbnRzKGlzc3VlSWQ6IHN0cmluZywgdHlwZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRyZXR1cm4gdGhpcy5faHR0cC5nZXQoXG5cdFx0XHR0aGlzLmVuZHBvaW50ICsgJy9wb2ludHMvZ2V0UG9pbnRzLycgK1xuXHRcdFx0dHlwZSArXG5cdFx0XHQnLycgK1xuXHRcdFx0aXNzdWVJZClcblx0XHRcdC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuXHR9XG5cdGdldFBvaW50KHBvaW50SWQ6IHN0cmluZykge1xuXHRcdC8vIGZvciAodmFyIGkgPSBQT0lOVFMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcblx0XHQvLyBcdGlmIChQT0lOVFNbaV0uX2lkID09PSBwb2ludElkKSB7XG5cdFx0Ly8gXHRcdHJldHVybiBQT0lOVFNbaV07XG5cdFx0Ly8gXHR9XG5cdFx0Ly8gfVxuXHRcdC8vIGNvbnNvbGUubG9nKCdObyBwb2ludCBmb3VuZCcpO1xuXHR9XG5cdC8qIFBPU1QgKi9cblx0aW5zZXJ0UG9pbnQocG9pbnQ6IFBvaW50KTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkocG9pbnQpO1xuXHRcdGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuXHRcdGNvbnNvbGUubG9nKCdQb3N0aW5nJyk7XG5cdFx0aGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG5cdFx0aGVhZGVycy5hcHBlbmQoJ3gtYWNjZXNzLXRva2VuJyxcblx0XHRcdChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSkgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA6IG51bGwpO1xuXHRcdHJldHVybiB0aGlzLl9odHRwLnBvc3QoXG5cdFx0XHR0aGlzLmVuZHBvaW50ICtcblx0XHRcdCcvcG9pbnRzL2NyZWF0ZVBvaW50Jyxcblx0XHRcdGJvZHksXG5cdFx0XHR7IGhlYWRlcnM6IGhlYWRlcnMgfSlcblx0XHRcdC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuXHR9XG5cdHVwZGF0ZVBvaW50KHBvaW50OiBQb2ludCk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0Y29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHBvaW50KTtcblx0XHRjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcblx0XHRoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcblx0XHRoZWFkZXJzLmFwcGVuZCgneC1hY2Nlc3MtdG9rZW4nLFxuXHRcdFx0KGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpKSA/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpIDogbnVsbCk7XG5cdFx0cmV0dXJuIHRoaXMuX2h0dHAucG9zdChcblx0XHRcdHRoaXMuZW5kcG9pbnQgKyAnL3BvaW50cy91cGRhdGVQb2ludCcsXG5cdFx0XHRib2R5LFxuXHRcdFx0eyBoZWFkZXJzOiBoZWFkZXJzIH0pXG5cdFx0XHRcdC5tYXAocmVzID0+IHJlcyk7XG5cdH1cblx0LyppbnNlcnRTdXBwb3J0KHBvaW50SW5keDogbnVtYmVyLCBzdXBwb3J0OiBTdXBwb3J0KTpudW1iZXJ7XG5cdFx0aWYodGhpcy5zZWxlY3RlZFBvaW50c1twb2ludEluZHhdWydzdXBwb3J0cyddKXtcblx0XHRcdHRoaXMuc2VsZWN0ZWRQb2ludHNbcG9pbnRJbmR4XVsnc3VwcG9ydHMnXS51bnNoaWZ0KHN1cHBvcnQpO1xuXHRcdFx0cmV0dXJuIDIwMDtcblx0XHR9ZWxzZXtcblx0XHRcdGNvbnNvbGUubG9nKCdObyBzdXBwb3J0cycpO1xuXHRcdFx0cmV0dXJuIDQwMDtcblx0XHR9XG5cdH0qL1xuXHQvKiBERUxFVEUgKi9cblx0ZGVsZXRlUG9pbnQocG9pbnQ6IFBvaW50KTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcblx0XHRoZWFkZXJzLmFwcGVuZCgneC1hY2Nlc3MtdG9rZW4nLFxuXHRcdFx0KGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpKSA/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpIDogbnVsbCk7XG5cdFx0cmV0dXJuIHRoaXMuX2h0dHAuZGVsZXRlKFxuXHRcdFx0dGhpcy5lbmRwb2ludCArXG5cdFx0XHQnL3BvaW50cy9kZWxldGVQb2ludC8nICtcblx0XHRcdHBvaW50LnR5cGUgK1xuXHRcdFx0Jy8nICtcblx0XHRcdHBvaW50Lmlzc3VlX2lkICtcblx0XHRcdCcvJyArXG5cdFx0XHRwb2ludC5faWQsXG5cdFx0XHR7IGhlYWRlcnM6IGhlYWRlcnMgfSlcblx0XHRcdC5tYXAocmVzID0+IHJlcyk7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
