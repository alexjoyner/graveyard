System.register(['angular2/core', './highlight.directive', './structeral-directives.component'], function(exports_1, context_1) {
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
    var core_1, highlight_directive_1, structeral_directives_component_1;
    var AttributeDirectives;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (highlight_directive_1_1) {
                highlight_directive_1 = highlight_directive_1_1;
            },
            function (structeral_directives_component_1_1) {
                structeral_directives_component_1 = structeral_directives_component_1_1;
            }],
        execute: function() {
            AttributeDirectives = (function () {
                function AttributeDirectives() {
                }
                AttributeDirectives = __decorate([
                    core_1.Component({
                        selector: 'my-attribute-directives',
                        template: "\n    \t<div [myHighlight]=\"'red'\">\n    \t\tHighlight Me\n    \t</div>\n    \t<div [myHighlight]=\"'orange'\">\n    \t\tAnother highlight\n    \t</div>\n    \t<my-structeral-directive></my-structeral-directive>\n    ",
                        directives: [highlight_directive_1.HighlightDirective, structeral_directives_component_1.StructeralDirective]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AttributeDirectives);
                return AttributeDirectives;
            }());
            exports_1("AttributeDirectives", AttributeDirectives);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dHJpYnV0ZS1kaXJlY3RpdmVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWlCQTtnQkFBQTtnQkFFQSxDQUFDO2dCQWZEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLHlCQUF5Qjt3QkFDbkMsUUFBUSxFQUFFLDZOQVFUO3dCQUNELFVBQVUsRUFBRSxDQUFDLHdDQUFrQixFQUFFLHFEQUFtQixDQUFDO3FCQUN4RCxDQUFDOzt1Q0FBQTtnQkFHRiwwQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQscURBRUMsQ0FBQSIsImZpbGUiOiJhdHRyaWJ1dGUtZGlyZWN0aXZlcy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0hpZ2hsaWdodERpcmVjdGl2ZX0gZnJvbSAnLi9oaWdobGlnaHQuZGlyZWN0aXZlJztcbmltcG9ydCB7U3RydWN0ZXJhbERpcmVjdGl2ZX0gZnJvbSAnLi9zdHJ1Y3RlcmFsLWRpcmVjdGl2ZXMuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hdHRyaWJ1dGUtZGlyZWN0aXZlcycsXG4gICAgdGVtcGxhdGU6IGBcbiAgICBcdDxkaXYgW215SGlnaGxpZ2h0XT1cIidyZWQnXCI+XG4gICAgXHRcdEhpZ2hsaWdodCBNZVxuICAgIFx0PC9kaXY+XG4gICAgXHQ8ZGl2IFtteUhpZ2hsaWdodF09XCInb3JhbmdlJ1wiPlxuICAgIFx0XHRBbm90aGVyIGhpZ2hsaWdodFxuICAgIFx0PC9kaXY+XG4gICAgXHQ8bXktc3RydWN0ZXJhbC1kaXJlY3RpdmU+PC9teS1zdHJ1Y3RlcmFsLWRpcmVjdGl2ZT5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtIaWdobGlnaHREaXJlY3RpdmUsIFN0cnVjdGVyYWxEaXJlY3RpdmVdXG59KVxuZXhwb3J0IGNsYXNzIEF0dHJpYnV0ZURpcmVjdGl2ZXMge1xuXHRcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
