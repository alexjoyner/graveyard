System.register(['angular2/core', './services/logging.service', './services/data.service'], function(exports_1, context_1) {
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
    var core_1, logging_service_1, data_service_1;
    var Component2Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (logging_service_1_1) {
                logging_service_1 = logging_service_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            }],
        execute: function() {
            Component2Component = (function () {
                function Component2Component(_loggingService, _dataService) {
                    this._loggingService = _loggingService;
                    this._dataService = _dataService;
                }
                Component2Component.prototype.onLog = function (message) {
                    this._loggingService.log(message);
                };
                Component2Component.prototype.onInsert = function (data) {
                    this.data = this._dataService.insert(data);
                };
                Component2Component.prototype.onGetData = function (data) {
                    this.data = this._dataService.getRandomString();
                };
                Component2Component = __decorate([
                    core_1.Component({
                        selector: 'component-2',
                        template: "\n    \t<input type=\"text\" #message>\n    \t<button (click)=\"onLog(message.value)\">Send</button>\n    \t<div>\n    \t\t<h1>Data Service</h1>\n    \t\t<input type=\"text\" #newData>\n    \t\t<button (click)=\"onInsert(newData.value)\">Insert Some Data</button>\n    \t\t<button (click)=\"onGetData()\">Get Some Data</button>\n    \t\t<p>Data: {{data}}</p>\n    \t</div>\n    ",
                        providers: [logging_service_1.LoggingService, data_service_1.DataService]
                    }), 
                    __metadata('design:paramtypes', [logging_service_1.LoggingService, data_service_1.DataService])
                ], Component2Component);
                return Component2Component;
            }());
            exports_1("Component2Component", Component2Component);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudDIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBa0JBO2dCQUVDLDZCQUNTLGVBQStCLEVBQy9CLFlBQXlCO29CQUR6QixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7b0JBQy9CLGlCQUFZLEdBQVosWUFBWSxDQUFhO2dCQUMvQixDQUFDO2dCQUNKLG1DQUFLLEdBQUwsVUFBTSxPQUFlO29CQUNwQixJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDbkMsQ0FBQztnQkFDRCxzQ0FBUSxHQUFSLFVBQVMsSUFBWTtvQkFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDNUMsQ0FBQztnQkFDRCx1Q0FBUyxHQUFULFVBQVUsSUFBWTtvQkFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUNqRCxDQUFDO2dCQTdCRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxhQUFhO3dCQUN2QixRQUFRLEVBQUUsNFhBVVQ7d0JBQ0QsU0FBUyxFQUFFLENBQUMsZ0NBQWMsRUFBRSwwQkFBVyxDQUFDO3FCQUMzQyxDQUFDOzt1Q0FBQTtnQkFnQkYsMEJBQUM7WUFBRCxDQWZBLEFBZUMsSUFBQTtZQWZELHFEQWVDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50Mi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0xvZ2dpbmdTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL2xvZ2dpbmcuc2VydmljZSc7XG5pbXBvcnQge0RhdGFTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL2RhdGEuc2VydmljZSc7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2NvbXBvbmVudC0yJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgI21lc3NhZ2U+XG4gICAgXHQ8YnV0dG9uIChjbGljayk9XCJvbkxvZyhtZXNzYWdlLnZhbHVlKVwiPlNlbmQ8L2J1dHRvbj5cbiAgICBcdDxkaXY+XG4gICAgXHRcdDxoMT5EYXRhIFNlcnZpY2U8L2gxPlxuICAgIFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiAjbmV3RGF0YT5cbiAgICBcdFx0PGJ1dHRvbiAoY2xpY2spPVwib25JbnNlcnQobmV3RGF0YS52YWx1ZSlcIj5JbnNlcnQgU29tZSBEYXRhPC9idXR0b24+XG4gICAgXHRcdDxidXR0b24gKGNsaWNrKT1cIm9uR2V0RGF0YSgpXCI+R2V0IFNvbWUgRGF0YTwvYnV0dG9uPlxuICAgIFx0XHQ8cD5EYXRhOiB7e2RhdGF9fTwvcD5cbiAgICBcdDwvZGl2PlxuICAgIGAsXG4gICAgcHJvdmlkZXJzOiBbTG9nZ2luZ1NlcnZpY2UsIERhdGFTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBDb21wb25lbnQyQ29tcG9uZW50IHtcblx0ZGF0YTogc3RyaW5nO1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIF9sb2dnaW5nU2VydmljZTogTG9nZ2luZ1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSBfZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlXG5cdCkge31cblx0b25Mb2cobWVzc2FnZTogc3RyaW5nKXtcblx0XHR0aGlzLl9sb2dnaW5nU2VydmljZS5sb2cobWVzc2FnZSk7XG5cdH1cblx0b25JbnNlcnQoZGF0YTogc3RyaW5nKXtcblx0XHR0aGlzLmRhdGEgPSB0aGlzLl9kYXRhU2VydmljZS5pbnNlcnQoZGF0YSk7XG5cdH1cblx0b25HZXREYXRhKGRhdGE6IHN0cmluZyl7XG5cdFx0dGhpcy5kYXRhID0gdGhpcy5fZGF0YVNlcnZpY2UuZ2V0UmFuZG9tU3RyaW5nKCk7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
