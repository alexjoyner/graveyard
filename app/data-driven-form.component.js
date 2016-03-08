System.register(['angular2/core', 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, common_1, common_2;
    var DataDrivenFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
                common_2 = common_1_1;
            }],
        execute: function() {
            DataDrivenFormComponent = (function () {
                function DataDrivenFormComponent(_formBuilder) {
                    this._formBuilder = _formBuilder;
                    this.user = { mail: '', password: '' };
                }
                ;
                DataDrivenFormComponent.prototype.onSubmit = function (form) {
                    console.log(this.myForm);
                };
                DataDrivenFormComponent.prototype.ngOnInit = function () {
                    this.myForm = this._formBuilder.group({
                        'email': ['', common_2.Validators.required],
                        'password': ['', common_2.Validators.required],
                        'confirmPassword': ['', common_2.Validators.required]
                    });
                };
                DataDrivenFormComponent = __decorate([
                    core_1.Component({
                        selector: 'my-data-driven',
                        template: "\n    \t<h2>Sign-Up Form</h2>\n    \t<form [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n    \t\t<div>\n    \t\t\t<label for=\"mail\">Mail</label>\n    \t\t\t<input [ngFormControl]=\"myForm.controls['email']\" type=\"text\" id=\"mail\">\n    \t\t\t<span class=\"validation-error\">Not Valid</span>\n    \t\t</div>\n    \t\t<div>\n    \t\t\t<label for=\"password\">Password</label>\n    \t\t\t<input [ngFormControl]=\"myForm.controls['password']\" type=\"text\" id=\"password\">\n    \t\t\t<span class=\"validation-error\">Not Valid</span>\n    \t\t</div>\n    \t\t<div>\n    \t\t\t<label for=\"confirm-password\">Confirm Password</label>\n    \t\t\t<input [ngFormControl]=\"myForm.controls['confirmPassword']\" type=\"text\" id=\"confirm-password\">\n    \t\t\t<span class=\"validation-error\">Not Valid</span>\n    \t\t</div>\n    \t\t<button type=\"submit\">Submit</button>\n    \t</form>\n    \t<h2>You Submitted</h2>\n    \t<div>Mail: {{user.mail}}</div>\n    \t<div>Password: {{user.password}}</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], DataDrivenFormComponent);
                return DataDrivenFormComponent;
            }());
            exports_1("DataDrivenFormComponent", DataDrivenFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEtZHJpdmVuLWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWdDQTtnQkFHQyxpQ0FBb0IsWUFBeUI7b0JBQXpCLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUQ3QyxTQUFJLEdBQUcsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUMsQ0FBQztnQkFDZSxDQUFDOztnQkFDaEQsMENBQVEsR0FBUixVQUFTLElBQUk7b0JBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzFCLENBQUM7Z0JBQ0QsMENBQVEsR0FBUjtvQkFDQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO3dCQUNyQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7d0JBQ2xDLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQzt3QkFDckMsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7cUJBQzVDLENBQUMsQ0FBQztnQkFDSixDQUFDO2dCQXhDRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxnQkFBZ0I7d0JBQzFCLFFBQVEsRUFBRSwyL0JBdUJUO3FCQUNKLENBQUM7OzJDQUFBO2dCQWVGLDhCQUFDO1lBQUQsQ0FkQSxBQWNDLElBQUE7WUFkRCw2REFjQyxDQUFBIiwiZmlsZSI6ImRhdGEtZHJpdmVuLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0Zvcm1CdWlsZGVyfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuaW1wb3J0IHtWYWxpZGF0b3JzfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuaW1wb3J0IHtDb250cm9sR3JvdXB9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktZGF0YS1kcml2ZW4nLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgXHQ8aDI+U2lnbi1VcCBGb3JtPC9oMj5cbiAgICBcdDxmb3JtIFtuZ0Zvcm1Nb2RlbF09XCJteUZvcm1cIiAobmdTdWJtaXQpPVwib25TdWJtaXQoKVwiPlxuICAgIFx0XHQ8ZGl2PlxuICAgIFx0XHRcdDxsYWJlbCBmb3I9XCJtYWlsXCI+TWFpbDwvbGFiZWw+XG4gICAgXHRcdFx0PGlucHV0IFtuZ0Zvcm1Db250cm9sXT1cIm15Rm9ybS5jb250cm9sc1snZW1haWwnXVwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJtYWlsXCI+XG4gICAgXHRcdFx0PHNwYW4gY2xhc3M9XCJ2YWxpZGF0aW9uLWVycm9yXCI+Tm90IFZhbGlkPC9zcGFuPlxuICAgIFx0XHQ8L2Rpdj5cbiAgICBcdFx0PGRpdj5cbiAgICBcdFx0XHQ8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgXHRcdFx0PGlucHV0IFtuZ0Zvcm1Db250cm9sXT1cIm15Rm9ybS5jb250cm9sc1sncGFzc3dvcmQnXVwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJwYXNzd29yZFwiPlxuICAgIFx0XHRcdDxzcGFuIGNsYXNzPVwidmFsaWRhdGlvbi1lcnJvclwiPk5vdCBWYWxpZDwvc3Bhbj5cbiAgICBcdFx0PC9kaXY+XG4gICAgXHRcdDxkaXY+XG4gICAgXHRcdFx0PGxhYmVsIGZvcj1cImNvbmZpcm0tcGFzc3dvcmRcIj5Db25maXJtIFBhc3N3b3JkPC9sYWJlbD5cbiAgICBcdFx0XHQ8aW5wdXQgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmNvbnRyb2xzWydjb25maXJtUGFzc3dvcmQnXVwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJjb25maXJtLXBhc3N3b3JkXCI+XG4gICAgXHRcdFx0PHNwYW4gY2xhc3M9XCJ2YWxpZGF0aW9uLWVycm9yXCI+Tm90IFZhbGlkPC9zcGFuPlxuICAgIFx0XHQ8L2Rpdj5cbiAgICBcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgXHQ8L2Zvcm0+XG4gICAgXHQ8aDI+WW91IFN1Ym1pdHRlZDwvaDI+XG4gICAgXHQ8ZGl2Pk1haWw6IHt7dXNlci5tYWlsfX08L2Rpdj5cbiAgICBcdDxkaXY+UGFzc3dvcmQ6IHt7dXNlci5wYXNzd29yZH19PC9kaXY+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyAgRGF0YURyaXZlbkZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cdG15Rm9ybTogQ29udHJvbEdyb3VwO1xuXHR1c2VyID0ge21haWw6ICcnLCBwYXNzd29yZDogJyd9O1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9mb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpe307XG5cdG9uU3VibWl0KGZvcm0pe1xuXHRcdGNvbnNvbGUubG9nKHRoaXMubXlGb3JtKTtcblx0fVxuXHRuZ09uSW5pdCgpOmFueSB7XG5cdFx0dGhpcy5teUZvcm0gPSB0aGlzLl9mb3JtQnVpbGRlci5ncm91cCh7XG5cdFx0XHQnZW1haWwnOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuXHRcdFx0J3Bhc3N3b3JkJzogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcblx0XHRcdCdjb25maXJtUGFzc3dvcmQnOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG5cdFx0fSk7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
