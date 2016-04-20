System.register(['angular2/core', 'rxjs/Rx', 'angular2/http', '../config/config', './users.service'], function(exports_1, context_1) {
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
    var core_1, http_1, config_1, users_service_1;
    var VoteService;
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
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            }],
        execute: function() {
            VoteService = (function () {
                function VoteService(_http, _usersService) {
                    this._http = _http;
                    this._usersService = _usersService;
                    this.endpoint = config_1.Config.endpoint;
                }
                /*POST*/
                VoteService.prototype.vote = function (srcId, voteType) {
                    var body = JSON.stringify({
                        thing_id: srcId,
                        vote_type_id: voteType
                    });
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    headers.append('x-access-token', (localStorage.getItem('token')) ? localStorage.getItem('token') : null);
                    return this._http.post(this.endpoint +
                        '/votes/create', body, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                VoteService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, users_service_1.UsersService])
                ], VoteService);
                return VoteService;
            }());
            exports_1("VoteService", VoteService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC92b3RlLWNlbGwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFRQTtnQkFFQyxxQkFDUyxLQUFXLEVBQ1gsYUFBMkI7b0JBRDNCLFVBQUssR0FBTCxLQUFLLENBQU07b0JBQ1gsa0JBQWEsR0FBYixhQUFhLENBQWM7b0JBSDVCLGFBQVEsR0FBVyxlQUFNLENBQUMsUUFBUSxDQUFDO2dCQUdKLENBQUM7Z0JBQ3hDLFFBQVE7Z0JBQ1IsMEJBQUksR0FBSixVQUNDLEtBQWEsRUFDYixRQUFnQjtvQkFDaEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQzt3QkFDekIsUUFBUSxFQUFFLEtBQUs7d0JBQ2YsWUFBWSxFQUFFLFFBQVE7cUJBQ3RCLENBQUMsQ0FBQztvQkFDSCxJQUFNLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO29CQUM5QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO29CQUNuRCxPQUFPLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUM5QixDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO29CQUN6RSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLElBQUksQ0FBQyxRQUFRO3dCQUNiLGVBQWUsRUFDZixJQUFJLEVBQ0osRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7eUJBQ3BCLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztnQkFDMUIsQ0FBQztnQkF4Qkg7b0JBQUMsaUJBQVUsRUFBRTs7K0JBQUE7Z0JBeUJaLGtCQUFDO1lBQUQsQ0F4QkQsQUF3QkUsSUFBQTtZQXhCRixxQ0F3QkUsQ0FBQSIsImZpbGUiOiJzaGFyZWQvdm90ZS1jZWxsLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0ICdyeGpzL1J4JztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7SHR0cCwgSGVhZGVyc30gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5pbXBvcnQge0NvbmZpZ30gZnJvbSAnLi4vY29uZmlnL2NvbmZpZyc7XG5pbXBvcnQge1VzZXJzU2VydmljZX0gZnJvbSAnLi91c2Vycy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZvdGVTZXJ2aWNlIHtcblx0cHJpdmF0ZSBlbmRwb2ludDogc3RyaW5nID0gQ29uZmlnLmVuZHBvaW50O1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIF9odHRwOiBIdHRwLFxuXHRcdHByaXZhdGUgX3VzZXJzU2VydmljZTogVXNlcnNTZXJ2aWNlKSB7fVxuXHQvKlBPU1QqL1xuXHR2b3RlKCBcblx0XHRzcmNJZDogc3RyaW5nLCBcblx0XHR2b3RlVHlwZTogbnVtYmVyKXtcblx0XHRsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdHRoaW5nX2lkOiBzcmNJZCxcblx0XHRcdHZvdGVfdHlwZV9pZDogdm90ZVR5cGVcblx0XHR9KTtcblx0XHRjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcblx0XHRoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcblx0XHRoZWFkZXJzLmFwcGVuZCgneC1hY2Nlc3MtdG9rZW4nLFxuXHRcdFx0KGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpKSA/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpIDogbnVsbCk7XG5cdFx0cmV0dXJuIHRoaXMuX2h0dHAucG9zdChcblx0XHRcdFx0dGhpcy5lbmRwb2ludCArXG5cdFx0XHRcdCcvdm90ZXMvY3JlYXRlJyxcblx0XHRcdFx0Ym9keSxcblx0XHRcdFx0eyBoZWFkZXJzOiBoZWFkZXJzIH0pXG5cdFx0XHRcdC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuXHRcdH1cblx0fVxufVxuXG5cblxuXG5cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
