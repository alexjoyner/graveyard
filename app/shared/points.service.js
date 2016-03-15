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
                }
                /* GET */
                PointsService.prototype.getPoints = function (issueId) {
                    var returnArray = [];
                    for (var i = mock_points_1.POINTS.length - 1; i >= 0; i--) {
                        if (mock_points_1.POINTS[i].issue_id === issueId) {
                            returnArray.push(mock_points_1.POINTS[i]);
                        }
                    }
                    return returnArray;
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
                    return point;
                };
                /* DELETE */
                PointsService.prototype.deletePoint = function (point) {
                    if (mock_points_1.POINTS.indexOf(point) > -1) {
                        mock_points_1.POINTS.splice(mock_points_1.POINTS.indexOf(point), 1);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9wb2ludHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQUFBO2dCQWlDQSxDQUFDO2dCQWhDQSxTQUFTO2dCQUNULGlDQUFTLEdBQVQsVUFBVSxPQUFlO29CQUN4QixJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUM7b0JBQ3JCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLG9CQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7d0JBQzdDLEVBQUUsQ0FBQyxDQUFDLG9CQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxLQUFLLE9BQU8sQ0FBQyxDQUFBLENBQUM7NEJBQ25DLFdBQVcsQ0FBQyxJQUFJLENBQUMsb0JBQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM3QixDQUFDO29CQUNGLENBQUM7b0JBQ0QsTUFBTSxDQUFDLFdBQVcsQ0FBQztnQkFDcEIsQ0FBQztnQkFDRCxnQ0FBUSxHQUFSLFVBQVMsT0FBZTtvQkFDdkIsaURBQWlEO29CQUNqRCxvQ0FBb0M7b0JBQ3BDLHNCQUFzQjtvQkFDdEIsS0FBSztvQkFDTCxJQUFJO29CQUNKLGlDQUFpQztnQkFDbEMsQ0FBQztnQkFDRCxVQUFVO2dCQUNWLG1DQUFXLEdBQVgsVUFBWSxLQUFZO29CQUN2QixvQkFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDdEIsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFDZCxDQUFDO2dCQUNELFlBQVk7Z0JBQ1osbUNBQVcsR0FBWCxVQUFZLEtBQVk7b0JBQ3ZCLEVBQUUsQ0FBQSxDQUFDLG9CQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQzt3QkFDOUIsb0JBQU0sQ0FBQyxNQUFNLENBQUMsb0JBQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7d0JBQ3ZDLE1BQU0sQ0FBQyxHQUFHLENBQUM7b0JBQ1osQ0FBQztvQkFBQSxJQUFJLENBQUMsQ0FBQzt3QkFDTixNQUFNLENBQUMsR0FBRyxDQUFDO29CQUNaLENBQUM7Z0JBQ0YsQ0FBQztnQkFqQ0Y7b0JBQUMsaUJBQVUsRUFBRTs7aUNBQUE7Z0JBa0NiLG9CQUFDO1lBQUQsQ0FqQ0EsQUFpQ0MsSUFBQTtZQWpDRCx5Q0FpQ0MsQ0FBQSIsImZpbGUiOiJzaGFyZWQvcG9pbnRzLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtQb2ludH0gZnJvbSAnLi9wb2ludCc7XG5pbXBvcnQge1BPSU5UU30gZnJvbSAnLi4vbW9jay9tb2NrLXBvaW50cyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQb2ludHNTZXJ2aWNlIHtcblx0LyogR0VUICovXG5cdGdldFBvaW50cyhpc3N1ZUlkOiBzdHJpbmcpIHtcblx0XHRsZXQgcmV0dXJuQXJyYXkgPSBbXTtcblx0XHRmb3IgKHZhciBpID0gUE9JTlRTLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHRpZiAoUE9JTlRTW2ldLmlzc3VlX2lkID09PSBpc3N1ZUlkKXtcblx0XHRcdFx0cmV0dXJuQXJyYXkucHVzaChQT0lOVFNbaV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmV0dXJuQXJyYXk7XG5cdH1cblx0Z2V0UG9pbnQocG9pbnRJZDogc3RyaW5nKSB7XG5cdFx0Ly8gZm9yICh2YXIgaSA9IFBPSU5UUy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuXHRcdC8vIFx0aWYgKFBPSU5UU1tpXS5faWQgPT09IHBvaW50SWQpIHtcblx0XHQvLyBcdFx0cmV0dXJuIFBPSU5UU1tpXTtcblx0XHQvLyBcdH1cblx0XHQvLyB9XG5cdFx0Ly8gY29uc29sZS5sb2coJ05vIHBvaW50IGZvdW5kJyk7XG5cdH1cblx0LyogUE9TVCAqL1xuXHRpbnNlcnRQb2ludChwb2ludDogUG9pbnQpIHtcblx0XHRQT0lOVFMudW5zaGlmdChwb2ludCk7XG5cdFx0cmV0dXJuIHBvaW50O1xuXHR9XG5cdC8qIERFTEVURSAqL1xuXHRkZWxldGVQb2ludChwb2ludDogUG9pbnQpOm51bWJlciB7XHRcdFxuXHRcdGlmKFBPSU5UUy5pbmRleE9mKHBvaW50KSA+IC0xKXtcblx0XHRcdFBPSU5UUy5zcGxpY2UoUE9JTlRTLmluZGV4T2YocG9pbnQpLCAxKVxuXHRcdFx0cmV0dXJuIDIwMDtcblx0XHR9ZWxzZSB7XG5cdFx0XHRyZXR1cm4gNDAwO1xuXHRcdH1cblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
