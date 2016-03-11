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
                ]),
                new recipe_1.Recipe('Super Burger', 'Very Delicious burger', 'http://www.eatnpark.com/upload/menu/240BGROrigSuper.jpg', [
                    new ingredient_1.Ingredient('Patties', 2),
                    new ingredient_1.Ingredient('Buns', 3)
                ]),
                new recipe_1.Recipe('Super Burger', 'Very Delicious burger', 'http://www.eatnpark.com/upload/menu/240BGROrigSuper.jpg', [
                    new ingredient_1.Ingredient('Patties', 2),
                    new ingredient_1.Ingredient('Buns', 3)
                ])
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vY2svcmVjaXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O1FBRVcsT0FBTzs7Ozs7Ozs7OztZQUFQLHFCQUFBLE9BQU8sR0FBYTtnQkFDOUIsSUFBSSxlQUFNLENBQ1QsY0FBYyxFQUNkLHVCQUF1QixFQUN2Qix5REFBeUQsRUFBRTtvQkFDMUQsSUFBSSx1QkFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7b0JBQzVCLElBQUksdUJBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO2lCQUN6QixDQUFDO2dCQUNILElBQUksZUFBTSxDQUNULGNBQWMsRUFDZCx1QkFBdUIsRUFDdkIseURBQXlELEVBQUU7b0JBQzFELElBQUksdUJBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO29CQUM1QixJQUFJLHVCQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztpQkFDekIsQ0FBQztnQkFDSCxJQUFJLGVBQU0sQ0FDVCxjQUFjLEVBQ2QsdUJBQXVCLEVBQ3ZCLHlEQUF5RCxFQUFFO29CQUMxRCxJQUFJLHVCQUFVLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztvQkFDNUIsSUFBSSx1QkFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7aUJBQ3pCLENBQUM7YUFDSCxDQUFBLENBQUMiLCJmaWxlIjoibW9jay9yZWNpcGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSZWNpcGV9IGZyb20gXCIuLi9zaGFyZWQvcmVjaXBlXCI7XG5pbXBvcnQge0luZ3JlZGllbnR9IGZyb20gXCIuLi9zaGFyZWQvaW5ncmVkaWVudFwiO1xuZXhwb3J0IGxldCBSRUNJUEVTOiBSZWNpcGVbXSA9IFtcblx0bmV3IFJlY2lwZShcblx0XHQnU3VwZXIgQnVyZ2VyJywgXG5cdFx0J1ZlcnkgRGVsaWNpb3VzIGJ1cmdlcicsXG5cdFx0J2h0dHA6Ly93d3cuZWF0bnBhcmsuY29tL3VwbG9hZC9tZW51LzI0MEJHUk9yaWdTdXBlci5qcGcnLCBbXG5cdFx0XHRuZXcgSW5ncmVkaWVudCgnUGF0dGllcycsIDIpLFxuXHRcdFx0bmV3IEluZ3JlZGllbnQoJ0J1bnMnLCAzKVxuXHRcdF0pLFxuXHRuZXcgUmVjaXBlKFxuXHRcdCdTdXBlciBCdXJnZXInLCBcblx0XHQnVmVyeSBEZWxpY2lvdXMgYnVyZ2VyJyxcblx0XHQnaHR0cDovL3d3dy5lYXRucGFyay5jb20vdXBsb2FkL21lbnUvMjQwQkdST3JpZ1N1cGVyLmpwZycsIFtcblx0XHRcdG5ldyBJbmdyZWRpZW50KCdQYXR0aWVzJywgMiksXG5cdFx0XHRuZXcgSW5ncmVkaWVudCgnQnVucycsIDMpXG5cdFx0XSksXG5cdG5ldyBSZWNpcGUoXG5cdFx0J1N1cGVyIEJ1cmdlcicsIFxuXHRcdCdWZXJ5IERlbGljaW91cyBidXJnZXInLFxuXHRcdCdodHRwOi8vd3d3LmVhdG5wYXJrLmNvbS91cGxvYWQvbWVudS8yNDBCR1JPcmlnU3VwZXIuanBnJywgW1xuXHRcdFx0bmV3IEluZ3JlZGllbnQoJ1BhdHRpZXMnLCAyKSxcblx0XHRcdG5ldyBJbmdyZWRpZW50KCdCdW5zJywgMylcblx0XHRdKVxuXTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
