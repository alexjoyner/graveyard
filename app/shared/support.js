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
                    this._id = (_id) ? _id : guid();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zdXBwb3J0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7SUE2QkE7UUFDQztZQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQztpQkFDOUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztpQkFDWixTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEIsQ0FBQztRQUNELE1BQU0sQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsRUFBRSxHQUFHLEdBQUc7WUFDakQsRUFBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7Ozs7WUFyQ0Q7Z0JBVUMsaUJBQ0MsUUFBZ0IsRUFDaEIsUUFBZ0IsRUFDaEIsSUFBWSxFQUNaLE1BQWMsRUFDZCxHQUFXLEVBQ1gsR0FBVyxFQUNYLEtBQWEsRUFDYixHQUFZO29CQUNaLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxFQUFFLENBQUM7b0JBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO29CQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztvQkFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7b0JBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO29CQUNyQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztvQkFDZixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztvQkFDZixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFDcEIsQ0FBQztnQkFDRixjQUFDO1lBQUQsQ0E1QkEsQUE0QkMsSUFBQTtZQTVCRCw2QkE0QkMsQ0FBQSIsImZpbGUiOiJzaGFyZWQvc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBTdXBwb3J0IHtcblx0X2lkOiBzdHJpbmc7XG5cdHBvaW50X2lkOiBzdHJpbmc7XG4gICAgZXZpZGVuY2U6IHN0cmluZztcbiAgICB0eXBlOiBzdHJpbmc7XG5cdHNvdXJjZTogc3RyaW5nO1xuXHR0YWc6IHN0cmluZztcblx0dXBzOiBudW1iZXI7XG5cdGRvd25zOiBudW1iZXI7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cG9pbnRfaWQ6IHN0cmluZyxcblx0XHRldmlkZW5jZTogc3RyaW5nLFxuXHRcdHR5cGU6IHN0cmluZyxcblx0XHRzb3VyY2U6IHN0cmluZyxcblx0XHR0YWc6IHN0cmluZyxcblx0XHR1cHM6IG51bWJlcixcblx0XHRkb3duczogbnVtYmVyLFxuXHRcdF9pZD86IHN0cmluZyl7XG5cdFx0dGhpcy5faWQgPSAoX2lkKSA/IF9pZCA6IGd1aWQoKTtcblx0XHR0aGlzLnBvaW50X2lkID0gcG9pbnRfaWQ7XG5cdFx0dGhpcy5ldmlkZW5jZSA9IGV2aWRlbmNlO1xuXHRcdHRoaXMudHlwZSA9IHR5cGU7XG5cdFx0dGhpcy5zb3VyY2UgPSBzb3VyY2U7XG5cdFx0dGhpcy50YWcgPSB0YWc7XG5cdFx0dGhpcy51cHMgPSB1cHM7XG5cdFx0dGhpcy5kb3ducyA9IGRvd25zO1xuXHR9XG59XG5mdW5jdGlvbiBndWlkKCkge1xuXHRmdW5jdGlvbiBzNCgpIHtcblx0XHRyZXR1cm4gTWF0aC5mbG9vcigoMSArIE1hdGgucmFuZG9tKCkpICogMHgxMDAwMClcblx0XHRcdC50b1N0cmluZygxNilcblx0XHRcdC5zdWJzdHJpbmcoMSk7XG5cdH1cblx0cmV0dXJuIHM0KCkgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArIHM0KCkgKyAnLScgK1xuXHRcdHM0KCkgKyAnLScgKyBzNCgpICsgczQoKSArIHM0KCk7XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
