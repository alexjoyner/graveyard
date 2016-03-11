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
                function RecipeEditComponent(_routeParams, _recipeService, _formBuilder, _router) {
                    this._routeParams = _routeParams;
                    this._recipeService = _recipeService;
                    this._formBuilder = _formBuilder;
                    this._router = _router;
                    this._editMode = 'create';
                    this._submitted = false;
                }
                RecipeEditComponent.prototype.onAddItem = function (itemName, itemAmount) {
                    this.myForm.controls['ingredients'].push(new common_1.ControlGroup({
                        name: new common_1.Control(itemName, common_1.Validators.required),
                        amount: new common_1.Control(itemAmount, common_1.Validators.compose([
                            common_1.Validators.required,
                            hasNumbers,
                            greaterZero
                        ]))
                    }));
                };
                RecipeEditComponent.prototype.onRemoveItem = function (index) {
                    this.myForm.controls['ingredients'].removeAt(index);
                };
                RecipeEditComponent.prototype.onSubmit = function () {
                    this.recipe = this.myForm.value;
                    if (this._editMode === 'edit') {
                        this._recipeService.updateRecipe(this._recipeIndex, this.recipe);
                    }
                    else {
                        this._recipeService.insertRecipe(this.recipe);
                    }
                    this._submitted = true;
                    this.navigateBack();
                };
                RecipeEditComponent.prototype.onCancel = function () {
                    this.navigateBack();
                };
                RecipeEditComponent.prototype.navigateBack = function () {
                    this._router.navigate(['RecipeDetail', { recipeIndex: this._recipeIndex }]);
                };
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
                RecipeEditComponent.prototype.routerCanDeactivate = function (nextInstruction, prevInstruction) {
                    if (this._submitted || this.myForm.pristine) {
                        return true;
                    }
                    return confirm("Sure?");
                };
                RecipeEditComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'templates/recipe-book/recipe-edit.tpl.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, recipe_service_1.RecipeService, common_1.FormBuilder, router_1.Router])
                ], RecipeEditComponent);
                return RecipeEditComponent;
            }());
            exports_1("RecipeEditComponent", RecipeEditComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS1ib29rL3JlY2lwZS1lZGl0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQXlHQSxvQkFBb0IsT0FBZ0I7UUFDbkMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUN0QyxNQUFNLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDNUIsQ0FBQztJQUNGLENBQUM7SUFDRCxxQkFBcUIsT0FBZ0I7UUFDcEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0IsTUFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO1FBQzNCLENBQUM7SUFDRixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O1lBekdEO2dCQU1DLDZCQUNTLFlBQXlCLEVBQ3pCLGNBQTZCLEVBQzdCLFlBQXlCLEVBQ3pCLE9BQWU7b0JBSGYsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBQ3pCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO29CQUM3QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFDekIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtvQkFQaEIsY0FBUyxHQUFHLFFBQVEsQ0FBQztvQkFFckIsZUFBVSxHQUFHLEtBQUssQ0FBQztnQkFNeEIsQ0FBQztnQkFDSix1Q0FBUyxHQUFULFVBQVUsUUFBZ0IsRUFBRSxVQUFrQjtvQkFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFFLENBQUMsSUFBSSxDQUN2RCxJQUFJLHFCQUFZLENBQ2Y7d0JBQ0MsSUFBSSxFQUFFLElBQUksZ0JBQU8sQ0FDaEIsUUFBUSxFQUNSLG1CQUFVLENBQUMsUUFBUSxDQUFDO3dCQUNyQixNQUFNLEVB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LENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzs0QkFDaEMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7NEJBQ3hDLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQzt3QkFDdkMsQ0FBQztvQkFDRixDQUFDO29CQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7d0JBQ3JDLElBQUksRUFBRSxDQUFDLFlBQVksRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQzt3QkFDekMsUUFBUSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7d0JBQzVCLE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQzt3QkFDMUIsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7cUJBQzVELENBQUMsQ0FBQTtnQkFDSCxDQUFDO2dCQUNELGlEQUFtQixHQUFuQixVQUFvQixlQUFxQyxFQUFFLGVBQXFDO29CQUMvRixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzt3QkFDNUMsTUFBTSxDQUFDLElBQUksQ0FBQztvQkFDYixDQUFDO29CQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3pCLENBQUM7Z0JBaEdGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsV0FBVyxFQUFFLDRDQUE0QztxQkFDNUQsQ0FBQzs7dUNBQUE7Z0JBK0ZGLDBCQUFDO1lBQUQsQ0E5RkEsQUE4RkMsSUFBQTtZQTlGRCxxREE4RkMsQ0FBQSIsImZpbGUiOiJyZWNpcGUtYm9vay9yZWNpcGUtZWRpdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Q29udHJvbEdyb3VwLCBDb250cm9sQXJyYXksIENvbnRyb2wsIFZhbGlkYXRvcnMsIEZvcm1CdWlsZGVyfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuaW1wb3J0IHtSb3V0ZVBhcmFtcywgUm91dGVyLCBDYW5EZWFjdGl2YXRlLCBDb21wb25lbnRJbnN0cnVjdGlvbn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7UmVjaXBlfSBmcm9tICcuLi9zaGFyZWQvcmVjaXBlJztcbmltcG9ydCB7UmVjaXBlU2VydmljZX0gZnJvbSAnLi9yZWNpcGUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3JlY2lwZS1ib29rL3JlY2lwZS1lZGl0LnRwbC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBSZWNpcGVFZGl0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBDYW5EZWFjdGl2YXRle1xuXHRteUZvcm06IENvbnRyb2xHcm91cDtcblx0cmVjaXBlOiBSZWNpcGU7XG5cdHByaXZhdGUgX2VkaXRNb2RlID0gJ2NyZWF0ZSc7XG5cdHByaXZhdGUgX3JlY2lwZUluZGV4OiBudW1iZXI7XG5cdHByaXZhdGUgX3N1Ym1pdHRlZCA9IGZhbHNlO1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIF9yb3V0ZVBhcmFtczogUm91dGVQYXJhbXMsXG5cdFx0cHJpdmF0ZSBfcmVjaXBlU2VydmljZTogUmVjaXBlU2VydmljZSxcblx0XHRwcml2YXRlIF9mb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG5cdFx0cHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXJcblx0KSB7fVxuXHRvbkFkZEl0ZW0oaXRlbU5hbWU6IHN0cmluZywgaXRlbUFtb3VudDogc3RyaW5nKXtcblx0XHQoPENvbnRyb2xBcnJheT50aGlzLm15Rm9ybS5jb250cm9sc1snaW5ncmVkaWVudHMnXSkucHVzaChcblx0XHRcdG5ldyBDb250cm9sR3JvdXAoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRuYW1lOiBuZXcgQ29udHJvbChcblx0XHRcdFx0XHRcdGl0ZW1OYW1lLFxuXHRcdFx0XHRcdFx0VmFsaWRhdG9ycy5yZXF1aXJlZCksXG5cdFx0XHRcdFx0YW1vdW50OiBuZXcgQ29udHJvbChcblx0XHRcdFx0XHRcdGl0ZW1BbW91bnQsXG5cdFx0XHRcdFx0XHRWYWxpZGF0b3JzLmNvbXBvc2UoW1xuXHRcdFx0XHRcdFx0XHRWYWxpZGF0b3JzLnJlcXVpcmVkLFxuXHRcdFx0XHRcdFx0XHRoYXNOdW1iZXJzLFxuXHRcdFx0XHRcdFx0XHRncmVhdGVyWmVyb1xuXHRcdFx0XHRcdFx0XSkpXG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHQpXG5cdH1cblx0b25SZW1vdmVJdGVtKGluZGV4OiBudW1iZXIpIHtcblx0XHQoPENvbnRyb2xBcnJheT50aGlzLm15Rm9ybS5jb250cm9sc1snaW5ncmVkaWVudHMnXSkucmVtb3ZlQXQoaW5kZXgpO1xuXHR9XG5cdG9uU3VibWl0KCl7XG5cdFx0dGhpcy5yZWNpcGUgPSB0aGlzLm15Rm9ybS52YWx1ZTtcblx0XHRpZiAodGhpcy5fZWRpdE1vZGUgPT09ICdlZGl0Jyl7XG5cdFx0XHR0aGlzLl9yZWNpcGVTZXJ2aWNlLnVwZGF0ZVJlY2lwZSh0aGlzLl9yZWNpcGVJbmRleCwgdGhpcy5yZWNpcGUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl9yZWNpcGVTZXJ2aWNlLmluc2VydFJlY2lwZSh0aGlzLnJlY2lwZSk7XG5cdFx0fVxuXHRcdHRoaXMuX3N1Ym1pdHRlZCA9IHRydWU7XG5cdFx0dGhpcy5uYXZpZ2F0ZUJhY2soKTtcblx0fVxuXHRvbkNhbmNlbCgpe1xuXHRcdHRoaXMubmF2aWdhdGVCYWNrKCk7XG5cdH1cblx0cHJpdmF0ZSBuYXZpZ2F0ZUJhY2soKXtcblx0XHR0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydSZWNpcGVEZXRhaWwnLCB7IHJlY2lwZUluZGV4OiB0aGlzLl9yZWNpcGVJbmRleCB9XSk7XG5cdH1cblx0bmdPbkluaXQoKTphbnkge1xuXHRcdHRoaXMuX2VkaXRNb2RlID0gdGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdlZGl0TW9kZScpO1xuXHRcdGxldCBmYlJlY2lwZU5hbWUgPSAnJztcblx0XHRsZXQgZmJSZWNpcGVJbWFnZVVybCA9ICcnO1xuXHRcdGxldCBmYlJlY2lwZUNvbnRlbnQgPSAnJztcblx0XHRsZXQgZmJJbmdyZWRpZW50czogQ29udHJvbEFycmF5ID0gbmV3IENvbnRyb2xBcnJheShbXSk7XG5cblx0XHRpZih0aGlzLl9lZGl0TW9kZSA9PT0gJ2VkaXQnKXtcblx0XHRcdHRoaXMuX3JlY2lwZUluZGV4ID0gK3RoaXMuX3JvdXRlUGFyYW1zLmdldCgnaXRlbUluZGV4Jyk7XG5cdFx0XHR0aGlzLnJlY2lwZSA9IHRoaXMuX3JlY2lwZVNlcnZpY2UuZ2V0UmVjaXBlKHRoaXMuX3JlY2lwZUluZGV4KTtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yZWNpcGUuaW5ncmVkaWVudHMubGVuZ3RoOyBpKyspe1xuXHRcdFx0XHRmYkluZ3JlZGllbnRzLnB1c2goXG5cdFx0XHRcdFx0bmV3IENvbnRyb2xHcm91cChcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0bmFtZTogbmV3IENvbnRyb2woXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5yZWNpcGUuaW5ncmVkaWVudHNbaV0ubmFtZSxcblx0XHRcdFx0XHRcdFx0XHRWYWxpZGF0b3JzLnJlcXVpcmVkKSxcblx0XHRcdFx0XHRcdFx0YW1vdW50OiBuZXcgQ29udHJvbChcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnJlY2lwZS5pbmdyZWRpZW50c1tpXS5hbW91bnQsXG5cdFx0XHRcdFx0XHRcdFx0VmFsaWRhdG9ycy5jb21wb3NlKFtcblx0XHRcdFx0XHRcdFx0XHRcdFZhbGlkYXRvcnMucmVxdWlyZWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRoYXNOdW1iZXJzLFxuXHRcdFx0XHRcdFx0XHRcdFx0Z3JlYXRlclplcm9cblx0XHRcdFx0XHRcdFx0XHRdKSlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQpXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGZiUmVjaXBlTmFtZSA9IHRoaXMucmVjaXBlLm5hbWU7XG5cdFx0XHRcdGZiUmVjaXBlSW1hZ2VVcmwgPSB0aGlzLnJlY2lwZS5pbWFnZVVybDtcblx0XHRcdFx0ZmJSZWNpcGVDb250ZW50ID0gdGhpcy5yZWNpcGUuY29udGVudDtcblx0XHRcdH1cblx0XHR9XG5cdFx0dGhpcy5teUZvcm0gPSB0aGlzLl9mb3JtQnVpbGRlci5ncm91cCh7XG5cdFx0XHRuYW1lOiBbZmJSZWNpcGVOYW1lLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcblx0XHRcdGltYWdlVXJsOiBbZmJSZWNpcGVJbWFnZVVybF0sXG5cdFx0XHRjb250ZW50OiBbZmJSZWNpcGVDb250ZW50XSxcblx0XHRcdGluZ3JlZGllbnRzOiB0aGlzLl9mb3JtQnVpbGRlci5hcnJheShmYkluZ3JlZGllbnRzLmNvbnRyb2xzKVxuXHRcdH0pXG5cdH1cblx0cm91dGVyQ2FuRGVhY3RpdmF0ZShuZXh0SW5zdHJ1Y3Rpb246IENvbXBvbmVudEluc3RydWN0aW9uLCBwcmV2SW5zdHJ1Y3Rpb246IENvbXBvbmVudEluc3RydWN0aW9uKXtcblx0XHRpZih0aGlzLl9zdWJtaXR0ZWQgfHwgdGhpcy5teUZvcm0ucHJpc3RpbmUpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRyZXR1cm4gY29uZmlybShcIlN1cmU/XCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGhhc051bWJlcnMoY29udHJvbDogQ29udHJvbCk6e1tzOiBzdHJpbmddOmJvb2xlYW59e1xuXHRpZiAoISgnJytjb250cm9sLnZhbHVlKS5tYXRjaCgnXFxcXGQrJykpe1xuXHRcdHJldHVybiB7IG5vTnVtYmVyczogdHJ1ZSB9O1xuXHR9XG59XG5mdW5jdGlvbiBncmVhdGVyWmVybyhjb250cm9sOiBDb250cm9sKTp7W3M6IHN0cmluZ106IGJvb2xlYW59IHtcblx0aWYgKCEoK2NvbnRyb2wudmFsdWUpID4gMCkge1xuXHRcdHJldHVybiB7IHRvb1NtYWxsOiB0cnVlIH07XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
