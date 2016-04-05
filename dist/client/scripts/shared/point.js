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
                function Point(issue_id, problem, detail, type, ups, downs, tag, ownerId, ownerUsername, id) {
                    this.issue_id = issue_id;
                    this.problem = problem;
                    this.detail = detail;
                    this.type = type;
                    this.ups = ups;
                    this.downs = downs;
                    this.tag = tag;
                    this.ownerId = ownerId;
                    this.ownerUsername = ownerUsername;
                    (id) ? this._id = id : null;
                }
                return Point;
            }());
            exports_1("Point", Point);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9wb2ludC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBbUNBO1FBQ0M7WUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUM7aUJBQzlDLFFBQVEsQ0FBQyxFQUFFLENBQUM7aUJBQ1osU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLENBQUM7UUFDRCxNQUFNLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEVBQUUsR0FBRyxHQUFHO1lBQ2pELEVBQUUsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs7O1lBM0NEO2dCQVdJLGVBQ0YsUUFBZ0IsRUFDaEIsT0FBZSxFQUNmLE1BQWMsRUFDZCxJQUFZLEVBQ1osR0FBVyxFQUNYLEtBQWEsRUFDYixHQUFXLEVBQ1gsT0FBZSxFQUNmLGFBQXFCLEVBQ3JCLEVBQVc7b0JBRVgsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO29CQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztvQkFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7b0JBQ2pCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO29CQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO29CQUNuQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztvQkFDZixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztvQkFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7b0JBQ25DLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO2dCQUM3QixDQUFDO2dCQUNGLFlBQUM7WUFBRCxDQWxDQSxBQWtDQyxJQUFBO1lBbENELHlCQWtDQyxDQUFBIiwiZmlsZSI6InNoYXJlZC9wb2ludC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBQb2ludCB7XG5cdF9pZDogc3RyaW5nO1xuXHRvd25lcklkOiBzdHJpbmc7XG5cdG93bmVyVXNlcm5hbWU6IHN0cmluZztcblx0aXNzdWVfaWQ6IHN0cmluZztcbiAgICBwcm9ibGVtOiBzdHJpbmc7XG4gICAgZGV0YWlsOiBzdHJpbmc7XG4gICAgdHlwZTogc3RyaW5nO1xuICAgIHVwczogbnVtYmVyO1xuICAgIGRvd25zOiBudW1iZXI7XG4gICAgdGFnOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IoXG5cdFx0aXNzdWVfaWQ6IHN0cmluZyxcblx0XHRwcm9ibGVtOiBzdHJpbmcsXG5cdFx0ZGV0YWlsOiBzdHJpbmcsXG5cdFx0dHlwZTogc3RyaW5nLFxuXHRcdHVwczogbnVtYmVyLFxuXHRcdGRvd25zOiBudW1iZXIsXG5cdFx0dGFnOiBzdHJpbmcsXG5cdFx0b3duZXJJZDogc3RyaW5nLFxuXHRcdG93bmVyVXNlcm5hbWU6IHN0cmluZyxcblx0XHRpZD86IHN0cmluZ1xuXHQpe1xuXHRcdHRoaXMuaXNzdWVfaWQgPSBpc3N1ZV9pZDtcblx0XHR0aGlzLnByb2JsZW0gPSBwcm9ibGVtO1xuXHRcdHRoaXMuZGV0YWlsID0gZGV0YWlsO1xuXHRcdHRoaXMudHlwZSA9IHR5cGU7XG5cdFx0dGhpcy51cHMgPSB1cHM7XG5cdFx0dGhpcy5kb3ducyA9IGRvd25zO1xuXHRcdHRoaXMudGFnID0gdGFnO1xuXHRcdHRoaXMub3duZXJJZCA9IG93bmVySWQ7XG5cdFx0dGhpcy5vd25lclVzZXJuYW1lID0gb3duZXJVc2VybmFtZTtcblx0XHQoaWQpID8gdGhpcy5faWQgPSBpZCA6IG51bGw7XG5cdH1cbn1cbmZ1bmN0aW9uIGd1aWQoKSB7XG5cdGZ1bmN0aW9uIHM0KCkge1xuXHRcdHJldHVybiBNYXRoLmZsb29yKCgxICsgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwKVxuXHRcdFx0LnRvU3RyaW5nKDE2KVxuXHRcdFx0LnN1YnN0cmluZygxKTtcblx0fVxuXHRyZXR1cm4gczQoKSArIHM0KCkgKyAnLScgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArXG5cdFx0czQoKSArICctJyArIHM0KCkgKyBzNCgpICsgczQoKTtcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
