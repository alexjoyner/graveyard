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
    var StructeralDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            StructeralDirective = (function () {
                function StructeralDirective() {
                    this.list = ['Apple', 'orange', 'milk'];
                }
                StructeralDirective = __decorate([
                    core_1.Component({
                        selector: 'my-structeral-directive',
                        template: "\n    \t<section class=\"directive\">\n    \t\t<h2>*ngIf</h2>\n    \t\t<div>\n                Enter a number higher than 10\n    \t\t\t<br>\n    \t\t\t<input type=\"text\" #number (keyup)=\"0\">\n    \t\t</div>\n    \t\t<div *ngIf=\"number.value > 10\">\n    \t\t\tNumber is greater than 10\n    \t\t</div>\n    \t</section>\n        <br/>\n        <section class=\"directive\">\n            <h2>*ngFor</h2>\n            <div>\n                <ul>\n                    <li *ngFor=\"#item of list, #i = index\">\n                        {{item}}{{i}}\n                    </li>\n                </ul>\n            </div>\n        </section>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], StructeralDirective);
                return StructeralDirective;
            }());
            exports_1("StructeralDirective", StructeralDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cnVjdGVyYWwtZGlyZWN0aXZlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE2QkE7Z0JBQUE7b0JBQ0MsU0FBSSxHQUFHLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDcEMsQ0FBQztnQkE3QkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixRQUFRLEVBQUUseUJBQXlCO3dCQUNoQyxRQUFRLEVBQUUsd29CQXVCVDtxQkFDSixDQUFDOzt1Q0FBQTtnQkFHRiwwQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQscURBRUMsQ0FBQSIsImZpbGUiOiJzdHJ1Y3RlcmFsLWRpcmVjdGl2ZXMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdteS1zdHJ1Y3RlcmFsLWRpcmVjdGl2ZScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICBcdDxzZWN0aW9uIGNsYXNzPVwiZGlyZWN0aXZlXCI+XG4gICAgXHRcdDxoMj4qbmdJZjwvaDI+XG4gICAgXHRcdDxkaXY+XG4gICAgICAgICAgICAgICAgRW50ZXIgYSBudW1iZXIgaGlnaGVyIHRoYW4gMTBcbiAgICBcdFx0XHQ8YnI+XG4gICAgXHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgI251bWJlciAoa2V5dXApPVwiMFwiPlxuICAgIFx0XHQ8L2Rpdj5cbiAgICBcdFx0PGRpdiAqbmdJZj1cIm51bWJlci52YWx1ZSA+IDEwXCI+XG4gICAgXHRcdFx0TnVtYmVyIGlzIGdyZWF0ZXIgdGhhbiAxMFxuICAgIFx0XHQ8L2Rpdj5cbiAgICBcdDwvc2VjdGlvbj5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJkaXJlY3RpdmVcIj5cbiAgICAgICAgICAgIDxoMj4qbmdGb3I8L2gyPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaSAqbmdGb3I9XCIjaXRlbSBvZiBsaXN0LCAjaSA9IGluZGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7e2l0ZW19fXt7aX19XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyAgU3RydWN0ZXJhbERpcmVjdGl2ZXtcblx0bGlzdCA9IFsnQXBwbGUnLCAnb3JhbmdlJywgJ21pbGsnXTtcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
