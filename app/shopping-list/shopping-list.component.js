System.register(['angular2/core', './shopping-list-new-item.Component'], function(exports_1, context_1) {
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
    var core_1, shopping_list_new_item_Component_1;
    var ShoppingListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shopping_list_new_item_Component_1_1) {
                shopping_list_new_item_Component_1 = shopping_list_new_item_Component_1_1;
            }],
        execute: function() {
            ShoppingListComponent = (function () {
                function ShoppingListComponent() {
                    this.listItems = new Array();
                }
                ShoppingListComponent.prototype.onItemAdded = function (item) {
                    console.log({ name: item.name, amount: item.amount });
                    this.listItems.push({ name: item.name, amount: item.amount });
                };
                ShoppingListComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-list',
                        template: "\n    \t<section>\n    \t\t<shopping-list-new-item (itemAdded)=\"onItemAdded($event)\"></shopping-list-new-item>\n    \t</section>\n    \t<section>\n    \t\t<h3>My List</h3>\n    \t\t<div class=\"list\">\n    \t\t\t<ul>\n    \t\t\t\t<li *ngFor=\"#listItem of listItems\">{{listItem.name}} {{listItem.amount}}</li>\n    \t\t\t</ul>\n    \t\t</div>\n    \t</section>\n    \t<section>\n    \t\tEdit Items\n    \t</section>\n    ",
                        directives: [shopping_list_new_item_Component_1.ShoppingListNewItemComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ShoppingListComponent);
                return ShoppingListComponent;
            }());
            exports_1("ShoppingListComponent", ShoppingListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFzQkE7Z0JBQUE7b0JBQ0MsY0FBUyxHQUFHLElBQUksS0FBSyxFQUFrQyxDQUFDO2dCQUt6RCxDQUFDO2dCQUpBLDJDQUFXLEdBQVgsVUFBWSxJQUFvQztvQkFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztvQkFDcEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7Z0JBQzdELENBQUM7Z0JBekJGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGVBQWU7d0JBQ3pCLFFBQVEsRUFBRSwyYUFlVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQywrREFBNEIsQ0FBQztxQkFDN0MsQ0FBQzs7eUNBQUE7Z0JBT0YsNEJBQUM7WUFBRCxDQU5BLEFBTUMsSUFBQTtZQU5ELHlEQU1DLENBQUEiLCJmaWxlIjoic2hvcHBpbmctbGlzdC9zaG9wcGluZy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7U2hvcHBpbmdMaXN0TmV3SXRlbUNvbXBvbmVudH0gZnJvbSAnLi9zaG9wcGluZy1saXN0LW5ldy1pdGVtLkNvbXBvbmVudCc7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Nob3BwaW5nLWxpc3QnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgXHQ8c2VjdGlvbj5cbiAgICBcdFx0PHNob3BwaW5nLWxpc3QtbmV3LWl0ZW0gKGl0ZW1BZGRlZCk9XCJvbkl0ZW1BZGRlZCgkZXZlbnQpXCI+PC9zaG9wcGluZy1saXN0LW5ldy1pdGVtPlxuICAgIFx0PC9zZWN0aW9uPlxuICAgIFx0PHNlY3Rpb24+XG4gICAgXHRcdDxoMz5NeSBMaXN0PC9oMz5cbiAgICBcdFx0PGRpdiBjbGFzcz1cImxpc3RcIj5cbiAgICBcdFx0XHQ8dWw+XG4gICAgXHRcdFx0XHQ8bGkgKm5nRm9yPVwiI2xpc3RJdGVtIG9mIGxpc3RJdGVtc1wiPnt7bGlzdEl0ZW0ubmFtZX19IHt7bGlzdEl0ZW0uYW1vdW50fX08L2xpPlxuICAgIFx0XHRcdDwvdWw+XG4gICAgXHRcdDwvZGl2PlxuICAgIFx0PC9zZWN0aW9uPlxuICAgIFx0PHNlY3Rpb24+XG4gICAgXHRcdEVkaXQgSXRlbXNcbiAgICBcdDwvc2VjdGlvbj5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtTaG9wcGluZ0xpc3ROZXdJdGVtQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBTaG9wcGluZ0xpc3RDb21wb25lbnQge1xuXHRsaXN0SXRlbXMgPSBuZXcgQXJyYXk8e25hbWU6IHN0cmluZywgYW1vdW50OiBudW1iZXJ9PigpO1xuXHRvbkl0ZW1BZGRlZChpdGVtOiB7bmFtZTogc3RyaW5nLCBhbW91bnQ6IG51bWJlcn0pIHtcblx0XHRjb25zb2xlLmxvZyh7bmFtZTogaXRlbS5uYW1lLCBhbW91bnQ6IGl0ZW0uYW1vdW50fSk7XG5cdFx0dGhpcy5saXN0SXRlbXMucHVzaCh7bmFtZTogaXRlbS5uYW1lLCBhbW91bnQ6IGl0ZW0uYW1vdW50fSk7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
