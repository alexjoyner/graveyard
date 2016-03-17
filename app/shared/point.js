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
                function Point(issue_id, problem, type, ups, downs, tag) {
                    this.issue_id = issue_id;
                    this.problem = problem;
                    this.type = type;
                    this.ups = ups;
                    this.downs = downs;
                    this.tag = tag;
                }
                return Point;
            }());
            exports_1("Point", Point);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9wb2ludC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBdUJBO1FBQ0M7WUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUM7aUJBQzlDLFFBQVEsQ0FBQyxFQUFFLENBQUM7aUJBQ1osU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLENBQUM7UUFDRCxNQUFNLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEVBQUUsR0FBRyxHQUFHO1lBQ2pELEVBQUUsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs7O1lBL0JEO2dCQU9JLGVBQ0YsUUFBZ0IsRUFDaEIsT0FBZSxFQUNmLElBQVksRUFDWixHQUFXLEVBQ1gsS0FBYSxFQUNiLEdBQVc7b0JBRVgsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO29CQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztvQkFDakIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7b0JBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7b0JBQ25CLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO2dCQUNoQixDQUFDO2dCQUNGLFlBQUM7WUFBRCxDQXRCQSxBQXNCQyxJQUFBO1lBdEJELHlCQXNCQyxDQUFBIiwiZmlsZSI6InNoYXJlZC9wb2ludC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBQb2ludCB7XG5cdGlzc3VlX2lkOiBzdHJpbmc7XG4gICAgcHJvYmxlbTogc3RyaW5nO1xuICAgIHR5cGU6IHN0cmluZztcbiAgICB1cHM6IG51bWJlcjtcbiAgICBkb3duczogbnVtYmVyO1xuICAgIHRhZzogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKFxuXHRcdGlzc3VlX2lkOiBzdHJpbmcsXG5cdFx0cHJvYmxlbTogc3RyaW5nLFxuXHRcdHR5cGU6IHN0cmluZyxcblx0XHR1cHM6IG51bWJlcixcblx0XHRkb3duczogbnVtYmVyLFxuXHRcdHRhZzogc3RyaW5nXG5cdCl7XG5cdFx0dGhpcy5pc3N1ZV9pZCA9IGlzc3VlX2lkO1xuXHRcdHRoaXMucHJvYmxlbSA9IHByb2JsZW07XG5cdFx0dGhpcy50eXBlID0gdHlwZTtcblx0XHR0aGlzLnVwcyA9IHVwcztcblx0XHR0aGlzLmRvd25zID0gZG93bnM7XG5cdFx0dGhpcy50YWcgPSB0YWc7XG5cdH1cbn1cbmZ1bmN0aW9uIGd1aWQoKSB7XG5cdGZ1bmN0aW9uIHM0KCkge1xuXHRcdHJldHVybiBNYXRoLmZsb29yKCgxICsgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwKVxuXHRcdFx0LnRvU3RyaW5nKDE2KVxuXHRcdFx0LnN1YnN0cmluZygxKTtcblx0fVxuXHRyZXR1cm4gczQoKSArIHM0KCkgKyAnLScgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArXG5cdFx0czQoKSArICctJyArIHM0KCkgKyBzNCgpICsgczQoKTtcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
