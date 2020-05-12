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
                    event.stopPropagation();
                    /*if (this._authService.checkValid()) {
                        this._voteCellService.addVote(
                            this.sourceType,
                            this.sourceId,
                            type)
                            .subscribe(
                            success => {
                                (type === 'upvote')
                                    ?
                                    this.upVoted.emit(null)
                                    :
                                    this.downVoted.emit(null);
                            },
                            err => console.log('Err: ', err)
                            );
                    }*/
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC92b3RlLWNlbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBU0E7Z0JBTUMsMkJBQ1MsZ0JBQWlDLEVBQ2pDLFlBQXlCO29CQUR6QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO29CQUNqQyxpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFKeEIsWUFBTyxHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztvQkFDaEQsY0FBUyxHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztnQkFHeEIsQ0FBQztnQkFFckMsZ0NBQUksR0FBSixVQUFLLElBQVksRUFBRSxLQUFpQjtvQkFDbkMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUN4Qjs7Ozs7Ozs7Ozs7Ozs7O3VCQWVHO2dCQUNKLENBQUM7Z0JBM0JEO29CQUFDLFlBQUssQ0FBQyxZQUFZLENBQUM7O3FFQUFBO2dCQUNwQjtvQkFBQyxZQUFLLENBQUMsVUFBVSxDQUFDOzttRUFBQTtnQkFDbEI7b0JBQUMsWUFBSyxDQUFDLE9BQU8sQ0FBQzs7Z0VBQUE7Z0JBQ2Y7b0JBQUMsYUFBTSxFQUFFOztrRUFBQTtnQkFDVDtvQkFBQyxhQUFNLEVBQUU7O29FQUFBO2dCQVhWO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGNBQWM7d0JBQ3hCLFdBQVcsRUFBRSxxQ0FBcUM7d0JBQ2xELFNBQVMsRUFBRSxDQUFDLG1DQUFlLENBQUM7d0JBQzVCLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO3FCQUN0QyxDQUFDOztxQ0FBQTtnQkE4QkYsd0JBQUM7WUFBRCxDQTdCQSxBQTZCQyxJQUFBO1lBN0JELGlEQTZCQyxDQUFBIiwiZmlsZSI6InNoYXJlZC92b3RlLWNlbGwuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1ZvdGVDZWxsU2VydmljZX0gZnJvbSAnLi92b3RlLWNlbGwuc2VydmljZSc7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuL2F1dGguc2VydmljZSc7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3JvLXZvdGUtY2VsbCcsXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvc2hhcmVkL3ZvdGUtY2VsbC50cGwuaHRtbCcsXG4gICAgcHJvdmlkZXJzOiBbVm90ZUNlbGxTZXJ2aWNlXSxcbiAgICBzdHlsZVVybHM6IFsnc3R5bGVzL3ZvdGUtY2VsbC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBWb3RlQ2VsbENvbXBvbmVudCB7XG5cdEBJbnB1dCgnc291cmNlVHlwZScpIHNvdXJjZVR5cGU6IHN0cmluZztcblx0QElucHV0KCdzb3VyY2VJZCcpIHNvdXJjZUlkOiBzdHJpbmc7XG5cdEBJbnB1dCgnc2NvcmUnKSBzY29yZTogbnVtYmVyO1xuXHRAT3V0cHV0KCkgdXBWb3RlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSBkb3duVm90ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIF92b3RlQ2VsbFNlcnZpY2U6IFZvdGVDZWxsU2VydmljZSxcblx0XHRwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2Upe31cblxuXHR2b3RlKHR5cGU6IHN0cmluZywgZXZlbnQ6IE1vdXNlRXZlbnQpIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHQvKmlmICh0aGlzLl9hdXRoU2VydmljZS5jaGVja1ZhbGlkKCkpIHtcblx0XHRcdHRoaXMuX3ZvdGVDZWxsU2VydmljZS5hZGRWb3RlKFxuXHRcdFx0XHR0aGlzLnNvdXJjZVR5cGUsXG5cdFx0XHRcdHRoaXMuc291cmNlSWQsXG5cdFx0XHRcdHR5cGUpXG5cdFx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdHN1Y2Nlc3MgPT4ge1xuXHRcdFx0XHRcdCh0eXBlID09PSAndXB2b3RlJylcblx0XHRcdFx0XHRcdD9cblx0XHRcdFx0XHRcdHRoaXMudXBWb3RlZC5lbWl0KG51bGwpXG5cdFx0XHRcdFx0XHQ6XG5cdFx0XHRcdFx0XHR0aGlzLmRvd25Wb3RlZC5lbWl0KG51bGwpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRlcnIgPT4gY29uc29sZS5sb2coJ0VycjogJywgZXJyKVxuXHRcdFx0XHQpO1xuXHRcdH0qL1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
