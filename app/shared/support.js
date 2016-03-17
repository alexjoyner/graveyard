System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Support;
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
            Support = (function () {
                function Support(point_id, evidence, type, source, tag, ups, downs, _id) {
                    this._id = (_id) ? _id : null;
                    this.point_id = point_id;
                    this.evidence = evidence;
                    this.type = type;
                    this.source = source;
                    this.tag = tag;
                    this.ups = ups;
                    this.downs = downs;
                }
                return Support;
            }());
            exports_1("Support", Support);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zdXBwb3J0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7SUE2QkE7UUFDQztZQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQztpQkFDOUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztpQkFDWixTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEIsQ0FBQztRQUNELE1BQU0sQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsRUFBRSxHQUFHLEdBQUc7WUFDakQsRUFBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7Ozs7WUFyQ0Q7Z0JBVUMsaUJBQ0MsUUFBZ0IsRUFDaEIsUUFBZ0IsRUFDaEIsSUFBWSxFQUNaLE1BQWMsRUFDZCxHQUFXLEVBQ1gsR0FBVyxFQUNYLEtBQWEsRUFDYixHQUFZO29CQUNaLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDO29CQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztvQkFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO29CQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztvQkFDckIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7b0JBQ2YsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7b0JBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Z0JBQ3BCLENBQUM7Z0JBQ0YsY0FBQztZQUFELENBNUJBLEFBNEJDLElBQUE7WUE1QkQsNkJBNEJDLENBQUEiLCJmaWxlIjoic2hhcmVkL3N1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgU3VwcG9ydCB7XG5cdF9pZDogc3RyaW5nO1xuXHRwb2ludF9pZDogc3RyaW5nO1xuICAgIGV2aWRlbmNlOiBzdHJpbmc7XG4gICAgdHlwZTogc3RyaW5nO1xuXHRzb3VyY2U6IHN0cmluZztcblx0dGFnOiBzdHJpbmc7XG5cdHVwczogbnVtYmVyO1xuXHRkb3duczogbnVtYmVyO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHBvaW50X2lkOiBzdHJpbmcsXG5cdFx0ZXZpZGVuY2U6IHN0cmluZyxcblx0XHR0eXBlOiBzdHJpbmcsXG5cdFx0c291cmNlOiBzdHJpbmcsXG5cdFx0dGFnOiBzdHJpbmcsXG5cdFx0dXBzOiBudW1iZXIsXG5cdFx0ZG93bnM6IG51bWJlcixcblx0XHRfaWQ/OiBzdHJpbmcpe1xuXHRcdHRoaXMuX2lkID0gKF9pZCkgPyBfaWQgOiBudWxsO1xuXHRcdHRoaXMucG9pbnRfaWQgPSBwb2ludF9pZDtcblx0XHR0aGlzLmV2aWRlbmNlID0gZXZpZGVuY2U7XG5cdFx0dGhpcy50eXBlID0gdHlwZTtcblx0XHR0aGlzLnNvdXJjZSA9IHNvdXJjZTtcblx0XHR0aGlzLnRhZyA9IHRhZztcblx0XHR0aGlzLnVwcyA9IHVwcztcblx0XHR0aGlzLmRvd25zID0gZG93bnM7XG5cdH1cbn1cbmZ1bmN0aW9uIGd1aWQoKSB7XG5cdGZ1bmN0aW9uIHM0KCkge1xuXHRcdHJldHVybiBNYXRoLmZsb29yKCgxICsgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwKVxuXHRcdFx0LnRvU3RyaW5nKDE2KVxuXHRcdFx0LnN1YnN0cmluZygxKTtcblx0fVxuXHRyZXR1cm4gczQoKSArIHM0KCkgKyAnLScgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArXG5cdFx0czQoKSArICctJyArIHM0KCkgKyBzNCgpICsgczQoKTtcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
