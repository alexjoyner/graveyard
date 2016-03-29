System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var SearchFilterPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            // # Filter Array of Objects
            SearchFilterPipe = (function () {
                function SearchFilterPipe() {
                }
                SearchFilterPipe.prototype.transform = function (value, args) {
                    if (!args[0]) {
                        return value;
                    }
                    else if (value) {
                        return value.filter(function (item) {
                            for (var key in item) {
                                if ((typeof item[key] === 'string' || item[key] instanceof String) &&
                                    ((item[key]).toLowerCase().indexOf(args[0].toLowerCase()) !== -1)) {
                                    return true;
                                }
                            }
                        });
                    }
                };
                SearchFilterPipe = __decorate([
                    core_1.Pipe({ name: 'roFilter' }), 
                    __metadata('design:paramtypes', [])
                ], SearchFilterPipe);
                return SearchFilterPipe;
            }());
            exports_1("SearchFilterPipe", SearchFilterPipe);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpcGVzL3NlYXJjaEZpbHRlci5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBRUEsNEJBQTRCO1lBRTVCO2dCQUFBO2dCQWVBLENBQUM7Z0JBZEMsb0NBQVMsR0FBVCxVQUFVLEtBQUssRUFBRSxJQUFJO29CQUNuQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2IsTUFBTSxDQUFDLEtBQUssQ0FBQztvQkFDZixDQUFDO29CQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO3dCQUNqQixNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUk7NEJBQ3RCLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7Z0NBQ3JCLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxNQUFNLENBQUM7b0NBQ2hFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0NBQ3BFLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0NBQ2QsQ0FBQzs0QkFDSCxDQUFDO3dCQUNILENBQUMsQ0FBQyxDQUFDO29CQUNMLENBQUM7Z0JBQ0gsQ0FBQztnQkFmSDtvQkFBQyxXQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLENBQUM7O29DQUFBO2dCQWdCM0IsdUJBQUM7WUFBRCxDQWZBLEFBZUMsSUFBQTtZQWZELCtDQWVDLENBQUEiLCJmaWxlIjoicGlwZXMvc2VhcmNoRmlsdGVyLnBpcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BpcGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG4vLyAjIEZpbHRlciBBcnJheSBvZiBPYmplY3RzXG5AUGlwZSh7IG5hbWU6ICdyb0ZpbHRlcicgfSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hGaWx0ZXJQaXBlIHtcbiAgdHJhbnNmb3JtKHZhbHVlLCBhcmdzKSB7XG4gICAgaWYgKCFhcmdzWzBdKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlLmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGl0ZW0pIHtcbiAgICAgICAgICBpZiAoKHR5cGVvZiBpdGVtW2tleV0gPT09ICdzdHJpbmcnIHx8IGl0ZW1ba2V5XSBpbnN0YW5jZW9mIFN0cmluZykgJiZcbiAgICAgICAgICAgICgoaXRlbVtrZXldKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoYXJnc1swXS50b0xvd2VyQ2FzZSgpKSAhPT0gLTEpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
