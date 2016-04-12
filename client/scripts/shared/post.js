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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9wb3N0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7SUErQkE7UUFDQztZQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQztpQkFDOUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztpQkFDWixTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEIsQ0FBQztRQUNELE1BQU0sQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsRUFBRSxHQUFHLEdBQUc7WUFDakQsRUFBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7Ozs7WUF2Q0Q7Z0JBWUksY0FDQyxLQUFhLEVBQ2hCLFlBQW9CLEVBQ3BCLFNBQWtCLEVBQ2xCLGFBQXNCLEVBQ3RCLE1BQWUsRUFDZixNQUFlLEVBQ2YsY0FBdUIsRUFDdkIsR0FBWTtvQkFqQmIsY0FBUyxHQUFXLElBQUksQ0FBQztvQkFDekIsa0JBQWEsR0FBVyxJQUFJLENBQUM7b0JBRTFCLFdBQU0sR0FBVyxJQUFJLENBQUM7b0JBQ3RCLFVBQUssR0FBVyxJQUFJLENBQUM7b0JBQ3JCLGtCQUFhLEdBQVcsSUFBSSxDQUFDO29CQUM3QixXQUFNLEdBQVcsSUFBSSxDQUFDO29CQUN0QixtQkFBYyxHQUFXLElBQUksQ0FBQztvQkFXaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7b0JBQ25CLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO29CQUNqQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQztvQkFDdkMsQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQ3ZDLENBQUMsY0FBYyxDQUFDLEdBQUUsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLEdBQUcsSUFBSSxDQUFDO29CQUM5RCxDQUFDLGFBQWEsQ0FBQyxHQUFFLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxHQUFHLElBQUksQ0FBQztvQkFDM0QsQ0FBQyxTQUFTLENBQUMsR0FBRSxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUM7b0JBQy9DLENBQUMsR0FBRyxDQUFDLEdBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDO2dCQUMzQixDQUFDO2dCQUNMLFdBQUM7WUFBRCxDQTlCQSxBQThCQyxJQUFBO1lBOUJELHVCQThCQyxDQUFBIiwiZmlsZSI6InNoYXJlZC9wb3N0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFBvc3Qge1xuXHRfaWQ6IG51bWJlcjtcblx0cG9zdF90eXBlX2lkOiBudW1iZXI7XG5cdHBhcmVudF9pZDogbnVtYmVyID0gbnVsbDtcblx0cG9pbnRfdHlwZV9pZDogbnVtYmVyID0gbnVsbDtcblx0dGl0bGU6IHN0cmluZztcbiAgICBkZXRhaWw6IHN0cmluZyA9IG51bGw7XG4gICAgc2NvcmU6IG51bWJlciA9IG51bGw7XG4gICAgb3duZXJfdXNlcl9pZDogbnVtYmVyID0gbnVsbDtcbiAgICBzb3VyY2U6IHN0cmluZyA9IG51bGw7XG4gICAgc291cmNlX3R5cGVfaWQ6IG51bWJlciA9IG51bGw7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICBcdHRpdGxlOiBzdHJpbmcsXG5cdFx0cG9zdF90eXBlX2lkOiBudW1iZXIsXG5cdFx0cGFyZW50X2lkPzogbnVtYmVyLFxuXHRcdHBvaW50X3R5cGVfaWQ/OiBudW1iZXIsXG5cdFx0ZGV0YWlsPzogc3RyaW5nLFxuXHRcdHNvdXJjZT86IHN0cmluZyxcblx0XHRzb3VyY2VfdHlwZV9pZD86IG51bWJlcixcblx0XHRfaWQ/OiBudW1iZXIpIHtcblx0XHR0aGlzLnRpdGxlID0gdGl0bGU7XG5cdFx0dGhpcy5wb3N0X3R5cGVfaWQgPSBwb3N0X3R5cGVfaWQ7XG5cdFx0KGRldGFpbCkgPyB0aGlzLmRldGFpbCA9IGRldGFpbCA6IG51bGw7XG5cdFx0KHNvdXJjZSkgPyB0aGlzLnNvdXJjZSA9IHNvdXJjZSA6IG51bGw7XG5cdFx0KHNvdXJjZV90eXBlX2lkKT8gdGhpcy5zb3VyY2VfdHlwZV9pZCA9IHNvdXJjZV90eXBlX2lkIDogbnVsbDtcblx0XHQocG9pbnRfdHlwZV9pZCk/IHRoaXMucG9pbnRfdHlwZV9pZCA9IHBvaW50X3R5cGVfaWQgOiBudWxsO1xuXHRcdChwYXJlbnRfaWQpPyB0aGlzLnBhcmVudF9pZCA9IHBhcmVudF9pZCA6IG51bGw7XG5cdFx0KF9pZCk/IHRoaXMuX2lkID0gX2lkIDogbnVsbDtcbiAgICB9XG59XG5mdW5jdGlvbiBndWlkKCkge1xuXHRmdW5jdGlvbiBzNCgpIHtcblx0XHRyZXR1cm4gTWF0aC5mbG9vcigoMSArIE1hdGgucmFuZG9tKCkpICogMHgxMDAwMClcblx0XHRcdC50b1N0cmluZygxNilcblx0XHRcdC5zdWJzdHJpbmcoMSk7XG5cdH1cblx0cmV0dXJuIHM0KCkgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArIHM0KCkgKyAnLScgK1xuXHRcdHM0KCkgKyAnLScgKyBzNCgpICsgczQoKSArIHM0KCk7XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
