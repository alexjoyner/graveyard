System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Point;
    function guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }
    return {
        setters:[],
        execute: function() {
            Point = (function () {
                function Point(issue_id, problem, detail, type, ups, downs, tag, id) {
                    this.issue_id = issue_id;
                    this.problem = problem;
                    this.detail = detail;
                    this.type = type;
                    this.ups = ups;
                    this.downs = downs;
                    this.tag = tag;
                    (id) ? this._id = id : null;
                }
                return Point;
            }());
            exports_1("Point", Point);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9wb2ludC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBNkJBO1FBQ0M7WUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUM7aUJBQzlDLFFBQVEsQ0FBQyxFQUFFLENBQUM7aUJBQ1osU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLENBQUM7UUFDRCxNQUFNLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEVBQUUsR0FBRyxHQUFHO1lBQ2pELEVBQUUsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs7O1lBckNEO2dCQVNJLGVBQ0YsUUFBZ0IsRUFDaEIsT0FBZSxFQUNmLE1BQWMsRUFDZCxJQUFZLEVBQ1osR0FBVyxFQUNYLEtBQWEsRUFDYixHQUFXLEVBQ1gsRUFBVztvQkFFWCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztvQkFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO29CQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztvQkFDakIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7b0JBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7b0JBQ25CLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO29CQUNmLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO2dCQUM3QixDQUFDO2dCQUNGLFlBQUM7WUFBRCxDQTVCQSxBQTRCQyxJQUFBO1lBNUJELHlCQTRCQyxDQUFBIiwiZmlsZSI6InNoYXJlZC9wb2ludC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBQb2ludCB7XG5cdF9pZDogc3RyaW5nO1xuXHRpc3N1ZV9pZDogc3RyaW5nO1xuICAgIHByb2JsZW06IHN0cmluZztcbiAgICBkZXRhaWw6IHN0cmluZztcbiAgICB0eXBlOiBzdHJpbmc7XG4gICAgdXBzOiBudW1iZXI7XG4gICAgZG93bnM6IG51bWJlcjtcbiAgICB0YWc6IHN0cmluZztcbiAgICBjb25zdHJ1Y3Rvcihcblx0XHRpc3N1ZV9pZDogc3RyaW5nLFxuXHRcdHByb2JsZW06IHN0cmluZyxcblx0XHRkZXRhaWw6IHN0cmluZyxcblx0XHR0eXBlOiBzdHJpbmcsXG5cdFx0dXBzOiBudW1iZXIsXG5cdFx0ZG93bnM6IG51bWJlcixcblx0XHR0YWc6IHN0cmluZyxcblx0XHRpZD86IHN0cmluZ1xuXHQpe1xuXHRcdHRoaXMuaXNzdWVfaWQgPSBpc3N1ZV9pZDtcblx0XHR0aGlzLnByb2JsZW0gPSBwcm9ibGVtO1xuXHRcdHRoaXMuZGV0YWlsID0gZGV0YWlsO1xuXHRcdHRoaXMudHlwZSA9IHR5cGU7XG5cdFx0dGhpcy51cHMgPSB1cHM7XG5cdFx0dGhpcy5kb3ducyA9IGRvd25zO1xuXHRcdHRoaXMudGFnID0gdGFnO1xuXHRcdChpZCkgPyB0aGlzLl9pZCA9IGlkIDogbnVsbDtcblx0fVxufVxuZnVuY3Rpb24gZ3VpZCgpIHtcblx0ZnVuY3Rpb24gczQoKSB7XG5cdFx0cmV0dXJuIE1hdGguZmxvb3IoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApXG5cdFx0XHQudG9TdHJpbmcoMTYpXG5cdFx0XHQuc3Vic3RyaW5nKDEpO1xuXHR9XG5cdHJldHVybiBzNCgpICsgczQoKSArICctJyArIHM0KCkgKyAnLScgKyBzNCgpICsgJy0nICtcblx0XHRzNCgpICsgJy0nICsgczQoKSArIHM0KCkgKyBzNCgpO1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
