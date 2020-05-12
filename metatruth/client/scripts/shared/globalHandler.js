System.register(['angular2/core, 'rxjs/Observable'], function(exports_1, context_1) {
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
    var GlobalHandler;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            GlobalHandler = (function () {
                function GlobalHandler() {
                    var _this = this;
                    this.dataChange = new Observable_1.Observable(function (observer) {
                        _this.dataChangeObserver = observer;
                    });
                }
                GlobalHandler.prototype.emitStatusMessage = function (data) {
                    this.data = data;
                    this.dataChangeObserver.next(this.data);
                };
                GlobalHandler = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], GlobalHandler);
                return GlobalHandler;
            }());
            exports_1("GlobalHandler", GlobalHandler);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9nbG9iYWxIYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSUE7Z0JBSUM7b0JBSkQsaUJBYUM7b0JBUkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLHVCQUFVLENBQUMsVUFBQyxRQUF1Qjt3QkFDeEQsS0FBSSxDQUFDLGtCQUFrQixHQUFHLFFBQVEsQ0FBQztvQkFDcEMsQ0FBQyxDQUFDLENBQUM7Z0JBQ0osQ0FBQztnQkFDRCx5Q0FBaUIsR0FBakIsVUFBa0IsSUFBb0M7b0JBQ3JELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO29CQUNqQixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDekMsQ0FBQztnQkFiRjtvQkFBQyxpQkFBVSxFQUFFOztpQ0FBQTtnQkFjYixvQkFBQztZQUFELENBYkEsQUFhQyxJQUFBO1lBYkQseUNBYUMsQ0FBQSIsImZpbGUiOiJzaGFyZWQvZ2xvYmFsSGFuZGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZVxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHtPYnNlcnZlcn0gZnJvbSAncnhqcy9PYnNlcnZlcic7XG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR2xvYmFsSGFuZGxlciB7XG5cdGRhdGE6IGFueTtcblx0ZGF0YUNoYW5nZTogT2JzZXJ2YWJsZTxhbnk+O1xuXHRwcml2YXRlIGRhdGFDaGFuZ2VPYnNlcnZlcjogT2JzZXJ2ZXI8YW55Pjtcblx0Y29uc3RydWN0b3IoKXtcblx0XHR0aGlzLmRhdGFDaGFuZ2UgPSBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IE9ic2VydmVyPGFueT4pIHtcblx0XHRcdHRoaXMuZGF0YUNoYW5nZU9ic2VydmVyID0gb2JzZXJ2ZXI7XG5cdFx0fSk7XG5cdH1cblx0ZW1pdFN0YXR1c01lc3NhZ2UoZGF0YToge3N0YXR1czogbnVtYmVyLCBib2R5OiBzdHJpbmd9KXtcblx0XHR0aGlzLmRhdGEgPSBkYXRhO1xuXHRcdHRoaXMuZGF0YUNoYW5nZU9ic2VydmVyLm5leHQodGhpcy5kYXRhKTtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
