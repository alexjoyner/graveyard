System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Post;
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
            Post = (function () {
                function Post(title, post_type_id, parent_id, point_type_id, detail, source, source_type_id, _id) {
                    this.issue_id = null;
                    this.parent_id = null;
                    this.point_type_id = null;
                    this.detail = null;
                    this.score = null;
                    this.owner_user_id = null;
                    this.source = null;
                    this.source_type_id = null;
                    this.title = title;
                    this.post_type_id = post_type_id;
                    (detail) ? this.detail = detail : null;
                    (source) ? this.source = source : null;
                    (source_type_id) ? this.source_type_id = source_type_id : null;
                    (point_type_id) ? this.point_type_id = point_type_id : null;
                    (parent_id) ? this.parent_id = parent_id : null;
                    (_id) ? this._id = _id : null;
                }
                return Post;
            }());
            exports_1("Post", Post);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9wb3N0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7SUFnQ0E7UUFDQztZQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQztpQkFDOUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztpQkFDWixTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEIsQ0FBQztRQUNELE1BQU0sQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsRUFBRSxHQUFHLEdBQUc7WUFDakQsRUFBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7Ozs7WUF4Q0Q7Z0JBYUksY0FDQyxLQUFhLEVBQ2hCLFlBQW9CLEVBQ3BCLFNBQWtCLEVBQ2xCLGFBQXNCLEVBQ3RCLE1BQWUsRUFDZixNQUFlLEVBQ2YsY0FBdUIsRUFDdkIsR0FBWTtvQkFuQmIsYUFBUSxHQUFXLElBQUksQ0FBQztvQkFFeEIsY0FBUyxHQUFXLElBQUksQ0FBQztvQkFDekIsa0JBQWEsR0FBVyxJQUFJLENBQUM7b0JBRTFCLFdBQU0sR0FBVyxJQUFJLENBQUM7b0JBQ3RCLFVBQUssR0FBVyxJQUFJLENBQUM7b0JBQ3JCLGtCQUFhLEdBQVcsSUFBSSxDQUFDO29CQUM3QixXQUFNLEdBQVcsSUFBSSxDQUFDO29CQUN0QixtQkFBYyxHQUFXLElBQUksQ0FBQztvQkFXaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7b0JBQ25CLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO29CQUNqQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQztvQkFDdkMsQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQ3ZDLENBQUMsY0FBYyxDQUFDLEdBQUUsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLEdBQUcsSUFBSSxDQUFDO29CQUM5RCxDQUFDLGFBQWEsQ0FBQyxHQUFFLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxHQUFHLElBQUksQ0FBQztvQkFDM0QsQ0FBQyxTQUFTLENBQUMsR0FBRSxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUM7b0JBQy9DLENBQUMsR0FBRyxDQUFDLEdBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDO2dCQUMzQixDQUFDO2dCQUNMLFdBQUM7WUFBRCxDQS9CQSxBQStCQyxJQUFBO1lBL0JELHVCQStCQyxDQUFBIiwiZmlsZSI6InNoYXJlZC9wb3N0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFBvc3Qge1xuXHRfaWQ6IG51bWJlcjtcblx0aXNzdWVfaWQ6IG51bWJlciA9IG51bGw7XG5cdHBvc3RfdHlwZV9pZDogbnVtYmVyO1xuXHRwYXJlbnRfaWQ6IG51bWJlciA9IG51bGw7XG5cdHBvaW50X3R5cGVfaWQ6IG51bWJlciA9IG51bGw7XG5cdHRpdGxlOiBzdHJpbmc7XG4gICAgZGV0YWlsOiBzdHJpbmcgPSBudWxsO1xuICAgIHNjb3JlOiBudW1iZXIgPSBudWxsO1xuICAgIG93bmVyX3VzZXJfaWQ6IG51bWJlciA9IG51bGw7XG4gICAgc291cmNlOiBzdHJpbmcgPSBudWxsO1xuICAgIHNvdXJjZV90eXBlX2lkOiBudW1iZXIgPSBudWxsO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgXHR0aXRsZTogc3RyaW5nLFxuXHRcdHBvc3RfdHlwZV9pZDogbnVtYmVyLFxuXHRcdHBhcmVudF9pZD86IG51bWJlcixcblx0XHRwb2ludF90eXBlX2lkPzogbnVtYmVyLFxuXHRcdGRldGFpbD86IHN0cmluZyxcblx0XHRzb3VyY2U/OiBzdHJpbmcsXG5cdFx0c291cmNlX3R5cGVfaWQ/OiBudW1iZXIsXG5cdFx0X2lkPzogbnVtYmVyKSB7XG5cdFx0dGhpcy50aXRsZSA9IHRpdGxlO1xuXHRcdHRoaXMucG9zdF90eXBlX2lkID0gcG9zdF90eXBlX2lkO1xuXHRcdChkZXRhaWwpID8gdGhpcy5kZXRhaWwgPSBkZXRhaWwgOiBudWxsO1xuXHRcdChzb3VyY2UpID8gdGhpcy5zb3VyY2UgPSBzb3VyY2UgOiBudWxsO1xuXHRcdChzb3VyY2VfdHlwZV9pZCk/IHRoaXMuc291cmNlX3R5cGVfaWQgPSBzb3VyY2VfdHlwZV9pZCA6IG51bGw7XG5cdFx0KHBvaW50X3R5cGVfaWQpPyB0aGlzLnBvaW50X3R5cGVfaWQgPSBwb2ludF90eXBlX2lkIDogbnVsbDtcblx0XHQocGFyZW50X2lkKT8gdGhpcy5wYXJlbnRfaWQgPSBwYXJlbnRfaWQgOiBudWxsO1xuXHRcdChfaWQpPyB0aGlzLl9pZCA9IF9pZCA6IG51bGw7XG4gICAgfVxufVxuZnVuY3Rpb24gZ3VpZCgpIHtcblx0ZnVuY3Rpb24gczQoKSB7XG5cdFx0cmV0dXJuIE1hdGguZmxvb3IoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApXG5cdFx0XHQudG9TdHJpbmcoMTYpXG5cdFx0XHQuc3Vic3RyaW5nKDEpO1xuXHR9XG5cdHJldHVybiBzNCgpICsgczQoKSArICctJyArIHM0KCkgKyAnLScgKyBzNCgpICsgJy0nICtcblx0XHRzNCgpICsgJy0nICsgczQoKSArIHM0KCkgKyBzNCgpO1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
