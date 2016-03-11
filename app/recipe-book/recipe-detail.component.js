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
                function RecipeDetailComponent(_routeParams, _recipeService, _router) {
                    this._routeParams = _routeParams;
                    this._recipeService = _recipeService;
                    this._router = _router;
                }
                RecipeDetailComponent.prototype.onEdit = function () {
                    this._router.navigate(['RecipeEdit', {
                            editMode: 'edit',
                            itemIndex: this._recipeIndex
                        }]);
                };
                RecipeDetailComponent.prototype.ngOnInit = function () {
                    var itemIndex = this._routeParams.get('recipeIndex');
                    this._recipeIndex = itemIndex;
                    this.recipe = this._recipeService.getRecipe(itemIndex !== null ? +itemIndex : null) || null;
                };
                RecipeDetailComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'templates/recipe-book/recipe-detail.tpl.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, recipe_service_1.RecipeService, router_1.Router])
                ], RecipeDetailComponent);
                return RecipeDetailComponent;
            }());
            exports_1("RecipeDetailComponent", RecipeDetailComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS1ib29rL3JlY2lwZS1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT0E7Z0JBSUMsK0JBQ1MsWUFBeUIsRUFDekIsY0FBNkIsRUFDN0IsT0FBZTtvQkFGZixpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFDekIsbUJBQWMsR0FBZCxjQUFjLENBQWU7b0JBQzdCLFlBQU8sR0FBUCxPQUFPLENBQVE7Z0JBQUcsQ0FBQztnQkFDNUIsc0NBQU0sR0FBTjtvQkFDQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksRUFBRTs0QkFDcEMsUUFBUSxFQUFFLE1BQU07NEJBQ2hCLFNBQVMsRUFBRSxJQUFJLENBQUMsWUFBWTt5QkFDNUIsQ0FBQyxDQUFDLENBQUE7Z0JBQ0osQ0FBQztnQkFDRCx3Q0FBUSxHQUFSO29CQUNDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUNyRCxJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztvQkFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FDMUMsU0FBUyxLQUFLLElBQUksR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUM7Z0JBQ2xELENBQUM7Z0JBdEJGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsV0FBVyxFQUFFLDhDQUE4QztxQkFDOUQsQ0FBQzs7eUNBQUE7Z0JBcUJGLDRCQUFDO1lBQUQsQ0FwQkEsQUFvQkMsSUFBQTtZQXBCRCx5REFvQkMsQ0FBQSIsImZpbGUiOiJyZWNpcGUtYm9vay9yZWNpcGUtZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtSZWNpcGV9IGZyb20gJy4uL3NoYXJlZC9yZWNpcGUnO1xuaW1wb3J0IHtSb3V0ZVBhcmFtcywgUm91dGVyfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtSZWNpcGVTZXJ2aWNlfSBmcm9tICcuL3JlY2lwZS5zZXJ2aWNlJztcbkBDb21wb25lbnQoe1xuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3JlY2lwZS1ib29rL3JlY2lwZS1kZXRhaWwudHBsLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFJlY2lwZURldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblx0cmVjaXBlOiBSZWNpcGU7XG5cdHByaXZhdGUgX3JlY2lwZUluZGV4OiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBfcm91dGVQYXJhbXM6IFJvdXRlUGFyYW1zLFxuXHRcdHByaXZhdGUgX3JlY2lwZVNlcnZpY2U6IFJlY2lwZVNlcnZpY2UsXG5cdFx0cHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHt9XG5cdG9uRWRpdCgpe1xuXHRcdHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ1JlY2lwZUVkaXQnLCB7XG5cdFx0XHRlZGl0TW9kZTogJ2VkaXQnLFxuXHRcdFx0aXRlbUluZGV4OiB0aGlzLl9yZWNpcGVJbmRleFxuXHRcdH1dKVxuXHR9XG5cdG5nT25Jbml0KCk6YW55IHtcblx0XHRsZXQgaXRlbUluZGV4ID0gdGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdyZWNpcGVJbmRleCcpO1xuXHRcdHRoaXMuX3JlY2lwZUluZGV4ID0gaXRlbUluZGV4O1xuXHRcdHRoaXMucmVjaXBlID0gdGhpcy5fcmVjaXBlU2VydmljZS5nZXRSZWNpcGUoXG5cdFx0XHRpdGVtSW5kZXggIT09IG51bGwgPyAraXRlbUluZGV4IDogbnVsbCkgfHwgbnVsbDtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
