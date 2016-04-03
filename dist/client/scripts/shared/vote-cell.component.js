System.register(['angular2/core', './vote-cell.service', './auth.service'], function(exports_1, context_1) {
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
    var core_1, vote_cell_service_1, auth_service_1;
    var VoteCellComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (vote_cell_service_1_1) {
                vote_cell_service_1 = vote_cell_service_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            }],
        execute: function() {
            VoteCellComponent = (function () {
                function VoteCellComponent(_voteCellService, _authService) {
                    this._voteCellService = _voteCellService;
                    this._authService = _authService;
                    this.upVoted = new core_1.EventEmitter();
                    this.downVoted = new core_1.EventEmitter();
                }
                VoteCellComponent.prototype.vote = function (type, event) {
                    var _this = this;
                    event.stopPropagation();
                    if (this._authService.checkValid()) {
                        this._voteCellService.addVote(this.sourceType, this.sourceId, type)
                            .subscribe(function (success) {
                            (type === 'upvote')
                                ?
                                    _this.upVoted.emit(null)
                                :
                                    _this.downVoted.emit(null);
                        }, function (err) { return console.log('Err: ', err); });
                    }
                };
                __decorate([
                    core_1.Input('sourceType'), 
                    __metadata('design:type', String)
                ], VoteCellComponent.prototype, "sourceType", void 0);
                __decorate([
                    core_1.Input('sourceId'), 
                    __metadata('design:type', String)
                ], VoteCellComponent.prototype, "sourceId", void 0);
                __decorate([
                    core_1.Input('score'), 
                    __metadata('design:type', Number)
                ], VoteCellComponent.prototype, "score", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], VoteCellComponent.prototype, "upVoted", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], VoteCellComponent.prototype, "downVoted", void 0);
                VoteCellComponent = __decorate([
                    core_1.Component({
                        selector: 'ro-vote-cell',
                        templateUrl: 'templates/shared/vote-cell.tpl.html',
                        providers: [vote_cell_service_1.VoteCellService],
                        styleUrls: ['styles/vote-cell.css']
                    }), 
                    __metadata('design:paramtypes', [vote_cell_service_1.VoteCellService, auth_service_1.AuthService])
                ], VoteCellComponent);
                return VoteCellComponent;
            }());
            exports_1("VoteCellComponent", VoteCellComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC92b3RlLWNlbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBU0E7Z0JBTUMsMkJBQ1MsZ0JBQWlDLEVBQ2pDLFlBQXlCO29CQUR6QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO29CQUNqQyxpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFKeEIsWUFBTyxHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztvQkFDaEQsY0FBUyxHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztnQkFHeEIsQ0FBQztnQkFFckMsZ0NBQUksR0FBSixVQUFLLElBQVksRUFBRSxLQUFpQjtvQkFBcEMsaUJBa0JDO29CQWpCQSxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBQ3hCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUNwQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUM1QixJQUFJLENBQUMsVUFBVSxFQUNmLElBQUksQ0FBQyxRQUFRLEVBQ2IsSUFBSSxDQUFDOzZCQUNKLFNBQVMsQ0FDVixVQUFBLE9BQU87NEJBQ04sQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDOztvQ0FFbEIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDOztvQ0FFdkIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQzVCLENBQUMsRUFDRCxVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxFQUF6QixDQUF5QixDQUMvQixDQUFDO29CQUNKLENBQUM7Z0JBQ0YsQ0FBQztnQkEzQkQ7b0JBQUMsWUFBSyxDQUFDLFlBQVksQ0FBQzs7cUVBQUE7Z0JBQ3BCO29CQUFDLFlBQUssQ0FBQyxVQUFVLENBQUM7O21FQUFBO2dCQUNsQjtvQkFBQyxZQUFLLENBQUMsT0FBTyxDQUFDOztnRUFBQTtnQkFDZjtvQkFBQyxhQUFNLEVBQUU7O2tFQUFBO2dCQUNUO29CQUFDLGFBQU0sRUFBRTs7b0VBQUE7Z0JBWFY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsY0FBYzt3QkFDeEIsV0FBVyxFQUFFLHFDQUFxQzt3QkFDbEQsU0FBUyxFQUFFLENBQUMsbUNBQWUsQ0FBQzt3QkFDNUIsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7cUJBQ3RDLENBQUM7O3FDQUFBO2dCQThCRix3QkFBQztZQUFELENBN0JBLEFBNkJDLElBQUE7WUE3QkQsaURBNkJDLENBQUEiLCJmaWxlIjoic2hhcmVkL3ZvdGUtY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Vm90ZUNlbGxTZXJ2aWNlfSBmcm9tICcuL3ZvdGUtY2VsbC5zZXJ2aWNlJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncm8tdm90ZS1jZWxsJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9zaGFyZWQvdm90ZS1jZWxsLnRwbC5odG1sJyxcbiAgICBwcm92aWRlcnM6IFtWb3RlQ2VsbFNlcnZpY2VdLFxuICAgIHN0eWxlVXJsczogWydzdHlsZXMvdm90ZS1jZWxsLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFZvdGVDZWxsQ29tcG9uZW50IHtcblx0QElucHV0KCdzb3VyY2VUeXBlJykgc291cmNlVHlwZTogc3RyaW5nO1xuXHRASW5wdXQoJ3NvdXJjZUlkJykgc291cmNlSWQ6IHN0cmluZztcblx0QElucHV0KCdzY29yZScpIHNjb3JlOiBudW1iZXI7XG5cdEBPdXRwdXQoKSB1cFZvdGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIGRvd25Wb3RlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgX3ZvdGVDZWxsU2VydmljZTogVm90ZUNlbGxTZXJ2aWNlLFxuXHRcdHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSl7fVxuXG5cdHZvdGUodHlwZTogc3RyaW5nLCBldmVudDogTW91c2VFdmVudCkge1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdGlmICh0aGlzLl9hdXRoU2VydmljZS5jaGVja1ZhbGlkKCkpIHtcblx0XHRcdHRoaXMuX3ZvdGVDZWxsU2VydmljZS5hZGRWb3RlKFxuXHRcdFx0XHR0aGlzLnNvdXJjZVR5cGUsXG5cdFx0XHRcdHRoaXMuc291cmNlSWQsXG5cdFx0XHRcdHR5cGUpXG5cdFx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdHN1Y2Nlc3MgPT4ge1xuXHRcdFx0XHRcdCh0eXBlID09PSAndXB2b3RlJylcblx0XHRcdFx0XHRcdD9cblx0XHRcdFx0XHRcdHRoaXMudXBWb3RlZC5lbWl0KG51bGwpXG5cdFx0XHRcdFx0XHQ6XG5cdFx0XHRcdFx0XHR0aGlzLmRvd25Wb3RlZC5lbWl0KG51bGwpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRlcnIgPT4gY29uc29sZS5sb2coJ0VycjogJywgZXJyKVxuXHRcdFx0XHQpO1xuXHRcdH1cblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
