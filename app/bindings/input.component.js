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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmRpbmdzL2lucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXdCQTtnQkFBQTtvQkFDQyxXQUFNLEdBQUcsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUMsQ0FBQztvQkFDN0IsYUFBUSxHQUFHLEtBQUssQ0FBQztvQkFDakIsWUFBTyxHQUFHLEtBQUssQ0FBQztvQkFFaEIsY0FBUyxHQUFHLElBQUksbUJBQVksRUFBK0IsQ0FBQztnQkFtQjdELENBQUM7Z0JBakJBLGdDQUFPLEdBQVA7b0JBQ0MsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFBLENBQUM7d0JBQ3BELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO29CQUN0QixDQUFDO29CQUFBLElBQUksQ0FBQyxDQUFDO3dCQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO29CQUN2QixDQUFDO29CQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLEVBQUUsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFDO3dCQUMzRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztvQkFDckIsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDUCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztvQkFDdEIsQ0FBQztnQkFDRixDQUFDO2dCQUVELGlDQUFRLEdBQVI7b0JBQ0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNsQyxDQUFDO2dCQTVDRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxVQUFVO3dCQUNwQixRQUFRLEVBQUUsNGtCQWdCVDt3QkFDRCxPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUM7cUJBQ3pCLENBQUM7O2tDQUFBO2dCQXlCRixxQkFBQztZQUFELENBeEJBLEFBd0JDLElBQUE7WUF4QkQsMkNBd0JDLENBQUEiLCJmaWxlIjoiYmluZGluZ3MvaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1pbnB1dCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICBcdDxoMT5Zb3VyIGRldGFpbHMgcGxlYXNlPC9oMT5cbiAgICBcdDxkaXY+XG4gICAgXHRcdDxsYWJlbCBmb3I9XCJuYW1lXCI+WW91ciBuYW1lPC9sYWJlbD5cbiAgICBcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgWyhuZ01vZGVsKV09XCJteXNlbGYubmFtZVwiIChrZXl1cCk9XCJvbktleXVwKClcIj5cbiAgICBcdDwvZGl2PlxuICAgIFx0PGRpdj5cbiAgICBcdFx0PGxhYmVsIGZvcj1cImFnZVwiPllvdXIgYWdlPC9sYWJlbD5cbiAgICBcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJhZ2VcIiBbKG5nTW9kZWwpXT1cIm15c2VsZi5hZ2VcIiAoa2V5dXApPVwib25LZXl1cCgpXCI+XG4gICAgXHQ8L2Rpdj5cbiAgICBcdDxicj5cbiAgICBcdDxkaXY+RmlsbGVkIG91dDoge3tpc0ZpbGxlZCA/ICdZZXMnIDogJ05vJ319PC9kaXY+XG4gICAgXHQ8ZGl2PlZhbGlkOiB7e2lzVmFsaWQgPyAnWWVzJyA6ICdObyd9fTwvZGl2PlxuICAgIFx0PGJyPlxuICAgIFx0PGJ1dHRvbiBbZGlzYWJsZWRdPVwiIWlzVmFsaWRcIiAoY2xpY2spPVwib25TdWJtaXQoKVwiPlN1Ym1pdDwvYnV0dG9uPlxuXG4gICAgYCxcbiAgICBvdXRwdXRzOiBbJ3N1Ym1pdHRlZCddXG59KVxuZXhwb3J0IGNsYXNzIElucHV0Q29tcG9uZW50IHtcblx0bXlzZWxmID0ge25hbWU6ICcnLCBhZ2U6ICcnfTtcblx0aXNGaWxsZWQgPSBmYWxzZTtcblx0aXNWYWxpZCA9IGZhbHNlO1xuXG5cdHN1Ym1pdHRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8e25hbWU6IHN0cmluZywgYWdlOiBzdHJpbmd9PigpO1xuXG5cdG9uS2V5dXAoKSB7XG5cdFx0aWYgKHRoaXMubXlzZWxmLm5hbWUgIT0gJycgJiYgdGhpcy5teXNlbGYuYWdlICE9ICcnKXtcblx0XHRcdHRoaXMuaXNGaWxsZWQgPSB0cnVlO1xuXHRcdH1lbHNlIHtcblx0XHRcdHRoaXMuaXNGaWxsZWQgPSBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5teXNlbGYuYWdlICE9ICcnICYmIC9eXFxkKyQvLnRlc3QodGhpcy5teXNlbGYuYWdlKSl7XG5cdFx0XHR0aGlzLmlzVmFsaWQgPSB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmlzVmFsaWQgPSBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHRvblN1Ym1pdCgpIHtcblx0XHR0aGlzLnN1Ym1pdHRlZC5lbWl0KHRoaXMubXlzZWxmKTtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
