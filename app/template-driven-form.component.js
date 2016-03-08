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
    var TemplateDrivenFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TemplateDrivenFormComponent = (function () {
                function TemplateDrivenFormComponent() {
                }
                TemplateDrivenFormComponent.prototype.onSubmit = function (form) {
                    console.log(form.value);
                };
                TemplateDrivenFormComponent = __decorate([
                    core_1.Component({
                        selector: 'my-template-driven',
                        template: "\n    \t<h2>Sign-Up Form</h2>\n    \t<form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n    \t\t<div>\n    \t\t\t<label for=\"mail\">Mail</label>\n    \t\t\t<input ngControl=\"email\" type=\"text\" id=\"mail\" required>\n    \t\t</div>\n    \t\t<div>\n    \t\t\t<label for=\"password\">Password</label>\n    \t\t\t<input ngControl=\"password\" type=\"text\" id=\"password\" required>\n    \t\t</div>\n    \t\t<div>\n    \t\t\t<label for=\"confirm-password\">Confirm Password</label>\n    \t\t\t<input ngControl=\"confirm-password\" type=\"text\" id=\"confirm-password\" required>\n    \t\t</div>\n    \t\t<button type=\"submit\">Submit</button>\n    \t</form>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], TemplateDrivenFormComponent);
                return TemplateDrivenFormComponent;
            }());
            exports_1("TemplateDrivenFormComponent", TemplateDrivenFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlLWRyaXZlbi1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXVCQTtnQkFBQTtnQkFJQSxDQUFDO2dCQUhBLDhDQUFRLEdBQVIsVUFBUyxJQUFJO29CQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN6QixDQUFDO2dCQXhCRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxvQkFBb0I7d0JBQzlCLFFBQVEsRUFBRSx5cEJBaUJUO3FCQUNKLENBQUM7OytDQUFBO2dCQUtGLGtDQUFDO1lBQUQsQ0FKQSxBQUlDLElBQUE7WUFKRCxxRUFJQyxDQUFBIiwiZmlsZSI6InRlbXBsYXRlLWRyaXZlbi1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS10ZW1wbGF0ZS1kcml2ZW4nLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgXHQ8aDI+U2lnbi1VcCBGb3JtPC9oMj5cbiAgICBcdDxmb3JtIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdChmKVwiICNmPVwibmdGb3JtXCI+XG4gICAgXHRcdDxkaXY+XG4gICAgXHRcdFx0PGxhYmVsIGZvcj1cIm1haWxcIj5NYWlsPC9sYWJlbD5cbiAgICBcdFx0XHQ8aW5wdXQgbmdDb250cm9sPVwiZW1haWxcIiB0eXBlPVwidGV4dFwiIGlkPVwibWFpbFwiIHJlcXVpcmVkPlxuICAgIFx0XHQ8L2Rpdj5cbiAgICBcdFx0PGRpdj5cbiAgICBcdFx0XHQ8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgXHRcdFx0PGlucHV0IG5nQ29udHJvbD1cInBhc3N3b3JkXCIgdHlwZT1cInRleHRcIiBpZD1cInBhc3N3b3JkXCIgcmVxdWlyZWQ+XG4gICAgXHRcdDwvZGl2PlxuICAgIFx0XHQ8ZGl2PlxuICAgIFx0XHRcdDxsYWJlbCBmb3I9XCJjb25maXJtLXBhc3N3b3JkXCI+Q29uZmlybSBQYXNzd29yZDwvbGFiZWw+XG4gICAgXHRcdFx0PGlucHV0IG5nQ29udHJvbD1cImNvbmZpcm0tcGFzc3dvcmRcIiB0eXBlPVwidGV4dFwiIGlkPVwiY29uZmlybS1wYXNzd29yZFwiIHJlcXVpcmVkPlxuICAgIFx0XHQ8L2Rpdj5cbiAgICBcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgXHQ8L2Zvcm0+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyAgVGVtcGxhdGVEcml2ZW5Gb3JtQ29tcG9uZW50e1xuXHRvblN1Ym1pdChmb3JtKXtcblx0XHRjb25zb2xlLmxvZyhmb3JtLnZhbHVlKTtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
