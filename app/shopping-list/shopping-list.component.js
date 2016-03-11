System.register(['angular2/core', './shopping-list-edit.component', '../shared/shopping-list.service'], function(exports_1, context_1) {
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
    var core_1, shopping_list_edit_component_1, shopping_list_service_1;
    var ShoppingListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shopping_list_edit_component_1_1) {
                shopping_list_edit_component_1 = shopping_list_edit_component_1_1;
            },
            function (shopping_list_service_1_1) {
                shopping_list_service_1 = shopping_list_service_1_1;
            }],
        execute: function() {
            ShoppingListComponent = (function () {
                function ShoppingListComponent(_shoppingListServie) {
                    this._shoppingListServie = _shoppingListServie;
                    this.selectedItem = null;
                }
                ShoppingListComponent.prototype.ngOnInit = function () {
                    this.shoppingList = this._shoppingListServie.getAllItems();
                };
                ShoppingListComponent.prototype.onSelectItem = function (item) {
                    this.selectedItem = item;
                };
                ShoppingListComponent.prototype.onAddItem = function () {
                    this.selectedItem = null;
                };
                ShoppingListComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'templates/shopping-list/shopping-list.tpl.html',
                        directives: [shopping_list_edit_component_1.ShoppingListEditComponent],
                        providers: [shopping_list_service_1.ShoppingListService]
                    }), 
                    __metadata('design:paramtypes', [shopping_list_service_1.ShoppingListService])
                ], ShoppingListComponent);
                return ShoppingListComponent;
            }());
            exports_1("ShoppingListComponent", ShoppingListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQTtnQkFHQywrQkFBb0IsbUJBQXdDO29CQUF4Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO29CQUQ1RCxpQkFBWSxHQUFlLElBQUksQ0FBQztnQkFDK0IsQ0FBQztnQkFFaEUsd0NBQVEsR0FBUjtvQkFDQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDNUQsQ0FBQztnQkFDRCw0Q0FBWSxHQUFaLFVBQWEsSUFBZ0I7b0JBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUMxQixDQUFDO2dCQUNELHlDQUFTLEdBQVQ7b0JBQ0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQzFCLENBQUM7Z0JBbEJGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsV0FBVyxFQUFFLGdEQUFnRDt3QkFDN0QsVUFBVSxFQUFFLENBQUMsd0RBQXlCLENBQUM7d0JBQ3ZDLFNBQVMsRUFBRSxDQUFDLDJDQUFtQixDQUFDO3FCQUNuQyxDQUFDOzt5Q0FBQTtnQkFlRiw0QkFBQztZQUFELENBZEEsQUFjQyxJQUFBO1lBZEQseURBY0MsQ0FBQSIsImZpbGUiOiJzaG9wcGluZy1saXN0L3Nob3BwaW5nLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1Nob3BwaW5nTGlzdEVkaXRDb21wb25lbnR9IGZyb20gJy4vc2hvcHBpbmctbGlzdC1lZGl0LmNvbXBvbmVudCc7XG5pbXBvcnQge1Nob3BwaW5nTGlzdFNlcnZpY2V9IGZyb20gJy4uL3NoYXJlZC9zaG9wcGluZy1saXN0LnNlcnZpY2UnO1xuaW1wb3J0IHtJbmdyZWRpZW50fSBmcm9tICcuLi9zaGFyZWQvaW5ncmVkaWVudCc7XG5cbkBDb21wb25lbnQoeyAvLyBOTyBTRUxFQ1RPUiBCRUNBVVNFIElUIElTIEEgUk9VVEVcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9zaG9wcGluZy1saXN0L3Nob3BwaW5nLWxpc3QudHBsLmh0bWwnLFxuICAgIGRpcmVjdGl2ZXM6IFtTaG9wcGluZ0xpc3RFZGl0Q29tcG9uZW50XSxcbiAgICBwcm92aWRlcnM6IFtTaG9wcGluZ0xpc3RTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBTaG9wcGluZ0xpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cdHNob3BwaW5nTGlzdDogSW5ncmVkaWVudFtdO1xuXHRzZWxlY3RlZEl0ZW06IEluZ3JlZGllbnQgPSBudWxsO1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9zaG9wcGluZ0xpc3RTZXJ2aWU6IFNob3BwaW5nTGlzdFNlcnZpY2UpIHt9XG5cblx0bmdPbkluaXQoKTphbnkge1xuXHRcdHRoaXMuc2hvcHBpbmdMaXN0ID0gdGhpcy5fc2hvcHBpbmdMaXN0U2VydmllLmdldEFsbEl0ZW1zKCk7XG5cdH1cblx0b25TZWxlY3RJdGVtKGl0ZW06IEluZ3JlZGllbnQpe1xuXHRcdHRoaXMuc2VsZWN0ZWRJdGVtID0gaXRlbTtcblx0fVxuXHRvbkFkZEl0ZW0oKXtcblx0XHR0aGlzLnNlbGVjdGVkSXRlbSA9IG51bGw7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
