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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9wb2ludC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBd0JBO1FBQ0M7WUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUM7aUJBQzlDLFFBQVEsQ0FBQyxFQUFFLENBQUM7aUJBQ1osU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLENBQUM7UUFDRCxNQUFNLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEVBQUUsR0FBRyxHQUFHO1lBQ2pELEVBQUUsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs7O1lBaENEO2dCQVFJLGVBQ0YsUUFBZ0IsRUFDaEIsT0FBZSxFQUNmLElBQVksRUFDWixHQUFXLEVBQ1gsS0FBYSxFQUNiLEdBQVc7b0JBRVgsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO29CQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztvQkFDakIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7b0JBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7b0JBQ25CLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO2dCQUNoQixDQUFDO2dCQUNGLFlBQUM7WUFBRCxDQXZCQSxBQXVCQyxJQUFBO1lBdkJELHlCQXVCQyxDQUFBIiwiZmlsZSI6InNoYXJlZC9wb2ludC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBQb2ludCB7XG5cdF9pZDogc3RyaW5nO1xuXHRpc3N1ZV9pZDogc3RyaW5nO1xuICAgIHByb2JsZW06IHN0cmluZztcbiAgICB0eXBlOiBzdHJpbmc7XG4gICAgdXBzOiBudW1iZXI7XG4gICAgZG93bnM6IG51bWJlcjtcbiAgICB0YWc6IHN0cmluZztcbiAgICBjb25zdHJ1Y3Rvcihcblx0XHRpc3N1ZV9pZDogc3RyaW5nLFxuXHRcdHByb2JsZW06IHN0cmluZyxcblx0XHR0eXBlOiBzdHJpbmcsXG5cdFx0dXBzOiBudW1iZXIsXG5cdFx0ZG93bnM6IG51bWJlcixcblx0XHR0YWc6IHN0cmluZ1xuXHQpe1xuXHRcdHRoaXMuaXNzdWVfaWQgPSBpc3N1ZV9pZDtcblx0XHR0aGlzLnByb2JsZW0gPSBwcm9ibGVtO1xuXHRcdHRoaXMudHlwZSA9IHR5cGU7XG5cdFx0dGhpcy51cHMgPSB1cHM7XG5cdFx0dGhpcy5kb3ducyA9IGRvd25zO1xuXHRcdHRoaXMudGFnID0gdGFnO1xuXHR9XG59XG5mdW5jdGlvbiBndWlkKCkge1xuXHRmdW5jdGlvbiBzNCgpIHtcblx0XHRyZXR1cm4gTWF0aC5mbG9vcigoMSArIE1hdGgucmFuZG9tKCkpICogMHgxMDAwMClcblx0XHRcdC50b1N0cmluZygxNilcblx0XHRcdC5zdWJzdHJpbmcoMSk7XG5cdH1cblx0cmV0dXJuIHM0KCkgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArIHM0KCkgKyAnLScgK1xuXHRcdHM0KCkgKyAnLScgKyBzNCgpICsgczQoKSArIHM0KCk7XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
