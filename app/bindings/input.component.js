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
    var InputComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            InputComponent = (function () {
                function InputComponent() {
                    this.myself = { name: '', age: '' };
                    this.isFilled = false;
                    this.isValid = false;
                    this.submitted = new core_1.EventEmitter();
                }
                InputComponent.prototype.onKeyup = function () {
                    if (this.myself.name != '' && this.myself.age != '') {
                        this.isFilled = true;
                    }
                    else {
                        this.isFilled = false;
                    }
                    if (this.myself.age != '' && /^\d+$/.test(this.myself.age)) {
                        this.isValid = true;
                    }
                    else {
                        this.isValid = false;
                    }
                };
                InputComponent.prototype.onSubmit = function () {
                    this.submitted.emit(this.myself);
                };
                InputComponent = __decorate([
                    core_1.Component({
                        selector: 'my-input',
                        template: "\n    \t<h1>Your details please</h1>\n    \t<div>\n    \t\t<label for=\"name\">Your name</label>\n    \t\t<input type=\"text\" id=\"name\" [(ngModel)]=\"myself.name\" (keyup)=\"onKeyup()\">\n    \t</div>\n    \t<div>\n    \t\t<label for=\"age\">Your age</label>\n    \t\t<input type=\"text\" id=\"age\" [(ngModel)]=\"myself.age\" (keyup)=\"onKeyup()\">\n    \t</div>\n    \t<br>\n    \t<div>Filled out: {{isFilled ? 'Yes' : 'No'}}</div>\n    \t<div>Valid: {{isValid ? 'Yes' : 'No'}}</div>\n    \t<br>\n    \t<button [disabled]=\"!isValid\" (click)=\"onSubmit()\">Submit</button>\n\n    ",
                        inputs: ['myself'],
                        outputs: ['submitted']
                    }), 
                    __metadata('design:paramtypes', [])
                ], InputComponent);
                return InputComponent;
            }());
            exports_1("InputComponent", InputComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmRpbmdzL2lucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXlCQTtnQkFBQTtvQkFDQyxXQUFNLEdBQUcsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUMsQ0FBQztvQkFDN0IsYUFBUSxHQUFHLEtBQUssQ0FBQztvQkFDakIsWUFBTyxHQUFHLEtBQUssQ0FBQztvQkFFaEIsY0FBUyxHQUFHLElBQUksbUJBQVksRUFBK0IsQ0FBQztnQkFtQjdELENBQUM7Z0JBakJBLGdDQUFPLEdBQVA7b0JBQ0MsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFBLENBQUM7d0JBQ3BELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO29CQUN0QixDQUFDO29CQUFBLElBQUksQ0FBQyxDQUFDO3dCQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO29CQUN2QixDQUFDO29CQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLEVBQUUsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFDO3dCQUMzRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztvQkFDckIsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDUCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztvQkFDdEIsQ0FBQztnQkFDRixDQUFDO2dCQUVELGlDQUFRLEdBQVI7b0JBQ0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNsQyxDQUFDO2dCQTdDRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxVQUFVO3dCQUNwQixRQUFRLEVBQUUsNGtCQWdCVDt3QkFDRCxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUM7d0JBQ2xCLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQztxQkFDekIsQ0FBQzs7a0NBQUE7Z0JBeUJGLHFCQUFDO1lBQUQsQ0F4QkEsQUF3QkMsSUFBQTtZQXhCRCwyQ0F3QkMsQ0FBQSIsImZpbGUiOiJiaW5kaW5ncy9pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWlucHV0JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIFx0PGgxPllvdXIgZGV0YWlscyBwbGVhc2U8L2gxPlxuICAgIFx0PGRpdj5cbiAgICBcdFx0PGxhYmVsIGZvcj1cIm5hbWVcIj5Zb3VyIG5hbWU8L2xhYmVsPlxuICAgIFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiBbKG5nTW9kZWwpXT1cIm15c2VsZi5uYW1lXCIgKGtleXVwKT1cIm9uS2V5dXAoKVwiPlxuICAgIFx0PC9kaXY+XG4gICAgXHQ8ZGl2PlxuICAgIFx0XHQ8bGFiZWwgZm9yPVwiYWdlXCI+WW91ciBhZ2U8L2xhYmVsPlxuICAgIFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImFnZVwiIFsobmdNb2RlbCldPVwibXlzZWxmLmFnZVwiIChrZXl1cCk9XCJvbktleXVwKClcIj5cbiAgICBcdDwvZGl2PlxuICAgIFx0PGJyPlxuICAgIFx0PGRpdj5GaWxsZWQgb3V0OiB7e2lzRmlsbGVkID8gJ1llcycgOiAnTm8nfX08L2Rpdj5cbiAgICBcdDxkaXY+VmFsaWQ6IHt7aXNWYWxpZCA/ICdZZXMnIDogJ05vJ319PC9kaXY+XG4gICAgXHQ8YnI+XG4gICAgXHQ8YnV0dG9uIFtkaXNhYmxlZF09XCIhaXNWYWxpZFwiIChjbGljayk9XCJvblN1Ym1pdCgpXCI+U3VibWl0PC9idXR0b24+XG5cbiAgICBgLFxuICAgIGlucHV0czogWydteXNlbGYnXSxcbiAgICBvdXRwdXRzOiBbJ3N1Ym1pdHRlZCddXG59KVxuZXhwb3J0IGNsYXNzIElucHV0Q29tcG9uZW50IHtcblx0bXlzZWxmID0ge25hbWU6ICcnLCBhZ2U6ICcnfTtcblx0aXNGaWxsZWQgPSBmYWxzZTtcblx0aXNWYWxpZCA9IGZhbHNlO1xuXG5cdHN1Ym1pdHRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8e25hbWU6IHN0cmluZywgYWdlOiBzdHJpbmd9PigpO1xuXG5cdG9uS2V5dXAoKSB7XG5cdFx0aWYgKHRoaXMubXlzZWxmLm5hbWUgIT0gJycgJiYgdGhpcy5teXNlbGYuYWdlICE9ICcnKXtcblx0XHRcdHRoaXMuaXNGaWxsZWQgPSB0cnVlO1xuXHRcdH1lbHNlIHtcblx0XHRcdHRoaXMuaXNGaWxsZWQgPSBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5teXNlbGYuYWdlICE9ICcnICYmIC9eXFxkKyQvLnRlc3QodGhpcy5teXNlbGYuYWdlKSl7XG5cdFx0XHR0aGlzLmlzVmFsaWQgPSB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmlzVmFsaWQgPSBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHRvblN1Ym1pdCgpIHtcblx0XHR0aGlzLnN1Ym1pdHRlZC5lbWl0KHRoaXMubXlzZWxmKTtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
