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
                function Support(issue_id, point_id, evidence, detail, type, source, tag, ups, downs, ownerId, ownerUsername) {
                    this.issue_id = issue_id;
                    this.point_id = point_id;
                    this.evidence = evidence;
                    this.detail = detail;
                    this.type = type;
                    this.source = source;
                    this.tag = tag;
                    this.ups = ups;
                    this.downs = downs;
                    this.ownerId = ownerId;
                    this.ownerUsername = ownerUsername;
                }
                return Support;
            }());
            exports_1("Support", Support);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zdXBwb3J0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7SUF1Q0E7UUFDQztZQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQztpQkFDOUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztpQkFDWixTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEIsQ0FBQztRQUNELE1BQU0sQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsRUFBRSxHQUFHLEdBQUc7WUFDakQsRUFBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7Ozs7WUEvQ0Q7Z0JBY0MsaUJBQ0MsUUFBZ0IsRUFDaEIsUUFBZ0IsRUFDaEIsUUFBZ0IsRUFDaEIsTUFBYyxFQUNkLElBQVksRUFDWixNQUFjLEVBQ2QsR0FBVyxFQUNYLEdBQVcsRUFDWCxLQUFhLEVBQ2IsT0FBZSxFQUNmLGFBQXFCO29CQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztvQkFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO29CQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztvQkFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7b0JBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO29CQUNyQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztvQkFDZixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztvQkFDZixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztvQkFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO2dCQUNwQyxDQUFDO2dCQUNGLGNBQUM7WUFBRCxDQXRDQSxBQXNDQyxJQUFBO1lBdENELDZCQXNDQyxDQUFBIiwiZmlsZSI6InNoYXJlZC9zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFN1cHBvcnQge1xuXHRfaWQ6IHN0cmluZztcblx0b3duZXJJZDogc3RyaW5nO1xuXHRvd25lclVzZXJuYW1lOiBzdHJpbmc7XG5cdGlzc3VlX2lkOiBzdHJpbmc7XG5cdHBvaW50X2lkOiBzdHJpbmc7XG4gICAgZXZpZGVuY2U6IHN0cmluZztcbiAgICBkZXRhaWw6IHN0cmluZztcbiAgICB0eXBlOiBzdHJpbmc7XG5cdHNvdXJjZTogc3RyaW5nO1xuXHR0YWc6IHN0cmluZztcblx0dXBzOiBudW1iZXI7XG5cdGRvd25zOiBudW1iZXI7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0aXNzdWVfaWQ6IHN0cmluZyxcblx0XHRwb2ludF9pZDogc3RyaW5nLFxuXHRcdGV2aWRlbmNlOiBzdHJpbmcsXG5cdFx0ZGV0YWlsOiBzdHJpbmcsXG5cdFx0dHlwZTogc3RyaW5nLFxuXHRcdHNvdXJjZTogc3RyaW5nLFxuXHRcdHRhZzogc3RyaW5nLFxuXHRcdHVwczogbnVtYmVyLFxuXHRcdGRvd25zOiBudW1iZXIsXG5cdFx0b3duZXJJZDogc3RyaW5nLFxuXHRcdG93bmVyVXNlcm5hbWU6IHN0cmluZykge1xuXHRcdHRoaXMuaXNzdWVfaWQgPSBpc3N1ZV9pZDtcblx0XHR0aGlzLnBvaW50X2lkID0gcG9pbnRfaWQ7XG5cdFx0dGhpcy5ldmlkZW5jZSA9IGV2aWRlbmNlO1xuXHRcdHRoaXMuZGV0YWlsID0gZGV0YWlsO1xuXHRcdHRoaXMudHlwZSA9IHR5cGU7XG5cdFx0dGhpcy5zb3VyY2UgPSBzb3VyY2U7XG5cdFx0dGhpcy50YWcgPSB0YWc7XG5cdFx0dGhpcy51cHMgPSB1cHM7XG5cdFx0dGhpcy5kb3ducyA9IGRvd25zO1xuXHRcdHRoaXMub3duZXJJZCA9IG93bmVySWQ7XG5cdFx0dGhpcy5vd25lclVzZXJuYW1lID0gb3duZXJVc2VybmFtZTtcblx0fVxufVxuZnVuY3Rpb24gZ3VpZCgpIHtcblx0ZnVuY3Rpb24gczQoKSB7XG5cdFx0cmV0dXJuIE1hdGguZmxvb3IoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApXG5cdFx0XHQudG9TdHJpbmcoMTYpXG5cdFx0XHQuc3Vic3RyaW5nKDEpO1xuXHR9XG5cdHJldHVybiBzNCgpICsgczQoKSArICctJyArIHM0KCkgKyAnLScgKyBzNCgpICsgJy0nICtcblx0XHRzNCgpICsgJy0nICsgczQoKSArIHM0KCkgKyBzNCgpO1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
