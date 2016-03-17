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
                function Issue(mainQuestion, questionDetail, ups, downs) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9pc3N1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBaUJBO1FBQ0M7WUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUM7aUJBQzlDLFFBQVEsQ0FBQyxFQUFFLENBQUM7aUJBQ1osU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLENBQUM7UUFDRCxNQUFNLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEVBQUUsR0FBRyxHQUFHO1lBQ2pELEVBQUUsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs7O1lBekJEO2dCQU1JLGVBQ0MsWUFBb0IsRUFDcEIsY0FBc0IsRUFDdEIsR0FBVyxFQUNkLEtBQWE7b0JBQ2IsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7b0JBQ2pDLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO29CQUNyQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztvQkFDZixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFDakIsQ0FBQztnQkFDTCxZQUFDO1lBQUQsQ0FoQkEsQUFnQkMsSUFBQTtZQWhCRCx5QkFnQkMsQ0FBQSIsImZpbGUiOiJzaGFyZWQvaXNzdWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgSXNzdWUge1xuXHRtYWluUXVlc3Rpb246IHN0cmluZztcbiAgICBxdWVzdGlvbkRldGFpbDogc3RyaW5nO1xuICAgIHVwczogbnVtYmVyO1xuICAgIGRvd25zOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICBcdG1haW5RdWVzdGlvbjogc3RyaW5nLCBcbiAgICBcdHF1ZXN0aW9uRGV0YWlsOiBzdHJpbmcsIFxuICAgIFx0dXBzOiBudW1iZXIsIFxuXHRcdGRvd25zOiBudW1iZXIpIHtcblx0XHR0aGlzLm1haW5RdWVzdGlvbiA9IG1haW5RdWVzdGlvbjtcblx0XHR0aGlzLnF1ZXN0aW9uRGV0YWlsID0gcXVlc3Rpb25EZXRhaWw7XG5cdFx0dGhpcy51cHMgPSB1cHM7XG5cdFx0dGhpcy5kb3ducyA9IGRvd25zO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGd1aWQoKSB7XG5cdGZ1bmN0aW9uIHM0KCkge1xuXHRcdHJldHVybiBNYXRoLmZsb29yKCgxICsgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwKVxuXHRcdFx0LnRvU3RyaW5nKDE2KVxuXHRcdFx0LnN1YnN0cmluZygxKTtcblx0fVxuXHRyZXR1cm4gczQoKSArIHM0KCkgKyAnLScgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArXG5cdFx0czQoKSArICctJyArIHM0KCkgKyBzNCgpICsgczQoKTtcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
