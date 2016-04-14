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
                    __metadata('design:paramtypes', [http_1.Http, auth_service_1.AuthService])
                ], PostsService);
                return PostsService;
            }());
            exports_1("PostsService", PostsService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9wb3N0cy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVFBO2dCQUVDLHNCQUNTLEtBQVcsRUFDWCxZQUF5QjtvQkFEekIsVUFBSyxHQUFMLEtBQUssQ0FBTTtvQkFDWCxpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFIMUIsYUFBUSxHQUFXLGVBQU0sQ0FBQyxRQUFRLENBQUM7Z0JBR04sQ0FBQztnQkFDdEMsU0FBUztnQkFDVCxrQ0FBVyxHQUFYO29CQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUM7eUJBQzVCLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztnQkFDMUIsQ0FBQztnQkFDRCw4QkFBTyxHQUFQLFVBQVEsTUFBYyxFQUFFLFNBQWlCO29CQUN4QyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUzt3QkFDekIsTUFBTTt3QkFDTixHQUFHO3dCQUNILFNBQVMsQ0FBQzt5QkFDVCxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7Z0JBQzFCLENBQUM7Z0JBQ0QsVUFBVTtnQkFDVixpQ0FBVSxHQUFWLFVBQVcsSUFBVTtvQkFDbkIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDbEMsSUFBTSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztvQkFDOUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztvQkFDbkQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFDOUIsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztvQkFDekUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLGdCQUFnQixFQUNoQyxJQUFJLEVBQ0osRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7eUJBQ25CLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztnQkFDNUIsQ0FBQztnQkFDRCxpQ0FBVSxHQUFWLFVBQVcsSUFBVTtvQkFDbkIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDbEMsSUFBTSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztvQkFDOUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztvQkFDbkQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFDOUIsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztvQkFDekUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLG1CQUFtQixFQUNuQyxJQUFJLEVBQ0osRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7eUJBQ3BCLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsRUFBSCxDQUFHLENBQUMsQ0FBQztnQkFDcEIsQ0FBQztnQkFDRCxZQUFZO2dCQUNaLGlDQUFVLEdBQVYsVUFBVyxNQUFjLEVBQUUsT0FBZ0IsRUFBRSxhQUFzQjtvQkFDbEUsK0NBQStDO29CQUM5QyxJQUFNLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO29CQUM5QixPQUFPLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUM5QixDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO29CQUN6RSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQW9CO3dCQUNwQyxNQUFNLEdBQUcsR0FBRzt3QkFDWixPQUFPLEdBQUcsR0FBRzt3QkFDYixhQUFhLEVBQ2IsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUM7eUJBQ2xCLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsRUFBSCxDQUFHLENBQUMsQ0FBQztnQkFDcEIsQ0FBQztnQkExREY7b0JBQUMsaUJBQVUsRUFBRTs7Z0NBQUE7Z0JBMkRiLG1CQUFDO1lBQUQsQ0ExREEsQUEwREMsSUFBQTtZQTFERCx1Q0EwREMsQ0FBQSIsImZpbGUiOiJzaGFyZWQvcG9zdHMuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHR0cCwgSGVhZGVyc30gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtQb3N0fSBmcm9tICcuL3Bvc3QnO1xuaW1wb3J0ICdyeGpzL1J4JztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7Q29uZmlnfSBmcm9tICcuLi9jb25maWcvY29uZmlnJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQb3N0c1NlcnZpY2Uge1xuXHRwcml2YXRlIGVuZHBvaW50OiBzdHJpbmcgPSBDb25maWcuZW5kcG9pbnQ7XG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgX2h0dHA6IEh0dHAsXG5cdFx0cHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7fVxuXHQvKiBHRVQgKi9cblx0Z2V0QWxsUG9zdHMoKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRyZXR1cm4gdGhpcy5faHR0cC5nZXQoXG5cdFx0XHR0aGlzLmVuZHBvaW50ICsgJy9wb3N0cy9hbGwnKVxuXHRcdFx0Lm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG5cdH1cblx0Z2V0UG9zdChwb3N0SWQ6IHN0cmluZywgcG9pbnRUeXBlOiBzdHJpbmcpe1xuXHRcdHJldHVybiB0aGlzLl9odHRwLmdldChcblx0XHRcdHRoaXMuZW5kcG9pbnQgKyAnL3Bvc3RzLycgKyBcblx0XHRcdHBvc3RJZCArIFxuXHRcdFx0Jy8nICtcblx0XHRcdHBvaW50VHlwZSlcblx0XHRcdC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuXHR9XG5cdC8qIFBPU1QgKi9cblx0aW5zZXJ0UG9zdChwb3N0OiBQb3N0KTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRcdGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShwb3N0KTtcblx0XHRcdGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuXHRcdFx0aGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG5cdFx0XHRoZWFkZXJzLmFwcGVuZCgneC1hY2Nlc3MtdG9rZW4nLFxuXHRcdFx0XHQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykpID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgOiBudWxsKTtcblx0XHRcdHJldHVybiB0aGlzLl9odHRwLnBvc3QoXG5cdFx0XHRcdHRoaXMuZW5kcG9pbnQgKyAnL3Bvc3RzL25ld1Bvc3QnLFxuXHRcdFx0XHRib2R5LFxuXHRcdFx0XHR7IGhlYWRlcnM6IGhlYWRlcnMgfSlcblx0XHRcdFx0XHQubWFwKHJlcyA9PiByZXMuanNvbigpKTtcblx0fVxuXHR1cGRhdGVQb3N0KHBvc3Q6IFBvc3QpOiBPYnNlcnZhYmxlPGFueT57XG5cdFx0XHRjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkocG9zdCk7XG5cdFx0XHRjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcblx0XHRcdGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuXHRcdFx0aGVhZGVycy5hcHBlbmQoJ3gtYWNjZXNzLXRva2VuJyxcblx0XHRcdFx0KGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpKSA/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpIDogbnVsbCk7XG5cdFx0XHRyZXR1cm4gdGhpcy5faHR0cC5wb3N0KFxuXHRcdFx0XHR0aGlzLmVuZHBvaW50ICsgJy9wb3N0cy91cGRhdGVQb3N0Jyxcblx0XHRcdFx0Ym9keSxcblx0XHRcdFx0eyBoZWFkZXJzOiBoZWFkZXJzIH0pXG5cdFx0XHRcdC5tYXAocmVzID0+IHJlcyk7XG5cdH1cblx0LyogREVMRVRFICovXG5cdGRlbGV0ZVBvc3QocG9zdElkOiBudW1iZXIsIGlzc3VlSWQ/OiBudW1iZXIsIG1haW5Qb2ludFR5cGU/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdC8vJy9kZWxldGVQb3N0Lzpwb3N0SWQvOmlzc3VlSWQvOm1haW5Qb2ludFR5cGUnXG5cdFx0XHRjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcblx0XHRcdGhlYWRlcnMuYXBwZW5kKCd4LWFjY2Vzcy10b2tlbicsXG5cdFx0XHRcdChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSkgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA6IG51bGwpO1xuXHRcdFx0cmV0dXJuIHRoaXMuX2h0dHAuZGVsZXRlKFxuXHRcdFx0XHR0aGlzLmVuZHBvaW50ICsgJy9wb3N0cy9kZWxldGVQb3N0LycgKyBcblx0XHRcdFx0cG9zdElkICsgJy8nICtcblx0XHRcdFx0aXNzdWVJZCArICcvJyArXG5cdFx0XHRcdG1haW5Qb2ludFR5cGUsXG5cdFx0XHRcdHtoZWFkZXJzOiBoZWFkZXJzfSlcblx0XHRcdFx0Lm1hcChyZXMgPT4gcmVzKTtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
