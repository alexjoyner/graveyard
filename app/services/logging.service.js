System.register(["angular2/core"], function(exports_1, context_1) {
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
    var core_1;
    var LoggingService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LoggingService = (function () {
                function LoggingService() {
                    this._lastMessage = '';
                }
                LoggingService.prototype.log = function (message) {
                    console.log('Current Message' + message + ', Last message' + this._lastMessage);
                    this._lastMessage = message;
                };
                LoggingService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], LoggingService);
                return LoggingService;
            }());
            exports_1("LoggingService", LoggingService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2xvZ2dpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBO2dCQUFBO29CQUNTLGlCQUFZLEdBQUcsRUFBRSxDQUFDO2dCQUszQixDQUFDO2dCQUpBLDRCQUFHLEdBQUgsVUFBSSxPQUFlO29CQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLE9BQU8sR0FBRyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQ2hGLElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDO2dCQUM3QixDQUFDO2dCQU5GO29CQUFDLGlCQUFVLEVBQUU7O2tDQUFBO2dCQU9iLHFCQUFDO1lBQUQsQ0FOQSxBQU1DLElBQUE7WUFORCwyQ0FNQyxDQUFBIiwiZmlsZSI6InNlcnZpY2VzL2xvZ2dpbmcuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzICBMb2dnaW5nU2VydmljZXtcblx0cHJpdmF0ZSBfbGFzdE1lc3NhZ2UgPSAnJztcblx0bG9nKG1lc3NhZ2U6IHN0cmluZyl7XG5cdFx0Y29uc29sZS5sb2coJ0N1cnJlbnQgTWVzc2FnZScgKyBtZXNzYWdlICsgJywgTGFzdCBtZXNzYWdlJyArIHRoaXMuX2xhc3RNZXNzYWdlKTtcblx0XHR0aGlzLl9sYXN0TWVzc2FnZSA9IG1lc3NhZ2U7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
