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
    var ShoppingListItemComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ShoppingListItemComponent = (function () {
                function ShoppingListItemComponent() {
                    this.item = { name: '', amount: 0 };
                    this.removed = new core_1.EventEmitter();
                }
                ShoppingListItemComponent.prototype.onDelete = function () {
                    this.removed.emit(this.item);
                };
                ShoppingListItemComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-list-item',
                        template: "\n    \t<div>\n    \t\t<label for=\"item-name\">Name: </label>\n    \t\t<input type=\"text\" id=\"item-name\" [(ngModel)]=\"item.name\">\n    \t</div>\n    \t<div>\n    \t\t<label for=\"item-amount\">Amount: </label>\n    \t\t<input type=\"text\" id=\"item-amount\" [(ngModel)]=\"item.amount\">\n    \t</div>\n    \t<button (click)=\"onDelete()\">Delete Item</button>\n    ",
                        inputs: ['item'],
                        outputs: ['removed']
                    }), 
                    __metadata('design:paramtypes', [])
                ], ShoppingListItemComponent);
                return ShoppingListItemComponent;
            }());
            exports_1("ShoppingListItemComponent", ShoppingListItemComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQW1CQTtnQkFBQTtvQkFDQyxTQUFJLEdBQUcsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUMsQ0FBQztvQkFDN0IsWUFBTyxHQUFHLElBQUksbUJBQVksRUFBWSxDQUFDO2dCQUl4QyxDQUFDO2dCQUhBLDRDQUFRLEdBQVI7b0JBQ0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM5QixDQUFDO2dCQXJCRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxvQkFBb0I7d0JBQzlCLFFBQVEsRUFBRSx1WEFVVDt3QkFDRCxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUM7d0JBQ2hCLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQztxQkFDdkIsQ0FBQzs7NkNBQUE7Z0JBT0YsZ0NBQUM7WUFBRCxDQU5BLEFBTUMsSUFBQTtZQU5ELGlFQU1DLENBQUEiLCJmaWxlIjoic2hvcHBpbmctbGlzdC9zaG9wcGluZy1saXN0LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0xpc3RJdGVtfSBmcm9tICcuL2xpc3QtaXRlbSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2hvcHBpbmctbGlzdC1pdGVtJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIFx0PGRpdj5cbiAgICBcdFx0PGxhYmVsIGZvcj1cIml0ZW0tbmFtZVwiPk5hbWU6IDwvbGFiZWw+XG4gICAgXHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiaXRlbS1uYW1lXCIgWyhuZ01vZGVsKV09XCJpdGVtLm5hbWVcIj5cbiAgICBcdDwvZGl2PlxuICAgIFx0PGRpdj5cbiAgICBcdFx0PGxhYmVsIGZvcj1cIml0ZW0tYW1vdW50XCI+QW1vdW50OiA8L2xhYmVsPlxuICAgIFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIml0ZW0tYW1vdW50XCIgWyhuZ01vZGVsKV09XCJpdGVtLmFtb3VudFwiPlxuICAgIFx0PC9kaXY+XG4gICAgXHQ8YnV0dG9uIChjbGljayk9XCJvbkRlbGV0ZSgpXCI+RGVsZXRlIEl0ZW08L2J1dHRvbj5cbiAgICBgLFxuICAgIGlucHV0czogWydpdGVtJ10sXG4gICAgb3V0cHV0czogWydyZW1vdmVkJ11cbn0pXG5leHBvcnQgY2xhc3MgIFNob3BwaW5nTGlzdEl0ZW1Db21wb25lbnR7XG5cdGl0ZW0gPSB7bmFtZTogJycsIGFtb3VudDogMH07XG5cdHJlbW92ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPExpc3RJdGVtPigpO1xuXHRvbkRlbGV0ZSgpe1xuXHRcdHRoaXMucmVtb3ZlZC5lbWl0KHRoaXMuaXRlbSk7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
