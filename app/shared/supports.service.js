System.register(['angular2/core', '../mock/mock-supports'], function(exports_1, context_1) {
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
    var core_1, mock_supports_1;
    var SupportsService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_supports_1_1) {
                mock_supports_1 = mock_supports_1_1;
            }],
        execute: function() {
            SupportsService = (function () {
                function SupportsService() {
                }
                /* GET */
                SupportsService.prototype.getSupports = function (pointId) {
                };
                SupportsService.prototype.getSupport = function (_id) {
                };
                /* POST */
                SupportsService.prototype.insertSupport = function (support) {
                    mock_supports_1.SUPPORTS.push(support);
                };
                /* DELETE */
                SupportsService.prototype.deleteSupport = function (support) {
                    // id in the future
                    mock_supports_1.SUPPORTS.splice(mock_supports_1.SUPPORTS.indexOf(support), 1);
                };
                SupportsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], SupportsService);
                return SupportsService;
            }());
            exports_1("SupportsService", SupportsService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zdXBwb3J0cy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7Z0JBQUE7Z0JBbUJBLENBQUM7Z0JBbEJBLFNBQVM7Z0JBQ1QscUNBQVcsR0FBWCxVQUFZLE9BQWU7Z0JBRTNCLENBQUM7Z0JBQ0Qsb0NBQVUsR0FBVixVQUFXLEdBQVc7Z0JBRXRCLENBQUM7Z0JBRUQsVUFBVTtnQkFDVix1Q0FBYSxHQUFiLFVBQWMsT0FBZ0I7b0JBQzdCLHdCQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN4QixDQUFDO2dCQUVELFlBQVk7Z0JBQ1osdUNBQWEsR0FBYixVQUFjLE9BQWdCO29CQUM3QixtQkFBbUI7b0JBQ25CLHdCQUFRLENBQUMsTUFBTSxDQUFDLHdCQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMvQyxDQUFDO2dCQW5CRjtvQkFBQyxpQkFBVSxFQUFFOzttQ0FBQTtnQkFvQmIsc0JBQUM7WUFBRCxDQW5CQSxBQW1CQyxJQUFBO1lBbkJELDZDQW1CQyxDQUFBIiwiZmlsZSI6InNoYXJlZC9zdXBwb3J0cy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7U3VwcG9ydH0gZnJvbSAnLi9zdXBwb3J0JztcbmltcG9ydCB7U1VQUE9SVFN9IGZyb20gJy4uL21vY2svbW9jay1zdXBwb3J0cyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdXBwb3J0c1NlcnZpY2Uge1xuXHQvKiBHRVQgKi9cblx0Z2V0U3VwcG9ydHMocG9pbnRJZDogc3RyaW5nKXtcblxuXHR9XG5cdGdldFN1cHBvcnQoX2lkOiBzdHJpbmcpe1xuXG5cdH1cblxuXHQvKiBQT1NUICovXG5cdGluc2VydFN1cHBvcnQoc3VwcG9ydDogU3VwcG9ydCl7XG5cdFx0U1VQUE9SVFMucHVzaChzdXBwb3J0KTtcblx0fVxuXG5cdC8qIERFTEVURSAqL1xuXHRkZWxldGVTdXBwb3J0KHN1cHBvcnQ6IFN1cHBvcnQpe1xuXHRcdC8vIGlkIGluIHRoZSBmdXR1cmVcblx0XHRTVVBQT1JUUy5zcGxpY2UoU1VQUE9SVFMuaW5kZXhPZihzdXBwb3J0KSwgMSk7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
