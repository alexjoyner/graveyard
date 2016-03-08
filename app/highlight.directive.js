System.register(['angular2/core'], function(exports_1, context_1) {
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
    var HighlightDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HighlightDirective = (function () {
                function HighlightDirective(_elRef, _renderer) {
                    this._elRef = _elRef;
                    this._renderer = _renderer;
                    this._defaultColor = 'green';
                }
                HighlightDirective.prototype.ngOnInit = function () {
                    this._renderer.setElementStyle(this._elRef.nativeElement, 'background-color', this._defaultColor);
                };
                HighlightDirective = __decorate([
                    core_1.Directive({
                        selector: '[myHighlight]'
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], HighlightDirective);
                return HighlightDirective;
            }());
            exports_1("HighlightDirective", HighlightDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpZ2hsaWdodC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTtnQkFHQyw0QkFBb0IsTUFBa0IsRUFBVSxTQUFtQjtvQkFBL0MsV0FBTSxHQUFOLE1BQU0sQ0FBWTtvQkFBVSxjQUFTLEdBQVQsU0FBUyxDQUFVO29CQUYzRCxrQkFBYSxHQUFHLE9BQU8sQ0FBQztnQkFFc0MsQ0FBQztnQkFFdkUscUNBQVEsR0FBUjtvQkFDQyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxrQkFBa0IsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ25HLENBQUM7Z0JBWEY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixRQUFRLEVBQUUsZUFBZTtxQkFDekIsQ0FBQzs7c0NBQUE7Z0JBVUYseUJBQUM7WUFBRCxDQVJBLEFBUUMsSUFBQTtZQVJELG1EQVFDLENBQUEiLCJmaWxlIjoiaGlnaGxpZ2h0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBPbkluaXQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW215SGlnaGxpZ2h0XSdcbn0pXG5cbmV4cG9ydCBjbGFzcyBIaWdobGlnaHREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXR7XG5cdHByaXZhdGUgX2RlZmF1bHRDb2xvciA9ICdncmVlbic7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfZWxSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcikge31cblxuXHRuZ09uSW5pdCgpOmFueSB7XG5cdFx0dGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQsICdiYWNrZ3JvdW5kLWNvbG9yJywgdGhpcy5fZGVmYXVsdENvbG9yKTtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
