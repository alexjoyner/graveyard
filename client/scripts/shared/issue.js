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
                function Issue(mainQuestion, questionDetail, ups, downs, id) {
                    this.mainQuestion = mainQuestion;
                    this.questionDetail = questionDetail;
                    this.ups = ups;
                    this.downs = downs;
                    (id) ? this._id = id : null;
                }
                return Issue;
            }());
            exports_1("Issue", Issue);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9pc3N1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBb0JBO1FBQ0M7WUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUM7aUJBQzlDLFFBQVEsQ0FBQyxFQUFFLENBQUM7aUJBQ1osU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLENBQUM7UUFDRCxNQUFNLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEVBQUUsR0FBRyxHQUFHO1lBQ2pELEVBQUUsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs7O1lBNUJEO2dCQU9JLGVBQ0MsWUFBb0IsRUFDcEIsY0FBc0IsRUFDdEIsR0FBVyxFQUNkLEtBQWEsRUFDYixFQUFXO29CQUNYLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO29CQUNqQyxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztvQkFDckMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7b0JBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7b0JBQ25CLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO2dCQUMxQixDQUFDO2dCQUNMLFlBQUM7WUFBRCxDQW5CQSxBQW1CQyxJQUFBO1lBbkJELHlCQW1CQyxDQUFBIiwiZmlsZSI6InNoYXJlZC9pc3N1ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBJc3N1ZSB7XG5cdF9pZDogc3RyaW5nO1xuXHRtYWluUXVlc3Rpb246IHN0cmluZztcbiAgICBxdWVzdGlvbkRldGFpbDogc3RyaW5nO1xuICAgIHVwczogbnVtYmVyO1xuICAgIGRvd25zOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICBcdG1haW5RdWVzdGlvbjogc3RyaW5nLCBcbiAgICBcdHF1ZXN0aW9uRGV0YWlsOiBzdHJpbmcsIFxuICAgIFx0dXBzOiBudW1iZXIsIFxuXHRcdGRvd25zOiBudW1iZXIsXG5cdFx0aWQ/OiBzdHJpbmcpIHtcblx0XHR0aGlzLm1haW5RdWVzdGlvbiA9IG1haW5RdWVzdGlvbjtcblx0XHR0aGlzLnF1ZXN0aW9uRGV0YWlsID0gcXVlc3Rpb25EZXRhaWw7XG5cdFx0dGhpcy51cHMgPSB1cHM7XG5cdFx0dGhpcy5kb3ducyA9IGRvd25zO1xuXHRcdChpZCkgPyB0aGlzLl9pZCA9IGlkIDogbnVsbDtcbiAgICB9XG59XG5mdW5jdGlvbiBndWlkKCkge1xuXHRmdW5jdGlvbiBzNCgpIHtcblx0XHRyZXR1cm4gTWF0aC5mbG9vcigoMSArIE1hdGgucmFuZG9tKCkpICogMHgxMDAwMClcblx0XHRcdC50b1N0cmluZygxNilcblx0XHRcdC5zdWJzdHJpbmcoMSk7XG5cdH1cblx0cmV0dXJuIHM0KCkgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArIHM0KCkgKyAnLScgK1xuXHRcdHM0KCkgKyAnLScgKyBzNCgpICsgczQoKSArIHM0KCk7XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
