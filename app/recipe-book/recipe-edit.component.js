System.register(['angular2/core', 'angular2/common', 'angular2/router', './recipe.service'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, recipe_service_1;
    var RecipeEditComponent;
    function hasNumbers(control) {
        if (!('' + control.value).match('\\d+')) {
            return { noNumbers: true };
        }
    }
    function greaterZero(control) {
        if (!(+control.value) > 0) {
            return { tooSmall: true };
        }
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (recipe_service_1_1) {
                recipe_service_1 = recipe_service_1_1;
            }],
        execute: function() {
            RecipeEditComponent = (function () {
                function RecipeEditComponent(_routeParams, _recipeService, _formBuilder) {
                    this._routeParams = _routeParams;
                    this._recipeService = _recipeService;
                    this._formBuilder = _formBuilder;
                    this._editMode = 'create';
                }
                RecipeEditComponent.prototype.ngOnInit = function () {
                    this._editMode = this._routeParams.get('editMode');
                    var fbRecipeName = '';
                    var fbRecipeImageUrl = '';
                    var fbRecipeContent = '';
                    var fbIngredients = new common_1.ControlArray([]);
                    if (this._editMode === 'edit') {
                        this._recipeIndex = +this._routeParams.get('itemIndex');
                        this.recipe = this._recipeService.getRecipe(this._recipeIndex);
                        for (var i = 0; i < this.recipe.ingredients.length; i++) {
                            fbIngredients.push(new common_1.ControlGroup({
                                name: new common_1.Control(this.recipe.ingredients[i].name, common_1.Validators.required),
                                amount: new common_1.Control(this.recipe.ingredients[i].amount, common_1.Validators.compose([
                                    common_1.Validators.required,
                                    hasNumbers,
                                    greaterZero
                                ]))
                            }));
                            fbRecipeName = this.recipe.name;
                            fbRecipeImageUrl = this.recipe.imageUrl;
                            fbRecipeContent = this.recipe.content;
                        }
                    }
                    this.myForm = this._formBuilder.group({
                        name: [fbRecipeName, common_1.Validators.required],
                        imageUrl: [fbRecipeImageUrl],
                        content: [fbRecipeContent],
                        ingredients: this._formBuilder.array(fbIngredients.controls)
                    });
                };
                RecipeEditComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'templates/recipe-book/recipe-edit.tpl.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, recipe_service_1.RecipeService, common_1.FormBuilder])
                ], RecipeEditComponent);
                return RecipeEditComponent;
            }());
            exports_1("RecipeEditComponent", RecipeEditComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS1ib29rL3JlY2lwZS1lZGl0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQTZEQSxvQkFBb0IsT0FBZ0I7UUFDbkMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUN0QyxNQUFNLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDNUIsQ0FBQztJQUNGLENBQUM7SUFDRCxxQkFBcUIsT0FBZ0I7UUFDcEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0IsTUFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO1FBQzNCLENBQUM7SUFDRixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O1lBN0REO2dCQUtDLDZCQUNTLFlBQXlCLEVBQ3pCLGNBQTZCLEVBQzdCLFlBQXlCO29CQUZ6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFDekIsbUJBQWMsR0FBZCxjQUFjLENBQWU7b0JBQzdCLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUwxQixjQUFTLEdBQUcsUUFBUSxDQUFDO2dCQU0xQixDQUFDO2dCQUVKLHNDQUFRLEdBQVI7b0JBQ0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDbkQsSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDO29CQUN0QixJQUFJLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztvQkFDMUIsSUFBSSxlQUFlLEdBQUcsRUFBRSxDQUFDO29CQUN6QixJQUFJLGFBQWEsR0FBaUIsSUFBSSxxQkFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUV2RCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLE1BQU0sQ0FBQyxDQUFBLENBQUM7d0JBQzdCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQzt3QkFDeEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7d0JBQy9ELEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFDLENBQUM7NEJBQ3hELGFBQWEsQ0FBQyxJQUFJLENBQ2pCLElBQUkscUJBQVksQ0FDZjtnQ0FDQyxJQUFJLEVBQUUsSUFBSSxnQkFBTyxDQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQy9CLG1CQUFVLENBQUMsUUFBUSxDQUFDO2dDQUNyQixNQUFNLEVBQUUsSUFBSSxnQkFBTyxDQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQ2pDLG1CQUFVLENBQUMsT0FBTyxDQUFDO29DQUNsQixtQkFBVSxDQUFDLFFBQVE7b0NBQ25CLFVBQVU7b0NBQ1YsV0FBVztpQ0FDWCxDQUFDLENBQUM7NkJBQ0osQ0FDRCxDQUNELENBQUM7NEJBQ0YsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDOzRCQUNoQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQzs0QkFDeEMsZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO3dCQUN2QyxDQUFDO29CQUNGLENBQUM7b0JBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQzt3QkFDckMsSUFBSSxFQUFFLENBQUMsWUFBWSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO3dCQUN6QyxRQUFRLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQzt3QkFDNUIsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDO3dCQUMxQixXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQztxQkFDNUQsQ0FBQyxDQUFBO2dCQUNILENBQUM7Z0JBcERGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsV0FBVyxFQUFFLDRDQUE0QztxQkFDNUQsQ0FBQzs7dUNBQUE7Z0JBbURGLDBCQUFDO1lBQUQsQ0FsREEsQUFrREMsSUFBQTtZQWxERCxxREFrREMsQ0FBQSIsImZpbGUiOiJyZWNpcGUtYm9vay9yZWNpcGUtZWRpdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Q29udHJvbEdyb3VwLCBDb250cm9sQXJyYXksIENvbnRyb2wsIFZhbGlkYXRvcnMsIEZvcm1CdWlsZGVyfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuaW1wb3J0IHtSb3V0ZVBhcmFtc30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7UmVjaXBlfSBmcm9tICcuLi9zaGFyZWQvcmVjaXBlJztcbmltcG9ydCB7UmVjaXBlU2VydmljZX0gZnJvbSAnLi9yZWNpcGUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3JlY2lwZS1ib29rL3JlY2lwZS1lZGl0LnRwbC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBSZWNpcGVFZGl0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuXHRteUZvcm06IENvbnRyb2xHcm91cDtcblx0cmVjaXBlOiBSZWNpcGU7XG5cdHByaXZhdGUgX2VkaXRNb2RlID0gJ2NyZWF0ZSc7XG5cdHByaXZhdGUgX3JlY2lwZUluZGV4OiBudW1iZXI7XG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgX3JvdXRlUGFyYW1zOiBSb3V0ZVBhcmFtcyxcblx0XHRwcml2YXRlIF9yZWNpcGVTZXJ2aWNlOiBSZWNpcGVTZXJ2aWNlLFxuXHRcdHByaXZhdGUgX2Zvcm1CdWlsZGVyOiBGb3JtQnVpbGRlclxuXHQpIHt9XG5cblx0bmdPbkluaXQoKTphbnkge1xuXHRcdHRoaXMuX2VkaXRNb2RlID0gdGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdlZGl0TW9kZScpO1xuXHRcdGxldCBmYlJlY2lwZU5hbWUgPSAnJztcblx0XHRsZXQgZmJSZWNpcGVJbWFnZVVybCA9ICcnO1xuXHRcdGxldCBmYlJlY2lwZUNvbnRlbnQgPSAnJztcblx0XHRsZXQgZmJJbmdyZWRpZW50czogQ29udHJvbEFycmF5ID0gbmV3IENvbnRyb2xBcnJheShbXSk7XG5cblx0XHRpZih0aGlzLl9lZGl0TW9kZSA9PT0gJ2VkaXQnKXtcblx0XHRcdHRoaXMuX3JlY2lwZUluZGV4ID0gK3RoaXMuX3JvdXRlUGFyYW1zLmdldCgnaXRlbUluZGV4Jyk7XG5cdFx0XHR0aGlzLnJlY2lwZSA9IHRoaXMuX3JlY2lwZVNlcnZpY2UuZ2V0UmVjaXBlKHRoaXMuX3JlY2lwZUluZGV4KTtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yZWNpcGUuaW5ncmVkaWVudHMubGVuZ3RoOyBpKyspe1xuXHRcdFx0XHRmYkluZ3JlZGllbnRzLnB1c2goXG5cdFx0XHRcdFx0bmV3IENvbnRyb2xHcm91cChcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0bmFtZTogbmV3IENvbnRyb2woXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5yZWNpcGUuaW5ncmVkaWVudHNbaV0ubmFtZSxcblx0XHRcdFx0XHRcdFx0XHRWYWxpZGF0b3JzLnJlcXVpcmVkKSxcblx0XHRcdFx0XHRcdFx0YW1vdW50OiBuZXcgQ29udHJvbChcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnJlY2lwZS5pbmdyZWRpZW50c1tpXS5hbW91bnQsXG5cdFx0XHRcdFx0XHRcdFx0VmFsaWRhdG9ycy5jb21wb3NlKFtcblx0XHRcdFx0XHRcdFx0XHRcdFZhbGlkYXRvcnMucmVxdWlyZWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRoYXNOdW1iZXJzLFxuXHRcdFx0XHRcdFx0XHRcdFx0Z3JlYXRlclplcm9cblx0XHRcdFx0XHRcdFx0XHRdKSlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQpXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGZiUmVjaXBlTmFtZSA9IHRoaXMucmVjaXBlLm5hbWU7XG5cdFx0XHRcdGZiUmVjaXBlSW1hZ2VVcmwgPSB0aGlzLnJlY2lwZS5pbWFnZVVybDtcblx0XHRcdFx0ZmJSZWNpcGVDb250ZW50ID0gdGhpcy5yZWNpcGUuY29udGVudDtcblx0XHRcdH1cblx0XHR9XG5cdFx0dGhpcy5teUZvcm0gPSB0aGlzLl9mb3JtQnVpbGRlci5ncm91cCh7XG5cdFx0XHRuYW1lOiBbZmJSZWNpcGVOYW1lLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcblx0XHRcdGltYWdlVXJsOiBbZmJSZWNpcGVJbWFnZVVybF0sXG5cdFx0XHRjb250ZW50OiBbZmJSZWNpcGVDb250ZW50XSxcblx0XHRcdGluZ3JlZGllbnRzOiB0aGlzLl9mb3JtQnVpbGRlci5hcnJheShmYkluZ3JlZGllbnRzLmNvbnRyb2xzKVxuXHRcdH0pXG5cdH1cbn1cblxuZnVuY3Rpb24gaGFzTnVtYmVycyhjb250cm9sOiBDb250cm9sKTp7W3M6IHN0cmluZ106Ym9vbGVhbn17XG5cdGlmICghKCcnK2NvbnRyb2wudmFsdWUpLm1hdGNoKCdcXFxcZCsnKSl7XG5cdFx0cmV0dXJuIHsgbm9OdW1iZXJzOiB0cnVlIH07XG5cdH1cbn1cbmZ1bmN0aW9uIGdyZWF0ZXJaZXJvKGNvbnRyb2w6IENvbnRyb2wpOntbczogc3RyaW5nXTogYm9vbGVhbn0ge1xuXHRpZiAoISgrY29udHJvbC52YWx1ZSkgPiAwKSB7XG5cdFx0cmV0dXJuIHsgdG9vU21hbGw6IHRydWUgfTtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
