System.register(["../shared/recipe", "../shared/ingredient"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var recipe_1, ingredient_1;
    var RECIPES;
    return {
        setters:[
            function (recipe_1_1) {
                recipe_1 = recipe_1_1;
            },
            function (ingredient_1_1) {
                ingredient_1 = ingredient_1_1;
            }],
        execute: function() {
            exports_1("RECIPES", RECIPES = [
                new recipe_1.Recipe('Super Burger', 'Very Delicious burger', 'http://www.eatnpark.com/upload/menu/240BGROrigSuper.jpg', [
                    new ingredient_1.Ingredient('Patties', 2),
                    new ingredient_1.Ingredient('Buns', 3)
                ])
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vY2svcmVjaXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O1FBRVcsT0FBTzs7Ozs7Ozs7OztZQUFQLHFCQUFBLE9BQU8sR0FBYTtnQkFDOUIsSUFBSSxlQUFNLENBQ1QsY0FBYyxFQUNkLHVCQUF1QixFQUN2Qix5REFBeUQsRUFBRTtvQkFDMUQsSUFBSSx1QkFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7b0JBQzVCLElBQUksdUJBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO2lCQUN6QixDQUFDO2FBQ0gsQ0FBQSxDQUFDIiwiZmlsZSI6Im1vY2svcmVjaXBlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UmVjaXBlfSBmcm9tIFwiLi4vc2hhcmVkL3JlY2lwZVwiO1xuaW1wb3J0IHtJbmdyZWRpZW50fSBmcm9tIFwiLi4vc2hhcmVkL2luZ3JlZGllbnRcIjtcbmV4cG9ydCBsZXQgUkVDSVBFUzogUmVjaXBlW10gPSBbXG5cdG5ldyBSZWNpcGUoXG5cdFx0J1N1cGVyIEJ1cmdlcicsIFxuXHRcdCdWZXJ5IERlbGljaW91cyBidXJnZXInLFxuXHRcdCdodHRwOi8vd3d3LmVhdG5wYXJrLmNvbS91cGxvYWQvbWVudS8yNDBCR1JPcmlnU3VwZXIuanBnJywgW1xuXHRcdFx0bmV3IEluZ3JlZGllbnQoJ1BhdHRpZXMnLCAyKSxcblx0XHRcdG5ldyBJbmdyZWRpZW50KCdCdW5zJywgMylcblx0XHRdKVxuXTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
