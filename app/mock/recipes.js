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
                new recipe_1.Recipe('Wiener Schnitzel', 'Delicious', 'http://images.derberater.de/files/imagecache/456xXXX_berater/berater/WienerSchnitzel.jpg', [
                    new ingredient_1.Ingredient('Pork Meat', 1),
                    new ingredient_1.Ingredient('salad', 2)
                ])
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vY2svcmVjaXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O1FBRVcsT0FBTzs7Ozs7Ozs7OztZQUFQLHFCQUFBLE9BQU8sR0FBYTtnQkFDOUIsSUFBSSxlQUFNLENBQ1Qsa0JBQWtCLEVBQ2xCLFdBQVcsRUFDWCwwRkFBMEYsRUFBQztvQkFDMUYsSUFBSSx1QkFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7b0JBQzlCLElBQUksdUJBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO2lCQUMxQixDQUFDO2FBQ0gsQ0FBQSxDQUFDIiwiZmlsZSI6Im1vY2svcmVjaXBlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UmVjaXBlfSBmcm9tIFwiLi4vc2hhcmVkL3JlY2lwZVwiO1xuaW1wb3J0IHtJbmdyZWRpZW50fSBmcm9tIFwiLi4vc2hhcmVkL2luZ3JlZGllbnRcIjtcbmV4cG9ydCBsZXQgUkVDSVBFUzogUmVjaXBlW10gPSBbXG5cdG5ldyBSZWNpcGUoXG5cdFx0J1dpZW5lciBTY2huaXR6ZWwnLCBcblx0XHQnRGVsaWNpb3VzJyxcblx0XHQnaHR0cDovL2ltYWdlcy5kZXJiZXJhdGVyLmRlL2ZpbGVzL2ltYWdlY2FjaGUvNDU2eFhYWF9iZXJhdGVyL2JlcmF0ZXIvV2llbmVyU2Nobml0emVsLmpwZycsW1xuXHRcdFx0bmV3IEluZ3JlZGllbnQoJ1BvcmsgTWVhdCcsIDEpLFxuXHRcdFx0bmV3IEluZ3JlZGllbnQoJ3NhbGFkJywgMilcblx0XHRdKVxuXTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
