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
    var ConfirmComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ConfirmComponent = (function () {
                function ConfirmComponent() {
                    this.myself = { name: '', age: '' };
                    this.isFilled = false;
                    this.isValid = false;
                    this.confirmed = new core_1.EventEmitter();
                }
                ConfirmComponent.prototype.onKeyup = function () {
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
                ConfirmComponent.prototype.onConfirm = function () {
                    console.log(this.myself);
                    this.confirmed.emit(this.myself);
                };
                ConfirmComponent = __decorate([
                    core_1.Component({
                        selector: 'my-confirm',
                        template: "\n    \t<h1>You submitted the following details. Is this correct?</h1>\n    \t<p>Your name is <span class=\"highlight\">{{myself.name}}</span> and you are <span class=\"highlight\">{{myself.age}}</span> years old. Please click on the 'Confirm' if you have made any changes to this information. </p>\n    \t<div>\n    \t\t<label for=\"name\">Your name</label>\n    \t\t<input type=\"text\" id=\"name\" [(ngModel)]=\"myself.name\" (keyup)=\"onKeyup()\">\n    \t</div>\n    \t<div>\n    \t\t<label for=\"age\">Your age</label>\n    \t\t<input type=\"text\" id=\"age\" [(ngModel)]=\"myself.age\" (keyup)=\"onKeyup()\">\n    \t</div>\n    \t<br>\n    \t<div>Filled out: {{isFilled ? 'Yes' : 'No'}}</div>\n    \t<div>Valid: {{isValid ? 'Yes' : 'No'}}</div>\n    \t<br>\n    \t<button [disabled]=\"!isValid\" (click)=\"onConfirm()\">Submit</button>\n    ",
                        inputs: ['myself'],
                        outputs: ['confirmed']
                    }), 
                    __metadata('design:paramtypes', [])
                ], ConfirmComponent);
                return ConfirmComponent;
            }());
            exports_1("ConfirmComponent", ConfirmComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmRpbmdzL2NvbmZpcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBd0JBO2dCQUFBO29CQUNDLFdBQU0sR0FBRyxFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBQyxDQUFDO29CQUM3QixhQUFRLEdBQUcsS0FBSyxDQUFDO29CQUNqQixZQUFPLEdBQUcsS0FBSyxDQUFDO29CQUVoQixjQUFTLEdBQUcsSUFBSSxtQkFBWSxFQUErQixDQUFDO2dCQW9CN0QsQ0FBQztnQkFsQkEsa0NBQU8sR0FBUDtvQkFDQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUEsQ0FBQzt3QkFDcEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7b0JBQ3RCLENBQUM7b0JBQUEsSUFBSSxDQUFDLENBQUM7d0JBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7b0JBQ3ZCLENBQUM7b0JBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksRUFBRSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUM7d0JBQzNELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO29CQUNyQixDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNQLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO29CQUN0QixDQUFDO2dCQUNGLENBQUM7Z0JBRUQsb0NBQVMsR0FBVDtvQkFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNsQyxDQUFDO2dCQTlDRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxZQUFZO3dCQUN0QixRQUFRLEVBQUUsaTFCQWdCVDt3QkFDRCxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUM7d0JBQ2xCLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQztxQkFDekIsQ0FBQzs7b0NBQUE7Z0JBMEJGLHVCQUFDO1lBQUQsQ0F6QkEsQUF5QkMsSUFBQTtZQXpCRCwrQ0F5QkMsQ0FBQSIsImZpbGUiOiJiaW5kaW5ncy9jb25maXJtLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWNvbmZpcm0nLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgXHQ8aDE+WW91IHN1Ym1pdHRlZCB0aGUgZm9sbG93aW5nIGRldGFpbHMuIElzIHRoaXMgY29ycmVjdD88L2gxPlxuICAgIFx0PHA+WW91ciBuYW1lIGlzIDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0XCI+e3tteXNlbGYubmFtZX19PC9zcGFuPiBhbmQgeW91IGFyZSA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodFwiPnt7bXlzZWxmLmFnZX19PC9zcGFuPiB5ZWFycyBvbGQuIFBsZWFzZSBjbGljayBvbiB0aGUgJ0NvbmZpcm0nIGlmIHlvdSBoYXZlIG1hZGUgYW55IGNoYW5nZXMgdG8gdGhpcyBpbmZvcm1hdGlvbi4gPC9wPlxuICAgIFx0PGRpdj5cbiAgICBcdFx0PGxhYmVsIGZvcj1cIm5hbWVcIj5Zb3VyIG5hbWU8L2xhYmVsPlxuICAgIFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiBbKG5nTW9kZWwpXT1cIm15c2VsZi5uYW1lXCIgKGtleXVwKT1cIm9uS2V5dXAoKVwiPlxuICAgIFx0PC9kaXY+XG4gICAgXHQ8ZGl2PlxuICAgIFx0XHQ8bGFiZWwgZm9yPVwiYWdlXCI+WW91ciBhZ2U8L2xhYmVsPlxuICAgIFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImFnZVwiIFsobmdNb2RlbCldPVwibXlzZWxmLmFnZVwiIChrZXl1cCk9XCJvbktleXVwKClcIj5cbiAgICBcdDwvZGl2PlxuICAgIFx0PGJyPlxuICAgIFx0PGRpdj5GaWxsZWQgb3V0OiB7e2lzRmlsbGVkID8gJ1llcycgOiAnTm8nfX08L2Rpdj5cbiAgICBcdDxkaXY+VmFsaWQ6IHt7aXNWYWxpZCA/ICdZZXMnIDogJ05vJ319PC9kaXY+XG4gICAgXHQ8YnI+XG4gICAgXHQ8YnV0dG9uIFtkaXNhYmxlZF09XCIhaXNWYWxpZFwiIChjbGljayk9XCJvbkNvbmZpcm0oKVwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgIGAsXG4gICAgaW5wdXRzOiBbJ215c2VsZiddLFxuICAgIG91dHB1dHM6IFsnY29uZmlybWVkJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29uZmlybUNvbXBvbmVudCB7XG5cdG15c2VsZiA9IHtuYW1lOiAnJywgYWdlOiAnJ307XG5cdGlzRmlsbGVkID0gZmFsc2U7XG5cdGlzVmFsaWQgPSBmYWxzZTtcblxuXHRjb25maXJtZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHtuYW1lOiBzdHJpbmcsIGFnZTogc3RyaW5nfT4oKTtcblxuXHRvbktleXVwKCkge1xuXHRcdGlmICh0aGlzLm15c2VsZi5uYW1lICE9ICcnICYmIHRoaXMubXlzZWxmLmFnZSAhPSAnJyl7XG5cdFx0XHR0aGlzLmlzRmlsbGVkID0gdHJ1ZTtcblx0XHR9ZWxzZSB7XG5cdFx0XHR0aGlzLmlzRmlsbGVkID0gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMubXlzZWxmLmFnZSAhPSAnJyAmJiAvXlxcZCskLy50ZXN0KHRoaXMubXlzZWxmLmFnZSkpe1xuXHRcdFx0dGhpcy5pc1ZhbGlkID0gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5pc1ZhbGlkID0gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0b25Db25maXJtKCkge1xuXHRcdGNvbnNvbGUubG9nKHRoaXMubXlzZWxmKTtcblx0XHR0aGlzLmNvbmZpcm1lZC5lbWl0KHRoaXMubXlzZWxmKTtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
