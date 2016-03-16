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
                PointsService.prototype.getPoints = function (issueId, type) {
                    this.selectedPoints = [];
                    for (var i = mock_points_1.POINTS.length - 1; i >= 0; i--) {
                        if (mock_points_1.POINTS[i].issue_id === issueId && mock_points_1.POINTS[i].type === type) {
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

//# sourceMappingURL=data:application/json;base64,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Y3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7UG9pbnR9IGZyb20gJy4vcG9pbnQnO1xuaW1wb3J0IHtTdXBwb3J0fSBmcm9tICcuL3N1cHBvcnQnO1xuaW1wb3J0IHtQT0lOVFN9IGZyb20gJy4uL21vY2svbW9jay1wb2ludHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUG9pbnRzU2VydmljZSB7XG5cdHNlbGVjdGVkUG9pbnRzOiBQb2ludFtdID0gW107XG5cdC8qIEdFVCAqL1xuXHRnZXRQb2ludHMoaXNzdWVJZDogc3RyaW5nLCB0eXBlOiBzdHJpbmcpIHtcblx0XHR0aGlzLnNlbGVjdGVkUG9pbnRzID0gW107XG5cdFx0Zm9yICh2YXIgaSA9IFBPSU5UUy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuXHRcdFx0aWYgKFBPSU5UU1tpXS5pc3N1ZV9pZCA9PT0gaXNzdWVJZCAmJiBQT0lOVFNbaV0udHlwZSA9PT0gdHlwZSl7XG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRQb2ludHMucHVzaChQT0lOVFNbaV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5zZWxlY3RlZFBvaW50cztcblx0fVxuXHRnZXRQb2ludChwb2ludElkOiBzdHJpbmcpIHtcblx0XHQvLyBmb3IgKHZhciBpID0gUE9JTlRTLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0Ly8gXHRpZiAoUE9JTlRTW2ldLl9pZCA9PT0gcG9pbnRJZCkge1xuXHRcdC8vIFx0XHRyZXR1cm4gUE9JTlRTW2ldO1xuXHRcdC8vIFx0fVxuXHRcdC8vIH1cblx0XHQvLyBjb25zb2xlLmxvZygnTm8gcG9pbnQgZm91bmQnKTtcblx0fVxuXHQvKiBQT1NUICovXG5cdGluc2VydFBvaW50KHBvaW50OiBQb2ludCkge1xuXHRcdFBPSU5UUy51bnNoaWZ0KHBvaW50KTtcblx0XHR0aGlzLnNlbGVjdGVkUG9pbnRzLnVuc2hpZnQocG9pbnQpO1xuXHRcdHJldHVybiBwb2ludDtcblx0fVxuXHRpbnNlcnRTdXBwb3J0KHBvaW50SW5keDogbnVtYmVyLCBzdXBwb3J0OiBTdXBwb3J0KTpudW1iZXJ7XG5cdFx0aWYodGhpcy5zZWxlY3RlZFBvaW50c1twb2ludEluZHhdWydzdXBwb3J0cyddKXtcblx0XHRcdHRoaXMuc2VsZWN0ZWRQb2ludHNbcG9pbnRJbmR4XVsnc3VwcG9ydHMnXS51bnNoaWZ0KHN1cHBvcnQpO1xuXHRcdFx0cmV0dXJuIDIwMDtcblx0XHR9ZWxzZXtcblx0XHRcdGNvbnNvbGUubG9nKCdObyBzdXBwb3J0cycpO1xuXHRcdFx0cmV0dXJuIDQwMDtcblx0XHR9XG5cdH1cblx0LyogREVMRVRFICovXG5cdGRlbGV0ZVBvaW50KHBvaW50OiBQb2ludCk6bnVtYmVyIHtcdFx0XG5cdFx0aWYoUE9JTlRTLmluZGV4T2YocG9pbnQpID4gLTEpe1xuXHRcdFx0UE9JTlRTLnNwbGljZShQT0lOVFMuaW5kZXhPZihwb2ludCksIDEpO1xuXHRcdFx0dGhpcy5zZWxlY3RlZFBvaW50cy5zcGxpY2UodGhpcy5zZWxlY3RlZFBvaW50cy5pbmRleE9mKHBvaW50KSwgMSk7XG5cdFx0XHRyZXR1cm4gMjAwO1xuXHRcdH1lbHNlIHtcblx0XHRcdHJldHVybiA0MDA7XG5cdFx0fVxuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
