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
                        templateUrl: 'dev/shopping-list/shopping-list.template.html',
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQTtnQkFHQywrQkFBb0IsbUJBQXdDO29CQUF4Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO29CQUQ1RCxpQkFBWSxHQUFlLElBQUksQ0FBQztnQkFDK0IsQ0FBQztnQkFFaEUsd0NBQVEsR0FBUjtvQkFDQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDNUQsQ0FBQztnQkFDRCw0Q0FBWSxHQUFaLFVBQWEsSUFBZ0I7b0JBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUMxQixDQUFDO2dCQUNELHlDQUFTLEdBQVQ7b0JBQ0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQzFCLENBQUM7Z0JBbEJGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsV0FBVyxFQUFFLCtDQUErQzt3QkFDNUQsVUFBVSxFQUFFLENBQUMsd0RBQXlCLENBQUM7d0JBQ3ZDLFNBQVMsRUFBRSxDQUFDLDJDQUFtQixDQUFDO3FCQUNuQyxDQUFDOzt5Q0FBQTtnQkFlRiw0QkFBQztZQUFELENBZEEsQUFjQyxJQUFBO1lBZEQseURBY0MsQ0FBQSIsImZpbGUiOiJzaG9wcGluZy1saXN0L3Nob3BwaW5nLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1Nob3BwaW5nTGlzdEVkaXRDb21wb25lbnR9IGZyb20gJy4vc2hvcHBpbmctbGlzdC1lZGl0LmNvbXBvbmVudCc7XG5pbXBvcnQge1Nob3BwaW5nTGlzdFNlcnZpY2V9IGZyb20gJy4uL3NoYXJlZC9zaG9wcGluZy1saXN0LnNlcnZpY2UnO1xuaW1wb3J0IHtJbmdyZWRpZW50fSBmcm9tICcuLi9zaGFyZWQvaW5ncmVkaWVudCc7XG5cbkBDb21wb25lbnQoeyAvLyBOTyBTRUxFQ1RPUiBCRUNBVVNFIElUIElTIEEgUk9VVEVcbiAgICB0ZW1wbGF0ZVVybDogJ2Rldi9zaG9wcGluZy1saXN0L3Nob3BwaW5nLWxpc3QudGVtcGxhdGUuaHRtbCcsXG4gICAgZGlyZWN0aXZlczogW1Nob3BwaW5nTGlzdEVkaXRDb21wb25lbnRdLFxuICAgIHByb3ZpZGVyczogW1Nob3BwaW5nTGlzdFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFNob3BwaW5nTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblx0c2hvcHBpbmdMaXN0OiBJbmdyZWRpZW50W107XG5cdHNlbGVjdGVkSXRlbTogSW5ncmVkaWVudCA9IG51bGw7XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX3Nob3BwaW5nTGlzdFNlcnZpZTogU2hvcHBpbmdMaXN0U2VydmljZSkge31cblxuXHRuZ09uSW5pdCgpOmFueSB7XG5cdFx0dGhpcy5zaG9wcGluZ0xpc3QgPSB0aGlzLl9zaG9wcGluZ0xpc3RTZXJ2aWUuZ2V0QWxsSXRlbXMoKTtcblx0fVxuXHRvblNlbGVjdEl0ZW0oaXRlbTogSW5ncmVkaWVudCl7XG5cdFx0dGhpcy5zZWxlY3RlZEl0ZW0gPSBpdGVtO1xuXHR9XG5cdG9uQWRkSXRlbSgpe1xuXHRcdHRoaXMuc2VsZWN0ZWRJdGVtID0gbnVsbDtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
