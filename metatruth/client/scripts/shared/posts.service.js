System.register(['angular2/http', 'angular2/core', 'rxjs/Rx', '../config/config', './auth.service', './globalHandler.service'], function(exports_1, context_1) {
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
    var http_1, core_1, config_1, auth_service_1, globalHandler_service_1;
    var PostsService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (config_1_1) {
                config_1 = config_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (globalHandler_service_1_1) {
                globalHandler_service_1 = globalHandler_service_1_1;
            }],
        execute: function() {
            PostsService = (function () {
                function PostsService(_http, _authService, _globalHandlerService) {
                    this._http = _http;
                    this._authService = _authService;
                    this._globalHandlerService = _globalHandlerService;
                    this.endpoint = config_1.Config.endpoint;
                }
                /* GET */
                PostsService.prototype.getAllPosts = function () {
                    var req = this._http.get(this.endpoint + '/posts/all')
                        .map(function (res) { return res.json(); });
                    return req;
                };
                PostsService.prototype.getPost = function (postId, pointType) {
                    return this._http.get(this.endpoint + '/posts/' +
                        postId +
                        '/' +
                        pointType)
                        .map(function (res) { return res.json(); });
                };
                /* POST */
                PostsService.prototype.insertPost = function (post) {
                    var body = JSON.stringify(post);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    headers.append('x-access-token', (localStorage.getItem('token')) ? localStorage.getItem('token') : null);
                    return this._http.post(this.endpoint + '/posts/newPost', body, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                PostsService.prototype.updatePost = function (post) {
                    var body = JSON.stringify(post);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    headers.append('x-access-token', (localStorage.getItem('token')) ? localStorage.getItem('token') : null);
                    return this._http.post(this.endpoint + '/posts/updatePost', body, { headers: headers })
                        .map(function (res) { return res; });
                };
                /* DELETE */
                PostsService.prototype.deletePost = function (postId, issueId, mainPointType) {
                    //'/deletePost/:postId/:issueId/:mainPointType'
                    var headers = new http_1.Headers();
                    headers.append('x-access-token', (localStorage.getItem('token')) ? localStorage.getItem('token') : null);
                    return this._http.delete(this.endpoint + '/posts/deletePost/' +
                        postId + '/' +
                        issueId + '/' +
                        mainPointType, { headers: headers })
                        .map(function (res) { return res; });
                };
                PostsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, auth_service_1.AuthService, globalHandler_service_1.GlobalHandlerService])
                ], PostsService);
                return PostsService;
            }());
            exports_1("PostsService", PostsService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,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QUNELFlBQVk7Z0JBQ1osaUNBQVUsR0FBVixVQUFXLE1BQWMsRUFBRSxPQUFnQixFQUFFLGFBQXNCO29CQUNsRSwrQ0FBK0M7b0JBQzlDLElBQU0sT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7b0JBQzlCLE9BQU8sQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQzlCLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7b0JBQ3pFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBb0I7d0JBQ3BDLE1BQU0sR0FBRyxHQUFHO3dCQUNaLE9BQU8sR0FBRyxHQUFHO3dCQUNiLGFBQWEsRUFDYixFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQzt5QkFDbEIsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxFQUFILENBQUcsQ0FBQyxDQUFDO2dCQUNwQixDQUFDO2dCQTdERjtvQkFBQyxpQkFBVSxFQUFFOztnQ0FBQTtnQkE4RGIsbUJBQUM7WUFBRCxDQTdEQSxBQTZEQyxJQUFBO1lBN0RELHVDQTZEQyxDQUFBIiwiZmlsZSI6InNoYXJlZC9wb3N0cy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwLCBIZWFkZXJzfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1Bvc3R9IGZyb20gJy4vcG9zdCc7XG5pbXBvcnQgJ3J4anMvUngnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHtDb25maWd9IGZyb20gJy4uL2NvbmZpZy9jb25maWcnO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHtHbG9iYWxIYW5kbGVyU2VydmljZX0gZnJvbSAnLi9nbG9iYWxIYW5kbGVyLnNlcnZpY2UnO1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBvc3RzU2VydmljZSB7XG5cdHByaXZhdGUgZW5kcG9pbnQ6IHN0cmluZyA9IENvbmZpZy5lbmRwb2ludDtcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBfaHR0cDogSHR0cCxcblx0XHRwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG5cdFx0cHJpdmF0ZSBfZ2xvYmFsSGFuZGxlclNlcnZpY2U6IEdsb2JhbEhhbmRsZXJTZXJ2aWNlKSB7fVxuXHQvKiBHRVQgKi9cblx0Z2V0QWxsUG9zdHMoKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHR2YXIgcmVxID0gdGhpcy5faHR0cC5nZXQoXG5cdFx0XHR0aGlzLmVuZHBvaW50ICsgJy9wb3N0cy9hbGwnKVxuXHRcdFx0Lm1hcChyZXMgPT4gcmVzLmpzb24oKSlcblx0XHRyZXR1cm4gcmVxO1xuXHRcdFx0XG5cdH1cblx0Z2V0UG9zdChwb3N0SWQ6IHN0cmluZywgcG9pbnRUeXBlOiBzdHJpbmcpe1xuXHRcdHJldHVybiB0aGlzLl9odHRwLmdldChcblx0XHRcdHRoaXMuZW5kcG9pbnQgKyAnL3Bvc3RzLycgKyBcblx0XHRcdHBvc3RJZCArIFxuXHRcdFx0Jy8nICtcblx0XHRcdHBvaW50VHlwZSlcblx0XHRcdC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuXHR9XG5cdC8qIFBPU1QgKi9cblx0aW5zZXJ0UG9zdChwb3N0OiBQb3N0KTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRcdGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShwb3N0KTtcblx0XHRcdGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuXHRcdFx0aGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG5cdFx0XHRoZWFkZXJzLmFwcGVuZCgneC1hY2Nlc3MtdG9rZW4nLFxuXHRcdFx0XHQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykpID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgOiBudWxsKTtcblx0XHRcdHJldHVybiB0aGlzLl9odHRwLnBvc3QoXG5cdFx0XHRcdHRoaXMuZW5kcG9pbnQgKyAnL3Bvc3RzL25ld1Bvc3QnLFxuXHRcdFx0XHRib2R5LFxuXHRcdFx0XHR7IGhlYWRlcnM6IGhlYWRlcnMgfSlcblx0XHRcdFx0XHQubWFwKHJlcyA9PiByZXMuanNvbigpKTtcblx0fVxuXHR1cGRhdGVQb3N0KHBvc3Q6IFBvc3QpOiBPYnNlcnZhYmxlPGFueT57XG5cdFx0XHRjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkocG9zdCk7XG5cdFx0XHRjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcblx0XHRcdGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuXHRcdFx0aGVhZGVycy5hcHBlbmQoJ3gtYWNjZXNzLXRva2VuJyxcblx0XHRcdFx0KGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpKSA/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpIDogbnVsbCk7XG5cdFx0XHRyZXR1cm4gdGhpcy5faHR0cC5wb3N0KFxuXHRcdFx0XHR0aGlzLmVuZHBvaW50ICsgJy9wb3N0cy91cGRhdGVQb3N0Jyxcblx0XHRcdFx0Ym9keSxcblx0XHRcdFx0eyBoZWFkZXJzOiBoZWFkZXJzIH0pXG5cdFx0XHRcdC5tYXAocmVzID0+IHJlcyk7XG5cdH1cblx0LyogREVMRVRFICovXG5cdGRlbGV0ZVBvc3QocG9zdElkOiBudW1iZXIsIGlzc3VlSWQ/OiBudW1iZXIsIG1haW5Qb2ludFR5cGU/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdC8vJy9kZWxldGVQb3N0Lzpwb3N0SWQvOmlzc3VlSWQvOm1haW5Qb2ludFR5cGUnXG5cdFx0XHRjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcblx0XHRcdGhlYWRlcnMuYXBwZW5kKCd4LWFjY2Vzcy10b2tlbicsXG5cdFx0XHRcdChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSkgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA6IG51bGwpO1xuXHRcdFx0cmV0dXJuIHRoaXMuX2h0dHAuZGVsZXRlKFxuXHRcdFx0XHR0aGlzLmVuZHBvaW50ICsgJy9wb3N0cy9kZWxldGVQb3N0LycgKyBcblx0XHRcdFx0cG9zdElkICsgJy8nICtcblx0XHRcdFx0aXNzdWVJZCArICcvJyArXG5cdFx0XHRcdG1haW5Qb2ludFR5cGUsXG5cdFx0XHRcdHtoZWFkZXJzOiBoZWFkZXJzfSlcblx0XHRcdFx0Lm1hcChyZXMgPT4gcmVzKTtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
