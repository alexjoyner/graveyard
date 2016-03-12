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
                PointsService.prototype.getPoints = function () {
                    return mock_points_1.POINTS;
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
                };
                /* DELETE */
                PointsService.prototype.deletePoint = function (point) {
                    mock_points_1.POINTS.splice(mock_points_1.POINTS.indexOf(point), 1);
                };
                /*VOTING POINTS SUPPORT*/
                PointsService.prototype.votePoint = function (point, voteType) {
                    if (voteType === 'upvote') {
                        mock_points_1.POINTS[mock_points_1.POINTS.indexOf(point)].ups++;
                    }
                    else if (voteType === 'downvote') {
                        mock_points_1.POINTS[mock_points_1.POINTS.indexOf(point)].downs++;
                    }
                    else {
                        console.log('No type recognized');
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9wb2ludHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQUFBO2dCQWlDQSxDQUFDO2dCQWhDQSxTQUFTO2dCQUNULGlDQUFTLEdBQVQ7b0JBQ0MsTUFBTSxDQUFDLG9CQUFNLENBQUM7Z0JBQ2YsQ0FBQztnQkFDRCxnQ0FBUSxHQUFSLFVBQVMsT0FBZTtvQkFDdkIsaURBQWlEO29CQUNqRCxvQ0FBb0M7b0JBQ3BDLHNCQUFzQjtvQkFDdEIsS0FBSztvQkFDTCxJQUFJO29CQUNKLGlDQUFpQztnQkFDbEMsQ0FBQztnQkFDRCxVQUFVO2dCQUNWLG1DQUFXLEdBQVgsVUFBWSxLQUFZO29CQUN2QixvQkFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDdkIsQ0FBQztnQkFDRCxZQUFZO2dCQUNaLG1DQUFXLEdBQVgsVUFBWSxLQUFZO29CQUN2QixvQkFBTSxDQUFDLE1BQU0sQ0FBQyxvQkFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDekMsQ0FBQztnQkFFRCx5QkFBeUI7Z0JBQ3pCLGlDQUFTLEdBQVQsVUFBVSxLQUFZLEVBQUUsUUFBZ0I7b0JBQ3ZDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO3dCQUMzQixvQkFBTSxDQUFDLG9CQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7b0JBQ3JDLENBQUM7b0JBQUMsSUFBSSxDQUNMLEVBQUUsQ0FBQyxDQUFDLFFBQVEsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO3dCQUM3QixvQkFBTSxDQUFDLG9CQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQ3ZDLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO29CQUNsQyxDQUFDO2dCQUNILENBQUM7Z0JBakNGO29CQUFDLGlCQUFVLEVBQUU7O2lDQUFBO2dCQWtDYixvQkFBQztZQUFELENBakNBLEFBaUNDLElBQUE7WUFqQ0QseUNBaUNDLENBQUEiLCJmaWxlIjoic2hhcmVkL3BvaW50cy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7UG9pbnR9IGZyb20gJy4vcG9pbnQnO1xuaW1wb3J0IHtQT0lOVFN9IGZyb20gJy4uL21vY2svbW9jay1wb2ludHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUG9pbnRzU2VydmljZSB7XG5cdC8qIEdFVCAqL1xuXHRnZXRQb2ludHMoKSB7XG5cdFx0cmV0dXJuIFBPSU5UUztcblx0fVxuXHRnZXRQb2ludChwb2ludElkOiBzdHJpbmcpIHtcblx0XHQvLyBmb3IgKHZhciBpID0gUE9JTlRTLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0Ly8gXHRpZiAoUE9JTlRTW2ldLl9pZCA9PT0gcG9pbnRJZCkge1xuXHRcdC8vIFx0XHRyZXR1cm4gUE9JTlRTW2ldO1xuXHRcdC8vIFx0fVxuXHRcdC8vIH1cblx0XHQvLyBjb25zb2xlLmxvZygnTm8gcG9pbnQgZm91bmQnKTtcblx0fVxuXHQvKiBQT1NUICovXG5cdGluc2VydFBvaW50KHBvaW50OiBQb2ludCkge1xuXHRcdFBPSU5UUy51bnNoaWZ0KHBvaW50KTtcblx0fVxuXHQvKiBERUxFVEUgKi9cblx0ZGVsZXRlUG9pbnQocG9pbnQ6IFBvaW50KSB7XG5cdFx0UE9JTlRTLnNwbGljZShQT0lOVFMuaW5kZXhPZihwb2ludCksIDEpO1xuXHR9XG5cblx0LypWT1RJTkcgUE9JTlRTIFNVUFBPUlQqL1xuXHR2b3RlUG9pbnQocG9pbnQ6IFBvaW50LCB2b3RlVHlwZTogc3RyaW5nKSB7XG5cdFx0aWYgKHZvdGVUeXBlID09PSAndXB2b3RlJykge1xuXHRcdFx0UE9JTlRTW1BPSU5UUy5pbmRleE9mKHBvaW50KV0udXBzKys7XG5cdFx0fSBlbHNlXG5cdFx0XHRpZiAodm90ZVR5cGUgPT09ICdkb3dudm90ZScpIHtcblx0XHRcdFx0UE9JTlRTW1BPSU5UUy5pbmRleE9mKHBvaW50KV0uZG93bnMrKztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdObyB0eXBlIHJlY29nbml6ZWQnKVxuXHRcdFx0fVxuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
