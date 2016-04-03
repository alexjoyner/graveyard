System.register(['angular2/core', './window.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, window_service_1;
    var SmoothScroll;
    function currentYPosition() {
        // Firefox, Chrome, Opera, Safari
        if (self.pageYOffset)
            return self.pageYOffset;
        // Internet Explorer 6 - standards mode
        if (document.documentElement && document.documentElement.scrollTop)
            return document.documentElement.scrollTop;
        // Internet Explorer 6, 7 and 8
        if (document.body.scrollTop)
            return document.body.scrollTop;
        return 0;
    }
    function elmYPosition(eID) {
        var elm = document.getElementById(eID);
        var y = elm.offsetTop;
        var node = elm;
        while (node.offsetParent && node.offsetParent != document.body) {
            node = node.offsetParent;
            y += node.offsetTop;
        }
        return y;
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (window_service_1_1) {
                window_service_1 = window_service_1_1;
            }],
        execute: function() {
            SmoothScroll = (function () {
                function SmoothScroll(_win) {
                    this._win = _win;
                    this.win = _win.nativeWindow;
                }
                ;
                SmoothScroll.prototype.scrollTo = function (yPoint, duration) {
                    var _this = this;
                    setTimeout(function () {
                        _this.win.window.scrollTo(0, yPoint);
                    }, duration);
                    return;
                };
                SmoothScroll.prototype.smoothScroll = function (eID, offset) {
                    var startY = currentYPosition();
                    var stopY = (elmYPosition(eID) - offset);
                    var distance = stopY > startY ? stopY - startY : startY - stopY;
                    if (distance < 100) {
                        this.win.window.scrollTo(0, stopY);
                        return;
                    }
                    var timesFactor = 2;
                    var speed = Math.round(distance / (100 * timesFactor));
                    if (speed >= 20)
                        speed = 20;
                    var step = Math.round(distance / 100);
                    var leapY = stopY > startY ? startY + step : startY - step;
                    var timer = 0;
                    console.log('startY: ', startY);
                    console.log('stopY: ', stopY);
                    console.log('distance: ', distance);
                    console.log('speed: ', speed);
                    if (stopY > startY) {
                        for (var i = startY; i < stopY; i += step) {
                            this.scrollTo(leapY, timer * speed);
                            leapY += step;
                            if (leapY > stopY)
                                leapY = stopY;
                            timer++;
                        }
                        return;
                    }
                    for (var i = startY; i > stopY; i -= step) {
                        this.scrollTo(leapY, timer * speed);
                        leapY -= step;
                        if (leapY < stopY)
                            leapY = stopY;
                        timer++;
                    }
                };
                SmoothScroll = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [window_service_1.WINDOW])
                ], SmoothScroll);
                return SmoothScroll;
            }());
            exports_1("SmoothScroll", SmoothScroll);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zbW9vdGgtc2Nyb2xsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7SUE4Q0E7UUFDRSxpQ0FBaUM7UUFDakMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzlDLHVDQUF1QztRQUN2QyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsZUFBZSxJQUFJLFFBQVEsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDO1lBQ2pFLE1BQU0sQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQztRQUM1QywrQkFBK0I7UUFDL0IsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDNUQsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDRCxzQkFBc0IsR0FBRztRQUN2QixJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUM7UUFDdEIsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ2YsT0FBTyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQy9ELElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ3pCLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3RCLENBQUM7UUFBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ2IsQ0FBQzs7Ozs7Ozs7OztZQTNERDtnQkFFRSxzQkFDVyxJQUFZO29CQUFaLFNBQUksR0FBSixJQUFJLENBQVE7b0JBQ3JCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFlB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QzNELENBQUM7Z0JBQ0gsQ0FBQztnQkF4Q0g7b0JBQUMsaUJBQVUsRUFBRTs7Z0NBQUE7Z0JBeUNiLG1CQUFDO1lBQUQsQ0F4Q0EsQUF3Q0MsSUFBQTtZQXhDRCx1Q0F3Q0MsQ0FBQSIsImZpbGUiOiJzaGFyZWQvc21vb3RoLXNjcm9sbC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlLCBJbmplY3QsIE9uSW5pdCwgUHJvdmlkZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1dJTkRPV30gZnJvbSAnLi93aW5kb3cuc2VydmljZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNtb290aFNjcm9sbCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgd2luOiBXaW5kb3c7XG4gIGNvbnN0cnVjdG9yKFxuICAgICBwcml2YXRlIF93aW46IFdJTkRPVykge1xuICAgIHRoaXMud2luID0gX3dpbi5uYXRpdmVXaW5kb3c7XG4gIH07XG4gIHNjcm9sbFRvKHlQb2ludDogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLndpbi53aW5kb3cuc2Nyb2xsVG8oMCwgeVBvaW50KVxuICAgIH0sIGR1cmF0aW9uKTtcbiAgICByZXR1cm47XG4gIH1cbiAgc21vb3RoU2Nyb2xsKGVJRCwgb2Zmc2V0OiBudW1iZXIpIHtcbiAgICB2YXIgc3RhcnRZID0gY3VycmVudFlQb3NpdGlvbigpO1xuICAgIHZhciBzdG9wWSA9IChlbG1ZUG9zaXRpb24oZUlEKSAtIG9mZnNldCk7XG4gICAgdmFyIGRpc3RhbmNlID0gc3RvcFkgPiBzdGFydFkgPyBzdG9wWSAtIHN0YXJ0WSA6IHN0YXJ0WSAtIHN0b3BZO1xuICAgIGlmIChkaXN0YW5jZSA8IDEwMCkge1xuICAgICAgdGhpcy53aW4ud2luZG93LnNjcm9sbFRvKDAsIHN0b3BZKTsgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgdGltZXNGYWN0b3IgPSAyO1xuICAgIHZhciBzcGVlZCA9IE1hdGgucm91bmQoZGlzdGFuY2UgLyAoMTAwICogdGltZXNGYWN0b3IpKTtcbiAgICBpZiAoc3BlZWQgPj0gMjApIHNwZWVkID0gMjA7XG4gICAgdmFyIHN0ZXAgPSBNYXRoLnJvdW5kKGRpc3RhbmNlIC8gMTAwKTtcbiAgICB2YXIgbGVhcFkgPSBzdG9wWSA+IHN0YXJ0WSA/IHN0YXJ0WSArIHN0ZXAgOiBzdGFydFkgLSBzdGVwO1xuICAgIHZhciB0aW1lciA9IDA7XG4gICAgY29uc29sZS5sb2coJ3N0YXJ0WTogJywgc3RhcnRZKTtcbiAgICBjb25zb2xlLmxvZygnc3RvcFk6ICcsIHN0b3BZKTtcbiAgICBjb25zb2xlLmxvZygnZGlzdGFuY2U6ICcsIGRpc3RhbmNlKTtcbiAgICBjb25zb2xlLmxvZygnc3BlZWQ6ICcsIHNwZWVkKTtcbiAgICBpZiAoc3RvcFkgPiBzdGFydFkpIHtcbiAgICAgIGZvciAodmFyIGkgPSBzdGFydFk7IGkgPCBzdG9wWTsgaSArPSBzdGVwKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsVG8obGVhcFksIHRpbWVyICogc3BlZWQpO1xuICAgICAgICBsZWFwWSArPSBzdGVwOyBpZiAobGVhcFkgPiBzdG9wWSkgbGVhcFkgPSBzdG9wWTsgdGltZXIrKztcbiAgICAgIH0gcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gc3RhcnRZOyBpID4gc3RvcFk7IGkgLT0gc3RlcCkge1xuICAgICAgdGhpcy5zY3JvbGxUbyhsZWFwWSwgdGltZXIgKiBzcGVlZCk7XG4gICAgICBsZWFwWSAtPSBzdGVwOyBpZiAobGVhcFkgPCBzdG9wWSkgbGVhcFkgPSBzdG9wWTsgdGltZXIrKztcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGN1cnJlbnRZUG9zaXRpb24oKSB7XG4gIC8vIEZpcmVmb3gsIENocm9tZSwgT3BlcmEsIFNhZmFyaVxuICBpZiAoc2VsZi5wYWdlWU9mZnNldCkgcmV0dXJuIHNlbGYucGFnZVlPZmZzZXQ7XG4gIC8vIEludGVybmV0IEV4cGxvcmVyIDYgLSBzdGFuZGFyZHMgbW9kZVxuICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3ApXG4gICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gIC8vIEludGVybmV0IEV4cGxvcmVyIDYsIDcgYW5kIDhcbiAgaWYgKGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wKSByZXR1cm4gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG4gIHJldHVybiAwO1xufVxuZnVuY3Rpb24gZWxtWVBvc2l0aW9uKGVJRCkge1xuICB2YXIgZWxtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZUlEKTtcbiAgdmFyIHkgPSBlbG0ub2Zmc2V0VG9wO1xuICB2YXIgbm9kZSA9IGVsbTtcbiAgd2hpbGUgKG5vZGUub2Zmc2V0UGFyZW50ICYmIG5vZGUub2Zmc2V0UGFyZW50ICE9IGRvY3VtZW50LmJvZHkpIHtcbiAgICBub2RlID0gbm9kZS5vZmZzZXRQYXJlbnQ7XG4gICAgeSArPSBub2RlLm9mZnNldFRvcDtcbiAgfSByZXR1cm4geTtcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
