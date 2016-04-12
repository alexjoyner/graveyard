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
                function Support(issue_id, point_id, evidence, detail, type, source, sourcetype, owner_user_id) {
                    this.issue_id = issue_id;
                    this.point_id = point_id;
                    this.evidence = evidence;
                    this.detail = detail;
                    this.type = type;
                    this.source = source;
                    this.sourcetype = sourcetype;
                    this.owner_user_id = owner_user_id;
                }
                return Support;
            }());
            exports_1("Support", Support);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zdXBwb3J0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7SUE4QkE7UUFDQztZQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQztpQkFDOUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztpQkFDWixTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEIsQ0FBQztRQUNELE1BQU0sQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsRUFBRSxHQUFHLEdBQUc7WUFDakQsRUFBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7Ozs7WUF0Q0Q7Z0JBV0MsaUJBQ0MsUUFBZ0IsRUFDaEIsUUFBZ0IsRUFDaEIsUUFBZ0IsRUFDaEIsTUFBYyxFQUNkLElBQVksRUFDWixNQUFjLEVBQ2QsVUFBa0IsRUFDbEIsYUFBcUI7b0JBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO29CQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztvQkFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO29CQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztvQkFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO29CQUM3QixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztnQkFDcEMsQ0FBQztnQkFDRixjQUFDO1lBQUQsQ0E3QkEsQUE2QkMsSUFBQTtZQTdCRCw2QkE2QkMsQ0FBQSIsImZpbGUiOiJzaGFyZWQvc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBTdXBwb3J0IHtcblx0X2lkOiBudW1iZXI7XG5cdG93bmVyX3VzZXJfaWQ6IG51bWJlcjtcblx0aXNzdWVfaWQ6IG51bWJlcjtcblx0cG9pbnRfaWQ6IG51bWJlcjtcbiAgICBldmlkZW5jZTogc3RyaW5nO1xuICAgIGRldGFpbDogc3RyaW5nO1xuICAgIHR5cGU6IHN0cmluZztcblx0c291cmNlOiBzdHJpbmc7XG5cdHNvdXJjZXR5cGU6IHN0cmluZztcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRpc3N1ZV9pZDogbnVtYmVyLFxuXHRcdHBvaW50X2lkOiBudW1iZXIsXG5cdFx0ZXZpZGVuY2U6IHN0cmluZyxcblx0XHRkZXRhaWw6IHN0cmluZyxcblx0XHR0eXBlOiBzdHJpbmcsXG5cdFx0c291cmNlOiBzdHJpbmcsXG5cdFx0c291cmNldHlwZTogc3RyaW5nLFxuXHRcdG93bmVyX3VzZXJfaWQ6IG51bWJlcikge1xuXHRcdHRoaXMuaXNzdWVfaWQgPSBpc3N1ZV9pZDtcblx0XHR0aGlzLnBvaW50X2lkID0gcG9pbnRfaWQ7XG5cdFx0dGhpcy5ldmlkZW5jZSA9IGV2aWRlbmNlO1xuXHRcdHRoaXMuZGV0YWlsID0gZGV0YWlsO1xuXHRcdHRoaXMudHlwZSA9IHR5cGU7XG5cdFx0dGhpcy5zb3VyY2UgPSBzb3VyY2U7XG5cdFx0dGhpcy5zb3VyY2V0eXBlID0gc291cmNldHlwZTtcblx0XHR0aGlzLm93bmVyX3VzZXJfaWQgPSBvd25lcl91c2VyX2lkO1xuXHR9XG59XG5mdW5jdGlvbiBndWlkKCkge1xuXHRmdW5jdGlvbiBzNCgpIHtcblx0XHRyZXR1cm4gTWF0aC5mbG9vcigoMSArIE1hdGgucmFuZG9tKCkpICogMHgxMDAwMClcblx0XHRcdC50b1N0cmluZygxNilcblx0XHRcdC5zdWJzdHJpbmcoMSk7XG5cdH1cblx0cmV0dXJuIHM0KCkgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArIHM0KCkgKyAnLScgK1xuXHRcdHM0KCkgKyAnLScgKyBzNCgpICsgczQoKSArIHM0KCk7XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
