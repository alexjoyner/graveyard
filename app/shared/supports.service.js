System.register(['angular2/core', '../mock/mock-supports'], function(exports_1, context_1) {
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
    var core_1, mock_supports_1;
    var SupportsService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_supports_1_1) {
                mock_supports_1 = mock_supports_1_1;
            }],
        execute: function() {
            SupportsService = (function () {
                function SupportsService() {
                }
                /* GET */
                SupportsService.prototype.getSupports = function (pointId) {
                    var returnArray = [];
                    for (var i = mock_supports_1.SUPPORTS.length - 1; i >= 0; i--) {
                        if (mock_supports_1.SUPPORTS[i].point_id === pointId) {
                            console.log('Pushing: ', pointId);
                            returnArray.push(mock_supports_1.SUPPORTS[i]);
                        }
                    }
                    return returnArray;
                };
                SupportsService.prototype.getSupport = function (_id) {
                };
                /* POST */
                SupportsService.prototype.insertSupport = function (support) {
                    mock_supports_1.SUPPORTS.push(support);
                };
                /* DELETE */
                SupportsService.prototype.deleteSupport = function (support) {
                    // id in the future
                    mock_supports_1.SUPPORTS.splice(mock_supports_1.SUPPORTS.indexOf(support), 1);
                };
                SupportsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], SupportsService);
                return SupportsService;
            }());
            exports_1("SupportsService", SupportsService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zdXBwb3J0cy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7Z0JBQUE7Z0JBMEJBLENBQUM7Z0JBekJBLFNBQVM7Z0JBQ1QscUNBQVcsR0FBWCxVQUFZLE9BQWU7b0JBQzFCLElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQztvQkFDckIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsd0JBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzt3QkFDL0MsRUFBRSxDQUFDLENBQUMsd0JBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQzs0QkFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUM7NEJBQ2xDLFdBQVcsQ0FBQyxJQUFJLENBQUMsd0JBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUMvQixDQUFDO29CQUNGLENBQUM7b0JBQ0QsTUFBTSxDQUFDLFdBQVcsQ0FBQztnQkFDcEIsQ0FBQztnQkFDRCxvQ0FBVSxHQUFWLFVBQVcsR0FBVztnQkFFdEIsQ0FBQztnQkFFRCxVQUFVO2dCQUNWLHVDQUFhLEdBQWIsVUFBYyxPQUFnQjtvQkFDN0Isd0JBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3hCLENBQUM7Z0JBRUQsWUFBWTtnQkFDWix1Q0FBYSxHQUFiLFVBQWMsT0FBZ0I7b0JBQzdCLG1CQUFtQjtvQkFDbkIsd0JBQVEsQ0FBQyxNQUFNLENBQUMsd0JBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQy9DLENBQUM7Z0JBMUJGO29CQUFDLGlCQUFVLEVBQUU7O21DQUFBO2dCQTJCYixzQkFBQztZQUFELENBMUJBLEFBMEJDLElBQUE7WUExQkQsNkNBMEJDLENBQUEiLCJmaWxlIjoic2hhcmVkL3N1cHBvcnRzLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtTdXBwb3J0fSBmcm9tICcuL3N1cHBvcnQnO1xuaW1wb3J0IHtTVVBQT1JUU30gZnJvbSAnLi4vbW9jay9tb2NrLXN1cHBvcnRzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN1cHBvcnRzU2VydmljZSB7XG5cdC8qIEdFVCAqL1xuXHRnZXRTdXBwb3J0cyhwb2ludElkOiBzdHJpbmcpe1xuXHRcdGxldCByZXR1cm5BcnJheSA9IFtdO1xuXHRcdGZvciAodmFyIGkgPSBTVVBQT1JUUy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuXHRcdFx0aWYgKFNVUFBPUlRTW2ldLnBvaW50X2lkID09PSBwb2ludElkKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdQdXNoaW5nOiAnLCBwb2ludElkKTtcblx0XHRcdFx0cmV0dXJuQXJyYXkucHVzaChTVVBQT1JUU1tpXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZXR1cm5BcnJheTtcblx0fVxuXHRnZXRTdXBwb3J0KF9pZDogc3RyaW5nKXtcblxuXHR9XG5cblx0LyogUE9TVCAqL1xuXHRpbnNlcnRTdXBwb3J0KHN1cHBvcnQ6IFN1cHBvcnQpe1xuXHRcdFNVUFBPUlRTLnB1c2goc3VwcG9ydCk7XG5cdH1cblxuXHQvKiBERUxFVEUgKi9cblx0ZGVsZXRlU3VwcG9ydChzdXBwb3J0OiBTdXBwb3J0KXtcblx0XHQvLyBpZCBpbiB0aGUgZnV0dXJlXG5cdFx0U1VQUE9SVFMuc3BsaWNlKFNVUFBPUlRTLmluZGV4T2Yoc3VwcG9ydCksIDEpO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
