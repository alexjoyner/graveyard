System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var ShoppingListService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ShoppingListService = (function () {
                function ShoppingListService() {
                }
                // ****  GET
                ShoppingListService.prototype.getAllItems = function () {
                };
                ShoppingListService.prototype.getItem = function (index) {
                };
                ShoppingListService.prototype.getIndexOfItem = function (item) {
                };
                // ****  POST
                ShoppingListService.prototype.insertItem = function (item) {
                };
                ShoppingListService.prototype.insertItems = function (items) {
                };
                ShoppingListService.prototype.updateItem = function (index, item) {
                };
                // **** DELETE
                ShoppingListService.prototype.deleteItem = function (Item) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zaG9wcGluZy1saXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQTtnQkFBQTtnQkFpQ0EsQ0FBQztnQkEvQkEsWUFBWTtnQkFDWix5Q0FBVyxHQUFYO2dCQUVBLENBQUM7Z0JBRUQscUNBQU8sR0FBUCxVQUFRLEtBQWE7Z0JBRXJCLENBQUM7Z0JBRUQsNENBQWMsR0FBZCxVQUFlLElBQWdCO2dCQUUvQixDQUFDO2dCQUVELGFBQWE7Z0JBQ2Isd0NBQVUsR0FBVixVQUFXLElBQWdCO2dCQUUzQixDQUFDO2dCQUVELHlDQUFXLEdBQVgsVUFBWSxLQUFtQjtnQkFFL0IsQ0FBQztnQkFFRCx3Q0FBVSxHQUFWLFVBQVcsS0FBYSxFQUFFLElBQWdCO2dCQUUxQyxDQUFDO2dCQUVELGNBQWM7Z0JBQ2Qsd0NBQVUsR0FBVixVQUFXLElBQWdCO2dCQUUzQixDQUFDO2dCQWhDRjtvQkFBQyxpQkFBVSxFQUFFOzt1Q0FBQTtnQkFrQ2IsMEJBQUM7WUFBRCxDQWpDQSxBQWlDQyxJQUFBO1lBakNELHFEQWlDQyxDQUFBIiwiZmlsZSI6InNoYXJlZC9zaG9wcGluZy1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtJbmdyZWRpZW50fSBmcm9tICcuL2luZ3JlZGllbnQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2hvcHBpbmdMaXN0U2VydmljZSB7XG5cblx0Ly8gKioqKiAgR0VUXG5cdGdldEFsbEl0ZW1zKCkge1xuXG5cdH1cblxuXHRnZXRJdGVtKGluZGV4OiBudW1iZXIpIHtcblxuXHR9XG5cblx0Z2V0SW5kZXhPZkl0ZW0oaXRlbTogSW5ncmVkaWVudCkge1xuXG5cdH1cblxuXHQvLyAqKioqICBQT1NUXG5cdGluc2VydEl0ZW0oaXRlbTogSW5ncmVkaWVudCkge1xuXG5cdH1cblxuXHRpbnNlcnRJdGVtcyhpdGVtczogSW5ncmVkaWVudFtdKXtcblxuXHR9XG5cblx0dXBkYXRlSXRlbShpbmRleDogbnVtYmVyLCBpdGVtOiBJbmdyZWRpZW50KXtcblxuXHR9XG5cblx0Ly8gKioqKiBERUxFVEVcblx0ZGVsZXRlSXRlbShJdGVtOiBJbmdyZWRpZW50KXtcblxuXHR9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
