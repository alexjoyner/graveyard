System.register(['angular2/core', '../mock/mock-points'], function(exports_1, context_1) {
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
    var core_1, mock_points_1;
    var PointsService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_points_1_1) {
                mock_points_1 = mock_points_1_1;
            }],
        execute: function() {
            PointsService = (function () {
                function PointsService() {
                    this.selectedPoints = [];
                }
                /* GET */
                PointsService.prototype.getPoints = function (issueId) {
                    this.selectedPoints = [];
                    for (var i = mock_points_1.POINTS.length - 1; i >= 0; i--) {
                        if (mock_points_1.POINTS[i].issue_id === issueId) {
                            this.selectedPoints.push(mock_points_1.POINTS[i]);
                        }
                    }
                    return this.selectedPoints;
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
                    mock_points_1.POINTS.unshift(point);
                    this.selectedPoints.unshift(point);
                    return point;
                };
                /* DELETE */
                PointsService.prototype.deletePoint = function (point) {
                    if (mock_points_1.POINTS.indexOf(point) > -1) {
                        mock_points_1.POINTS.splice(mock_points_1.POINTS.indexOf(point), 1);
                        this.selectedPoints.splice(this.selectedPoints.indexOf(point), 1);
                        return 200;
                    }
                    else {
                        return 400;
                    }
                };
                PointsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], PointsService);
                return PointsService;
            }());
            exports_1("PointsService", PointsService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9wb2ludHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQUFBO29CQUNDLG1CQUFjLEdBQVksRUFBRSxDQUFDO2dCQW1DOUIsQ0FBQztnQkFsQ0EsU0FBUztnQkFDVCxpQ0FBUyxHQUFULFVBQVUsT0FBZTtvQkFDeEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7b0JBQ3pCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLG9CQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7d0JBQzdDLEVBQUUsQ0FBQyxDQUFDLG9CQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxLQUFLLE9BQU8sQ0FBQyxDQUFBLENBQUM7NEJBQ25DLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLG9CQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDckMsQ0FBQztvQkFDRixDQUFDO29CQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO2dCQUM1QixDQUFDO2dCQUNELGdDQUFRLEdBQVIsVUFBUyxPQUFlO29CQUN2QixpREFBaUQ7b0JBQ2pELG9DQUFvQztvQkFDcEMsc0JBQXNCO29CQUN0QixLQUFLO29CQUNMLElBQUk7b0JBQ0osaUNBQWlDO2dCQUNsQyxDQUFDO2dCQUNELFVBQVU7Z0JBQ1YsbUNBQVcsR0FBWCxVQUFZLEtBQVk7b0JBQ3ZCLG9CQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN0QixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDbkMsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFDZCxDQUFDO2dCQUNELFlBQVk7Z0JBQ1osbUNBQVcsR0FBWCxVQUFZLEtBQVk7b0JBQ3ZCLEVBQUUsQ0FBQSxDQUFDLG9CQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQzt3QkFDOUIsb0JBQU0sQ0FBQyxNQUFNLENBQUMsb0JBQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ3hDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUNsRSxNQUFNLENBQUMsR0FBRyxDQUFDO29CQUNaLENBQUM7b0JBQUEsSUFBSSxDQUFDLENBQUM7d0JBQ04sTUFBTSxDQUFDLEdBQUcsQ0FBQztvQkFDWixDQUFDO2dCQUNGLENBQUM7Z0JBcENGO29CQUFDLGlCQUFVLEVBQUU7O2lDQUFBO2dCQXFDYixvQkFBQztZQUFELENBcENBLEFBb0NDLElBQUE7WUFwQ0QseUNBb0NDLENBQUEiLCJmaWxlIjoic2hhcmVkL3BvaW50cy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7UG9pbnR9IGZyb20gJy4vcG9pbnQnO1xuaW1wb3J0IHtQT0lOVFN9IGZyb20gJy4uL21vY2svbW9jay1wb2ludHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUG9pbnRzU2VydmljZSB7XG5cdHNlbGVjdGVkUG9pbnRzOiBQb2ludFtdID0gW107XG5cdC8qIEdFVCAqL1xuXHRnZXRQb2ludHMoaXNzdWVJZDogc3RyaW5nKSB7XG5cdFx0dGhpcy5zZWxlY3RlZFBvaW50cyA9IFtdO1xuXHRcdGZvciAodmFyIGkgPSBQT0lOVFMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcblx0XHRcdGlmIChQT0lOVFNbaV0uaXNzdWVfaWQgPT09IGlzc3VlSWQpe1xuXHRcdFx0XHR0aGlzLnNlbGVjdGVkUG9pbnRzLnB1c2goUE9JTlRTW2ldKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuc2VsZWN0ZWRQb2ludHM7XG5cdH1cblx0Z2V0UG9pbnQocG9pbnRJZDogc3RyaW5nKSB7XG5cdFx0Ly8gZm9yICh2YXIgaSA9IFBPSU5UUy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuXHRcdC8vIFx0aWYgKFBPSU5UU1tpXS5faWQgPT09IHBvaW50SWQpIHtcblx0XHQvLyBcdFx0cmV0dXJuIFBPSU5UU1tpXTtcblx0XHQvLyBcdH1cblx0XHQvLyB9XG5cdFx0Ly8gY29uc29sZS5sb2coJ05vIHBvaW50IGZvdW5kJyk7XG5cdH1cblx0LyogUE9TVCAqL1xuXHRpbnNlcnRQb2ludChwb2ludDogUG9pbnQpIHtcblx0XHRQT0lOVFMudW5zaGlmdChwb2ludCk7XG5cdFx0dGhpcy5zZWxlY3RlZFBvaW50cy51bnNoaWZ0KHBvaW50KTtcblx0XHRyZXR1cm4gcG9pbnQ7XG5cdH1cblx0LyogREVMRVRFICovXG5cdGRlbGV0ZVBvaW50KHBvaW50OiBQb2ludCk6bnVtYmVyIHtcdFx0XG5cdFx0aWYoUE9JTlRTLmluZGV4T2YocG9pbnQpID4gLTEpe1xuXHRcdFx0UE9JTlRTLnNwbGljZShQT0lOVFMuaW5kZXhPZihwb2ludCksIDEpO1xuXHRcdFx0dGhpcy5zZWxlY3RlZFBvaW50cy5zcGxpY2UodGhpcy5zZWxlY3RlZFBvaW50cy5pbmRleE9mKHBvaW50KSwgMSk7XG5cdFx0XHRyZXR1cm4gMjAwO1xuXHRcdH1lbHNlIHtcblx0XHRcdHJldHVybiA0MDA7XG5cdFx0fVxuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
