System.register(['angular2/core', './recipe.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, recipe_service_1, router_1;
    var RecipeListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (recipe_service_1_1) {
                recipe_service_1 = recipe_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            RecipeListComponent = (function () {
                function RecipeListComponent(_recipeService, _router) {
                    this._recipeService = _recipeService;
                    this._router = _router;
                }
                ;
                RecipeListComponent.prototype.onSelect = function (item) {
                    this._router.navigate(['RecipeDetail', { recipeIndex: Number(this._recipeService.getRecipeIndex(item)) }]);
                };
                RecipeListComponent.prototype.ngOnInit = function () {
                    this.recipes = this._recipeService.getAllRecipes();
                };
                RecipeListComponent.prototype.onAddRecipe = function () {
                    this._router.navigate(['RecipeEdit', { editMode: 'create' }]);
                };
                RecipeListComponent = __decorate([
                    core_1.Component({
                        selector: 'my-recipe-list',
                        templateUrl: 'templates/recipe-book/recipe-list.tpl.html'
                    }), 
                    __metadata('design:paramtypes', [recipe_service_1.RecipeService, router_1.Router])
                ], RecipeListComponent);
                return RecipeListComponent;
            }());
            exports_1("RecipeListComponent", RecipeListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS1ib29rL3JlY2lwZS1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVNBO2dCQUdDLDZCQUNTLGNBQTZCLEVBQzdCLE9BQWU7b0JBRGYsbUJBQWMsR0FBZCxjQUFjLENBQWU7b0JBQzdCLFlBQU8sR0FBUCxPQUFPLENBQVE7Z0JBQ3JCLENBQUM7O2dCQUNKLHNDQUFRLEdBQVIsVUFBUyxJQUFZO29CQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsRUFBRSxFQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUcsQ0FBQztnQkFDRCxzQ0FBUSxHQUFSO29CQUNDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDcEQsQ0FBQztnQkFDRCx5Q0FBVyxHQUFYO29CQUNDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxFQUFFLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDL0QsQ0FBQztnQkFuQkY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsZ0JBQWdCO3dCQUMxQixXQUFXLEVBQUUsNENBQTRDO3FCQUM1RCxDQUFDOzt1Q0FBQTtnQkFpQkYsMEJBQUM7WUFBRCxDQWhCQSxBQWdCQyxJQUFBO1lBaEJELHFEQWdCQyxDQUFBIiwiZmlsZSI6InJlY2lwZS1ib29rL3JlY2lwZS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtSZWNpcGVTZXJ2aWNlfSBmcm9tICcuL3JlY2lwZS5zZXJ2aWNlJztcbmltcG9ydCB7UmVjaXBlfSBmcm9tICcuLi9zaGFyZWQvcmVjaXBlJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LXJlY2lwZS1saXN0JyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9yZWNpcGUtYm9vay9yZWNpcGUtbGlzdC50cGwuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgUmVjaXBlTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdHJlY2lwZXM6IFJlY2lwZVtdO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgX3JlY2lwZVNlcnZpY2U6IFJlY2lwZVNlcnZpY2UsIFxuXHRcdHByaXZhdGUgX3JvdXRlcjogUm91dGVyXG5cdCkge307XG5cdG9uU2VsZWN0KGl0ZW06IFJlY2lwZSl7XG5cdFx0dGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnUmVjaXBlRGV0YWlsJywge3JlY2lwZUluZGV4OiBOdW1iZXIodGhpcy5fcmVjaXBlU2VydmljZS5nZXRSZWNpcGVJbmRleChpdGVtKSl9XSk7XG5cdH1cblx0bmdPbkluaXQoKTogYW55IHtcblx0XHR0aGlzLnJlY2lwZXMgPSB0aGlzLl9yZWNpcGVTZXJ2aWNlLmdldEFsbFJlY2lwZXMoKTtcblx0fVxuXHRvbkFkZFJlY2lwZSgpe1xuXHRcdHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ1JlY2lwZUVkaXQnLCB7IGVkaXRNb2RlOiAnY3JlYXRlJyB9XSk7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
