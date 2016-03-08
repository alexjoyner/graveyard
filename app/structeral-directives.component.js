System.register(['angular2/core', './unless.directive'], function(exports_1, context_1) {
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
    var core_1, unless_directive_1;
    var StructeralDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (unless_directive_1_1) {
                unless_directive_1 = unless_directive_1_1;
            }],
        execute: function() {
            StructeralDirective = (function () {
                function StructeralDirective() {
                    this.list = ['Apple', 'orange', 'milk'];
                }
                StructeralDirective = __decorate([
                    core_1.Component({
                        selector: 'my-structeral-directive',
                        template: "\n    \t<section class=\"directive\">\n    \t\t<h2>*ngIf</h2>\n    \t\t<div>\n                Enter a number higher than 10\n    \t\t\t<br>\n    \t\t\t<input type=\"text\" #number (keyup)=\"0\">\n    \t\t</div>\n    \t\t<div *ngIf=\"number.value > 10\">\n    \t\t\tNumber is greater than 10\n    \t\t</div>\n    \t</section>\n        <br/>\n        <section class=\"directive\">\n            <h2>*ngFor</h2>\n            <div>\n                <ul>\n                    <li *ngFor=\"#item of list, #i = index\">\n                        {{item}}{{i}}\n                    </li>\n                </ul>\n            </div>\n        </section>\n        <br/>\n        <section class=\"directive\">\n            <h2>[ngSwitch]</h2>\n            <div>\n                Enter red, blue or green\n                <br/>\n                <input type=\"text\" #color (keyup)=\"0\"/>\n            </div>\n            <div [ngSwitch]=\"color.value\">\n                <template [ngSwitchWhen]=\"'red'\">\n                    <span style=\"color: red\"> Color is Red </span>\n                </template>\n                <template [ngSwitchWhen]=\"'blue'\">\n                    <span style=\"color: blue\"> Color is Blue </span>\n                </template>\n                <template [ngSwitchWhen]=\"'green'\">\n                    <span style=\"color: green\"> Color is Green </span>\n                </template>\n                <template ngSwitchDefault>\n                    Do not know that color\n                </template>\n            </div>\n        </section>\n        <section class=\"directive\">\n            <h2>Custom Directive: *myUnless</h2>\n            <div>\n                Enter true or false\n                <br/>\n                <input type=\"text\" #condition (keyup)=\"0\"/>\n            </div>\n            <div *myUnless=\"condition.value != 'false'\">\n                Only show if 'false' was entered\n            </div>\n        </section>\n    ",
                        directives: [unless_directive_1.UnlessDirective]
                    }), 
                    __metadata('design:paramtypes', [])
                ], StructeralDirective);
                return StructeralDirective;
            }());
            exports_1("StructeralDirective", StructeralDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cnVjdGVyYWwtZGlyZWN0aXZlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFpRUE7Z0JBQUE7b0JBQ0MsU0FBSSxHQUFHLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDcEMsQ0FBQztnQkFoRUQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixRQUFRLEVBQUUseUJBQXlCO3dCQUNoQyxRQUFRLEVBQUUsbTdEQXlEVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQyxrQ0FBZSxDQUFDO3FCQUNoQyxDQUFDOzt1Q0FBQTtnQkFHRiwwQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQscURBRUMsQ0FBQSIsImZpbGUiOiJzdHJ1Y3RlcmFsLWRpcmVjdGl2ZXMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtVbmxlc3NEaXJlY3RpdmV9IGZyb20gJy4vdW5sZXNzLmRpcmVjdGl2ZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ215LXN0cnVjdGVyYWwtZGlyZWN0aXZlJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIFx0PHNlY3Rpb24gY2xhc3M9XCJkaXJlY3RpdmVcIj5cbiAgICBcdFx0PGgyPipuZ0lmPC9oMj5cbiAgICBcdFx0PGRpdj5cbiAgICAgICAgICAgICAgICBFbnRlciBhIG51bWJlciBoaWdoZXIgdGhhbiAxMFxuICAgIFx0XHRcdDxicj5cbiAgICBcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiAjbnVtYmVyIChrZXl1cCk9XCIwXCI+XG4gICAgXHRcdDwvZGl2PlxuICAgIFx0XHQ8ZGl2ICpuZ0lmPVwibnVtYmVyLnZhbHVlID4gMTBcIj5cbiAgICBcdFx0XHROdW1iZXIgaXMgZ3JlYXRlciB0aGFuIDEwXG4gICAgXHRcdDwvZGl2PlxuICAgIFx0PC9zZWN0aW9uPlxuICAgICAgICA8YnIvPlxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImRpcmVjdGl2ZVwiPlxuICAgICAgICAgICAgPGgyPipuZ0ZvcjwvaDI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpICpuZ0Zvcj1cIiNpdGVtIG9mIGxpc3QsICNpID0gaW5kZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7aXRlbX19e3tpfX1cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJkaXJlY3RpdmVcIj5cbiAgICAgICAgICAgIDxoMj5bbmdTd2l0Y2hdPC9oMj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgRW50ZXIgcmVkLCBibHVlIG9yIGdyZWVuXG4gICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjY29sb3IgKGtleXVwKT1cIjBcIi8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgW25nU3dpdGNoXT1cImNvbG9yLnZhbHVlXCI+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIFtuZ1N3aXRjaFdoZW5dPVwiJ3JlZCdcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJjb2xvcjogcmVkXCI+IENvbG9yIGlzIFJlZCA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgW25nU3dpdGNoV2hlbl09XCInYmx1ZSdcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJjb2xvcjogYmx1ZVwiPiBDb2xvciBpcyBCbHVlIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBbbmdTd2l0Y2hXaGVuXT1cIidncmVlbidcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJjb2xvcjogZ3JlZW5cIj4gQ29sb3IgaXMgR3JlZW4gPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIG5nU3dpdGNoRGVmYXVsdD5cbiAgICAgICAgICAgICAgICAgICAgRG8gbm90IGtub3cgdGhhdCBjb2xvclxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImRpcmVjdGl2ZVwiPlxuICAgICAgICAgICAgPGgyPkN1c3RvbSBEaXJlY3RpdmU6ICpteVVubGVzczwvaDI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIEVudGVyIHRydWUgb3IgZmFsc2VcbiAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNjb25kaXRpb24gKGtleXVwKT1cIjBcIi8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgKm15VW5sZXNzPVwiY29uZGl0aW9uLnZhbHVlICE9ICdmYWxzZSdcIj5cbiAgICAgICAgICAgICAgICBPbmx5IHNob3cgaWYgJ2ZhbHNlJyB3YXMgZW50ZXJlZFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtVbmxlc3NEaXJlY3RpdmVdXG59KVxuZXhwb3J0IGNsYXNzICBTdHJ1Y3RlcmFsRGlyZWN0aXZle1xuXHRsaXN0ID0gWydBcHBsZScsICdvcmFuZ2UnLCAnbWlsayddO1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
