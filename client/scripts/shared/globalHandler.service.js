System.register(['angular2/core', 'rxjs/Observable'], function(exports_1, context_1) {
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
    var core_1, Observable_1;
    var GlobalHandlerService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            GlobalHandlerService = (function () {
                function GlobalHandlerService() {
                    var _this = this;
                    this.dataChange = new Observable_1.Observable(function (observer) {
                        _this.dataChangeObserver = observer;
                    });
                }
                GlobalHandlerService.prototype.emitStatusMessage = function (data) {
                    console.log('EMIT STATUS: ', data);
                    this.data = data;
                    this.dataChangeObserver.next(this.data);
                };
                GlobalHandlerService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], GlobalHandlerService);
                return GlobalHandlerService;
            }());
            exports_1("GlobalHandlerService", GlobalHandlerService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9nbG9iYWxIYW5kbGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQTtnQkFJQztvQkFKRCxpQkFjQztvQkFUQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksdUJBQVUsQ0FBQyxVQUFDLFFBQXVCO3dCQUN4RCxLQUFJLENBQUMsa0JBQWtCLEdBQUcsUUFBUSxDQUFDO29CQUNwQyxDQUFDLENBQUMsQ0FBQztnQkFDSixDQUFDO2dCQUNELGdEQUFpQixHQUFqQixVQUFrQixJQUFvQztvQkFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ25DLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO29CQUNqQixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDekMsQ0FBQztnQkFkRjtvQkFBQyxpQkFBVSxFQUFFOzt3Q0FBQTtnQkFlYiwyQkFBQztZQUFELENBZEEsQUFjQyxJQUFBO1lBZEQsdURBY0MsQ0FBQSIsImZpbGUiOiJzaGFyZWQvZ2xvYmFsSGFuZGxlci5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7T2JzZXJ2ZXJ9IGZyb20gJ3J4anMvT2JzZXJ2ZXInO1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdsb2JhbEhhbmRsZXJTZXJ2aWNlIHtcblx0ZGF0YTogYW55O1xuXHRkYXRhQ2hhbmdlOiBPYnNlcnZhYmxlPGFueT47XG5cdHByaXZhdGUgZGF0YUNoYW5nZU9ic2VydmVyOiBPYnNlcnZlcjxhbnk+O1xuXHRjb25zdHJ1Y3Rvcigpe1xuXHRcdHRoaXMuZGF0YUNoYW5nZSA9IG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogT2JzZXJ2ZXI8YW55Pik9Pntcblx0XHRcdHRoaXMuZGF0YUNoYW5nZU9ic2VydmVyID0gb2JzZXJ2ZXI7XG5cdFx0fSk7XG5cdH1cblx0ZW1pdFN0YXR1c01lc3NhZ2UoZGF0YToge3N0YXR1czogbnVtYmVyLCBib2R5OiBzdHJpbmd9KXtcblx0XHRjb25zb2xlLmxvZygnRU1JVCBTVEFUVVM6ICcsIGRhdGEpO1xuXHRcdHRoaXMuZGF0YSA9IGRhdGE7XG5cdFx0dGhpcy5kYXRhQ2hhbmdlT2JzZXJ2ZXIubmV4dCh0aGlzLmRhdGEpO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
