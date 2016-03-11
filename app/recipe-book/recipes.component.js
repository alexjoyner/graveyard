System.register(['angular2/core', './recipe.service', './recipe-list.component', 'angular2/router', './recipe-detail.component'], function(exports_1, context_1) {
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
    var core_1, recipe_service_1, recipe_list_component_1, router_1, recipe_detail_component_1;
    var RecipesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (recipe_service_1_1) {
                recipe_service_1 = recipe_service_1_1;
            },
            function (recipe_list_component_1_1) {
                recipe_list_component_1 = recipe_list_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (recipe_detail_component_1_1) {
                recipe_detail_component_1 = recipe_detail_component_1_1;
            }],
        execute: function() {
            RecipesComponent = (function () {
                function RecipesComponent() {
                }
                RecipesComponent = __decorate([
                    core_1.Component({
                        selector: 'my-recipes',
                        templateUrl: 'templates/recipe-book/recipe.tpl.html',
                        providers: [recipe_service_1.RecipeService],
                        directives: [recipe_list_component_1.RecipeListComponent, router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'RecipeDetail', component: recipe_detail_component_1.RecipeDetailComponent,
                            useAsDefault: true },
                        { path: '/:editMode', name: 'RecipeEdit', component: recipe_detail_component_1.RecipeDetailComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], RecipesComponent);
                return RecipesComponent;
            }());
            exports_1("RecipesComponent", RecipesComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS1ib29rL3JlY2lwZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZ0JBO2dCQUFBO2dCQUVBLENBQUM7Z0JBYkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixRQUFRLEVBQUUsWUFBWTt3QkFDdEIsV0FBVyxFQUFFLHVDQUF1Qzt3QkFDcEQsU0FBUyxFQUFFLENBQUMsOEJBQWEsQ0FBQzt3QkFDMUIsVUFBVSxFQUFFLENBQUMsMkNBQW1CLEVBQUUsMEJBQWlCLENBQUM7cUJBQ3BELENBQUM7b0JBQ0Qsb0JBQVcsQ0FBQzt3QkFDWixFQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsK0NBQXFCOzRCQUNsRSxZQUFZLEVBQUUsSUFBSSxFQUFDO3dCQUNuQixFQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsK0NBQXFCLEVBQUM7cUJBQzFFLENBQUM7O29DQUFBO2dCQUdGLHVCQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCwrQ0FFQyxDQUFBIiwiZmlsZSI6InJlY2lwZS1ib29rL3JlY2lwZXMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtSZWNpcGVTZXJ2aWNlfSBmcm9tICcuL3JlY2lwZS5zZXJ2aWNlJztcbmltcG9ydCB7UmVjaXBlTGlzdENvbXBvbmVudH0gZnJvbSAnLi9yZWNpcGUtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHtSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge1JlY2lwZURldGFpbENvbXBvbmVudH0gZnJvbSAnLi9yZWNpcGUtZGV0YWlsLmNvbXBvbmVudCc7XG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdteS1yZWNpcGVzJyxcblx0dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvcmVjaXBlLWJvb2svcmVjaXBlLnRwbC5odG1sJyxcblx0cHJvdmlkZXJzOiBbUmVjaXBlU2VydmljZV0sXG5cdGRpcmVjdGl2ZXM6IFtSZWNpcGVMaXN0Q29tcG9uZW50LCBST1VURVJfRElSRUNUSVZFU11cbn0pXG5AUm91dGVDb25maWcoW1xuXHR7cGF0aDogJy8nLCBuYW1lOiAnUmVjaXBlRGV0YWlsJywgY29tcG9uZW50OiBSZWNpcGVEZXRhaWxDb21wb25lbnQsIFxuXHR1c2VBc0RlZmF1bHQ6IHRydWV9LFxuXHR7cGF0aDogJy86ZWRpdE1vZGUnLCBuYW1lOiAnUmVjaXBlRWRpdCcsIGNvbXBvbmVudDogUmVjaXBlRGV0YWlsQ29tcG9uZW50fVxuXSlcbmV4cG9ydCBjbGFzcyBSZWNpcGVzQ29tcG9uZW50IHtcblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
