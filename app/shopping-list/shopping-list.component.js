System.register(['angular2/core', './shopping-list-new-item.Component', './shopping-list-item.component'], function(exports_1, context_1) {
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
    var core_1, shopping_list_new_item_Component_1, shopping_list_item_component_1;
    var ShoppingListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shopping_list_new_item_Component_1_1) {
                shopping_list_new_item_Component_1 = shopping_list_new_item_Component_1_1;
            },
            function (shopping_list_item_component_1_1) {
                shopping_list_item_component_1 = shopping_list_item_component_1_1;
            }],
        execute: function() {
            ShoppingListComponent = (function () {
                function ShoppingListComponent() {
                    this.listItems = new Array();
                }
                ShoppingListComponent.prototype.onItemAdded = function (item) {
                    this.listItems.push({ name: item.name, amount: item.amount });
                };
                ShoppingListComponent.prototype.onSelect = function (item) {
                    this.selectedItem = item;
                    console.log(item);
                };
                ShoppingListComponent.prototype.onRemove = function (item) {
                    this.listItems.splice(this.listItems.indexOf(item), 1);
                    this.selectedItem = null;
                };
                ShoppingListComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-list',
                        template: "\n    \t<section>\n    \t\t<shopping-list-new-item (itemAdded)=\"onItemAdded($event)\"></shopping-list-new-item>\n    \t</section>\n    \t<section>\n    \t\t<h3>My List</h3>\n    \t\t<div class=\"list\">\n    \t\t\t<ul>\n    \t\t\t\t<li *ngFor=\"#listItem of listItems\" (click)=\"onSelect(listItem)\">{{listItem.name}} {{listItem.amount}}</li>\n    \t\t\t</ul>\n    \t\t</div>\n    \t</section>\n    \t<section *ngIf=\"selectedItem != null\">\n    \t\t<shopping-list-item [item]=\"selectedItem\" (removed)=\"onRemove($event)\"></shopping-list-item>\n    \t</section>\n    ",
                        directives: [shopping_list_new_item_Component_1.ShoppingListNewItemComponent, shopping_list_item_component_1.ShoppingListItemComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ShoppingListComponent);
                return ShoppingListComponent;
            }());
            exports_1("ShoppingListComponent", ShoppingListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF3QkE7Z0JBQUE7b0JBQ0MsY0FBUyxHQUFHLElBQUksS0FBSyxFQUFZLENBQUM7Z0JBY25DLENBQUM7Z0JBWEEsMkNBQVcsR0FBWCxVQUFZLElBQWM7b0JBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDO2dCQUM3RCxDQUFDO2dCQUNELHdDQUFRLEdBQVIsVUFBUyxJQUFjO29CQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztvQkFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbkIsQ0FBQztnQkFDRCx3Q0FBUSxHQUFSLFVBQVMsSUFBYztvQkFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUMxQixDQUFDO2dCQWxDRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxlQUFlO3dCQUN6QixRQUFRLEVBQUUsK2pCQWVUO3dCQUNELFVBQVUsRUFBRSxDQUFDLCtEQUE0QixFQUFFLHdEQUF5QixDQUFDO3FCQUN4RSxDQUFDOzt5Q0FBQTtnQkFnQkYsNEJBQUM7WUFBRCxDQWZBLEFBZUMsSUFBQTtZQWZELHlEQWVDLENBQUEiLCJmaWxlIjoic2hvcHBpbmctbGlzdC9zaG9wcGluZy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7U2hvcHBpbmdMaXN0TmV3SXRlbUNvbXBvbmVudH0gZnJvbSAnLi9zaG9wcGluZy1saXN0LW5ldy1pdGVtLkNvbXBvbmVudCc7XG5pbXBvcnQge1Nob3BwaW5nTGlzdEl0ZW1Db21wb25lbnR9IGZyb20gJy4vc2hvcHBpbmctbGlzdC1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQge0xpc3RJdGVtfSBmcm9tICcuL2xpc3QtaXRlbSc7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Nob3BwaW5nLWxpc3QnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgXHQ8c2VjdGlvbj5cbiAgICBcdFx0PHNob3BwaW5nLWxpc3QtbmV3LWl0ZW0gKGl0ZW1BZGRlZCk9XCJvbkl0ZW1BZGRlZCgkZXZlbnQpXCI+PC9zaG9wcGluZy1saXN0LW5ldy1pdGVtPlxuICAgIFx0PC9zZWN0aW9uPlxuICAgIFx0PHNlY3Rpb24+XG4gICAgXHRcdDxoMz5NeSBMaXN0PC9oMz5cbiAgICBcdFx0PGRpdiBjbGFzcz1cImxpc3RcIj5cbiAgICBcdFx0XHQ8dWw+XG4gICAgXHRcdFx0XHQ8bGkgKm5nRm9yPVwiI2xpc3RJdGVtIG9mIGxpc3RJdGVtc1wiIChjbGljayk9XCJvblNlbGVjdChsaXN0SXRlbSlcIj57e2xpc3RJdGVtLm5hbWV9fSB7e2xpc3RJdGVtLmFtb3VudH19PC9saT5cbiAgICBcdFx0XHQ8L3VsPlxuICAgIFx0XHQ8L2Rpdj5cbiAgICBcdDwvc2VjdGlvbj5cbiAgICBcdDxzZWN0aW9uICpuZ0lmPVwic2VsZWN0ZWRJdGVtICE9IG51bGxcIj5cbiAgICBcdFx0PHNob3BwaW5nLWxpc3QtaXRlbSBbaXRlbV09XCJzZWxlY3RlZEl0ZW1cIiAocmVtb3ZlZCk9XCJvblJlbW92ZSgkZXZlbnQpXCI+PC9zaG9wcGluZy1saXN0LWl0ZW0+XG4gICAgXHQ8L3NlY3Rpb24+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbU2hvcHBpbmdMaXN0TmV3SXRlbUNvbXBvbmVudCwgU2hvcHBpbmdMaXN0SXRlbUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgU2hvcHBpbmdMaXN0Q29tcG9uZW50IHtcblx0bGlzdEl0ZW1zID0gbmV3IEFycmF5PExpc3RJdGVtPigpO1xuXHRzZWxlY3RlZEl0ZW06IExpc3RJdGVtO1xuXG5cdG9uSXRlbUFkZGVkKGl0ZW06IExpc3RJdGVtKSB7XG5cdFx0dGhpcy5saXN0SXRlbXMucHVzaCh7bmFtZTogaXRlbS5uYW1lLCBhbW91bnQ6IGl0ZW0uYW1vdW50fSk7XG5cdH1cblx0b25TZWxlY3QoaXRlbTogTGlzdEl0ZW0pe1xuXHRcdHRoaXMuc2VsZWN0ZWRJdGVtID0gaXRlbTtcblx0XHRjb25zb2xlLmxvZyhpdGVtKTtcblx0fVxuXHRvblJlbW92ZShpdGVtOiBMaXN0SXRlbSl7XG5cdFx0dGhpcy5saXN0SXRlbXMuc3BsaWNlKHRoaXMubGlzdEl0ZW1zLmluZGV4T2YoaXRlbSksIDEpO1xuXHRcdHRoaXMuc2VsZWN0ZWRJdGVtID0gbnVsbDtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
