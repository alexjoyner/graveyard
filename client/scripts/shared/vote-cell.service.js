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
                    var body;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    headers.append('x-access-token', (localStorage.getItem('token')) ? localStorage.getItem('token') : null);
                    switch (srcType) {
                        case 'issue':
                            body = JSON.stringify({
                                voteType: voteType,
                                issueId: srcId
                            });
                            break;
                        case 'point':
                            body = JSON.stringify({
                                voteType: voteType,
                                pointId: srcId
                            });
                            break;
                        case 'support':
                            body = JSON.stringify({
                                voteType: voteType,
                                supportId: srcId
                            });
                            break;
                        default:
                            console.log('No source type found');
                            return;
                    }
                    return this._http.post(this.endpoint +
                        '/votes/' + srcType, body, { headers: headers })
                        .map(function (res) { return res; });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC92b3RlLWNlbGwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQTtnQkFFQyx5QkFDUyxLQUFXO29CQUFYLFVBQUssR0FBTCxLQUFLLENBQU07b0JBRlosYUFBUSxHQUFXLGVBQU0sQ0FBQyxRQUFRLENBQUM7Z0JBRW5CLENBQUM7Z0JBQ3pCLFFBQVE7Z0JBQ1IsaUNBQU8sR0FBUCxVQUNDLE9BQWUsRUFDZixLQUFhLEVBQ2IsUUFBZ0I7b0JBQ2hCLElBQUksSUFBWSxDQUFDO29CQUNqQixJQUFNLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO29CQUM5QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO29CQUNuRCxPQUFPLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUM5QixDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO29CQUN6RSxNQUFNLENBQUEsQ0FBQyxPQUFPLENBQUMsQ0FBQSxDQUFDO3dCQUNmLEtBQUssT0FBTzs0QkFDWCxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQ0FDckIsUUFBUSxFQUFFLFFBQVE7Z0NBQ2xCLE9BQU8sRUFBRSxLQUFLOzZCQUNkLENBQUMsQ0FBQzs0QkFDSCxLQUFLLENBQUM7d0JBQ1AsS0FBSyxPQUFPOzRCQUNYLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO2dDQUNyQixRQUFRLEVBQUUsUUFBUTtnQ0FDbEIsT0FBTyxFQUFFLEtBQUs7NkJBQ2QsQ0FBQyxDQUFDOzRCQUNILEtBQUssQ0FBQzt3QkFDUCxLQUFLLFNBQVM7NEJBQ2IsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7Z0NBQ3JCLFFBQVEsRUFBRSxRQUFRO2dDQUNsQixTQUFTLEVBQUUsS0FBSzs2QkFDaEIsQ0FBQyxDQUFDOzRCQUNILEtBQUssQ0FBQzt3QkFDUDs0QkFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7NEJBQ3BDLE1BQU0sQ0FBQTtvQkFDUixDQUFDO29CQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsSUFBSSxDQUFDLFFBQVE7d0JBQ2IsU0FBUyxHQUFDLE9BQU8sRUFDakIsSUFBSSxFQUNKLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO3lCQUNwQixHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLEVBQUgsQ0FBRyxDQUFDLENBQUM7Z0JBQ25CLENBQUM7Z0JBNUNIO29CQUFDLGlCQUFVLEVBQUU7O21DQUFBO2dCQTZDWixzQkFBQztZQUFELENBNUNELEFBNENFLElBQUE7WUE1Q0YsNkNBNENFLENBQUEiLCJmaWxlIjoic2hhcmVkL3ZvdGUtY2VsbC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCAncnhqcy9SeCc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0IHtDb25maWd9IGZyb20gJy4uL2NvbmZpZy9jb25maWcnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVm90ZUNlbGxTZXJ2aWNlIHtcblx0cHJpdmF0ZSBlbmRwb2ludDogc3RyaW5nID0gQ29uZmlnLmVuZHBvaW50O1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIF9odHRwOiBIdHRwKSB7IH1cblx0LypQT1NUKi9cblx0YWRkVm90ZShcblx0XHRzcmNUeXBlOiBzdHJpbmcsIFxuXHRcdHNyY0lkOiBzdHJpbmcsIFxuXHRcdHZvdGVUeXBlOiBzdHJpbmcpe1xuXHRcdGxldCBib2R5OiBzdHJpbmc7XG5cdFx0Y29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG5cdFx0aGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG5cdFx0aGVhZGVycy5hcHBlbmQoJ3gtYWNjZXNzLXRva2VuJyxcblx0XHRcdChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSkgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA6IG51bGwpO1xuXHRcdHN3aXRjaChzcmNUeXBlKXtcblx0XHRcdGNhc2UgJ2lzc3VlJzpcblx0XHRcdFx0Ym9keSA9IEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFx0XHR2b3RlVHlwZTogdm90ZVR5cGUsXG5cdFx0XHRcdFx0aXNzdWVJZDogc3JjSWRcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAncG9pbnQnOlxuXHRcdFx0XHRib2R5ID0gSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHRcdHZvdGVUeXBlOiB2b3RlVHlwZSxcblx0XHRcdFx0XHRwb2ludElkOiBzcmNJZFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdzdXBwb3J0Jzpcblx0XHRcdFx0Ym9keSA9IEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFx0XHR2b3RlVHlwZTogdm90ZVR5cGUsXG5cdFx0XHRcdFx0c3VwcG9ydElkOiBzcmNJZFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRjb25zb2xlLmxvZygnTm8gc291cmNlIHR5cGUgZm91bmQnKTtcblx0XHRcdFx0cmV0dXJuXG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLl9odHRwLnBvc3QoXG5cdFx0XHRcdHRoaXMuZW5kcG9pbnQgK1xuXHRcdFx0XHQnL3ZvdGVzLycrc3JjVHlwZSxcblx0XHRcdFx0Ym9keSxcblx0XHRcdFx0eyBoZWFkZXJzOiBoZWFkZXJzIH0pXG5cdFx0XHRcdC5tYXAocmVzID0+IHJlcyk7XG5cdFx0fVxuXHR9XG59XG5cblxuXG5cblxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
