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
                function Support(issue_id, point_id, evidence, detail, type, source, sourcetype, owner_id) {
                    this.issue_id = issue_id;
                    this.point_id = point_id;
                    this.evidence = evidence;
                    this.detail = detail;
                    this.type = type;
                    this.source = source;
                    this.sourcetype = sourcetype;
                    this.owner_id = owner_id;
                }
                return Support;
            }());
            exports_1("Support", Support);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zdXBwb3J0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7SUE4QkE7UUFDQztZQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQztpQkFDOUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztpQkFDWixTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEIsQ0FBQztRQUNELE1BQU0sQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsRUFBRSxHQUFHLEdBQUc7WUFDakQsRUFBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7Ozs7WUF0Q0Q7Z0JBV0MsaUJBQ0MsUUFBZ0IsRUFDaEIsUUFBZ0IsRUFDaEIsUUFBZ0IsRUFDaEIsTUFBYyxFQUNkLElBQVksRUFDWixNQUFjLEVBQ2QsVUFBa0IsRUFDbEIsUUFBZ0I7b0JBQ2hCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO29CQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztvQkFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO29CQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztvQkFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO29CQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztnQkFDMUIsQ0FBQztnQkFDRixjQUFDO1lBQUQsQ0E3QkEsQUE2QkMsSUFBQTtZQTdCRCw2QkE2QkMsQ0FBQSIsImZpbGUiOiJzaGFyZWQvc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBTdXBwb3J0IHtcblx0X2lkOiBudW1iZXI7XG5cdG93bmVyX2lkOiBudW1iZXI7XG5cdGlzc3VlX2lkOiBudW1iZXI7XG5cdHBvaW50X2lkOiBudW1iZXI7XG4gICAgZXZpZGVuY2U6IHN0cmluZztcbiAgICBkZXRhaWw6IHN0cmluZztcbiAgICB0eXBlOiBzdHJpbmc7XG5cdHNvdXJjZTogc3RyaW5nO1xuXHRzb3VyY2V0eXBlOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0aXNzdWVfaWQ6IG51bWJlcixcblx0XHRwb2ludF9pZDogbnVtYmVyLFxuXHRcdGV2aWRlbmNlOiBzdHJpbmcsXG5cdFx0ZGV0YWlsOiBzdHJpbmcsXG5cdFx0dHlwZTogc3RyaW5nLFxuXHRcdHNvdXJjZTogc3RyaW5nLFxuXHRcdHNvdXJjZXR5cGU6IHN0cmluZyxcblx0XHRvd25lcl9pZDogbnVtYmVyKSB7XG5cdFx0dGhpcy5pc3N1ZV9pZCA9IGlzc3VlX2lkO1xuXHRcdHRoaXMucG9pbnRfaWQgPSBwb2ludF9pZDtcblx0XHR0aGlzLmV2aWRlbmNlID0gZXZpZGVuY2U7XG5cdFx0dGhpcy5kZXRhaWwgPSBkZXRhaWw7XG5cdFx0dGhpcy50eXBlID0gdHlwZTtcblx0XHR0aGlzLnNvdXJjZSA9IHNvdXJjZTtcblx0XHR0aGlzLnNvdXJjZXR5cGUgPSBzb3VyY2V0eXBlO1xuXHRcdHRoaXMub3duZXJfaWQgPSBvd25lcl9pZDtcblx0fVxufVxuZnVuY3Rpb24gZ3VpZCgpIHtcblx0ZnVuY3Rpb24gczQoKSB7XG5cdFx0cmV0dXJuIE1hdGguZmxvb3IoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApXG5cdFx0XHQudG9TdHJpbmcoMTYpXG5cdFx0XHQuc3Vic3RyaW5nKDEpO1xuXHR9XG5cdHJldHVybiBzNCgpICsgczQoKSArICctJyArIHM0KCkgKyAnLScgKyBzNCgpICsgJy0nICtcblx0XHRzNCgpICsgJy0nICsgczQoKSArIHM0KCkgKyBzNCgpO1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
