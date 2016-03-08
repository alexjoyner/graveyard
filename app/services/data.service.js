System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DataService;
    return {
        setters:[],
        execute: function() {
            DataService = (function () {
                function DataService() {
                    this._data = ['summer', 'winter', 'boo', 'blah'];
                }
                DataService.prototype.getRandomString = function () {
                    var rndNum = Math.floor(Math.random() * this._data.length);
                    return this._data[rndNum];
                };
                ;
                DataService.prototype.insert = function (value) {
                    this._data.push(value);
                    return 'INSERTED!';
                };
                ;
                return DataService;
            }());
            exports_1("DataService", DataService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2RhdGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O1lBQUE7Z0JBQUE7b0JBQ1MsVUFBSyxHQUFHLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBV3JELENBQUM7Z0JBVEEscUNBQWUsR0FBZjtvQkFDQyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUMzRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDM0IsQ0FBQzs7Z0JBRUQsNEJBQU0sR0FBTixVQUFPLEtBQWE7b0JBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN2QixNQUFNLENBQUMsV0FBVyxDQUFDO2dCQUNwQixDQUFDOztnQkFDRixrQkFBQztZQUFELENBWkEsQUFZQyxJQUFBO1lBWkQscUNBWUMsQ0FBQSIsImZpbGUiOiJzZXJ2aWNlcy9kYXRhLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRGF0YVNlcnZpY2Uge1xuXHRwcml2YXRlIF9kYXRhID0gWydzdW1tZXInLCAnd2ludGVyJywgJ2JvbycsICdibGFoJ107XG5cblx0Z2V0UmFuZG9tU3RyaW5nKCkge1xuXHRcdGxldCBybmROdW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLl9kYXRhLmxlbmd0aCk7XG5cdFx0cmV0dXJuIHRoaXMuX2RhdGFbcm5kTnVtXTtcblx0fTtcblxuXHRpbnNlcnQodmFsdWU6IHN0cmluZyl7XG5cdFx0dGhpcy5fZGF0YS5wdXNoKHZhbHVlKTtcblx0XHRyZXR1cm4gJ0lOU0VSVEVEISc7XG5cdH07XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
