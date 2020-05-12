System.register(['angular2/core', 'angular2/router', './recipe.service', '../shared/shopping-list.service'], function(exports_1, context_1) {
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
    var core_1, router_1, recipe_service_1, shopping_list_service_1;
    var RecipeDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (recipe_service_1_1) {
                recipe_service_1 = recipe_service_1_1;
            },
            function (shopping_list_service_1_1) {
                shopping_list_service_1 = shopping_list_service_1_1;
            }],
        execute: function() {
            RecipeDetailComponent = (function () {
                function RecipeDetailComponent(_routeParams, _recipeService, _router, _shoppingListService) {
                    this._routeParams = _routeParams;
                    this._recipeService = _recipeService;
                    this._router = _router;
                    this._shoppingListService = _shoppingListService;
                }
                RecipeDetailComponent.prototype.onEdit = function () {
                    this._router.navigate(['RecipeEdit', {
                            editMode: 'edit',
                            itemIndex: this._recipeIndex
                        }]);
                };
                RecipeDetailComponent.prototype.onDelete = function () {
                    this._recipeService.deleteRecipe(+this._recipeIndex);
                    this._router.navigate(['RecipeDetail']);
                };
                RecipeDetailComponent.prototype.onAddToShoppingList = function () {
                    this._shoppingListService.insertItems(this.recipe.ingredients);
                };
                RecipeDetailComponent.prototype.ngOnInit = function () {
                    var itemIndex = this._routeParams.get('recipeIndex');
                    this._recipeIndex = itemIndex;
                    this.recipe = this._recipeService.getRecipe(itemIndex !== null ? +itemIndex : null) || null;
                };
                RecipeDetailComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'templates/recipe-book/recipe-detail.tpl.html',
                        providers: [shopping_list_service_1.ShoppingListService]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, recipe_service_1.RecipeService, router_1.Router, shopping_list_service_1.ShoppingListService])
                ], RecipeDetailComponent);
                return RecipeDetailComponent;
            }());
            exports_1("RecipeDetailComponent", RecipeDetailComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS1ib29rL3JlY2lwZS1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBU0E7Z0JBSUMsK0JBQ1MsWUFBeUIsRUFDekIsY0FBNkIsRUFDN0IsT0FBZSxFQUNmLG9CQUF5QztvQkFIekMsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBQ3pCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO29CQUM3QixZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUNmLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBcUI7Z0JBQUcsQ0FBQztnQkFDdEQsc0NBQU0sR0FBTjtvQkFDQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksRUFBRTs0QkFDcEMsUUFBUSxFQUFFLE1BQU07NEJBQ2hCLFNBQVMsRUFBRSxJQUFJLENBQUMsWUFBWTt5QkFDNUIsQ0FBQyxDQUFDLENBQUE7Z0JBQ0osQ0FBQztnQkFDRCx3Q0FBUSxHQUFSO29CQUNDLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUNyRCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pDLENBQUM7Z0JBQ0QsbURBQW1CLEdBQW5CO29CQUNDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDaEUsQ0FBQztnQkFDRCx3Q0FBUSxHQUFSO29CQUNDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUNyRCxJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztvQkFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FDMUMsU0FBUyxLQUFLLElBQUksR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUM7Z0JBQ2xELENBQUM7Z0JBL0JGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsV0FBVyxFQUFFLDhDQUE4Qzt3QkFDM0QsU0FBUyxFQUFFLENBQUMsMkNBQW1CLENBQUM7cUJBQ25DLENBQUM7O3lDQUFBO2dCQTZCRiw0QkFBQztZQUFELENBNUJBLEFBNEJDLElBQUE7WUE1QkQseURBNEJDLENBQUEiLCJmaWxlIjoicmVjaXBlLWJvb2svcmVjaXBlLWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7UmVjaXBlfSBmcm9tICcuLi9zaGFyZWQvcmVjaXBlJztcbmltcG9ydCB7Um91dGVQYXJhbXMsIFJvdXRlcn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7UmVjaXBlU2VydmljZX0gZnJvbSAnLi9yZWNpcGUuc2VydmljZSc7XG5pbXBvcnQge1Nob3BwaW5nTGlzdFNlcnZpY2V9IGZyb20gJy4uL3NoYXJlZC9zaG9wcGluZy1saXN0LnNlcnZpY2UnO1xuQENvbXBvbmVudCh7XG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvcmVjaXBlLWJvb2svcmVjaXBlLWRldGFpbC50cGwuaHRtbCcsXG4gICAgcHJvdmlkZXJzOiBbU2hvcHBpbmdMaXN0U2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgUmVjaXBlRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuXHRyZWNpcGU6IFJlY2lwZTtcblx0cHJpdmF0ZSBfcmVjaXBlSW5kZXg6IHN0cmluZztcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIF9yb3V0ZVBhcmFtczogUm91dGVQYXJhbXMsXG5cdFx0cHJpdmF0ZSBfcmVjaXBlU2VydmljZTogUmVjaXBlU2VydmljZSxcblx0XHRwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcblx0XHRwcml2YXRlIF9zaG9wcGluZ0xpc3RTZXJ2aWNlOiBTaG9wcGluZ0xpc3RTZXJ2aWNlKSB7fVxuXHRvbkVkaXQoKXtcblx0XHR0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydSZWNpcGVFZGl0Jywge1xuXHRcdFx0ZWRpdE1vZGU6ICdlZGl0Jyxcblx0XHRcdGl0ZW1JbmRleDogdGhpcy5fcmVjaXBlSW5kZXhcblx0XHR9XSlcblx0fVxuXHRvbkRlbGV0ZSgpIHtcblx0XHR0aGlzLl9yZWNpcGVTZXJ2aWNlLmRlbGV0ZVJlY2lwZSgrdGhpcy5fcmVjaXBlSW5kZXgpO1xuXHRcdHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ1JlY2lwZURldGFpbCddKTtcblx0fVxuXHRvbkFkZFRvU2hvcHBpbmdMaXN0KCkge1xuXHRcdHRoaXMuX3Nob3BwaW5nTGlzdFNlcnZpY2UuaW5zZXJ0SXRlbXModGhpcy5yZWNpcGUuaW5ncmVkaWVudHMpO1xuXHR9XG5cdG5nT25Jbml0KCk6YW55IHtcblx0XHRsZXQgaXRlbUluZGV4ID0gdGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdyZWNpcGVJbmRleCcpO1xuXHRcdHRoaXMuX3JlY2lwZUluZGV4ID0gaXRlbUluZGV4O1xuXHRcdHRoaXMucmVjaXBlID0gdGhpcy5fcmVjaXBlU2VydmljZS5nZXRSZWNpcGUoXG5cdFx0XHRpdGVtSW5kZXggIT09IG51bGwgPyAraXRlbUluZGV4IDogbnVsbCkgfHwgbnVsbDtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
