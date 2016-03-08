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
    var ShoppingListNewItemComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ShoppingListNewItemComponent = (function () {
                function ShoppingListNewItemComponent() {
                    this.item = { name: '', amount: 0 };
                    this.itemAdded = new core_1.EventEmitter();
                }
                ShoppingListNewItemComponent.prototype.onClick = function () {
                    console.log('Adding: ', this.item);
                    this.itemAdded.emit(this.item);
                };
                ShoppingListNewItemComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-list-new-item',
                        template: "\n    \t<div>\n    \t\t<label for=\"item-name\">Name: </label>\n    \t\t<input type=\"text\" id=\"item-name\" [(ngModel)]=\"item.name\">\n    \t</div>\n    \t<div>\n    \t\t<label for=\"item-amount\">Amount: </label>\n    \t\t<input type=\"text\" id=\"item-amount\" [(ngModel)]=\"item.amount\">\n    \t</div>\n    \t<button (click)=\"onClick()\">Add Item</button>\n    ",
                        outputs: ['itemAdded']
                    }), 
                    __metadata('design:paramtypes', [])
                ], ShoppingListNewItemComponent);
                return ShoppingListNewItemComponent;
            }());
            exports_1("ShoppingListNewItemComponent", ShoppingListNewItemComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC1uZXctaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFrQkE7Z0JBQUE7b0JBQ0MsU0FBSSxHQUFHLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUM7b0JBQzdCLGNBQVMsR0FBRyxJQUFJLG1CQUFZLEVBQVksQ0FBQztnQkFNMUMsQ0FBQztnQkFKQSw4Q0FBTyxHQUFQO29CQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDbkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNoQyxDQUFDO2dCQXRCRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSx3QkFBd0I7d0JBQ2xDLFFBQVEsRUFBRSxtWEFVVDt3QkFDRCxPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUM7cUJBQ3pCLENBQUM7O2dEQUFBO2dCQVNGLG1DQUFDO1lBQUQsQ0FSQSxBQVFDLElBQUE7WUFSRCx1RUFRQyxDQUFBIiwiZmlsZSI6InNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC1uZXctaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7TGlzdEl0ZW19IGZyb20gJy4vbGlzdC1pdGVtJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzaG9wcGluZy1saXN0LW5ldy1pdGVtJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIFx0PGRpdj5cbiAgICBcdFx0PGxhYmVsIGZvcj1cIml0ZW0tbmFtZVwiPk5hbWU6IDwvbGFiZWw+XG4gICAgXHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiaXRlbS1uYW1lXCIgWyhuZ01vZGVsKV09XCJpdGVtLm5hbWVcIj5cbiAgICBcdDwvZGl2PlxuICAgIFx0PGRpdj5cbiAgICBcdFx0PGxhYmVsIGZvcj1cIml0ZW0tYW1vdW50XCI+QW1vdW50OiA8L2xhYmVsPlxuICAgIFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIml0ZW0tYW1vdW50XCIgWyhuZ01vZGVsKV09XCJpdGVtLmFtb3VudFwiPlxuICAgIFx0PC9kaXY+XG4gICAgXHQ8YnV0dG9uIChjbGljayk9XCJvbkNsaWNrKClcIj5BZGQgSXRlbTwvYnV0dG9uPlxuICAgIGAsXG4gICAgb3V0cHV0czogWydpdGVtQWRkZWQnXVxufSlcbmV4cG9ydCBjbGFzcyBTaG9wcGluZ0xpc3ROZXdJdGVtQ29tcG9uZW50IHtcblx0aXRlbSA9IHtuYW1lOiAnJywgYW1vdW50OiAwfTtcblx0aXRlbUFkZGVkID0gbmV3IEV2ZW50RW1pdHRlcjxMaXN0SXRlbT4oKTtcblxuXHRvbkNsaWNrKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBZGRpbmc6ICcsIHRoaXMuaXRlbSk7XG5cdFx0dGhpcy5pdGVtQWRkZWQuZW1pdCh0aGlzLml0ZW0pO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
