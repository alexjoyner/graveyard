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
    var VoteCellService;
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
            VoteCellService = (function () {
                function VoteCellService(_http) {
                    this._http = _http;
                    this.endpoint = 'http://localhost:9000';
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
                            suppportId: srcId
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC92b3RlLWNlbGwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFRQTtnQkFFQyx5QkFDUyxLQUFXO29CQUFYLFVBQUssR0FBTCxLQUFLLENBQU07b0JBRlosYUFBUSxHQUFXLHVCQUF1QixDQUFDO2dCQUUzQixDQUFDO2dCQUN6QixRQUFRO2dCQUNSLGlDQUFPLEdBQVAsVUFDQyxPQUFlLEVBQ2YsS0FBYSxFQUNiLFFBQWdCO29CQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7b0JBQ3RDLEVBQUUsQ0FBQSxDQUFDLE9BQU8sS0FBSyxPQUFPLENBQUMsQ0FBQSxDQUFDO3dCQUN2QixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDOzRCQUMzQixRQUFRLEVBQUUsUUFBUTs0QkFDbEIsT0FBTyxFQUFFLEtBQUs7eUJBQ2QsQ0FBQyxDQUFDO3dCQUNILElBQU0sT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7d0JBQzlCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7d0JBQ25ELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDckIsSUFBSSxDQUFDLFFBQVE7NEJBQ2IsY0FBYyxFQUNkLElBQUksRUFDSixFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQzs2QkFDcEIsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxFQUFILENBQUcsQ0FBQyxDQUFDO29CQUNuQixDQUFDO29CQUFBLElBQUksQ0FDTCxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQzt3QkFDekIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQzs0QkFDM0IsUUFBUSxFQUFFLFFBQVE7NEJBQ2xCLE9BQU8sRUFBRSxLQUFLO3lCQUNkLENBQUMsQ0FBQzt3QkFDSCxJQUFNLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO3dCQUM5QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO3dCQUNuRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3JCLElBQUksQ0FBQyxRQUFROzRCQUNiLGNBQWMsRUFDZCxJQUFJLEVBQ0osRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7NkJBQ3BCLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsRUFBSCxDQUFHLENBQUMsQ0FBQztvQkFDbkIsQ0FBQztvQkFBQyxJQUFJLENBQ04sRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7d0JBQzNCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7NEJBQzNCLFFBQVEsRUFBRSxRQUFROzRCQUNsQixVQUFVLEVBQUUsS0FBSzt5QkFDakIsQ0FBQyxDQUFDO3dCQUNILElBQU0sT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7d0JBQzlCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7d0JBQ25ELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDckIsSUFBSSxDQUFDLFFBQVE7NEJBQ2IsZ0JBQWdCLEVBQ2hCLElBQUksRUFDSixFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQzs2QkFDcEIsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxFQUFILENBQUcsQ0FBQyxDQUFDO29CQUNuQixDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztvQkFDckMsQ0FBQztnQkFDRixDQUFDO2dCQXZERjtvQkFBQyxpQkFBVSxFQUFFOzttQ0FBQTtnQkF3RGIsc0JBQUM7WUFBRCxDQXZEQSxBQXVEQyxJQUFBO1lBdkRELDZDQXVEQyxDQUFBIiwiZmlsZSI6InNoYXJlZC92b3RlLWNlbGwuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0lTU1VFU30gZnJvbSAnLi4vbW9jay9tb2NrLWlzc3Vlcyc7XG5pbXBvcnQge1BPSU5UU30gZnJvbSAnLi4vbW9jay9tb2NrLXBvaW50cyc7XG5pbXBvcnQge1NVUFBPUlRTfSBmcm9tICcuLi9tb2NrL21vY2stc3VwcG9ydHMnO1xuaW1wb3J0ICdyeGpzL1J4JztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7SHR0cCwgSGVhZGVyc30gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVm90ZUNlbGxTZXJ2aWNlIHtcblx0cHJpdmF0ZSBlbmRwb2ludDogc3RyaW5nID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6OTAwMCc7XG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgX2h0dHA6IEh0dHApIHsgfVxuXHQvKlBPU1QqL1xuXHRhZGRWb3RlKFxuXHRcdHNyY1R5cGU6IHN0cmluZywgXG5cdFx0c3JjSWQ6IHN0cmluZywgXG5cdFx0dm90ZVR5cGU6IHN0cmluZyl7XG5cdFx0Y29uc29sZS5sb2coc3JjVHlwZSwgc3JjSWQsIHZvdGVUeXBlKTtcblx0XHRpZihzcmNUeXBlID09PSAnaXNzdWUnKXtcblx0XHRcdGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdHZvdGVUeXBlOiB2b3RlVHlwZSxcblx0XHRcdFx0aXNzdWVJZDogc3JjSWRcblx0XHRcdH0pO1xuXHRcdFx0Y29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG5cdFx0XHRoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcblx0XHRcdHJldHVybiB0aGlzLl9odHRwLnBvc3QoXG5cdFx0XHRcdHRoaXMuZW5kcG9pbnQgKyBcblx0XHRcdFx0Jy92b3Rlcy9pc3N1ZScsIFxuXHRcdFx0XHRib2R5LFxuXHRcdFx0XHR7IGhlYWRlcnM6IGhlYWRlcnMgfSlcblx0XHRcdFx0Lm1hcChyZXMgPT4gcmVzKTtcblx0XHR9ZWxzZVxuXHRcdGlmIChzcmNUeXBlID09PSAncG9pbnQnKSB7XG5cdFx0XHRjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHR2b3RlVHlwZTogdm90ZVR5cGUsXG5cdFx0XHRcdHBvaW50SWQ6IHNyY0lkXG5cdFx0XHR9KTtcblx0XHRcdGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuXHRcdFx0aGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG5cdFx0XHRyZXR1cm4gdGhpcy5faHR0cC5wb3N0KFxuXHRcdFx0XHR0aGlzLmVuZHBvaW50ICtcblx0XHRcdFx0Jy92b3Rlcy9wb2ludCcsXG5cdFx0XHRcdGJvZHksXG5cdFx0XHRcdHsgaGVhZGVyczogaGVhZGVycyB9KVxuXHRcdFx0XHQubWFwKHJlcyA9PiByZXMpO1xuXHRcdH0gZWxzZVxuXHRcdGlmIChzcmNUeXBlID09PSAnc3VwcG9ydCcpIHtcblx0XHRcdGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdHZvdGVUeXBlOiB2b3RlVHlwZSxcblx0XHRcdFx0c3VwcHBvcnRJZDogc3JjSWRcblx0XHRcdH0pO1xuXHRcdFx0Y29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG5cdFx0XHRoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcblx0XHRcdHJldHVybiB0aGlzLl9odHRwLnBvc3QoXG5cdFx0XHRcdHRoaXMuZW5kcG9pbnQgK1xuXHRcdFx0XHQnL3ZvdGVzL3N1cHBvcnQnLFxuXHRcdFx0XHRib2R5LFxuXHRcdFx0XHR7IGhlYWRlcnM6IGhlYWRlcnMgfSlcblx0XHRcdFx0Lm1hcChyZXMgPT4gcmVzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS5sb2coJ05vIHNvdXJjZSB0eXBlIGZvdW5kJyk7XG5cdFx0fVxuXHR9XG59XG5cblxuXG5cblxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
