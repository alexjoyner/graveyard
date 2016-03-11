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
        if (!(control.value).match('\\d+')) {
            return { noNumbers: true };
        }
    }
    function greaterZero(control) {
        if (!control.value > 0) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS1ib29rL3JlY2lwZS1lZGl0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQTZEQSxvQkFBb0IsT0FBZ0I7UUFDbkMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ25DLE1BQU0sQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUM1QixDQUFDO0lBQ0YsQ0FBQztJQUNELHFCQUFxQixPQUFnQjtRQUNwQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QixNQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDM0IsQ0FBQztJQUNGLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7WUE3REQ7Z0JBS0MsNkJBQ1MsWUFBeUIsRUFDekIsY0FBNkIsRUFDN0IsWUFBeUI7b0JBRnpCLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUN6QixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtvQkFDN0IsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBTDFCLGNBQVMsR0FBRyxRQUFRLENBQUM7Z0JBTTFCLENBQUM7Z0JBRUosc0NBQVEsR0FBUjtvQkFDQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUNuRCxJQUFJLFlBQVksR0FBRyxFQUFFLENBQUM7b0JBQ3RCLElBQUksZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO29CQUMxQixJQUFJLGVBQWUsR0FBRyxFQUFFLENBQUM7b0JBQ3pCLElBQUksYUFBYSxHQUFpQixJQUFJLHFCQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBRXZELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssTUFBTSxDQUFDLENBQUEsQ0FBQzt3QkFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO3dCQUN4RCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzt3QkFDL0QsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUMsQ0FBQzs0QkFDeEQsYUFBYSxDQUFDLElBQUksQ0FDakIsSUFBSSxxQkFBWSxDQUNmO2dDQUNDLElBQUksRUFBRSxJQUFJLGdCQUFPLENBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFDL0IsbUJBQVUsQ0FBQyxRQUFRLENBQUM7Z0NBQ3JCLE1BQU0sRUFBRSxJQUFJLGdCQUFPLENBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFDakMsbUJBQVUsQ0FBQyxPQUFPLENBQUM7b0NBQ2xCLG1CQUFVLENBQUMsUUFBUTtvQ0FDbkIsVUFBVTtvQ0FDVixXQUFXO2lDQUNYLENBQUMsQ0FBQzs2QkFDSixDQUNELENBQ0QsQ0FBQzs0QkFDRixZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7NEJBQ2hDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDOzRCQUN4QyxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7d0JBQ3ZDLENBQUM7b0JBQ0YsQ0FBQztvQkFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO3dCQUNyQyxJQUFJLEVBQUUsQ0FBQyxZQUFZLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7d0JBQ3pDLFFBQVEsRUFBRSxDQUFDLGdCQUFnQixDQUFDO3dCQUM1QixPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUM7d0JBQzFCLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO3FCQUM1RCxDQUFDLENBQUE7Z0JBQ0gsQ0FBQztnQkFwREY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxXQUFXLEVBQUUsNENBQTRDO3FCQUM1RCxDQUFDOzt1Q0FBQTtnQkFtREYsMEJBQUM7WUFBRCxDQWxEQSxBQWtEQyxJQUFBO1lBbERELHFEQWtEQyxDQUFBIiwiZmlsZSI6InJlY2lwZS1ib29rL3JlY2lwZS1lZGl0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtDb250cm9sR3JvdXAsIENvbnRyb2xBcnJheSwgQ29udHJvbCwgVmFsaWRhdG9ycywgRm9ybUJ1aWxkZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5pbXBvcnQge1JvdXRlUGFyYW1zfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtSZWNpcGV9IGZyb20gJy4uL3NoYXJlZC9yZWNpcGUnO1xuaW1wb3J0IHtSZWNpcGVTZXJ2aWNlfSBmcm9tICcuL3JlY2lwZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvcmVjaXBlLWJvb2svcmVjaXBlLWVkaXQudHBsLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFJlY2lwZUVkaXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cdG15Rm9ybTogQ29udHJvbEdyb3VwO1xuXHRyZWNpcGU6IFJlY2lwZTtcblx0cHJpdmF0ZSBfZWRpdE1vZGUgPSAnY3JlYXRlJztcblx0cHJpdmF0ZSBfcmVjaXBlSW5kZXg6IG51bWJlcjtcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBfcm91dGVQYXJhbXM6IFJvdXRlUGFyYW1zLFxuXHRcdHByaXZhdGUgX3JlY2lwZVNlcnZpY2U6IFJlY2lwZVNlcnZpY2UsXG5cdFx0cHJpdmF0ZSBfZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyXG5cdCkge31cblxuXHRuZ09uSW5pdCgpOmFueSB7XG5cdFx0dGhpcy5fZWRpdE1vZGUgPSB0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ2VkaXRNb2RlJyk7XG5cdFx0bGV0IGZiUmVjaXBlTmFtZSA9ICcnO1xuXHRcdGxldCBmYlJlY2lwZUltYWdlVXJsID0gJyc7XG5cdFx0bGV0IGZiUmVjaXBlQ29udGVudCA9ICcnO1xuXHRcdGxldCBmYkluZ3JlZGllbnRzOiBDb250cm9sQXJyYXkgPSBuZXcgQ29udHJvbEFycmF5KFtdKTtcblxuXHRcdGlmKHRoaXMuX2VkaXRNb2RlID09PSAnZWRpdCcpe1xuXHRcdFx0dGhpcy5fcmVjaXBlSW5kZXggPSArdGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdpdGVtSW5kZXgnKTtcblx0XHRcdHRoaXMucmVjaXBlID0gdGhpcy5fcmVjaXBlU2VydmljZS5nZXRSZWNpcGUodGhpcy5fcmVjaXBlSW5kZXgpO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJlY2lwZS5pbmdyZWRpZW50cy5sZW5ndGg7IGkrKyl7XG5cdFx0XHRcdGZiSW5ncmVkaWVudHMucHVzaChcblx0XHRcdFx0XHRuZXcgQ29udHJvbEdyb3VwKFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRuYW1lOiBuZXcgQ29udHJvbChcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnJlY2lwZS5pbmdyZWRpZW50c1tpXS5uYW1lLFxuXHRcdFx0XHRcdFx0XHRcdFZhbGlkYXRvcnMucmVxdWlyZWQpLFxuXHRcdFx0XHRcdFx0XHRhbW91bnQ6IG5ldyBDb250cm9sKFxuXHRcdFx0XHRcdFx0XHRcdHRoaXMucmVjaXBlLmluZ3JlZGllbnRzW2ldLmFtb3VudCxcblx0XHRcdFx0XHRcdFx0XHRWYWxpZGF0b3JzLmNvbXBvc2UoW1xuXHRcdFx0XHRcdFx0XHRcdFx0VmFsaWRhdG9ycy5yZXF1aXJlZCxcblx0XHRcdFx0XHRcdFx0XHRcdGhhc051bWJlcnMsXG5cdFx0XHRcdFx0XHRcdFx0XHRncmVhdGVyWmVyb1xuXHRcdFx0XHRcdFx0XHRcdF0pKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdClcblx0XHRcdFx0KTtcblx0XHRcdFx0ZmJSZWNpcGVOYW1lID0gdGhpcy5yZWNpcGUubmFtZTtcblx0XHRcdFx0ZmJSZWNpcGVJbWFnZVVybCA9IHRoaXMucmVjaXBlLmltYWdlVXJsO1xuXHRcdFx0XHRmYlJlY2lwZUNvbnRlbnQgPSB0aGlzLnJlY2lwZS5jb250ZW50O1xuXHRcdFx0fVxuXHRcdH1cblx0XHR0aGlzLm15Rm9ybSA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcblx0XHRcdG5hbWU6IFtmYlJlY2lwZU5hbWUsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuXHRcdFx0aW1hZ2VVcmw6IFtmYlJlY2lwZUltYWdlVXJsXSxcblx0XHRcdGNvbnRlbnQ6IFtmYlJlY2lwZUNvbnRlbnRdLFxuXHRcdFx0aW5ncmVkaWVudHM6IHRoaXMuX2Zvcm1CdWlsZGVyLmFycmF5KGZiSW5ncmVkaWVudHMuY29udHJvbHMpXG5cdFx0fSlcblx0fVxufVxuXG5mdW5jdGlvbiBoYXNOdW1iZXJzKGNvbnRyb2w6IENvbnRyb2wpOntbczogc3RyaW5nXTpib29sZWFufXtcblx0aWYgKCEoY29udHJvbC52YWx1ZSkubWF0Y2goJ1xcXFxkKycpKXtcblx0XHRyZXR1cm4geyBub051bWJlcnM6IHRydWUgfTtcblx0fVxufVxuZnVuY3Rpb24gZ3JlYXRlclplcm8oY29udHJvbDogQ29udHJvbCk6e1tzOiBzdHJpbmddOiBib29sZWFufSB7XG5cdGlmICghY29udHJvbC52YWx1ZSA+IDApIHtcblx0XHRyZXR1cm4geyB0b29TbWFsbDogdHJ1ZSB9O1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
