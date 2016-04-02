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
            }],
        execute: function() {
            PointsService = (function () {
                function PointsService(_http) {
                    this._http = _http;
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
                    __metadata('design:paramtypes', [http_1.Http])
                ], PointsService);
                return PointsService;
            }());
            exports_1("PointsService", PointsService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9wb2ludHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFRQTtnQkFFQyx1QkFDUyxLQUFXO29CQUFYLFVBQUssR0FBTCxLQUFLLENBQU07b0JBRlosYUFBUSxHQUFXLGVBQU0sQ0FBQyxRQUFRLENBQUM7Z0JBRW5CLENBQUM7Z0JBQ3pCLFNBQVM7Z0JBQ1QsaUNBQVMsR0FBVCxVQUFVLE9BQWUsRUFBRSxJQUFZO29CQUN0QyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQW9CO3dCQUNwQyxJQUFJO3dCQUNKLEdBQUc7d0JBQ0gsT0FBTyxDQUFDO3lCQUNQLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztnQkFDMUIsQ0FBQztnQkFDRCxnQ0FBUSxHQUFSLFVBQVMsT0FBZTtvQkFDdkIsaURBQWlEO29CQUNqRCxvQ0FBb0M7b0JBQ3BDLHNCQUFzQjtvQkFDdEIsS0FBSztvQkFDTCxJQUFJO29CQUNKLGlDQUFpQztnQkFDbEMsQ0FBQztnQkFDRCxVQUFVO2dCQUNWLG1DQUFXLEdBQVgsVUFBWSxLQUFZO29CQUN2QixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNuQyxJQUFNLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO29CQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUN2QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO29CQUNuRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3JCLElBQUksQ0FBQyxRQUFRO3dCQUNiLHFCQUFxQixFQUNyQixJQUFJLEVBQ0osRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7eUJBQ3BCLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztnQkFDMUIsQ0FBQztnQkFDRCxtQ0FBVyxHQUFYLFVBQVksS0FBWTtvQkFDdkIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDbkMsSUFBTSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztvQkFDOUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztvQkFDbkQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLHFCQUFxQixFQUNyQyxJQUFJLEVBQ0osRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7eUJBQ3BCLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsRUFBSCxDQUFHLENBQUMsQ0FBQztnQkFDbkIsQ0FBQztnQkFDRDs7Ozs7Ozs7bUJBUUc7Z0JBQ0gsWUFBWTtnQkFDWixtQ0FBVyxHQUFYLFVBQVksS0FBWTtvQkFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUN2QixJQUFJLENBQUMsUUFBUTt3QkFDYixzQkFBc0I7d0JBQ3RCLEtBQUssQ0FBQyxJQUFJO3dCQUNWLEdBQUc7d0JBQ0gsS0FBSyxDQUFDLFFBQVE7d0JBQ2QsR0FBRzt3QkFDSCxLQUFLLENBQUMsR0FBRyxDQUFDO3lCQUNULEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsRUFBSCxDQUFHLENBQUMsQ0FBQztnQkFDbkIsQ0FBQztnQkFqRUY7b0JBQUMsaUJBQVUsRUFBRTs7aUNBQUE7Z0JBa0ViLG9CQUFDO1lBQUQsQ0FqRUEsQUFpRUMsSUFBQTtZQWpFRCx5Q0FpRUMsQ0FBQSIsImZpbGUiOiJzaGFyZWQvcG9pbnRzLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtQb2ludH0gZnJvbSAnLi9wb2ludCc7XG5pbXBvcnQge1N1cHBvcnR9IGZyb20gJy4vc3VwcG9ydCc7XG5pbXBvcnQgJ3J4anMvUngnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHtIdHRwLCBIZWFkZXJzfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCB7Q29uZmlnfSBmcm9tICcuLi9jb25maWcvY29uZmlnJztcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQb2ludHNTZXJ2aWNlIHtcblx0cHJpdmF0ZSBlbmRwb2ludDogc3RyaW5nID0gQ29uZmlnLmVuZHBvaW50O1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIF9odHRwOiBIdHRwKSB7IH1cblx0LyogR0VUICovXG5cdGdldFBvaW50cyhpc3N1ZUlkOiBzdHJpbmcsIHR5cGU6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0cmV0dXJuIHRoaXMuX2h0dHAuZ2V0KFxuXHRcdFx0dGhpcy5lbmRwb2ludCArICcvcG9pbnRzL2dldFBvaW50cy8nICtcblx0XHRcdHR5cGUgK1xuXHRcdFx0Jy8nICtcblx0XHRcdGlzc3VlSWQpXG5cdFx0XHQubWFwKHJlcyA9PiByZXMuanNvbigpKTtcblx0fVxuXHRnZXRQb2ludChwb2ludElkOiBzdHJpbmcpIHtcblx0XHQvLyBmb3IgKHZhciBpID0gUE9JTlRTLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0Ly8gXHRpZiAoUE9JTlRTW2ldLl9pZCA9PT0gcG9pbnRJZCkge1xuXHRcdC8vIFx0XHRyZXR1cm4gUE9JTlRTW2ldO1xuXHRcdC8vIFx0fVxuXHRcdC8vIH1cblx0XHQvLyBjb25zb2xlLmxvZygnTm8gcG9pbnQgZm91bmQnKTtcblx0fVxuXHQvKiBQT1NUICovXG5cdGluc2VydFBvaW50KHBvaW50OiBQb2ludCk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0Y29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHBvaW50KTtcblx0XHRjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcblx0XHRjb25zb2xlLmxvZygnUG9zdGluZycpO1xuXHRcdGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuXHRcdHJldHVybiB0aGlzLl9odHRwLnBvc3QoXG5cdFx0XHR0aGlzLmVuZHBvaW50ICtcblx0XHRcdCcvcG9pbnRzL2NyZWF0ZVBvaW50Jyxcblx0XHRcdGJvZHksXG5cdFx0XHR7IGhlYWRlcnM6IGhlYWRlcnMgfSlcblx0XHRcdC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuXHR9XG5cdHVwZGF0ZVBvaW50KHBvaW50OiBQb2ludCk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0Y29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHBvaW50KTtcblx0XHRjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcblx0XHRoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcblx0XHRyZXR1cm4gdGhpcy5faHR0cC5wb3N0KFxuXHRcdFx0dGhpcy5lbmRwb2ludCArICcvcG9pbnRzL3VwZGF0ZVBvaW50Jyxcblx0XHRcdGJvZHksXG5cdFx0XHR7IGhlYWRlcnM6IGhlYWRlcnMgfSlcblx0XHRcdC5tYXAocmVzID0+IHJlcyk7XG5cdH1cblx0LyppbnNlcnRTdXBwb3J0KHBvaW50SW5keDogbnVtYmVyLCBzdXBwb3J0OiBTdXBwb3J0KTpudW1iZXJ7XG5cdFx0aWYodGhpcy5zZWxlY3RlZFBvaW50c1twb2ludEluZHhdWydzdXBwb3J0cyddKXtcblx0XHRcdHRoaXMuc2VsZWN0ZWRQb2ludHNbcG9pbnRJbmR4XVsnc3VwcG9ydHMnXS51bnNoaWZ0KHN1cHBvcnQpO1xuXHRcdFx0cmV0dXJuIDIwMDtcblx0XHR9ZWxzZXtcblx0XHRcdGNvbnNvbGUubG9nKCdObyBzdXBwb3J0cycpO1xuXHRcdFx0cmV0dXJuIDQwMDtcblx0XHR9XG5cdH0qL1xuXHQvKiBERUxFVEUgKi9cblx0ZGVsZXRlUG9pbnQocG9pbnQ6IFBvaW50KTogT2JzZXJ2YWJsZTxhbnk+IHtcdFx0XG5cdFx0cmV0dXJuIHRoaXMuX2h0dHAuZGVsZXRlKFxuXHRcdFx0dGhpcy5lbmRwb2ludCArXG5cdFx0XHQnL3BvaW50cy9kZWxldGVQb2ludC8nICtcblx0XHRcdHBvaW50LnR5cGUgK1xuXHRcdFx0Jy8nICtcblx0XHRcdHBvaW50Lmlzc3VlX2lkICtcblx0XHRcdCcvJyArXG5cdFx0XHRwb2ludC5faWQpXG5cdFx0XHQubWFwKHJlcyA9PiByZXMpO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
