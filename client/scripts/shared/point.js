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
                function Point(issue_id, problem, detail, type, ups, downs, tag, owner_user_id, id) {
                    this.issue_id = issue_id;
                    this.problem = problem;
                    this.detail = detail;
                    this.type = type;
                    this.ups = ups;
                    this.downs = downs;
                    this.tag = tag;
                    this.owner_user_id = owner_user_id;
                    (id) ? this._id = id : null;
                }
                return Point;
            }());
            exports_1("Point", Point);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9wb2ludC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBZ0NBO1FBQ0M7WUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUM7aUJBQzlDLFFBQVEsQ0FBQyxFQUFFLENBQUM7aUJBQ1osU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLENBQUM7UUFDRCxNQUFNLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEVBQUUsR0FBRyxHQUFHO1lBQ2pELEVBQUUsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs7O1lBeENEO2dCQVVJLGVBQ0YsUUFBZ0IsRUFDaEIsT0FBZSxFQUNmLE1BQWMsRUFDZCxJQUFZLEVBQ1osR0FBVyxFQUNYLEtBQWEsRUFDYixHQUFXLEVBQ1gsYUFBcUIsRUFDckIsRUFBVztvQkFFWCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztvQkFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO29CQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztvQkFDakIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7b0JBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7b0JBQ25CLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO29CQUNmLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO29CQUNuQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztnQkFDN0IsQ0FBQztnQkFDRixZQUFDO1lBQUQsQ0EvQkEsQUErQkMsSUFBQTtZQS9CRCx5QkErQkMsQ0FBQSIsImZpbGUiOiJzaGFyZWQvcG9pbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUG9pbnQge1xuXHRfaWQ6IG51bWJlcjtcblx0b3duZXJfdXNlcl9pZDogbnVtYmVyO1xuXHRpc3N1ZV9pZDogbnVtYmVyO1xuICAgIHByb2JsZW06IHN0cmluZztcbiAgICBkZXRhaWw6IHN0cmluZztcbiAgICB0eXBlOiBzdHJpbmc7XG4gICAgdXBzOiBudW1iZXI7XG4gICAgZG93bnM6IG51bWJlcjtcbiAgICB0YWc6IHN0cmluZztcbiAgICBjb25zdHJ1Y3Rvcihcblx0XHRpc3N1ZV9pZDogbnVtYmVyLFxuXHRcdHByb2JsZW06IHN0cmluZyxcblx0XHRkZXRhaWw6IHN0cmluZyxcblx0XHR0eXBlOiBzdHJpbmcsXG5cdFx0dXBzOiBudW1iZXIsXG5cdFx0ZG93bnM6IG51bWJlcixcblx0XHR0YWc6IHN0cmluZyxcblx0XHRvd25lcl91c2VyX2lkOiBudW1iZXIsXG5cdFx0aWQ/OiBudW1iZXJcblx0KXtcblx0XHR0aGlzLmlzc3VlX2lkID0gaXNzdWVfaWQ7XG5cdFx0dGhpcy5wcm9ibGVtID0gcHJvYmxlbTtcblx0XHR0aGlzLmRldGFpbCA9IGRldGFpbDtcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xuXHRcdHRoaXMudXBzID0gdXBzO1xuXHRcdHRoaXMuZG93bnMgPSBkb3ducztcblx0XHR0aGlzLnRhZyA9IHRhZztcblx0XHR0aGlzLm93bmVyX3VzZXJfaWQgPSBvd25lcl91c2VyX2lkO1xuXHRcdChpZCkgPyB0aGlzLl9pZCA9IGlkIDogbnVsbDtcblx0fVxufVxuZnVuY3Rpb24gZ3VpZCgpIHtcblx0ZnVuY3Rpb24gczQoKSB7XG5cdFx0cmV0dXJuIE1hdGguZmxvb3IoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApXG5cdFx0XHQudG9TdHJpbmcoMTYpXG5cdFx0XHQuc3Vic3RyaW5nKDEpO1xuXHR9XG5cdHJldHVybiBzNCgpICsgczQoKSArICctJyArIHM0KCkgKyAnLScgKyBzNCgpICsgJy0nICtcblx0XHRzNCgpICsgJy0nICsgczQoKSArIHM0KCkgKyBzNCgpO1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
