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
                function Issue(mainQuestion, questionDetail, ups, downs, ownerId, ownerUsername, id) {
                    this.mainQuestion = mainQuestion;
                    this.questionDetail = questionDetail;
                    this.ups = ups;
                    this.downs = downs;
                    this.ownerId = ownerId;
                    this.ownerUsername = ownerUsername;
                    (id) ? this._id = id : null;
                }
                return Issue;
            }());
            exports_1("Issue", Issue);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9pc3N1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBMEJBO1FBQ0M7WUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUM7aUJBQzlDLFFBQVEsQ0FBQyxFQUFFLENBQUM7aUJBQ1osU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLENBQUM7UUFDRCxNQUFNLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEVBQUUsR0FBRyxHQUFHO1lBQ2pELEVBQUUsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs7O1lBbENEO2dCQVNJLGVBQ0MsWUFBb0IsRUFDcEIsY0FBc0IsRUFDdEIsR0FBVyxFQUNkLEtBQWEsRUFDYixPQUFlLEVBQ2YsYUFBcUIsRUFDckIsRUFBVztvQkFDWCxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztvQkFDakMsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7b0JBQ3JDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO29CQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO29CQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztvQkFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7b0JBQ25DLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO2dCQUMxQixDQUFDO2dCQUNMLFlBQUM7WUFBRCxDQXpCQSxBQXlCQyxJQUFBO1lBekJELHlCQXlCQyxDQUFBIiwiZmlsZSI6InNoYXJlZC9pc3N1ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBJc3N1ZSB7XG5cdF9pZDogc3RyaW5nO1xuXHRtYWluUXVlc3Rpb246IHN0cmluZztcbiAgICBxdWVzdGlvbkRldGFpbDogc3RyaW5nO1xuICAgIHVwczogbnVtYmVyO1xuICAgIGRvd25zOiBudW1iZXI7XG4gICAgb3duZXJJZDogc3RyaW5nO1xuICAgIG93bmVyVXNlcm5hbWU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgIFx0bWFpblF1ZXN0aW9uOiBzdHJpbmcsIFxuICAgIFx0cXVlc3Rpb25EZXRhaWw6IHN0cmluZywgXG4gICAgXHR1cHM6IG51bWJlciwgXG5cdFx0ZG93bnM6IG51bWJlcixcblx0XHRvd25lcklkOiBzdHJpbmcsXG5cdFx0b3duZXJVc2VybmFtZTogc3RyaW5nLFxuXHRcdGlkPzogc3RyaW5nKSB7XG5cdFx0dGhpcy5tYWluUXVlc3Rpb24gPSBtYWluUXVlc3Rpb247XG5cdFx0dGhpcy5xdWVzdGlvbkRldGFpbCA9IHF1ZXN0aW9uRGV0YWlsO1xuXHRcdHRoaXMudXBzID0gdXBzO1xuXHRcdHRoaXMuZG93bnMgPSBkb3ducztcblx0XHR0aGlzLm93bmVySWQgPSBvd25lcklkO1xuXHRcdHRoaXMub3duZXJVc2VybmFtZSA9IG93bmVyVXNlcm5hbWU7XG5cdFx0KGlkKSA/IHRoaXMuX2lkID0gaWQgOiBudWxsO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGd1aWQoKSB7XG5cdGZ1bmN0aW9uIHM0KCkge1xuXHRcdHJldHVybiBNYXRoLmZsb29yKCgxICsgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwKVxuXHRcdFx0LnRvU3RyaW5nKDE2KVxuXHRcdFx0LnN1YnN0cmluZygxKTtcblx0fVxuXHRyZXR1cm4gczQoKSArIHM0KCkgKyAnLScgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArXG5cdFx0czQoKSArICctJyArIHM0KCkgKyBzNCgpICsgczQoKTtcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
