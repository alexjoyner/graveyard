System.register(['angular2/http', 'angular2/core', 'rxjs/Rx', '../config/config', './auth.service'], function(exports_1, context_1) {
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
    var http_1, core_1, config_1, auth_service_1;
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
            }],
        execute: function() {
            PostsService = (function () {
                function PostsService(_http, _authService) {
                    this._http = _http;
                    this._authService = _authService;
                    this.endpoint = config_1.Config.endpoint;
                }
                /* GET */
                PostsService.prototype.getAllPosts = function () {
                    return this._http.get(this.endpoint + '/posts/all')
                        .map(function (res) { return res.json(); });
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
                PostsService.prototype.deletePost = function (postId) {
                    var headers = new http_1.Headers();
                    headers.append('x-access-token', (localStorage.getItem('token')) ? localStorage.getItem('token') : null);
                    return this._http.delete(this.endpoint + '/posts/deletePost/' + postId, { headers: headers })
                        .map(function (res) { return res; });
                };
                PostsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, auth_service_1.AuthService])
                ], PostsService);
                return PostsService;
            }());
            exports_1("PostsService", PostsService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9wb3N0cy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVFBO2dCQUVDLHNCQUNTLEtBQVcsRUFDWCxZQUF5QjtvQkFEekIsVUFBSyxHQUFMLEtBQUssQ0FBTTtvQkFDWCxpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFIMUIsYUFBUSxHQUFXLGVBQU0sQ0FBQyxRQUFRLENBQUM7Z0JBR04sQ0FBQztnQkFDdEMsU0FBUztnQkFDVCxrQ0FBVyxHQUFYO29CQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUM7eUJBQzVCLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztnQkFDMUIsQ0FBQztnQkFDRCw4QkFBTyxHQUFQLFVBQVEsTUFBYyxFQUFFLFNBQWlCO29CQUN4QyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUzt3QkFDekIsTUFBTTt3QkFDTixHQUFHO3dCQUNILFNBQVMsQ0FBQzt5QkFDVCxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7Z0JBQzFCLENBQUM7Z0JBQ0QsVUFBVTtnQkFDVixpQ0FBVSxHQUFWLFVBQVcsSUFBVTtvQkFDbkIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDbEMsSUFBTSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztvQkFDOUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztvQkFDbkQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFDOUIsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztvQkFDekUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLGdCQUFnQixFQUNoQyxJQUFJLEVBQ0osRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7eUJBQ25CLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztnQkFDNUIsQ0FBQztnQkFDRCxpQ0FBVSxHQUFWLFVBQVcsSUFBVTtvQkFDbkIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDbEMsSUFBTSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztvQkFDOUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztvQkFDbkQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFDOUIsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztvQkFDekUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLG1CQUFtQixFQUNuQyxJQUFJLEVBQ0osRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7eUJBQ3BCLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsRUFBSCxDQUFHLENBQUMsQ0FBQztnQkFDcEIsQ0FBQztnQkFDRCxZQUFZO2dCQUNaLGlDQUFVLEdBQVYsVUFBVyxNQUFjO29CQUN2QixJQUFNLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO29CQUM5QixPQUFPLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUM5QixDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO29CQUN6RSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQW9CLEdBQUcsTUFBTSxFQUM3QyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQzt5QkFDbEIsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxFQUFILENBQUcsQ0FBQyxDQUFDO2dCQUNwQixDQUFDO2dCQXRERjtvQkFBQyxpQkFBVSxFQUFFOztnQ0FBQTtnQkF1RGIsbUJBQUM7WUFBRCxDQXREQSxBQXNEQyxJQUFBO1lBdERELHVDQXNEQyxDQUFBIiwiZmlsZSI6InNoYXJlZC9wb3N0cy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwLCBIZWFkZXJzfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1Bvc3R9IGZyb20gJy4vcG9zdCc7XG5pbXBvcnQgJ3J4anMvUngnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHtDb25maWd9IGZyb20gJy4uL2NvbmZpZy9jb25maWcnO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBvc3RzU2VydmljZSB7XG5cdHByaXZhdGUgZW5kcG9pbnQ6IHN0cmluZyA9IENvbmZpZy5lbmRwb2ludDtcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBfaHR0cDogSHR0cCxcblx0XHRwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2UpIHt9XG5cdC8qIEdFVCAqL1xuXHRnZXRBbGxQb3N0cygpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdHJldHVybiB0aGlzLl9odHRwLmdldChcblx0XHRcdHRoaXMuZW5kcG9pbnQgKyAnL3Bvc3RzL2FsbCcpXG5cdFx0XHQubWFwKHJlcyA9PiByZXMuanNvbigpKTtcblx0fVxuXHRnZXRQb3N0KHBvc3RJZDogc3RyaW5nLCBwb2ludFR5cGU6IHN0cmluZyl7XG5cdFx0cmV0dXJuIHRoaXMuX2h0dHAuZ2V0KFxuXHRcdFx0dGhpcy5lbmRwb2ludCArICcvcG9zdHMvJyArIFxuXHRcdFx0cG9zdElkICsgXG5cdFx0XHQnLycgK1xuXHRcdFx0cG9pbnRUeXBlKVxuXHRcdFx0Lm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG5cdH1cblx0LyogUE9TVCAqL1xuXHRpbnNlcnRQb3N0KHBvc3Q6IFBvc3QpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdFx0Y29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHBvc3QpO1xuXHRcdFx0Y29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG5cdFx0XHRoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcblx0XHRcdGhlYWRlcnMuYXBwZW5kKCd4LWFjY2Vzcy10b2tlbicsXG5cdFx0XHRcdChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSkgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA6IG51bGwpO1xuXHRcdFx0cmV0dXJuIHRoaXMuX2h0dHAucG9zdChcblx0XHRcdFx0dGhpcy5lbmRwb2ludCArICcvcG9zdHMvbmV3UG9zdCcsXG5cdFx0XHRcdGJvZHksXG5cdFx0XHRcdHsgaGVhZGVyczogaGVhZGVycyB9KVxuXHRcdFx0XHRcdC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuXHR9XG5cdHVwZGF0ZVBvc3QocG9zdDogUG9zdCk6IE9ic2VydmFibGU8YW55Pntcblx0XHRcdGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShwb3N0KTtcblx0XHRcdGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuXHRcdFx0aGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG5cdFx0XHRoZWFkZXJzLmFwcGVuZCgneC1hY2Nlc3MtdG9rZW4nLFxuXHRcdFx0XHQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykpID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgOiBudWxsKTtcblx0XHRcdHJldHVybiB0aGlzLl9odHRwLnBvc3QoXG5cdFx0XHRcdHRoaXMuZW5kcG9pbnQgKyAnL3Bvc3RzL3VwZGF0ZVBvc3QnLFxuXHRcdFx0XHRib2R5LFxuXHRcdFx0XHR7IGhlYWRlcnM6IGhlYWRlcnMgfSlcblx0XHRcdFx0Lm1hcChyZXMgPT4gcmVzKTtcblx0fVxuXHQvKiBERUxFVEUgKi9cblx0ZGVsZXRlUG9zdChwb3N0SWQ6IG51bWJlcik6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0XHRjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcblx0XHRcdGhlYWRlcnMuYXBwZW5kKCd4LWFjY2Vzcy10b2tlbicsXG5cdFx0XHRcdChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSkgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA6IG51bGwpO1xuXHRcdFx0cmV0dXJuIHRoaXMuX2h0dHAuZGVsZXRlKFxuXHRcdFx0XHR0aGlzLmVuZHBvaW50ICsgJy9wb3N0cy9kZWxldGVQb3N0LycgKyBwb3N0SWQsXG5cdFx0XHRcdHtoZWFkZXJzOiBoZWFkZXJzfSlcblx0XHRcdFx0Lm1hcChyZXMgPT4gcmVzKTtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
