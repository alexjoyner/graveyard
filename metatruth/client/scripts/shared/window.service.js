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
            exports_1("WindowRef_", WindowRef_);
            exports_1("WINDOW_PROVIDERS", WINDOW_PROVIDERS = [
                new core_1.Provider(WINDOW, { useClass: WindowRef_ }),
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC93aW5kb3cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7NEJBdUJhLGdCQUFnQjtJQW5CN0I7UUFDRSxNQUFNLENBQUMsZ0JBQU0sQ0FBQTtJQUNmLENBQUM7Ozs7Ozs7Ozs7Ozs7WUFFRDtnQkFBQTtnQkFJQSxDQUFDO2dCQUhDLHNCQUFJLGdDQUFZO3lCQUFoQjt3QkFDRSxNQUFNLENBQUMsMEJBQWEsRUFBRSxDQUFDO29CQUN6QixDQUFDOzs7bUJBQUE7Z0JBQ0gsYUFBQztZQUFELENBSkEsQUFJQyxJQUFBO1lBSkQsMkJBSUMsQ0FBQTtZQUVEO2dCQUFnQyw4QkFBTTtnQkFDcEM7b0JBQ0UsaUJBQU8sQ0FBQztnQkFDVixDQUFDO2dCQUNELHNCQUFJLG9DQUFZO3lCQUFoQjt3QkFDRSxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQ25CLENBQUM7OzttQkFBQTtnQkFDSCxpQkFBQztZQUFELENBUEEsQUFPQyxDQVArQixNQUFNLEdBT3JDO1lBUEQsbUNBT0MsQ0FBQTtZQUVZLDhCQUFBLGdCQUFnQixHQUFHO2dCQUM5QixJQUFJLGVBQVEsQ0FBQyxNQUFNLEVBQUUsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLENBQUM7YUFDL0MsQ0FBQSxDQUFDIiwiZmlsZSI6InNoYXJlZC93aW5kb3cuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZSwgUHJvdmlkZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHt3aW5kb3d9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvYnJvd3Nlcic7XG5pbXBvcnQge3VuaW1wbGVtZW50ZWR9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvZXhjZXB0aW9ucyc7XG5cbmZ1bmN0aW9uIF93aW5kb3coKTogV2luZG93IHtcbiAgcmV0dXJuIHdpbmRvd1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgV0lORE9XIHtcbiAgZ2V0IG5hdGl2ZVdpbmRvdygpOiBXaW5kb3cge1xuICAgIHJldHVybiB1bmltcGxlbWVudGVkKCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFdpbmRvd1JlZl8gZXh0ZW5kcyBXSU5ET1cge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG4gIGdldCBuYXRpdmVXaW5kb3coKTogV2luZG93IHtcbiAgICByZXR1cm4gX3dpbmRvdygpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBXSU5ET1dfUFJPVklERVJTID0gW1xuICBuZXcgUHJvdmlkZXIoV0lORE9XLCB7IHVzZUNsYXNzOiBXaW5kb3dSZWZfIH0pLFxuXTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
