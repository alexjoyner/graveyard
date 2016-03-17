System.register(['angular2/core', 'rxjs/Rx', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var PointsService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            PointsService = (function () {
                function PointsService(_http) {
                    this._http = _http;
                    this.endpoint = 'http://localhost:9000';
                    this.selectedPoints = [];
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
                        .map(function (res) { return res; });
                };
                PointsService.prototype.insertSupport = function (pointIndx, support) {
                    if (this.selectedPoints[pointIndx]['supports']) {
                        this.selectedPoints[pointIndx]['supports'].unshift(support);
                        return 200;
                    }
                    else {
                        console.log('No supports');
                        return 400;
                    }
                };
                /* DELETE */
                PointsService.prototype.deletePoint = function (point) {
                    return this._http.delete(this.endpoint +
                        '/points/deletePoint/' +
                        point.type +
                        '/' +
                        point.issue_id +
                        '/' +
                        point._id)
                        .map(function (res) { return res.json(); });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9wb2ludHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFTQTtnQkFHQyx1QkFDUyxLQUFXO29CQUFYLFVBQUssR0FBTCxLQUFLLENBQU07b0JBSFosYUFBUSxHQUFXLHVCQUF1QixDQUFDO29CQUNuRCxtQkFBYyxHQUFZLEVBQUUsQ0FBQztnQkFFTCxDQUFDO2dCQUN6QixTQUFTO2dCQUNULGlDQUFTLEdBQVQsVUFBVSxPQUFlLEVBQUUsSUFBWTtvQkFDdEMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFvQjt3QkFDcEMsSUFBSTt3QkFDSixHQUFHO3dCQUNILE9BQU8sQ0FBQzt5QkFDUCxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7Z0JBQzFCLENBQUM7Z0JBQ0QsZ0NBQVEsR0FBUixVQUFTLE9BQWU7b0JBQ3ZCLGlEQUFpRDtvQkFDakQsb0NBQW9DO29CQUNwQyxzQkFBc0I7b0JBQ3RCLEtBQUs7b0JBQ0wsSUFBSTtvQkFDSixpQ0FBaUM7Z0JBQ2xDLENBQUM7Z0JBQ0QsVUFBVTtnQkFDVixtQ0FBVyxHQUFYLFVBQVksS0FBWTtvQkFDdkIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDbkMsSUFBTSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztvQkFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDdkIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztvQkFDbkQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNyQixJQUFJLENBQUMsUUFBUTt3QkFDYixxQkFBcUIsRUFDckIsSUFBSSxFQUNKLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO3lCQUNwQixHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLEVBQUgsQ0FBRyxDQUFDLENBQUM7Z0JBQ25CLENBQUM7Z0JBQ0QscUNBQWEsR0FBYixVQUFjLFNBQWlCLEVBQUUsT0FBZ0I7b0JBQ2hELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQSxDQUFDO3dCQUM5QyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDNUQsTUFBTSxDQUFDLEdBQUcsQ0FBQztvQkFDWixDQUFDO29CQUFBLElBQUksQ0FBQSxDQUFDO3dCQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7d0JBQzNCLE1BQU0sQ0FBQyxHQUFHLENBQUM7b0JBQ1osQ0FBQztnQkFDRixDQUFDO2dCQUNELFlBQVk7Z0JBQ1osbUNBQVcsR0FBWCxVQUFZLEtBQVk7b0JBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FDdkIsSUFBSSxDQUFDLFFBQVE7d0JBQ2Isc0JBQXNCO3dCQUN0QixLQUFLLENBQUMsSUFBSTt3QkFDVixHQUFHO3dCQUNILEtBQUssQ0FBQyxRQUFRO3dCQUNkLEdBQUc7d0JBQ0gsS0FBSyxDQUFDLEdBQUcsQ0FBQzt5QkFDVCxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7Z0JBQzFCLENBQUM7Z0JBeERGO29CQUFDLGlCQUFVLEVBQUU7O2lDQUFBO2dCQXlEYixvQkFBQztZQUFELENBeERBLEFBd0RDLElBQUE7WUF4REQseUNBd0RDLENBQUEiLCJmaWxlIjoic2hhcmVkL3BvaW50cy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7UG9pbnR9IGZyb20gJy4vcG9pbnQnO1xuaW1wb3J0IHtTdXBwb3J0fSBmcm9tICcuL3N1cHBvcnQnO1xuaW1wb3J0IHtQT0lOVFN9IGZyb20gJy4uL21vY2svbW9jay1wb2ludHMnO1xuaW1wb3J0ICdyeGpzL1J4JztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7SHR0cCwgSGVhZGVyc30gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQb2ludHNTZXJ2aWNlIHtcblx0cHJpdmF0ZSBlbmRwb2ludDogc3RyaW5nID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6OTAwMCc7XG5cdHNlbGVjdGVkUG9pbnRzOiBQb2ludFtdID0gW107XG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgX2h0dHA6IEh0dHApIHsgfVxuXHQvKiBHRVQgKi9cblx0Z2V0UG9pbnRzKGlzc3VlSWQ6IHN0cmluZywgdHlwZTogc3RyaW5nKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2h0dHAuZ2V0KFxuXHRcdFx0dGhpcy5lbmRwb2ludCArICcvcG9pbnRzL2dldFBvaW50cy8nICtcblx0XHRcdHR5cGUgK1xuXHRcdFx0Jy8nICtcblx0XHRcdGlzc3VlSWQpXG5cdFx0XHQubWFwKHJlcyA9PiByZXMuanNvbigpKTtcblx0fVxuXHRnZXRQb2ludChwb2ludElkOiBzdHJpbmcpIHtcblx0XHQvLyBmb3IgKHZhciBpID0gUE9JTlRTLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0Ly8gXHRpZiAoUE9JTlRTW2ldLl9pZCA9PT0gcG9pbnRJZCkge1xuXHRcdC8vIFx0XHRyZXR1cm4gUE9JTlRTW2ldO1xuXHRcdC8vIFx0fVxuXHRcdC8vIH1cblx0XHQvLyBjb25zb2xlLmxvZygnTm8gcG9pbnQgZm91bmQnKTtcblx0fVxuXHQvKiBQT1NUICovXG5cdGluc2VydFBvaW50KHBvaW50OiBQb2ludCkge1xuXHRcdGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShwb2ludCk7XG5cdFx0Y29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG5cdFx0Y29uc29sZS5sb2coJ1Bvc3RpbmcnKTtcblx0XHRoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcblx0XHRyZXR1cm4gdGhpcy5faHR0cC5wb3N0KFxuXHRcdFx0dGhpcy5lbmRwb2ludCArXG5cdFx0XHQnL3BvaW50cy9jcmVhdGVQb2ludCcsXG5cdFx0XHRib2R5LFxuXHRcdFx0eyBoZWFkZXJzOiBoZWFkZXJzIH0pXG5cdFx0XHQubWFwKHJlcyA9PiByZXMpO1xuXHR9XG5cdGluc2VydFN1cHBvcnQocG9pbnRJbmR4OiBudW1iZXIsIHN1cHBvcnQ6IFN1cHBvcnQpOm51bWJlcntcblx0XHRpZih0aGlzLnNlbGVjdGVkUG9pbnRzW3BvaW50SW5keF1bJ3N1cHBvcnRzJ10pe1xuXHRcdFx0dGhpcy5zZWxlY3RlZFBvaW50c1twb2ludEluZHhdWydzdXBwb3J0cyddLnVuc2hpZnQoc3VwcG9ydCk7XG5cdFx0XHRyZXR1cm4gMjAwO1xuXHRcdH1lbHNle1xuXHRcdFx0Y29uc29sZS5sb2coJ05vIHN1cHBvcnRzJyk7XG5cdFx0XHRyZXR1cm4gNDAwO1xuXHRcdH1cblx0fVxuXHQvKiBERUxFVEUgKi9cblx0ZGVsZXRlUG9pbnQocG9pbnQ6IFBvaW50KTpPYnNlcnZhYmxlPGFueT4ge1x0XHRcblx0XHRyZXR1cm4gdGhpcy5faHR0cC5kZWxldGUoXG5cdFx0XHR0aGlzLmVuZHBvaW50ICtcblx0XHRcdCcvcG9pbnRzL2RlbGV0ZVBvaW50LycgK1xuXHRcdFx0cG9pbnQudHlwZSArXG5cdFx0XHQnLycgK1xuXHRcdFx0cG9pbnQuaXNzdWVfaWQgK1xuXHRcdFx0Jy8nICtcblx0XHRcdHBvaW50Ll9pZClcblx0XHRcdC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
