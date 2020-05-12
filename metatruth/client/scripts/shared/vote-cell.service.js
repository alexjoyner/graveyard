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
                    var body = JSON.stringify({
                        srcType: srcType,
                        thing_id: srcId,
                        vote_type: voteType
                    });
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    headers.append('x-access-token', (localStorage.getItem('token')) ? localStorage.getItem('token') : null);
                    return this._http.post(this.endpoint +
                        '/votes/create', body, { headers: headers })
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC92b3RlLWNlbGwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQTtnQkFFQyx5QkFDUyxLQUFXO29CQUFYLFVBQUssR0FBTCxLQUFLLENBQU07b0JBRlosYUFBUSxHQUFXLGVBQU0sQ0FBQyxRQUFRLENBQUM7Z0JBRW5CLENBQUM7Z0JBQ3pCLFFBQVE7Z0JBQ1IsaUNBQU8sR0FBUCxVQUNDLE9BQWUsRUFDZixLQUFhLEVBQ2IsUUFBZ0I7b0JBQ2hCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7d0JBQ3pCLE9BQU8sRUFBRSxPQUFPO3dCQUNoQixRQUFRLEVBQUUsS0FBSzt3QkFDZixTQUFTLEVBQUUsUUFBUTtxQkFDbkIsQ0FBQyxDQUFDO29CQUNILElBQU0sT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7b0JBQzlCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7b0JBQ25ELE9BQU8sQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQzlCLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7b0JBQ3pFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsSUFBSSxDQUFDLFFBQVE7d0JBQ2IsZUFBZSxFQUNmLElBQUksRUFDSixFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQzt5QkFDcEIsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxFQUFILENBQUcsQ0FBQyxDQUFDO2dCQUNuQixDQUFDO2dCQXpCSDtvQkFBQyxpQkFBVSxFQUFFOzttQ0FBQTtnQkEwQlosc0JBQUM7WUFBRCxDQXpCRCxBQXlCRSxJQUFBO1lBekJGLDZDQXlCRSxDQUFBIiwiZmlsZSI6InNoYXJlZC92b3RlLWNlbGwuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgJ3J4anMvUngnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHtIdHRwLCBIZWFkZXJzfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCB7Q29uZmlnfSBmcm9tICcuLi9jb25maWcvY29uZmlnJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZvdGVDZWxsU2VydmljZSB7XG5cdHByaXZhdGUgZW5kcG9pbnQ6IHN0cmluZyA9IENvbmZpZy5lbmRwb2ludDtcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBfaHR0cDogSHR0cCkgeyB9XG5cdC8qUE9TVCovXG5cdGFkZFZvdGUoXG5cdFx0c3JjVHlwZTogc3RyaW5nLCBcblx0XHRzcmNJZDogc3RyaW5nLCBcblx0XHR2b3RlVHlwZTogc3RyaW5nKXtcblx0XHRsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdHNyY1R5cGU6IHNyY1R5cGUsXG5cdFx0XHR0aGluZ19pZDogc3JjSWQsXG5cdFx0XHR2b3RlX3R5cGU6IHZvdGVUeXBlXG5cdFx0fSk7XG5cdFx0Y29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG5cdFx0aGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG5cdFx0aGVhZGVycy5hcHBlbmQoJ3gtYWNjZXNzLXRva2VuJyxcblx0XHRcdChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSkgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA6IG51bGwpO1xuXHRcdHJldHVybiB0aGlzLl9odHRwLnBvc3QoXG5cdFx0XHRcdHRoaXMuZW5kcG9pbnQgK1xuXHRcdFx0XHQnL3ZvdGVzL2NyZWF0ZScsXG5cdFx0XHRcdGJvZHksXG5cdFx0XHRcdHsgaGVhZGVyczogaGVhZGVycyB9KVxuXHRcdFx0XHQubWFwKHJlcyA9PiByZXMpO1xuXHRcdH1cblx0fVxufVxuXG5cblxuXG5cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
