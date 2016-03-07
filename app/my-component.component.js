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
    var MyComponentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MyComponentComponent = (function () {
                function MyComponentComponent() {
                    this.name = 'Alex';
                }
                MyComponentComponent = __decorate([
                    core_1.Component({
                        selector: 'my-component',
                        template: "\n\t\tHi, Im <span [style.color]=\"inputElement.value === 'yes' ? 'red' : ''\">{{name}}</span> and this is not my first component. But <span [class.is-awesome]=\"inputElement.value === 'yes'\">this is awesome</span>!\n\t\t<br>\n\t\t<br>\n\t\t<br>\n\t\tIs it awesome?\n\t\t<input type=\"text\" #inputElement (keyup)=\"0\">\n\t\t<button [disabled]=\"inputElement.value !== 'yes'\">Only enable if yes was entered</button>\n\t",
                        styleUrls: ['src/css/mycomponent.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyComponentComponent);
                return MyComponentComponent;
            }());
            exports_1("MyComponentComponent", MyComponentComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWNvbXBvbmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFnQkE7Z0JBQUE7b0JBQ0MsU0FBSSxHQUFHLE1BQU0sQ0FBQztnQkFDZixDQUFDO2dCQWhCRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNWLFFBQVEsRUFBRSxjQUFjO3dCQUN4QixRQUFRLEVBQUUsd2FBUVQ7d0JBQ0QsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7cUJBQ3RDLENBQUM7O3dDQUFBO2dCQUlGLDJCQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx1REFFQyxDQUFBIiwiZmlsZSI6Im15LWNvbXBvbmVudC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ215LWNvbXBvbmVudCcsXG5cdHRlbXBsYXRlOiBgXG5cdFx0SGksIEltIDxzcGFuIFtzdHlsZS5jb2xvcl09XCJpbnB1dEVsZW1lbnQudmFsdWUgPT09ICd5ZXMnID8gJ3JlZCcgOiAnJ1wiPnt7bmFtZX19PC9zcGFuPiBhbmQgdGhpcyBpcyBub3QgbXkgZmlyc3QgY29tcG9uZW50LiBCdXQgPHNwYW4gW2NsYXNzLmlzLWF3ZXNvbWVdPVwiaW5wdXRFbGVtZW50LnZhbHVlID09PSAneWVzJ1wiPnRoaXMgaXMgYXdlc29tZTwvc3Bhbj4hXG5cdFx0PGJyPlxuXHRcdDxicj5cblx0XHQ8YnI+XG5cdFx0SXMgaXQgYXdlc29tZT9cblx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiAjaW5wdXRFbGVtZW50IChrZXl1cCk9XCIwXCI+XG5cdFx0PGJ1dHRvbiBbZGlzYWJsZWRdPVwiaW5wdXRFbGVtZW50LnZhbHVlICE9PSAneWVzJ1wiPk9ubHkgZW5hYmxlIGlmIHllcyB3YXMgZW50ZXJlZDwvYnV0dG9uPlxuXHRgLFxuXHRzdHlsZVVybHM6IFsnc3JjL2Nzcy9teWNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIE15Q29tcG9uZW50Q29tcG9uZW50IHtcblx0bmFtZSA9ICdBbGV4Jztcbn0gIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
