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
                    this.user = { mail: '', password: '' };
                }
                TemplateDrivenFormComponent.prototype.onSubmit = function (form) {
                    this.user.mail = form.value['email'];
                    this.user.password = form.controls['password'].value;
                };
                TemplateDrivenFormComponent = __decorate([
                    core_1.Component({
                        selector: 'my-template-driven',
                        template: "\n    \t<h2>Sign-Up Form</h2>\n    \t<form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n    \t\t<div>\n    \t\t\t<label for=\"mail\">Mail</label>\n    \t\t\t<input ngControl=\"email\" type=\"text\" id=\"mail\" required #email=\"ngForm\">\n    \t\t\t<span class=\"validation-error\" *ngIf=\"!email.valid\">Not Valid</span>\n    \t\t</div>\n    \t\t<div>\n    \t\t\t<label for=\"password\">Password</label>\n    \t\t\t<input ngControl=\"password\" type=\"text\" id=\"password\" required #password=\"ngForm\">\n    \t\t\t<span class=\"validation-error\" *ngIf=\"!password.valid\">Not Valid</span>\n    \t\t</div>\n    \t\t<div>\n    \t\t\t<label for=\"confirm-password\">Confirm Password</label>\n    \t\t\t<input ngControl=\"confirm-password\" type=\"text\" id=\"confirm-password\" required #passwordConfirm=\"ngForm\">\n    \t\t\t<span class=\"validation-error\" *ngIf=\"!passwordConfirm.valid\">Not Valid</span>\n    \t\t</div>\n    \t\t<button type=\"submit\" [disabled]=\"!f.valid || password.value !== passwordConfirm.value\">Submit</button>\n    \t</form>\n    \t<h2>You Submitted</h2>\n    \t<div>Mail: {{user.mail}}</div>\n    \t<div>Password: {{user.password}}</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], TemplateDrivenFormComponent);
                return TemplateDrivenFormComponent;
            }());
            exports_1("TemplateDrivenFormComponent", TemplateDrivenFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlLWRyaXZlbi1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQTZCQTtnQkFBQTtvQkFDQyxTQUFJLEdBQUcsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUMsQ0FBQztnQkFLakMsQ0FBQztnQkFKQSw4Q0FBUSxHQUFSLFVBQVMsSUFBSTtvQkFDWixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDdEQsQ0FBQztnQkFoQ0Y7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsb0JBQW9CO3dCQUM5QixRQUFRLEVBQUUsMnBDQXVCVDtxQkFDSixDQUFDOzsrQ0FBQTtnQkFPRixrQ0FBQztZQUFELENBTkEsQUFNQyxJQUFBO1lBTkQscUVBTUMsQ0FBQSIsImZpbGUiOiJ0ZW1wbGF0ZS1kcml2ZW4tZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktdGVtcGxhdGUtZHJpdmVuJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIFx0PGgyPlNpZ24tVXAgRm9ybTwvaDI+XG4gICAgXHQ8Zm9ybSAobmdTdWJtaXQpPVwib25TdWJtaXQoZilcIiAjZj1cIm5nRm9ybVwiPlxuICAgIFx0XHQ8ZGl2PlxuICAgIFx0XHRcdDxsYWJlbCBmb3I9XCJtYWlsXCI+TWFpbDwvbGFiZWw+XG4gICAgXHRcdFx0PGlucHV0IG5nQ29udHJvbD1cImVtYWlsXCIgdHlwZT1cInRleHRcIiBpZD1cIm1haWxcIiByZXF1aXJlZCAjZW1haWw9XCJuZ0Zvcm1cIj5cbiAgICBcdFx0XHQ8c3BhbiBjbGFzcz1cInZhbGlkYXRpb24tZXJyb3JcIiAqbmdJZj1cIiFlbWFpbC52YWxpZFwiPk5vdCBWYWxpZDwvc3Bhbj5cbiAgICBcdFx0PC9kaXY+XG4gICAgXHRcdDxkaXY+XG4gICAgXHRcdFx0PGxhYmVsIGZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgIFx0XHRcdDxpbnB1dCBuZ0NvbnRyb2w9XCJwYXNzd29yZFwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJwYXNzd29yZFwiIHJlcXVpcmVkICNwYXNzd29yZD1cIm5nRm9ybVwiPlxuICAgIFx0XHRcdDxzcGFuIGNsYXNzPVwidmFsaWRhdGlvbi1lcnJvclwiICpuZ0lmPVwiIXBhc3N3b3JkLnZhbGlkXCI+Tm90IFZhbGlkPC9zcGFuPlxuICAgIFx0XHQ8L2Rpdj5cbiAgICBcdFx0PGRpdj5cbiAgICBcdFx0XHQ8bGFiZWwgZm9yPVwiY29uZmlybS1wYXNzd29yZFwiPkNvbmZpcm0gUGFzc3dvcmQ8L2xhYmVsPlxuICAgIFx0XHRcdDxpbnB1dCBuZ0NvbnRyb2w9XCJjb25maXJtLXBhc3N3b3JkXCIgdHlwZT1cInRleHRcIiBpZD1cImNvbmZpcm0tcGFzc3dvcmRcIiByZXF1aXJlZCAjcGFzc3dvcmRDb25maXJtPVwibmdGb3JtXCI+XG4gICAgXHRcdFx0PHNwYW4gY2xhc3M9XCJ2YWxpZGF0aW9uLWVycm9yXCIgKm5nSWY9XCIhcGFzc3dvcmRDb25maXJtLnZhbGlkXCI+Tm90IFZhbGlkPC9zcGFuPlxuICAgIFx0XHQ8L2Rpdj5cbiAgICBcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgW2Rpc2FibGVkXT1cIiFmLnZhbGlkIHx8IHBhc3N3b3JkLnZhbHVlICE9PSBwYXNzd29yZENvbmZpcm0udmFsdWVcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICBcdDwvZm9ybT5cbiAgICBcdDxoMj5Zb3UgU3VibWl0dGVkPC9oMj5cbiAgICBcdDxkaXY+TWFpbDoge3t1c2VyLm1haWx9fTwvZGl2PlxuICAgIFx0PGRpdj5QYXNzd29yZDoge3t1c2VyLnBhc3N3b3JkfX08L2Rpdj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzICBUZW1wbGF0ZURyaXZlbkZvcm1Db21wb25lbnR7XG5cdHVzZXIgPSB7bWFpbDogJycsIHBhc3N3b3JkOiAnJ307XG5cdG9uU3VibWl0KGZvcm0pe1xuXHRcdHRoaXMudXNlci5tYWlsID0gZm9ybS52YWx1ZVsnZW1haWwnXTtcblx0XHR0aGlzLnVzZXIucGFzc3dvcmQgPSBmb3JtLmNvbnRyb2xzWydwYXNzd29yZCddLnZhbHVlO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
