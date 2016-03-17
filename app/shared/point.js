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
                function Point(issue_id, problem, type, ups, downs, tag, _id) {
                    this._id = (_id) ? _id : null;
                    this.issue_id = issue_id;
                    this.problem = problem;
                    this.type = type;
                    this.ups = ups;
                    this.downs = downs;
                    this.tag = tag;
                }
                return Point;
            }());
            exports_1("Point", Point);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9wb2ludC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBMEJBO1FBQ0M7WUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUM7aUJBQzlDLFFBQVEsQ0FBQyxFQUFFLENBQUM7aUJBQ1osU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLENBQUM7UUFDRCxNQUFNLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEVBQUUsR0FBRyxHQUFHO1lBQ2pELEVBQUUsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs7O1lBbENEO2dCQVFJLGVBQ0YsUUFBZ0IsRUFDaEIsT0FBZSxFQUNmLElBQVksRUFDWixHQUFXLEVBQ1gsS0FBYSxFQUNiLEdBQVcsRUFDWCxHQUFZO29CQUVaLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDO29CQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztvQkFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO29CQUNqQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztvQkFDZixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztvQkFDbkIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7Z0JBQ2hCLENBQUM7Z0JBQ0YsWUFBQztZQUFELENBekJBLEFBeUJDLElBQUE7WUF6QkQseUJBeUJDLENBQUEiLCJmaWxlIjoic2hhcmVkL3BvaW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFBvaW50IHtcblx0X2lkOiBzdHJpbmc7XG5cdGlzc3VlX2lkOiBzdHJpbmc7XG4gICAgcHJvYmxlbTogc3RyaW5nO1xuICAgIHR5cGU6IHN0cmluZztcbiAgICB1cHM6IG51bWJlcjtcbiAgICBkb3duczogbnVtYmVyO1xuICAgIHRhZzogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKFxuXHRcdGlzc3VlX2lkOiBzdHJpbmcsXG5cdFx0cHJvYmxlbTogc3RyaW5nLFxuXHRcdHR5cGU6IHN0cmluZyxcblx0XHR1cHM6IG51bWJlcixcblx0XHRkb3duczogbnVtYmVyLFxuXHRcdHRhZzogc3RyaW5nLFxuXHRcdF9pZD86IHN0cmluZ1xuXHQpe1xuXHRcdHRoaXMuX2lkID0gKF9pZCkgPyBfaWQgOiBudWxsO1xuXHRcdHRoaXMuaXNzdWVfaWQgPSBpc3N1ZV9pZDtcblx0XHR0aGlzLnByb2JsZW0gPSBwcm9ibGVtO1xuXHRcdHRoaXMudHlwZSA9IHR5cGU7XG5cdFx0dGhpcy51cHMgPSB1cHM7XG5cdFx0dGhpcy5kb3ducyA9IGRvd25zO1xuXHRcdHRoaXMudGFnID0gdGFnO1xuXHR9XG59XG5mdW5jdGlvbiBndWlkKCkge1xuXHRmdW5jdGlvbiBzNCgpIHtcblx0XHRyZXR1cm4gTWF0aC5mbG9vcigoMSArIE1hdGgucmFuZG9tKCkpICogMHgxMDAwMClcblx0XHRcdC50b1N0cmluZygxNilcblx0XHRcdC5zdWJzdHJpbmcoMSk7XG5cdH1cblx0cmV0dXJuIHM0KCkgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArIHM0KCkgKyAnLScgK1xuXHRcdHM0KCkgKyAnLScgKyBzNCgpICsgczQoKSArIHM0KCk7XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
