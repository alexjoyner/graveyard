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
                        template: "\n    \t<section class=\"directive\">\n    \t\t<h2>*ngIf</h2>\n    \t\t<div>\n                Enter a number higher than 10\n    \t\t\t<br>\n    \t\t\t<input type=\"text\" #number (keyup)=\"0\">\n    \t\t</div>\n    \t\t<div *ngIf=\"number.value > 10\">\n    \t\t\tNumber is greater than 10\n    \t\t</div>\n    \t</section>\n        <br/>\n        <section class=\"directive\">\n            <h2>*ngFor</h2>\n            <div>\n                <ul>\n                    <li *ngFor=\"#item of list, #i = index\">\n                        {{item}}{{i}}\n                    </li>\n                </ul>\n            </div>\n        </section>\n        <br/>\n        <section class=\"directive\">\n            <h2>[ngSwitch]</h2>\n            <div>\n                Enter red, blue or green\n                <br/>\n                <input type=\"text\" #color (keyup)=\"0\"/>\n            </div>\n            <div [ngSwitch]=\"color.value\">\n                <template [ngSwitchWhen]=\"'red'\">\n                    <span style=\"color: red\"> Color is Red </span>\n                </template>\n                <template [ngSwitchWhen]=\"'blue'\">\n                    <span style=\"color: blue\"> Color is Blue </span>\n                </template>\n                <template [ngSwitchWhen]=\"'green'\">\n                    <span style=\"color: green\"> Color is Green </span>\n                </template>\n                <template ngSwitchDefault>\n                    Do not know that color\n                </template>\n            </div>\n        </section>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], StructeralDirective);
                return StructeralDirective;
            }());
            exports_1("StructeralDirective", StructeralDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cnVjdGVyYWwtZGlyZWN0aXZlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvREE7Z0JBQUE7b0JBQ0MsU0FBSSxHQUFHLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDcEMsQ0FBQztnQkFwREQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixRQUFRLEVBQUUseUJBQXlCO3dCQUNoQyxRQUFRLEVBQUUsZ2lEQThDVDtxQkFDSixDQUFDOzt1Q0FBQTtnQkFHRiwwQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQscURBRUMsQ0FBQSIsImZpbGUiOiJzdHJ1Y3RlcmFsLWRpcmVjdGl2ZXMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdteS1zdHJ1Y3RlcmFsLWRpcmVjdGl2ZScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICBcdDxzZWN0aW9uIGNsYXNzPVwiZGlyZWN0aXZlXCI+XG4gICAgXHRcdDxoMj4qbmdJZjwvaDI+XG4gICAgXHRcdDxkaXY+XG4gICAgICAgICAgICAgICAgRW50ZXIgYSBudW1iZXIgaGlnaGVyIHRoYW4gMTBcbiAgICBcdFx0XHQ8YnI+XG4gICAgXHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgI251bWJlciAoa2V5dXApPVwiMFwiPlxuICAgIFx0XHQ8L2Rpdj5cbiAgICBcdFx0PGRpdiAqbmdJZj1cIm51bWJlci52YWx1ZSA+IDEwXCI+XG4gICAgXHRcdFx0TnVtYmVyIGlzIGdyZWF0ZXIgdGhhbiAxMFxuICAgIFx0XHQ8L2Rpdj5cbiAgICBcdDwvc2VjdGlvbj5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJkaXJlY3RpdmVcIj5cbiAgICAgICAgICAgIDxoMj4qbmdGb3I8L2gyPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaSAqbmdGb3I9XCIjaXRlbSBvZiBsaXN0LCAjaSA9IGluZGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7e2l0ZW19fXt7aX19XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxici8+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiZGlyZWN0aXZlXCI+XG4gICAgICAgICAgICA8aDI+W25nU3dpdGNoXTwvaDI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIEVudGVyIHJlZCwgYmx1ZSBvciBncmVlblxuICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI2NvbG9yIChrZXl1cCk9XCIwXCIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IFtuZ1N3aXRjaF09XCJjb2xvci52YWx1ZVwiPlxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBbbmdTd2l0Y2hXaGVuXT1cIidyZWQnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiY29sb3I6IHJlZFwiPiBDb2xvciBpcyBSZWQgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIFtuZ1N3aXRjaFdoZW5dPVwiJ2JsdWUnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiY29sb3I6IGJsdWVcIj4gQ29sb3IgaXMgQmx1ZSA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgW25nU3dpdGNoV2hlbl09XCInZ3JlZW4nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiY29sb3I6IGdyZWVuXCI+IENvbG9yIGlzIEdyZWVuIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBuZ1N3aXRjaERlZmF1bHQ+XG4gICAgICAgICAgICAgICAgICAgIERvIG5vdCBrbm93IHRoYXQgY29sb3JcbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzICBTdHJ1Y3RlcmFsRGlyZWN0aXZle1xuXHRsaXN0ID0gWydBcHBsZScsICdvcmFuZ2UnLCAnbWlsayddO1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
