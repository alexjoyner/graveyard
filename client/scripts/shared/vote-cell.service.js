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
    var VoteCellService;
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
            VoteCellService = (function () {
                function VoteCellService(_http) {
                    this._http = _http;
                    this.endpoint = config_1.Config.endpoint;
                }
                /*POST*/
                VoteCellService.prototype.addVote = function (srcType, srcId, voteType) {
                    console.log(srcType, srcId, voteType);
                    if (srcType === 'issue') {
                        var body = JSON.stringify({
                            voteType: voteType,
                            issueId: srcId
                        });
                        var headers = new http_1.Headers();
                        headers.append('Content-Type', 'application/json');
                        return this._http.post(this.endpoint +
                            '/votes/issue', body, { headers: headers })
                            .map(function (res) { return res; });
                    }
                    else if (srcType === 'point') {
                        var body = JSON.stringify({
                            voteType: voteType,
                            pointId: srcId
                        });
                        var headers = new http_1.Headers();
                        headers.append('Content-Type', 'application/json');
                        return this._http.post(this.endpoint +
                            '/votes/point', body, { headers: headers })
                            .map(function (res) { return res; });
                    }
                    else if (srcType === 'support') {
                        var body = JSON.stringify({
                            voteType: voteType,
                            supportId: srcId
                        });
                        var headers = new http_1.Headers();
                        headers.append('Content-Type', 'application/json');
                        return this._http.post(this.endpoint +
                            '/votes/support', body, { headers: headers })
                            .map(function (res) { return res; });
                    }
                    else {
                        console.log('No source type found');
                    }
                };
                VoteCellService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], VoteCellService);
                return VoteCellService;
            }());
            exports_1("VoteCellService", VoteCellService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC92b3RlLWNlbGwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQTtnQkFFQyx5QkFDUyxLQUFXO29CQUFYLFVBQUssR0FBTCxLQUFLLENBQU07b0JBRlosYUFBUSxHQUFXLGVBQU0sQ0FBQyxRQUFRLENBQUM7Z0JBRW5CLENBQUM7Z0JBQ3pCLFFBQVE7Z0JBQ1IsaUNBQU8sR0FBUCxVQUNDLE9BQWUsRUFDZixLQUFhLEVBQ2IsUUFBZ0I7b0JBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztvQkFDdEMsRUFBRSxDQUFBLENBQUMsT0FBTyxLQUFLLE9BQU8sQ0FBQyxDQUFBLENBQUM7d0JBQ3ZCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7NEJBQzNCLFFBQVEsRUFBRSxRQUFROzRCQUNsQixPQUFPLEVBQUUsS0FBSzt5QkFDZCxDQUFDLENBQUM7d0JBQ0gsSUFBTSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQzt3QkFDOUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQzt3QkFDbkQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNyQixJQUFJLENBQUMsUUFBUTs0QkFDYixjQUFjLEVBQ2QsSUFBSSxFQUNKLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDOzZCQUNwQixHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLEVBQUgsQ0FBRyxDQUFDLENBQUM7b0JBQ25CLENBQUM7b0JBQUEsSUFBSSxDQUNMLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDO3dCQUN6QixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDOzRCQUMzQixRQUFRLEVBQUUsUUFBUTs0QkFDbEIsT0FBTyxFQUFFLEtBQUs7eUJBQ2QsQ0FBQyxDQUFDO3dCQUNILElBQU0sT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7d0JBQzlCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7d0JBQ25ELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDckIsSUFBSSxDQUFDLFFBQVE7NEJBQ2IsY0FBYyxFQUNkLElBQUksRUFDSixFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQzs2QkFDcEIsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxFQUFILENBQUcsQ0FBQyxDQUFDO29CQUNuQixDQUFDO29CQUFDLElBQUksQ0FDTixFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQzt3QkFDM0IsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQzs0QkFDM0IsUUFBUSxFQUFFLFFBQVE7NEJBQ2xCLFNBQVMsRUFBRSxLQUFLO3lCQUNoQixDQUFDLENBQUM7d0JBQ0gsSUFBTSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQzt3QkFDOUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQzt3QkFDbkQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNyQixJQUFJLENBQUMsUUFBUTs0QkFDYixnQkFBZ0IsRUFDaEIsSUFBSSxFQUNKLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDOzZCQUNwQixHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLEVBQUgsQ0FBRyxDQUFDLENBQUM7b0JBQ25CLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO29CQUNyQyxDQUFDO2dCQUNGLENBQUM7Z0JBdkRGO29CQUFDLGlCQUFVLEVBQUU7O21DQUFBO2dCQXdEYixzQkFBQztZQUFELENBdkRBLEFBdURDLElBQUE7WUF2REQsNkNBdURDLENBQUEiLCJmaWxlIjoic2hhcmVkL3ZvdGUtY2VsbC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCAncnhqcy9SeCc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0IHtDb25maWd9IGZyb20gJy4uL2NvbmZpZy9jb25maWcnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVm90ZUNlbGxTZXJ2aWNlIHtcblx0cHJpdmF0ZSBlbmRwb2ludDogc3RyaW5nID0gQ29uZmlnLmVuZHBvaW50O1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIF9odHRwOiBIdHRwKSB7IH1cblx0LypQT1NUKi9cblx0YWRkVm90ZShcblx0XHRzcmNUeXBlOiBzdHJpbmcsIFxuXHRcdHNyY0lkOiBzdHJpbmcsIFxuXHRcdHZvdGVUeXBlOiBzdHJpbmcpe1xuXHRcdGNvbnNvbGUubG9nKHNyY1R5cGUsIHNyY0lkLCB2b3RlVHlwZSk7XG5cdFx0aWYoc3JjVHlwZSA9PT0gJ2lzc3VlJyl7XG5cdFx0XHRjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHR2b3RlVHlwZTogdm90ZVR5cGUsXG5cdFx0XHRcdGlzc3VlSWQ6IHNyY0lkXG5cdFx0XHR9KTtcblx0XHRcdGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuXHRcdFx0aGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG5cdFx0XHRyZXR1cm4gdGhpcy5faHR0cC5wb3N0KFxuXHRcdFx0XHR0aGlzLmVuZHBvaW50ICsgXG5cdFx0XHRcdCcvdm90ZXMvaXNzdWUnLCBcblx0XHRcdFx0Ym9keSxcblx0XHRcdFx0eyBoZWFkZXJzOiBoZWFkZXJzIH0pXG5cdFx0XHRcdC5tYXAocmVzID0+IHJlcyk7XG5cdFx0fWVsc2Vcblx0XHRpZiAoc3JjVHlwZSA9PT0gJ3BvaW50Jykge1xuXHRcdFx0Y29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFx0dm90ZVR5cGU6IHZvdGVUeXBlLFxuXHRcdFx0XHRwb2ludElkOiBzcmNJZFxuXHRcdFx0fSk7XG5cdFx0XHRjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcblx0XHRcdGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuXHRcdFx0cmV0dXJuIHRoaXMuX2h0dHAucG9zdChcblx0XHRcdFx0dGhpcy5lbmRwb2ludCArXG5cdFx0XHRcdCcvdm90ZXMvcG9pbnQnLFxuXHRcdFx0XHRib2R5LFxuXHRcdFx0XHR7IGhlYWRlcnM6IGhlYWRlcnMgfSlcblx0XHRcdFx0Lm1hcChyZXMgPT4gcmVzKTtcblx0XHR9IGVsc2Vcblx0XHRpZiAoc3JjVHlwZSA9PT0gJ3N1cHBvcnQnKSB7XG5cdFx0XHRjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHR2b3RlVHlwZTogdm90ZVR5cGUsXG5cdFx0XHRcdHN1cHBvcnRJZDogc3JjSWRcblx0XHRcdH0pO1xuXHRcdFx0Y29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG5cdFx0XHRoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcblx0XHRcdHJldHVybiB0aGlzLl9odHRwLnBvc3QoXG5cdFx0XHRcdHRoaXMuZW5kcG9pbnQgK1xuXHRcdFx0XHQnL3ZvdGVzL3N1cHBvcnQnLFxuXHRcdFx0XHRib2R5LFxuXHRcdFx0XHR7IGhlYWRlcnM6IGhlYWRlcnMgfSlcblx0XHRcdFx0Lm1hcChyZXMgPT4gcmVzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS5sb2coJ05vIHNvdXJjZSB0eXBlIGZvdW5kJyk7XG5cdFx0fVxuXHR9XG59XG5cblxuXG5cblxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
