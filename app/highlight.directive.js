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
                /*
                ngOnInit():any {
                    this._renderer.setElementStyle(this._elRef.nativeElement, 'background-color', this.highlightColor || this._defaultColor);
                }
                */
                HighlightDirective.prototype.onMouseEnter = function () {
                    this.highlight(this.highlightColor || this._defaultColor);
                };
                HighlightDirective.prototype.onMouseLeave = function () {
                    this.highlight(null);
                };
                HighlightDirective.prototype.highlight = function (color) {
                    this._renderer.setElementStyle(this._elRef.nativeElement, 'background-color', color);
                };
                HighlightDirective = __decorate([
                    core_1.Directive({
                        selector: '[myHighlight]',
                        inputs: ['highlightColor: myHighlight'],
                        host: {
                            '(mouseenter)': 'onMouseEnter()',
                            '(mouseleave)': 'onMouseLeave()'
                        }
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], HighlightDirective);
                return HighlightDirective;
            }());
            exports_1("HighlightDirective", HighlightDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpZ2hsaWdodC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFXQTtnQkFHQyw0QkFBb0IsTUFBa0IsRUFBVSxTQUFtQjtvQkFBL0MsV0FBTSxHQUFOLE1BQU0sQ0FBWTtvQkFBVSxjQUFTLEdBQVQsU0FBUyxDQUFVO29CQUYzRCxrQkFBYSxHQUFHLE9BQU8sQ0FBQztnQkFFc0MsQ0FBQztnQkFDdkU7Ozs7a0JBSUU7Z0JBQ0YseUNBQVksR0FBWjtvQkFDQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUMzRCxDQUFDO2dCQUNELHlDQUFZLEdBQVo7b0JBQ0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdEIsQ0FBQztnQkFDTyxzQ0FBUyxHQUFqQixVQUFrQixLQUFhO29CQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxrQkFBa0IsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDdEYsQ0FBQztnQkExQkY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixRQUFRLEVBQUUsZUFBZTt3QkFDekIsTUFBTSxFQUFFLENBQUMsNkJBQTZCLENBQUM7d0JBQ3ZDLElBQUksRUFBRTs0QkFDTCxjQUFjLEVBQUUsZ0JBQWdCOzRCQUNoQyxjQUFjLEVBQUUsZ0JBQWdCO3lCQUNoQztxQkFDRCxDQUFDOztzQ0FBQTtnQkFvQkYseUJBQUM7WUFBRCxDQWxCQSxBQWtCQyxJQUFBO1lBbEJELG1EQWtCQyxDQUFBIiwiZmlsZSI6ImhpZ2hsaWdodC5kaXJlY3RpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgT25Jbml0LCBFbGVtZW50UmVmLCBSZW5kZXJlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1tteUhpZ2hsaWdodF0nLFxuXHRpbnB1dHM6IFsnaGlnaGxpZ2h0Q29sb3I6IG15SGlnaGxpZ2h0J10sXG5cdGhvc3Q6IHtcblx0XHQnKG1vdXNlZW50ZXIpJzogJ29uTW91c2VFbnRlcigpJyxcblx0XHQnKG1vdXNlbGVhdmUpJzogJ29uTW91c2VMZWF2ZSgpJ1xuXHR9XG59KVxuXG5leHBvcnQgY2xhc3MgSGlnaGxpZ2h0RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0e1xuXHRwcml2YXRlIF9kZWZhdWx0Q29sb3IgPSAnZ3JlZW4nO1xuXHRoaWdobGlnaHRDb2xvcjogc3RyaW5nO1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyKSB7fVxuXHQvKlxuXHRuZ09uSW5pdCgpOmFueSB7XG5cdFx0dGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQsICdiYWNrZ3JvdW5kLWNvbG9yJywgdGhpcy5oaWdobGlnaHRDb2xvciB8fCB0aGlzLl9kZWZhdWx0Q29sb3IpO1xuXHR9XG5cdCovXG5cdG9uTW91c2VFbnRlcigpIHtcblx0XHR0aGlzLmhpZ2hsaWdodCh0aGlzLmhpZ2hsaWdodENvbG9yIHx8IHRoaXMuX2RlZmF1bHRDb2xvcik7XG5cdH1cblx0b25Nb3VzZUxlYXZlKCkge1xuXHRcdHRoaXMuaGlnaGxpZ2h0KG51bGwpO1xuXHR9XG5cdHByaXZhdGUgaGlnaGxpZ2h0KGNvbG9yOiBzdHJpbmcpe1xuXHRcdHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRTdHlsZSh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LCAnYmFja2dyb3VuZC1jb2xvcicsIGNvbG9yKTtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
