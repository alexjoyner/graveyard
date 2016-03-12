System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Issue;
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
            Issue = (function () {
                function Issue(mainQuestion, questionDetail, ups, downs, _id) {
                    this._id = (_id) ? _id : guid();
                    this.mainQuestion = mainQuestion;
                    this.questionDetail = questionDetail;
                    this.ups = ups;
                    this.downs = downs;
                }
                return Issue;
            }());
            exports_1("Issue", Issue);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9pc3N1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBb0JBO1FBQ0M7WUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUM7aUJBQzlDLFFBQVEsQ0FBQyxFQUFFLENBQUM7aUJBQ1osU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLENBQUM7UUFDRCxNQUFNLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEVBQUUsR0FBRyxHQUFHO1lBQ2pELEVBQUUsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs7O1lBNUJEO2dCQU9JLGVBQ0MsWUFBb0IsRUFDcEIsY0FBc0IsRUFDdEIsR0FBVyxFQUNkLEtBQWEsRUFDVixHQUFZO29CQUNmLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxFQUFFLENBQUM7b0JBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO29CQUNqQyxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztvQkFDckMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7b0JBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Z0JBQ2pCLENBQUM7Z0JBQ0wsWUFBQztZQUFELENBbkJBLEFBbUJDLElBQUE7WUFuQkQseUJBbUJDLENBQUEiLCJmaWxlIjoic2hhcmVkL2lzc3VlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIElzc3VlIHtcblx0X2lkOiBzdHJpbmc7XG5cdG1haW5RdWVzdGlvbjogc3RyaW5nO1xuICAgIHF1ZXN0aW9uRGV0YWlsOiBzdHJpbmc7XG4gICAgdXBzOiBudW1iZXI7XG4gICAgZG93bnM6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgIFx0bWFpblF1ZXN0aW9uOiBzdHJpbmcsIFxuICAgIFx0cXVlc3Rpb25EZXRhaWw6IHN0cmluZywgXG4gICAgXHR1cHM6IG51bWJlciwgXG5cdFx0ZG93bnM6IG51bWJlcixcbiAgICBcdF9pZD86IHN0cmluZykge1xuXHRcdHRoaXMuX2lkID0gKF9pZCkgPyBfaWQgOiBndWlkKCk7XG5cdFx0dGhpcy5tYWluUXVlc3Rpb24gPSBtYWluUXVlc3Rpb247XG5cdFx0dGhpcy5xdWVzdGlvbkRldGFpbCA9IHF1ZXN0aW9uRGV0YWlsO1xuXHRcdHRoaXMudXBzID0gdXBzO1xuXHRcdHRoaXMuZG93bnMgPSBkb3ducztcbiAgICB9XG59XG5mdW5jdGlvbiBndWlkKCkge1xuXHRmdW5jdGlvbiBzNCgpIHtcblx0XHRyZXR1cm4gTWF0aC5mbG9vcigoMSArIE1hdGgucmFuZG9tKCkpICogMHgxMDAwMClcblx0XHRcdC50b1N0cmluZygxNilcblx0XHRcdC5zdWJzdHJpbmcoMSk7XG5cdH1cblx0cmV0dXJuIHM0KCkgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArIHM0KCkgKyAnLScgK1xuXHRcdHM0KCkgKyAnLScgKyBzNCgpICsgczQoKSArIHM0KCk7XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
