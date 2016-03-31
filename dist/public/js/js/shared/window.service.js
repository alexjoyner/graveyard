System.register(['angular2/core', 'angular2/src/facade/browser', 'angular2/src/facade/exceptions'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var core_1, browser_1, exceptions_1;
    var WINDOW, WindowRef_, WINDOW_PROVIDERS;
    function _window() {
        return browser_1.window;
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (exceptions_1_1) {
                exceptions_1 = exceptions_1_1;
            }],
        execute: function() {
            WINDOW = (function () {
                function WINDOW() {
                }
                Object.defineProperty(WINDOW.prototype, "nativeWindow", {
                    get: function () {
                        return exceptions_1.unimplemented();
                    },
                    enumerable: true,
                    configurable: true
                });
                return WINDOW;
            }());
            exports_1("WINDOW", WINDOW);
            WindowRef_ = (function (_super) {
                __extends(WindowRef_, _super);
                function WindowRef_() {
                    _super.call(this);
                }
                Object.defineProperty(WindowRef_.prototype, "nativeWindow", {
                    get: function () {
                        return _window();
                    },
                    enumerable: true,
                    configurable: true
                });
                return WindowRef_;
            }(WINDOW));
            exports_1("WINDOW_PROVIDERS", WINDOW_PROVIDERS = [
                new core_1.Provider(WINDOW, { useClass: WindowRef_ }),
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC93aW5kb3cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7NEJBdUJhLGdCQUFnQjtJQW5CN0I7UUFDRSxNQUFNLENBQUMsZ0JBQU0sQ0FBQTtJQUNmLENBQUM7Ozs7Ozs7Ozs7Ozs7WUFFRDtnQkFBQTtnQkFJQSxDQUFDO2dCQUhDLHNCQUFJLGdDQUFZO3lCQUFoQjt3QkFDRSxNQUFNLENBQUMsMEJBQWEsRUFBRSxDQUFDO29CQUN6QixDQUFDOzs7bUJBQUE7Z0JBQ0gsYUFBQztZQUFELENBSkEsQUFJQyxJQUFBO1lBSkQsMkJBSUMsQ0FBQTtZQUVEO2dCQUF5Qiw4QkFBTTtnQkFDN0I7b0JBQ0UsaUJBQU8sQ0FBQztnQkFDVixDQUFDO2dCQUNELHNCQUFJLG9DQUFZO3lCQUFoQjt3QkFDRSxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQ25CLENBQUM7OzttQkFBQTtnQkFDSCxpQkFBQztZQUFELENBUEEsQUFPQyxDQVB3QixNQUFNLEdBTzlCO1lBRVksOEJBQUEsZ0JBQWdCLEdBQUc7Z0JBQzlCLElBQUksZUFBUSxDQUFDLE1BQU0sRUFBRSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsQ0FBQzthQUMvQyxDQUFBLENBQUMiLCJmaWxlIjoic2hhcmVkL3dpbmRvdy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlLCBQcm92aWRlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge3dpbmRvd30gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9icm93c2VyJztcbmltcG9ydCB7dW5pbXBsZW1lbnRlZH0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9leGNlcHRpb25zJztcblxuZnVuY3Rpb24gX3dpbmRvdygpOiBXaW5kb3cge1xuICByZXR1cm4gd2luZG93XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBXSU5ET1cge1xuICBnZXQgbmF0aXZlV2luZG93KCk6IFdpbmRvdyB7XG4gICAgcmV0dXJuIHVuaW1wbGVtZW50ZWQoKTtcbiAgfVxufVxuXG5jbGFzcyBXaW5kb3dSZWZfIGV4dGVuZHMgV0lORE9XIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuICBnZXQgbmF0aXZlV2luZG93KCk6IFdpbmRvdyB7XG4gICAgcmV0dXJuIF93aW5kb3coKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgV0lORE9XX1BST1ZJREVSUyA9IFtcbiAgbmV3IFByb3ZpZGVyKFdJTkRPVywgeyB1c2VDbGFzczogV2luZG93UmVmXyB9KSxcbl07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
