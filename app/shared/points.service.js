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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9wb2ludHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFRQTtnQkFFQyx1QkFDUyxLQUFXO29CQUFYLFVBQUssR0FBTCxLQUFLLENBQU07b0JBRlosYUFBUSxHQUFXLHVCQUF1QixDQUFDO2dCQUUzQixDQUFDO2dCQUN6QixTQUFTO2dCQUNULGlDQUFTLEdBQVQsVUFBVSxPQUFlLEVBQUUsSUFBWTtvQkFDdEMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFvQjt3QkFDcEMsSUFBSTt3QkFDSixHQUFHO3dCQUNILE9BQU8sQ0FBQzt5QkFDUCxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7Z0JBQzFCLENBQUM7Z0JBQ0QsZ0NBQVEsR0FBUixVQUFTLE9BQWU7b0JBQ3ZCLGlEQUFpRDtvQkFDakQsb0NBQW9DO29CQUNwQyxzQkFBc0I7b0JBQ3RCLEtBQUs7b0JBQ0wsSUFBSTtvQkFDSixpQ0FBaUM7Z0JBQ2xDLENBQUM7Z0JBQ0QsVUFBVTtnQkFDVixtQ0FBVyxHQUFYLFVBQVksS0FBWTtvQkFDdkIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDbkMsSUFBTSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztvQkFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDdkIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztvQkFDbkQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNyQixJQUFJLENBQUMsUUFBUTt3QkFDYixxQkFBcUIsRUFDckIsSUFBSSxFQUNKLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO3lCQUNwQixHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7Z0JBQzFCLENBQUM7Z0JBQ0Q7Ozs7Ozs7O21CQVFHO2dCQUNILFlBQVk7Z0JBQ1osbUNBQVcsR0FBWCxVQUFZLEtBQVk7b0JBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FDdkIsSUFBSSxDQUFDLFFBQVE7d0JBQ2Isc0JBQXNCO3dCQUN0QixLQUFLLENBQUMsSUFBSTt3QkFDVixHQUFHO3dCQUNILEtBQUssQ0FBQyxRQUFRO3dCQUNkLEdBQUc7d0JBQ0gsS0FBSyxDQUFDLEdBQUcsQ0FBQzt5QkFDVCxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLEVBQUgsQ0FBRyxDQUFDLENBQUM7Z0JBQ25CLENBQUM7Z0JBdkRGO29CQUFDLGlCQUFVLEVBQUU7O2lDQUFBO2dCQXdEYixvQkFBQztZQUFELENBdkRBLEFBdURDLElBQUE7WUF2REQseUNBdURDLENBQUEiLCJmaWxlIjoic2hhcmVkL3BvaW50cy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7UG9pbnR9IGZyb20gJy4vcG9pbnQnO1xuaW1wb3J0IHtTdXBwb3J0fSBmcm9tICcuL3N1cHBvcnQnO1xuaW1wb3J0ICdyeGpzL1J4JztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7SHR0cCwgSGVhZGVyc30gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQb2ludHNTZXJ2aWNlIHtcblx0cHJpdmF0ZSBlbmRwb2ludDogc3RyaW5nID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6OTAwMCc7XG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgX2h0dHA6IEh0dHApIHsgfVxuXHQvKiBHRVQgKi9cblx0Z2V0UG9pbnRzKGlzc3VlSWQ6IHN0cmluZywgdHlwZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRyZXR1cm4gdGhpcy5faHR0cC5nZXQoXG5cdFx0XHR0aGlzLmVuZHBvaW50ICsgJy9wb2ludHMvZ2V0UG9pbnRzLycgK1xuXHRcdFx0dHlwZSArXG5cdFx0XHQnLycgK1xuXHRcdFx0aXNzdWVJZClcblx0XHRcdC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuXHR9XG5cdGdldFBvaW50KHBvaW50SWQ6IHN0cmluZykge1xuXHRcdC8vIGZvciAodmFyIGkgPSBQT0lOVFMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcblx0XHQvLyBcdGlmIChQT0lOVFNbaV0uX2lkID09PSBwb2ludElkKSB7XG5cdFx0Ly8gXHRcdHJldHVybiBQT0lOVFNbaV07XG5cdFx0Ly8gXHR9XG5cdFx0Ly8gfVxuXHRcdC8vIGNvbnNvbGUubG9nKCdObyBwb2ludCBmb3VuZCcpO1xuXHR9XG5cdC8qIFBPU1QgKi9cblx0aW5zZXJ0UG9pbnQocG9pbnQ6IFBvaW50KTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkocG9pbnQpO1xuXHRcdGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuXHRcdGNvbnNvbGUubG9nKCdQb3N0aW5nJyk7XG5cdFx0aGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG5cdFx0cmV0dXJuIHRoaXMuX2h0dHAucG9zdChcblx0XHRcdHRoaXMuZW5kcG9pbnQgK1xuXHRcdFx0Jy9wb2ludHMvY3JlYXRlUG9pbnQnLFxuXHRcdFx0Ym9keSxcblx0XHRcdHsgaGVhZGVyczogaGVhZGVycyB9KVxuXHRcdFx0Lm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG5cdH1cblx0LyppbnNlcnRTdXBwb3J0KHBvaW50SW5keDogbnVtYmVyLCBzdXBwb3J0OiBTdXBwb3J0KTpudW1iZXJ7XG5cdFx0aWYodGhpcy5zZWxlY3RlZFBvaW50c1twb2ludEluZHhdWydzdXBwb3J0cyddKXtcblx0XHRcdHRoaXMuc2VsZWN0ZWRQb2ludHNbcG9pbnRJbmR4XVsnc3VwcG9ydHMnXS51bnNoaWZ0KHN1cHBvcnQpO1xuXHRcdFx0cmV0dXJuIDIwMDtcblx0XHR9ZWxzZXtcblx0XHRcdGNvbnNvbGUubG9nKCdObyBzdXBwb3J0cycpO1xuXHRcdFx0cmV0dXJuIDQwMDtcblx0XHR9XG5cdH0qL1xuXHQvKiBERUxFVEUgKi9cblx0ZGVsZXRlUG9pbnQocG9pbnQ6IFBvaW50KTogT2JzZXJ2YWJsZTxhbnk+IHtcdFx0XG5cdFx0cmV0dXJuIHRoaXMuX2h0dHAuZGVsZXRlKFxuXHRcdFx0dGhpcy5lbmRwb2ludCArXG5cdFx0XHQnL3BvaW50cy9kZWxldGVQb2ludC8nICtcblx0XHRcdHBvaW50LnR5cGUgK1xuXHRcdFx0Jy8nICtcblx0XHRcdHBvaW50Lmlzc3VlX2lkICtcblx0XHRcdCcvJyArXG5cdFx0XHRwb2ludC5faWQpXG5cdFx0XHQubWFwKHJlcyA9PiByZXMpO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
