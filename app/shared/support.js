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
                function Support(point_id, evidence, type, source, tag, ups, downs) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zdXBwb3J0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7SUEwQkE7UUFDQztZQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQztpQkFDOUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztpQkFDWixTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEIsQ0FBQztRQUNELE1BQU0sQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsRUFBRSxHQUFHLEdBQUc7WUFDakQsRUFBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7Ozs7WUFsQ0Q7Z0JBU0MsaUJBQ0MsUUFBZ0IsRUFDaEIsUUFBZ0IsRUFDaEIsSUFBWSxFQUNaLE1BQWMsRUFDZCxHQUFXLEVBQ1gsR0FBVyxFQUNYLEtBQWE7b0JBQ2IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO29CQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztvQkFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO29CQUNmLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO29CQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2dCQUNwQixDQUFDO2dCQUNGLGNBQUM7WUFBRCxDQXpCQSxBQXlCQyxJQUFBO1lBekJELDZCQXlCQyxDQUFBIiwiZmlsZSI6InNoYXJlZC9zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFN1cHBvcnQge1xuXHRwb2ludF9pZDogc3RyaW5nO1xuICAgIGV2aWRlbmNlOiBzdHJpbmc7XG4gICAgdHlwZTogc3RyaW5nO1xuXHRzb3VyY2U6IHN0cmluZztcblx0dGFnOiBzdHJpbmc7XG5cdHVwczogbnVtYmVyO1xuXHRkb3duczogbnVtYmVyO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHBvaW50X2lkOiBzdHJpbmcsXG5cdFx0ZXZpZGVuY2U6IHN0cmluZyxcblx0XHR0eXBlOiBzdHJpbmcsXG5cdFx0c291cmNlOiBzdHJpbmcsXG5cdFx0dGFnOiBzdHJpbmcsXG5cdFx0dXBzOiBudW1iZXIsXG5cdFx0ZG93bnM6IG51bWJlcil7XG5cdFx0dGhpcy5wb2ludF9pZCA9IHBvaW50X2lkO1xuXHRcdHRoaXMuZXZpZGVuY2UgPSBldmlkZW5jZTtcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xuXHRcdHRoaXMuc291cmNlID0gc291cmNlO1xuXHRcdHRoaXMudGFnID0gdGFnO1xuXHRcdHRoaXMudXBzID0gdXBzO1xuXHRcdHRoaXMuZG93bnMgPSBkb3ducztcblx0fVxufVxuZnVuY3Rpb24gZ3VpZCgpIHtcblx0ZnVuY3Rpb24gczQoKSB7XG5cdFx0cmV0dXJuIE1hdGguZmxvb3IoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApXG5cdFx0XHQudG9TdHJpbmcoMTYpXG5cdFx0XHQuc3Vic3RyaW5nKDEpO1xuXHR9XG5cdHJldHVybiBzNCgpICsgczQoKSArICctJyArIHM0KCkgKyAnLScgKyBzNCgpICsgJy0nICtcblx0XHRzNCgpICsgJy0nICsgczQoKSArIHM0KCkgKyBzNCgpO1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
