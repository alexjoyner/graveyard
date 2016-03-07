System.register(['angular2/core', './bindings/input.component', './bindings/confirm.component'], function(exports_1, context_1) {
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
    var core_1, input_component_1, confirm_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (input_component_1_1) {
                input_component_1 = input_component_1_1;
            },
            function (confirm_component_1_1) {
                confirm_component_1 = confirm_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.myself = { name: '', age: '' };
                    this.confirmedMyself = { name: '', age: '' };
                }
                AppComponent.prototype.onSubmit = function (myself) {
                    console.log(myself);
                    this.myself = { name: myself.name, age: myself.age };
                };
                AppComponent.prototype.onConfirm = function (myself) {
                    this.confirmedMyself = { name: myself.name, age: myself.age };
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    \t<div class=\"container\" >\n    \t\t<my-input (submitted)=\"onSubmit($event)\" [myself]=\"confirmedMyself\"></my-input>\n    \t</div>\n    \t<div class=\"container\">\n    \t\t<my-confirm [myself]=\"myself\" (confirmed)=\"onConfirm($event)\"></my-confirm>\n    \t</div>\n    ",
                        directives: [input_component_1.InputComponent, confirm_component_1.ConfirmComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFnQkE7Z0JBQUE7b0JBQ0MsV0FBTSxHQUFHLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFDLENBQUM7b0JBQzdCLG9CQUFlLEdBQUcsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUMsQ0FBQztnQkFVdkMsQ0FBQztnQkFSQSwrQkFBUSxHQUFSLFVBQVMsTUFBbUM7b0JBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUcsRUFBQyxDQUFDO2dCQUNwRCxDQUFDO2dCQUVELGdDQUFTLEdBQVQsVUFBVSxNQUFtQztvQkFDNUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFDLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxFQUFDLENBQUM7Z0JBQzdELENBQUM7Z0JBdkJGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSw2UkFPVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQyxnQ0FBYyxFQUFFLG9DQUFnQixDQUFDO3FCQUNqRCxDQUFDOztnQ0FBQTtnQkFhRixtQkFBQztZQUFELENBWkEsQUFZQyxJQUFBO1lBWkQsdUNBWUMsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtJbnB1dENvbXBvbmVudH0gZnJvbSAnLi9iaW5kaW5ncy9pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHtDb25maXJtQ29tcG9uZW50fSBmcm9tICcuL2JpbmRpbmdzL2NvbmZpcm0uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgXHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgPlxuICAgIFx0XHQ8bXktaW5wdXQgKHN1Ym1pdHRlZCk9XCJvblN1Ym1pdCgkZXZlbnQpXCIgW215c2VsZl09XCJjb25maXJtZWRNeXNlbGZcIj48L215LWlucHV0PlxuICAgIFx0PC9kaXY+XG4gICAgXHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgXHRcdDxteS1jb25maXJtIFtteXNlbGZdPVwibXlzZWxmXCIgKGNvbmZpcm1lZCk9XCJvbkNvbmZpcm0oJGV2ZW50KVwiPjwvbXktY29uZmlybT5cbiAgICBcdDwvZGl2PlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW0lucHV0Q29tcG9uZW50LCBDb25maXJtQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXHRteXNlbGYgPSB7bmFtZTogJycsIGFnZTogJyd9O1xuXHRjb25maXJtZWRNeXNlbGYgPSB7bmFtZTogJycsIGFnZTogJyd9O1xuXG5cdG9uU3VibWl0KG15c2VsZjoge25hbWU6IHN0cmluZywgYWdlOiBzdHJpbmd9KXtcblx0XHRjb25zb2xlLmxvZyhteXNlbGYpO1xuXHRcdHRoaXMubXlzZWxmID0ge25hbWU6IG15c2VsZi5uYW1lLCBhZ2U6IG15c2VsZi5hZ2V9O1xuXHR9XG5cblx0b25Db25maXJtKG15c2VsZjoge25hbWU6IHN0cmluZywgYWdlOiBzdHJpbmd9KXtcblx0XHR0aGlzLmNvbmZpcm1lZE15c2VsZiA9IHtuYW1lOiBteXNlbGYubmFtZSwgYWdlOiBteXNlbGYuYWdlfTtcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
