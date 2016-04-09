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
                function Issue(mainquestion, questiondetail, ups, downs, owner_id, id) {
                    this.mainquestion = mainquestion;
                    this.questiondetail = questiondetail;
                    this.ups = ups;
                    this.downs = downs;
                    this.owner_id = owner_id;
                    (id) ? this._id = id : null;
                }
                return Issue;
            }());
            exports_1("Issue", Issue);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9pc3N1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBdUJBO1FBQ0M7WUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUM7aUJBQzlDLFFBQVEsQ0FBQyxFQUFFLENBQUM7aUJBQ1osU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLENBQUM7UUFDRCxNQUFNLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEVBQUUsR0FBRyxHQUFHO1lBQ2pELEVBQUUsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs7O1lBL0JEO2dCQVFJLGVBQ0MsWUFBb0IsRUFDcEIsY0FBc0IsRUFDdEIsR0FBVyxFQUNkLEtBQWEsRUFDYixRQUFnQixFQUNoQixFQUFXO29CQUNYLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO29CQUNqQyxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztvQkFDckMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7b0JBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7b0JBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO29CQUN6QixDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztnQkFDMUIsQ0FBQztnQkFDTCxZQUFDO1lBQUQsQ0F0QkEsQUFzQkMsSUFBQTtZQXRCRCx5QkFzQkMsQ0FBQSIsImZpbGUiOiJzaGFyZWQvaXNzdWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgSXNzdWUge1xuXHRfaWQ6IG51bWJlcjtcblx0bWFpbnF1ZXN0aW9uOiBzdHJpbmc7XG4gICAgcXVlc3Rpb25kZXRhaWw6IHN0cmluZztcbiAgICB1cHM6IG51bWJlcjtcbiAgICBkb3duczogbnVtYmVyO1xuICAgIG93bmVyX2lkOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICBcdG1haW5xdWVzdGlvbjogc3RyaW5nLCBcbiAgICBcdHF1ZXN0aW9uZGV0YWlsOiBzdHJpbmcsIFxuICAgIFx0dXBzOiBudW1iZXIsIFxuXHRcdGRvd25zOiBudW1iZXIsXG5cdFx0b3duZXJfaWQ6IG51bWJlcixcblx0XHRpZD86IG51bWJlcikge1xuXHRcdHRoaXMubWFpbnF1ZXN0aW9uID0gbWFpbnF1ZXN0aW9uO1xuXHRcdHRoaXMucXVlc3Rpb25kZXRhaWwgPSBxdWVzdGlvbmRldGFpbDtcblx0XHR0aGlzLnVwcyA9IHVwcztcblx0XHR0aGlzLmRvd25zID0gZG93bnM7XG5cdFx0dGhpcy5vd25lcl9pZCA9IG93bmVyX2lkO1xuXHRcdChpZCkgPyB0aGlzLl9pZCA9IGlkIDogbnVsbDtcbiAgICB9XG59XG5mdW5jdGlvbiBndWlkKCkge1xuXHRmdW5jdGlvbiBzNCgpIHtcblx0XHRyZXR1cm4gTWF0aC5mbG9vcigoMSArIE1hdGgucmFuZG9tKCkpICogMHgxMDAwMClcblx0XHRcdC50b1N0cmluZygxNilcblx0XHRcdC5zdWJzdHJpbmcoMSk7XG5cdH1cblx0cmV0dXJuIHM0KCkgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArIHM0KCkgKyAnLScgK1xuXHRcdHM0KCkgKyAnLScgKyBzNCgpICsgczQoKSArIHM0KCk7XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
