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
                    return this._http.post(this.endpoint +
                        '/points/createPoint', body, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                PointsService.prototype.updatePoint = function (point) {
                    var body = JSON.stringify(point);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
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
                    return this._http.delete(this.endpoint +
                        '/points/deletePoint/' +
                        point.type +
                        '/' +
                        point.issue_id +
                        '/' +
                        point._id)
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

//# sourceMappingURL=data:application/json;base64,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RUMsQ0FBQSIsImZpbGUiOiJzaGFyZWQvcG9pbnRzLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtQb2ludH0gZnJvbSAnLi9wb2ludCc7XG5pbXBvcnQge1N1cHBvcnR9IGZyb20gJy4vc3VwcG9ydCc7XG5pbXBvcnQgJ3J4anMvUngnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHtIdHRwLCBIZWFkZXJzfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCB7Q29uZmlnfSBmcm9tICcuLi9jb25maWcvY29uZmlnJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQb2ludHNTZXJ2aWNlIHtcblx0cHJpdmF0ZSBlbmRwb2ludDogc3RyaW5nID0gQ29uZmlnLmVuZHBvaW50O1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIF9odHRwOiBIdHRwLFxuXHRcdHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSkgeyB9XG5cdC8qIEdFVCAqL1xuXHRnZXRQb2ludHMoaXNzdWVJZDogc3RyaW5nLCB0eXBlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdHJldHVybiB0aGlzLl9odHRwLmdldChcblx0XHRcdHRoaXMuZW5kcG9pbnQgKyAnL3BvaW50cy9nZXRQb2ludHMvJyArXG5cdFx0XHR0eXBlICtcblx0XHRcdCcvJyArXG5cdFx0XHRpc3N1ZUlkKVxuXHRcdFx0Lm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG5cdH1cblx0Z2V0UG9pbnQocG9pbnRJZDogc3RyaW5nKSB7XG5cdFx0Ly8gZm9yICh2YXIgaSA9IFBPSU5UUy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuXHRcdC8vIFx0aWYgKFBPSU5UU1tpXS5faWQgPT09IHBvaW50SWQpIHtcblx0XHQvLyBcdFx0cmV0dXJuIFBPSU5UU1tpXTtcblx0XHQvLyBcdH1cblx0XHQvLyB9XG5cdFx0Ly8gY29uc29sZS5sb2coJ05vIHBvaW50IGZvdW5kJyk7XG5cdH1cblx0LyogUE9TVCAqL1xuXHRpbnNlcnRQb2ludChwb2ludDogUG9pbnQpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdFx0Y29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHBvaW50KTtcblx0XHRcdGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuXHRcdFx0Y29uc29sZS5sb2coJ1Bvc3RpbmcnKTtcblx0XHRcdGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuXHRcdFx0cmV0dXJuIHRoaXMuX2h0dHAucG9zdChcblx0XHRcdFx0dGhpcy5lbmRwb2ludCArXG5cdFx0XHRcdCcvcG9pbnRzL2NyZWF0ZVBvaW50Jyxcblx0XHRcdFx0Ym9keSxcblx0XHRcdFx0eyBoZWFkZXJzOiBoZWFkZXJzIH0pXG5cdFx0XHRcdC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuXHR9XG5cdHVwZGF0ZVBvaW50KHBvaW50OiBQb2ludCk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0XHRjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkocG9pbnQpO1xuXHRcdFx0Y29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG5cdFx0XHRoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcblx0XHRcdHJldHVybiB0aGlzLl9odHRwLnBvc3QoXG5cdFx0XHRcdHRoaXMuZW5kcG9pbnQgKyAnL3BvaW50cy91cGRhdGVQb2ludCcsXG5cdFx0XHRcdGJvZHksXG5cdFx0XHRcdHsgaGVhZGVyczogaGVhZGVycyB9KVxuXHRcdFx0XHRcdC5tYXAocmVzID0+IHJlcyk7XG5cdH1cblx0LyppbnNlcnRTdXBwb3J0KHBvaW50SW5keDogbnVtYmVyLCBzdXBwb3J0OiBTdXBwb3J0KTpudW1iZXJ7XG5cdFx0aWYodGhpcy5zZWxlY3RlZFBvaW50c1twb2ludEluZHhdWydzdXBwb3J0cyddKXtcblx0XHRcdHRoaXMuc2VsZWN0ZWRQb2ludHNbcG9pbnRJbmR4XVsnc3VwcG9ydHMnXS51bnNoaWZ0KHN1cHBvcnQpO1xuXHRcdFx0cmV0dXJuIDIwMDtcblx0XHR9ZWxzZXtcblx0XHRcdGNvbnNvbGUubG9nKCdObyBzdXBwb3J0cycpO1xuXHRcdFx0cmV0dXJuIDQwMDtcblx0XHR9XG5cdH0qL1xuXHQvKiBERUxFVEUgKi9cblx0ZGVsZXRlUG9pbnQocG9pbnQ6IFBvaW50KTogT2JzZXJ2YWJsZTxhbnk+IHtcdFxuXHRcdFx0cmV0dXJuIHRoaXMuX2h0dHAuZGVsZXRlKFxuXHRcdFx0XHR0aGlzLmVuZHBvaW50ICtcblx0XHRcdFx0Jy9wb2ludHMvZGVsZXRlUG9pbnQvJyArXG5cdFx0XHRcdHBvaW50LnR5cGUgK1xuXHRcdFx0XHQnLycgK1xuXHRcdFx0XHRwb2ludC5pc3N1ZV9pZCArXG5cdFx0XHRcdCcvJyArXG5cdFx0XHRcdHBvaW50Ll9pZClcblx0XHRcdFx0Lm1hcChyZXMgPT4gcmVzKTtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
