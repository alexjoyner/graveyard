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
                function Support(issue_id, point_id, evidence, detail, type, source, tag, ups, downs) {
                    this.issue_id = issue_id;
                    this.point_id = point_id;
                    this.evidence = evidence;
                    this.detail = detail;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zdXBwb3J0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7SUFpQ0E7UUFDQztZQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQztpQkFDOUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztpQkFDWixTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEIsQ0FBQztRQUNELE1BQU0sQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsRUFBRSxHQUFHLEdBQUc7WUFDakQsRUFBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7Ozs7WUF6Q0Q7Z0JBWUMsaUJBQ0MsUUFBZ0IsRUFDaEIsUUFBZ0IsRUFDaEIsUUFBZ0IsRUFDaEIsTUFBYyxFQUNkLElBQVksRUFDWixNQUFjLEVBQ2QsR0FBVyxFQUNYLEdBQVcsRUFDWCxLQUFhO29CQUNiLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO29CQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztvQkFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO29CQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztvQkFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO29CQUNmLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO29CQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2dCQUNwQixDQUFDO2dCQUNGLGNBQUM7WUFBRCxDQWhDQSxBQWdDQyxJQUFBO1lBaENELDZCQWdDQyxDQUFBIiwiZmlsZSI6InNoYXJlZC9zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFN1cHBvcnQge1xuXHRfaWQ6IHN0cmluZztcblx0aXNzdWVfaWQ6IHN0cmluZztcblx0cG9pbnRfaWQ6IHN0cmluZztcbiAgICBldmlkZW5jZTogc3RyaW5nO1xuICAgIGRldGFpbDogc3RyaW5nO1xuICAgIHR5cGU6IHN0cmluZztcblx0c291cmNlOiBzdHJpbmc7XG5cdHRhZzogc3RyaW5nO1xuXHR1cHM6IG51bWJlcjtcblx0ZG93bnM6IG51bWJlcjtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRpc3N1ZV9pZDogc3RyaW5nLFxuXHRcdHBvaW50X2lkOiBzdHJpbmcsXG5cdFx0ZXZpZGVuY2U6IHN0cmluZyxcblx0XHRkZXRhaWw6IHN0cmluZyxcblx0XHR0eXBlOiBzdHJpbmcsXG5cdFx0c291cmNlOiBzdHJpbmcsXG5cdFx0dGFnOiBzdHJpbmcsXG5cdFx0dXBzOiBudW1iZXIsXG5cdFx0ZG93bnM6IG51bWJlcil7XG5cdFx0dGhpcy5pc3N1ZV9pZCA9IGlzc3VlX2lkO1xuXHRcdHRoaXMucG9pbnRfaWQgPSBwb2ludF9pZDtcblx0XHR0aGlzLmV2aWRlbmNlID0gZXZpZGVuY2U7XG5cdFx0dGhpcy5kZXRhaWwgPSBkZXRhaWw7XG5cdFx0dGhpcy50eXBlID0gdHlwZTtcblx0XHR0aGlzLnNvdXJjZSA9IHNvdXJjZTtcblx0XHR0aGlzLnRhZyA9IHRhZztcblx0XHR0aGlzLnVwcyA9IHVwcztcblx0XHR0aGlzLmRvd25zID0gZG93bnM7XG5cdH1cbn1cbmZ1bmN0aW9uIGd1aWQoKSB7XG5cdGZ1bmN0aW9uIHM0KCkge1xuXHRcdHJldHVybiBNYXRoLmZsb29yKCgxICsgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwKVxuXHRcdFx0LnRvU3RyaW5nKDE2KVxuXHRcdFx0LnN1YnN0cmluZygxKTtcblx0fVxuXHRyZXR1cm4gczQoKSArIHM0KCkgKyAnLScgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArXG5cdFx0czQoKSArICctJyArIHM0KCkgKyBzNCgpICsgczQoKTtcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
