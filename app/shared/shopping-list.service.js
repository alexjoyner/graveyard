System.register(['angular2/core', '../mock/shopping-list'], function(exports_1, context_1) {
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
    var core_1, shopping_list_1;
    var ShoppingListService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shopping_list_1_1) {
                shopping_list_1 = shopping_list_1_1;
            }],
        execute: function() {
            ShoppingListService = (function () {
                function ShoppingListService() {
                }
                // ****  GET
                ShoppingListService.prototype.getAllItems = function () {
                    return shopping_list_1.SHOPPING_LIST;
                };
                ShoppingListService.prototype.getItem = function (index) {
                    return shopping_list_1.SHOPPING_LIST[index];
                };
                ShoppingListService.prototype.getIndexOfItem = function (item) {
                    return shopping_list_1.SHOPPING_LIST.indexOf(item);
                };
                // ****  POST
                ShoppingListService.prototype.insertItem = function (item) {
                    shopping_list_1.SHOPPING_LIST.push(item);
                };
                ShoppingListService.prototype.insertItems = function (items) {
                    Array.prototype.push.apply(shopping_list_1.SHOPPING_LIST, items);
                };
                ShoppingListService.prototype.updateItem = function (index, item) {
                    shopping_list_1.SHOPPING_LIST[index] = item;
                };
                // **** DELETE
                ShoppingListService.prototype.deleteItem = function (item) {
                    shopping_list_1.SHOPPING_LIST.splice(shopping_list_1.SHOPPING_LIST.indexOf(item), 1);
                };
                ShoppingListService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ShoppingListService);
                return ShoppingListService;
            }());
            exports_1("ShoppingListService", ShoppingListService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zaG9wcGluZy1saXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQTtnQkFBQTtnQkFpQ0EsQ0FBQztnQkEvQkEsWUFBWTtnQkFDWix5Q0FBVyxHQUFYO29CQUNDLE1BQU0sQ0FBQyw2QkFBYSxDQUFDO2dCQUN0QixDQUFDO2dCQUVELHFDQUFPLEdBQVAsVUFBUSxLQUFhO29CQUNwQixNQUFNLENBQUMsNkJBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDN0IsQ0FBQztnQkFFRCw0Q0FBYyxHQUFkLFVBQWUsSUFBZ0I7b0JBQzlCLE1BQU0sQ0FBQyw2QkFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDcEMsQ0FBQztnQkFFRCxhQUFhO2dCQUNiLHdDQUFVLEdBQVYsVUFBVyxJQUFnQjtvQkFDMUIsNkJBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzFCLENBQUM7Z0JBRUQseUNBQVcsR0FBWCxVQUFZLEtBQW1CO29CQUM5QixLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsNkJBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDbEQsQ0FBQztnQkFFRCx3Q0FBVSxHQUFWLFVBQVcsS0FBYSxFQUFFLElBQWdCO29CQUN6Qyw2QkFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQztnQkFDN0IsQ0FBQztnQkFFRCxjQUFjO2dCQUNkLHdDQUFVLEdBQVYsVUFBVyxJQUFnQjtvQkFDMUIsNkJBQWEsQ0FBQyxNQUFNLENBQUMsNkJBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RELENBQUM7Z0JBaENGO29CQUFDLGlCQUFVLEVBQUU7O3VDQUFBO2dCQWtDYiwwQkFBQztZQUFELENBakNBLEFBaUNDLElBQUE7WUFqQ0QscURBaUNDLENBQUEiLCJmaWxlIjoic2hhcmVkL3Nob3BwaW5nLWxpc3Quc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0luZ3JlZGllbnR9IGZyb20gJy4vaW5ncmVkaWVudCc7XG5pbXBvcnQge1NIT1BQSU5HX0xJU1R9IGZyb20gJy4uL21vY2svc2hvcHBpbmctbGlzdCc7XG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2hvcHBpbmdMaXN0U2VydmljZSB7XG5cblx0Ly8gKioqKiAgR0VUXG5cdGdldEFsbEl0ZW1zKCkge1xuXHRcdHJldHVybiBTSE9QUElOR19MSVNUO1xuXHR9XG5cblx0Z2V0SXRlbShpbmRleDogbnVtYmVyKSB7XG5cdFx0cmV0dXJuIFNIT1BQSU5HX0xJU1RbaW5kZXhdO1xuXHR9XG5cblx0Z2V0SW5kZXhPZkl0ZW0oaXRlbTogSW5ncmVkaWVudCkge1xuXHRcdHJldHVybiBTSE9QUElOR19MSVNULmluZGV4T2YoaXRlbSk7XG5cdH1cblxuXHQvLyAqKioqICBQT1NUXG5cdGluc2VydEl0ZW0oaXRlbTogSW5ncmVkaWVudCkge1xuXHRcdFNIT1BQSU5HX0xJU1QucHVzaChpdGVtKTtcblx0fVxuXG5cdGluc2VydEl0ZW1zKGl0ZW1zOiBJbmdyZWRpZW50W10pe1xuXHRcdEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KFNIT1BQSU5HX0xJU1QsIGl0ZW1zKTtcblx0fVxuXG5cdHVwZGF0ZUl0ZW0oaW5kZXg6IG51bWJlciwgaXRlbTogSW5ncmVkaWVudCl7XG5cdFx0U0hPUFBJTkdfTElTVFtpbmRleF0gPSBpdGVtO1xuXHR9XG5cblx0Ly8gKioqKiBERUxFVEVcblx0ZGVsZXRlSXRlbShpdGVtOiBJbmdyZWRpZW50KXtcblx0XHRTSE9QUElOR19MSVNULnNwbGljZShTSE9QUElOR19MSVNULmluZGV4T2YoaXRlbSksIDEpO1xuXHR9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
