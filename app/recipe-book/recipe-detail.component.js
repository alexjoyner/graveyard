System.register(['angular2/core', 'angular2/router', './recipe.service'], function(exports_1, context_1) {
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
    var core_1, router_1, recipe_service_1;
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
            }],
        execute: function() {
            RecipeDetailComponent = (function () {
                function RecipeDetailComponent(_routeParams, _recipeService) {
                    this._routeParams = _routeParams;
                    this._recipeService = _recipeService;
                }
                RecipeDetailComponent.prototype.ngOnInit = function () {
                    var itemIndex = this._routeParams.get('recipeIndex');
                    this._recipeIndex = itemIndex;
                    this.recipe = this._recipeService.getRecipe(itemIndex !== null ? +itemIndex : null) || null;
                };
                RecipeDetailComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'dev/recipe-book/recipe-detail.template.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, recipe_service_1.RecipeService])
                ], RecipeDetailComponent);
                return RecipeDetailComponent;
            }());
            exports_1("RecipeDetailComponent", RecipeDetailComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS1ib29rL3JlY2lwZS1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT0E7Z0JBSUMsK0JBQ1MsWUFBeUIsRUFDekIsY0FBNkI7b0JBRDdCLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUN6QixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtnQkFBRyxDQUFDO2dCQUUxQyx3Q0FBUSxHQUFSO29CQUNDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUNyRCxJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztvQkFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FDMUMsU0FBUyxLQUFLLElBQUksR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUM7Z0JBQ2xELENBQUM7Z0JBaEJGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsV0FBVyxFQUFFLDZDQUE2QztxQkFDN0QsQ0FBQzs7eUNBQUE7Z0JBZUYsNEJBQUM7WUFBRCxDQWRBLEFBY0MsSUFBQTtZQWRELHlEQWNDLENBQUEiLCJmaWxlIjoicmVjaXBlLWJvb2svcmVjaXBlLWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7UmVjaXBlfSBmcm9tICcuLi9zaGFyZWQvcmVjaXBlJztcbmltcG9ydCB7Um91dGVQYXJhbXN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge1JlY2lwZVNlcnZpY2V9IGZyb20gJy4vcmVjaXBlLnNlcnZpY2UnO1xuQENvbXBvbmVudCh7XG4gICAgdGVtcGxhdGVVcmw6ICdkZXYvcmVjaXBlLWJvb2svcmVjaXBlLWRldGFpbC50ZW1wbGF0ZS5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBSZWNpcGVEZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cdHJlY2lwZTogUmVjaXBlO1xuXHRwcml2YXRlIF9yZWNpcGVJbmRleDogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgX3JvdXRlUGFyYW1zOiBSb3V0ZVBhcmFtcyxcblx0XHRwcml2YXRlIF9yZWNpcGVTZXJ2aWNlOiBSZWNpcGVTZXJ2aWNlKSB7fVxuXG5cdG5nT25Jbml0KCk6YW55IHtcblx0XHRsZXQgaXRlbUluZGV4ID0gdGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdyZWNpcGVJbmRleCcpO1xuXHRcdHRoaXMuX3JlY2lwZUluZGV4ID0gaXRlbUluZGV4O1xuXHRcdHRoaXMucmVjaXBlID0gdGhpcy5fcmVjaXBlU2VydmljZS5nZXRSZWNpcGUoXG5cdFx0XHRpdGVtSW5kZXggIT09IG51bGwgPyAraXRlbUluZGV4IDogbnVsbCkgfHwgbnVsbDtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
