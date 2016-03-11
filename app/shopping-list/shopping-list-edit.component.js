System.register(['angular2/core', '../shared/shopping-list.service'], function(exports_1, context_1) {
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
    var core_1, shopping_list_service_1;
    var ShoppingListEditComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shopping_list_service_1_1) {
                shopping_list_service_1 = shopping_list_service_1_1;
            }],
        execute: function() {
            ShoppingListEditComponent = (function () {
                function ShoppingListEditComponent(_shoppingListService) {
                    this._shoppingListService = _shoppingListService;
                }
                ShoppingListEditComponent.prototype.onSubmit = function (item) {
                    this.ingredient !== null
                        ?
                            this._shoppingListService.updateItem(this._shoppingListService.getIndexOfItem(this.ingredient), item)
                        :
                            this._shoppingListService.insertItem(item);
                };
                ShoppingListEditComponent.prototype.onDelete = function () {
                    this._shoppingListService.deleteItem(this.ingredient);
                    this.ingredient = null;
                };
                ShoppingListEditComponent = __decorate([
                    core_1.Component({
                        selector: 'my-shopping-list-edit',
                        templateUrl: 'templates/shopping-list/shopping-list-edit.tpl.html',
                        inputs: ['ingredient'],
                        styleUrls: ['src/css/shopping-list.css']
                    }), 
                    __metadata('design:paramtypes', [shopping_list_service_1.ShoppingListService])
                ], ShoppingListEditComponent);
                return ShoppingListEditComponent;
            }());
            exports_1("ShoppingListEditComponent", ShoppingListEditComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC1lZGl0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVNBO2dCQUVDLG1DQUFvQixvQkFBeUM7b0JBQXpDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBcUI7Z0JBQUcsQ0FBQztnQkFDakUsNENBQVEsR0FBUixVQUFTLElBQWdCO29CQUN4QixJQUFJLENBQUMsVUFBVSxLQUFLLElBQUk7OzRCQUV2QixJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUNuQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUN2QyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsSUFBSSxDQUFDOzs0QkFFekIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDN0MsQ0FBQztnQkFDRCw0Q0FBUSxHQUFSO29CQUNDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUN0RCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDeEIsQ0FBQztnQkFyQkY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsdUJBQXVCO3dCQUNqQyxXQUFXLEVBQUUscURBQXFEO3dCQUNsRSxNQUFNLEVBQUUsQ0FBQyxZQUFZLENBQUM7d0JBQ3RCLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO3FCQUMzQyxDQUFDOzs2Q0FBQTtnQkFpQkYsZ0NBQUM7WUFBRCxDQWhCQSxBQWdCQyxJQUFBO1lBaEJELGlFQWdCQyxDQUFBIiwiZmlsZSI6InNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC1lZGl0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7SW5ncmVkaWVudH0gZnJvbSAnLi4vc2hhcmVkL2luZ3JlZGllbnQnO1xuaW1wb3J0IHtTaG9wcGluZ0xpc3RTZXJ2aWNlfSBmcm9tICcuLi9zaGFyZWQvc2hvcHBpbmctbGlzdC5zZXJ2aWNlJztcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktc2hvcHBpbmctbGlzdC1lZGl0JyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9zaG9wcGluZy1saXN0L3Nob3BwaW5nLWxpc3QtZWRpdC50cGwuaHRtbCcsXG4gICAgaW5wdXRzOiBbJ2luZ3JlZGllbnQnXSxcbiAgICBzdHlsZVVybHM6IFsnc3JjL2Nzcy9zaG9wcGluZy1saXN0LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNob3BwaW5nTGlzdEVkaXRDb21wb25lbnQge1xuXHRpbmdyZWRpZW50OiBJbmdyZWRpZW50O1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9zaG9wcGluZ0xpc3RTZXJ2aWNlOiBTaG9wcGluZ0xpc3RTZXJ2aWNlKSB7fVxuXHRvblN1Ym1pdChpdGVtOiBJbmdyZWRpZW50KSB7XG5cdFx0dGhpcy5pbmdyZWRpZW50ICE9PSBudWxsXG5cdFx0XHQ/XG5cdFx0XHR0aGlzLl9zaG9wcGluZ0xpc3RTZXJ2aWNlLnVwZGF0ZUl0ZW0oXG5cdFx0XHRcdHRoaXMuX3Nob3BwaW5nTGlzdFNlcnZpY2UuZ2V0SW5kZXhPZkl0ZW0oXG5cdFx0XHRcdFx0dGhpcy5pbmdyZWRpZW50KSwgaXRlbSlcblx0XHRcdDpcblx0XHRcdHRoaXMuX3Nob3BwaW5nTGlzdFNlcnZpY2UuaW5zZXJ0SXRlbShpdGVtKTtcblx0fVxuXHRvbkRlbGV0ZSgpIHtcblx0XHR0aGlzLl9zaG9wcGluZ0xpc3RTZXJ2aWNlLmRlbGV0ZUl0ZW0odGhpcy5pbmdyZWRpZW50KTtcblx0XHR0aGlzLmluZ3JlZGllbnQgPSBudWxsO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
