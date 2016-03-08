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
    function hasNumbers(control) {
        if (!control.value.match('\\d+')) {
            return { noNumbers: true };
        }
    }
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
                    this.user = this.myForm.value;
                };
                DataDrivenFormComponent.prototype.ngOnInit = function () {
                    this.myForm = this._formBuilder.group({
                        'mail': ['', common_2.Validators.required],
                        'password': ['', common_2.Validators.compose([
                                common_2.Validators.required,
                                hasNumbers
                            ])],
                        'confirmPassword': ['', common_2.Validators.required]
                    });
                };
                DataDrivenFormComponent = __decorate([
                    core_1.Component({
                        selector: 'my-data-driven',
                        template: "\n    \t<h2>Sign-Up Form</h2>\n    \t<form [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n    \t\t<div>\n    \t\t\t<label for=\"mail\">Mail</label>\n    \t\t\t<input [ngFormControl]=\"myForm.controls['mail']\" type=\"text\" id=\"mail\" #mail=\"ngForm\">\n    \t\t\t<span class=\"validation-error\" *ngIf=\"!mail.valid\">Not Valid</span>\n    \t\t</div>\n    \t\t<div>\n    \t\t\t<label for=\"password\">Password</label>\n    \t\t\t<input [ngFormControl]=\"myForm.controls['password']\" type=\"text\" id=\"password\"#password=\"ngForm\">\n    \t\t\t<span class=\"validation-error\" *ngIf=\"!password.valid\">Not Valid</span>\n    \t\t</div>\n    \t\t<div>\n    \t\t\t<label for=\"confirm-password\">Confirm Password</label>\n    \t\t\t<input [ngFormControl]=\"myForm.controls['confirmPassword']\" type=\"text\" id=\"confirm-password\" #confirmPassword=\"ngForm\">\n    \t\t\t<span class=\"validation-error\" *ngIf=\"!confirmPassword.valid\">Not Valid</span>\n    \t\t</div>\n    \t\t<button type=\"submit\">Submit</button>\n    \t</form>\n    \t<h2>You Submitted</h2>\n    \t<div>Mail: {{user.mail}}</div>\n    \t<div>Password: {{user.password}}</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], DataDrivenFormComponent);
                return DataDrivenFormComponent;
            }());
            exports_1("DataDrivenFormComponent", DataDrivenFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEtZHJpdmVuLWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0lBcURBLG9CQUFvQixPQUFnQjtRQUNuQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQyxNQUFNLENBQUMsRUFBQyxTQUFTLEVBQUUsSUFBSSxFQUFDLENBQUM7UUFDMUIsQ0FBQztJQUNGLENBQUM7Ozs7Ozs7Ozs7O1lBeEJEO2dCQUdDLGlDQUFvQixZQUF5QjtvQkFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBRDdDLFNBQUksR0FBRyxFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBQyxDQUFDO2dCQUNlLENBQUM7O2dCQUNoRCwwQ0FBUSxHQUFSLFVBQVMsSUFBSTtvQkFDWixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO2dCQUMvQixDQUFDO2dCQUNELDBDQUFRLEdBQVI7b0JBQ0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQzt3QkFDckMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO3dCQUNqQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxPQUFPLENBQUM7Z0NBQ25DLG1CQUFVLENBQUMsUUFBUTtnQ0FDbkIsVUFBVTs2QkFDVixDQUFDLENBQUM7d0JBQ0gsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7cUJBQzVDLENBQUMsQ0FBQztnQkFDSixDQUFDO2dCQTNDRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxnQkFBZ0I7d0JBQzFCLFFBQVEsRUFBRSw0b0NBdUJUO3FCQUNKLENBQUM7OzJDQUFBO2dCQWtCRiw4QkFBQztZQUFELENBakJBLEFBaUJDLElBQUE7WUFqQkQsNkRBaUJDLENBQUEiLCJmaWxlIjoiZGF0YS1kcml2ZW4tZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Rm9ybUJ1aWxkZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5pbXBvcnQge1ZhbGlkYXRvcnN9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5pbXBvcnQge0NvbnRyb2xHcm91cH0gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcbmltcG9ydCB7Q29udHJvbH0gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1kYXRhLWRyaXZlbicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICBcdDxoMj5TaWduLVVwIEZvcm08L2gyPlxuICAgIFx0PGZvcm0gW25nRm9ybU1vZGVsXT1cIm15Rm9ybVwiIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdCgpXCI+XG4gICAgXHRcdDxkaXY+XG4gICAgXHRcdFx0PGxhYmVsIGZvcj1cIm1haWxcIj5NYWlsPC9sYWJlbD5cbiAgICBcdFx0XHQ8aW5wdXQgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmNvbnRyb2xzWydtYWlsJ11cIiB0eXBlPVwidGV4dFwiIGlkPVwibWFpbFwiICNtYWlsPVwibmdGb3JtXCI+XG4gICAgXHRcdFx0PHNwYW4gY2xhc3M9XCJ2YWxpZGF0aW9uLWVycm9yXCIgKm5nSWY9XCIhbWFpbC52YWxpZFwiPk5vdCBWYWxpZDwvc3Bhbj5cbiAgICBcdFx0PC9kaXY+XG4gICAgXHRcdDxkaXY+XG4gICAgXHRcdFx0PGxhYmVsIGZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgIFx0XHRcdDxpbnB1dCBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uY29udHJvbHNbJ3Bhc3N3b3JkJ11cIiB0eXBlPVwidGV4dFwiIGlkPVwicGFzc3dvcmRcIiNwYXNzd29yZD1cIm5nRm9ybVwiPlxuICAgIFx0XHRcdDxzcGFuIGNsYXNzPVwidmFsaWRhdGlvbi1lcnJvclwiICpuZ0lmPVwiIXBhc3N3b3JkLnZhbGlkXCI+Tm90IFZhbGlkPC9zcGFuPlxuICAgIFx0XHQ8L2Rpdj5cbiAgICBcdFx0PGRpdj5cbiAgICBcdFx0XHQ8bGFiZWwgZm9yPVwiY29uZmlybS1wYXNzd29yZFwiPkNvbmZpcm0gUGFzc3dvcmQ8L2xhYmVsPlxuICAgIFx0XHRcdDxpbnB1dCBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uY29udHJvbHNbJ2NvbmZpcm1QYXNzd29yZCddXCIgdHlwZT1cInRleHRcIiBpZD1cImNvbmZpcm0tcGFzc3dvcmRcIiAjY29uZmlybVBhc3N3b3JkPVwibmdGb3JtXCI+XG4gICAgXHRcdFx0PHNwYW4gY2xhc3M9XCJ2YWxpZGF0aW9uLWVycm9yXCIgKm5nSWY9XCIhY29uZmlybVBhc3N3b3JkLnZhbGlkXCI+Tm90IFZhbGlkPC9zcGFuPlxuICAgIFx0XHQ8L2Rpdj5cbiAgICBcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgXHQ8L2Zvcm0+XG4gICAgXHQ8aDI+WW91IFN1Ym1pdHRlZDwvaDI+XG4gICAgXHQ8ZGl2Pk1haWw6IHt7dXNlci5tYWlsfX08L2Rpdj5cbiAgICBcdDxkaXY+UGFzc3dvcmQ6IHt7dXNlci5wYXNzd29yZH19PC9kaXY+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyAgRGF0YURyaXZlbkZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cdG15Rm9ybTogQ29udHJvbEdyb3VwO1xuXHR1c2VyID0ge21haWw6ICcnLCBwYXNzd29yZDogJyd9O1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9mb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpe307XG5cdG9uU3VibWl0KGZvcm0pe1xuXHRcdHRoaXMudXNlciA9IHRoaXMubXlGb3JtLnZhbHVlO1xuXHR9XG5cdG5nT25Jbml0KCk6YW55IHtcblx0XHR0aGlzLm15Rm9ybSA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcblx0XHRcdCdtYWlsJzogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcblx0XHRcdCdwYXNzd29yZCc6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtcblx0XHRcdFx0VmFsaWRhdG9ycy5yZXF1aXJlZCxcblx0XHRcdFx0aGFzTnVtYmVyc1xuXHRcdFx0XSldLFxuXHRcdFx0J2NvbmZpcm1QYXNzd29yZCc6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cblx0XHR9KTtcblx0fVxufVxuXG5cbmZ1bmN0aW9uIGhhc051bWJlcnMoY29udHJvbDogQ29udHJvbCk6IHtbczogc3RyaW5nXTogYm9vbGVhbn0ge1xuXHRpZiAoIWNvbnRyb2wudmFsdWUubWF0Y2goJ1xcXFxkKycpKSB7XG5cdFx0cmV0dXJuIHtub051bWJlcnM6IHRydWV9O1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
