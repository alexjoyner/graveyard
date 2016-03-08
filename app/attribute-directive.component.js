System.register(['angular2/core', './highlight.directive'], function(exports_1, context_1) {
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
    var core_1, highlight_directive_1;
    var AttributeDirectives;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (highlight_directive_1_1) {
                highlight_directive_1 = highlight_directive_1_1;
            }],
        execute: function() {
            AttributeDirectives = (function () {
                function AttributeDirectives() {
                }
                AttributeDirectives = __decorate([
                    core_1.Component({
                        selector: 'my-attribute-directives',
                        template: "\n    \t<div myHighlight>\n    \t\tHighlight Me\n    \t</div>\n    \t<div myHighlight>\n    \t\tAnother highlight\n    \t</div>\n    ",
                        directives: [highlight_directive_1.HighlightDirective]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AttributeDirectives);
                return AttributeDirectives;
            }());
            exports_1("AttributeDirectives", AttributeDirectives);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dHJpYnV0ZS1kaXJlY3RpdmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZUE7Z0JBQUE7Z0JBRUEsQ0FBQztnQkFkRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSx5QkFBeUI7d0JBQ25DLFFBQVEsRUFBRSx1SUFPVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQyx3Q0FBa0IsQ0FBQztxQkFDbkMsQ0FBQzs7dUNBQUE7Z0JBR0YsMEJBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELHFEQUVDLENBQUEiLCJmaWxlIjoiYXR0cmlidXRlLWRpcmVjdGl2ZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0hpZ2hsaWdodERpcmVjdGl2ZX0gZnJvbSAnLi9oaWdobGlnaHQuZGlyZWN0aXZlJ1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWF0dHJpYnV0ZS1kaXJlY3RpdmVzJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIFx0PGRpdiBteUhpZ2hsaWdodD5cbiAgICBcdFx0SGlnaGxpZ2h0IE1lXG4gICAgXHQ8L2Rpdj5cbiAgICBcdDxkaXYgbXlIaWdobGlnaHQ+XG4gICAgXHRcdEFub3RoZXIgaGlnaGxpZ2h0XG4gICAgXHQ8L2Rpdj5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtIaWdobGlnaHREaXJlY3RpdmVdXG59KVxuZXhwb3J0IGNsYXNzIEF0dHJpYnV0ZURpcmVjdGl2ZXMge1xuXHRcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
