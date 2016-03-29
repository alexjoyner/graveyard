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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC92b3RlLWNlbGwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkFFQyx5QkFDUyxLQUFXO29CQUFYLFVBQUssR0FBTCxLQUFLLENBQU07b0JBRlosYUFBUSxHQUFXLHVCQUF1QixDQUFDO2dCQUUzQixDQUFDO2dCQUN6QixRQUFRO2dCQUNSLGlDQUFPLEdBQVAsVUFDQyxPQUFlLEVBQ2YsS0FBYSxFQUNiLFFBQWdCO29CQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7b0JBQ3RDLEVBQUUsQ0FBQSxDQUFDLE9BQU8sS0FBSyxPQUFPLENBQUMsQ0FBQSxDQUFDO3dCQUN2QixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDOzRCQUMzQixRQUFRLEVBQUUsUUFBUTs0QkFDbEIsT0FBTyxFQUFFLEtBQUs7eUJBQ2QsQ0FBQyxDQUFDO3dCQUNILElBQU0sT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7d0JBQzlCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7d0JBQ25ELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDckIsSUFBSSxDQUFDLFFBQVE7NEJBQ2IsY0FBYyxFQUNkLElBQUksRUFDSixFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQzs2QkFDcEIsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxFQUFILENBQUcsQ0FBQyxDQUFDO29CQUNuQixDQUFDO29CQUFBLElBQUksQ0FDTCxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQzt3QkFDekIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQzs0QkFDM0IsUUFBUSxFQUFFLFFBQVE7NEJBQ2xCLE9BQU8sRUFBRSxLQUFLO3lCQUNkLENBQUMsQ0FBQzt3QkFDSCxJQUFNLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO3dCQUM5QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO3dCQUNuRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3JCLElBQUksQ0FBQyxRQUFROzRCQUNiLGNBQWMsRUFDZCxJQUFJLEVBQ0osRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7NkJBQ3BCLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsRUFBSCxDQUFHLENBQUMsQ0FBQztvQkFDbkIsQ0FBQztvQkFBQyxJQUFJLENBQ04sRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7d0JBQzNCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7NEJBQzNCLFFBQVEsRUFBRSxRQUFROzRCQUNsQixTQUFTLEVBQUUsS0FBSzt5QkFDaEIsQ0FBQyxDQUFDO3dCQUNILElBQU0sT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7d0JBQzlCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7d0JBQ25ELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDckIsSUFBSSxDQUFDLFFBQVE7NEJBQ2IsZ0JBQWdCLEVBQ2hCLElBQUksRUFDSixFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQzs2QkFDcEIsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxFQUFILENBQUcsQ0FBQyxDQUFDO29CQUNuQixDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztvQkFDckMsQ0FBQztnQkFDRixDQUFDO2dCQXZERjtvQkFBQyxpQkFBVSxFQUFFOzttQ0FBQTtnQkF3RGIsc0JBQUM7WUFBRCxDQXZEQSxBQXVEQyxJQUFBO1lBdkRELDZDQXVEQyxDQUFBIiwiZmlsZSI6InNoYXJlZC92b3RlLWNlbGwuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgJ3J4anMvUngnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHtIdHRwLCBIZWFkZXJzfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWb3RlQ2VsbFNlcnZpY2Uge1xuXHRwcml2YXRlIGVuZHBvaW50OiBzdHJpbmcgPSAnaHR0cDovL2xvY2FsaG9zdDo5MDAwJztcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBfaHR0cDogSHR0cCkgeyB9XG5cdC8qUE9TVCovXG5cdGFkZFZvdGUoXG5cdFx0c3JjVHlwZTogc3RyaW5nLCBcblx0XHRzcmNJZDogc3RyaW5nLCBcblx0XHR2b3RlVHlwZTogc3RyaW5nKXtcblx0XHRjb25zb2xlLmxvZyhzcmNUeXBlLCBzcmNJZCwgdm90ZVR5cGUpO1xuXHRcdGlmKHNyY1R5cGUgPT09ICdpc3N1ZScpe1xuXHRcdFx0Y29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFx0dm90ZVR5cGU6IHZvdGVUeXBlLFxuXHRcdFx0XHRpc3N1ZUlkOiBzcmNJZFxuXHRcdFx0fSk7XG5cdFx0XHRjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcblx0XHRcdGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuXHRcdFx0cmV0dXJuIHRoaXMuX2h0dHAucG9zdChcblx0XHRcdFx0dGhpcy5lbmRwb2ludCArIFxuXHRcdFx0XHQnL3ZvdGVzL2lzc3VlJywgXG5cdFx0XHRcdGJvZHksXG5cdFx0XHRcdHsgaGVhZGVyczogaGVhZGVycyB9KVxuXHRcdFx0XHQubWFwKHJlcyA9PiByZXMpO1xuXHRcdH1lbHNlXG5cdFx0aWYgKHNyY1R5cGUgPT09ICdwb2ludCcpIHtcblx0XHRcdGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdHZvdGVUeXBlOiB2b3RlVHlwZSxcblx0XHRcdFx0cG9pbnRJZDogc3JjSWRcblx0XHRcdH0pO1xuXHRcdFx0Y29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG5cdFx0XHRoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcblx0XHRcdHJldHVybiB0aGlzLl9odHRwLnBvc3QoXG5cdFx0XHRcdHRoaXMuZW5kcG9pbnQgK1xuXHRcdFx0XHQnL3ZvdGVzL3BvaW50Jyxcblx0XHRcdFx0Ym9keSxcblx0XHRcdFx0eyBoZWFkZXJzOiBoZWFkZXJzIH0pXG5cdFx0XHRcdC5tYXAocmVzID0+IHJlcyk7XG5cdFx0fSBlbHNlXG5cdFx0aWYgKHNyY1R5cGUgPT09ICdzdXBwb3J0Jykge1xuXHRcdFx0Y29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFx0dm90ZVR5cGU6IHZvdGVUeXBlLFxuXHRcdFx0XHRzdXBwb3J0SWQ6IHNyY0lkXG5cdFx0XHR9KTtcblx0XHRcdGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuXHRcdFx0aGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG5cdFx0XHRyZXR1cm4gdGhpcy5faHR0cC5wb3N0KFxuXHRcdFx0XHR0aGlzLmVuZHBvaW50ICtcblx0XHRcdFx0Jy92b3Rlcy9zdXBwb3J0Jyxcblx0XHRcdFx0Ym9keSxcblx0XHRcdFx0eyBoZWFkZXJzOiBoZWFkZXJzIH0pXG5cdFx0XHRcdC5tYXAocmVzID0+IHJlcyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUubG9nKCdObyBzb3VyY2UgdHlwZSBmb3VuZCcpO1xuXHRcdH1cblx0fVxufVxuXG5cblxuXG5cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
