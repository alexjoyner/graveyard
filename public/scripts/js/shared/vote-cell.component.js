System.register(['angular2/core', './vote-cell.service'], function(exports_1, context_1) {
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
    var core_1, vote_cell_service_1;
    var VoteCellComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (vote_cell_service_1_1) {
                vote_cell_service_1 = vote_cell_service_1_1;
            }],
        execute: function() {
            VoteCellComponent = (function () {
                function VoteCellComponent(_voteCellService) {
                    this._voteCellService = _voteCellService;
                    this.upVoted = new core_1.EventEmitter();
                    this.downVoted = new core_1.EventEmitter();
                }
                VoteCellComponent.prototype.vote = function (type, event) {
                    var _this = this;
                    event.stopPropagation();
                    this._voteCellService.addVote(this.sourceType, this.sourceId, type)
                        .subscribe(function (success) {
                        (type === 'upvote')
                            ?
                                _this.upVoted.emit(null)
                            :
                                _this.downVoted.emit(null);
                    }, function (err) { return console.log('Err: ', err); });
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
                    }), 
                    __metadata('design:paramtypes', [vote_cell_service_1.VoteCellService])
                ], VoteCellComponent);
                return VoteCellComponent;
            }());
            exports_1("VoteCellComponent", VoteCellComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC92b3RlLWNlbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUUE7Z0JBTUMsMkJBQ1MsZ0JBQWlDO29CQUFqQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO29CQUhoQyxZQUFPLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO29CQUNoRCxjQUFTLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO2dCQUVoQixDQUFDO2dCQUU3QyxnQ0FBSSxHQUFKLFVBQUssSUFBWSxFQUFFLEtBQWlCO29CQUFwQyxpQkFnQkM7b0JBZkEsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUN4QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUM1QixJQUFJLENBQUMsVUFBVSxFQUNmLElBQUksQ0FBQyxRQUFRLEVBQ2IsSUFBSSxDQUFDO3lCQUNMLFNBQVMsQ0FDVCxVQUFBLE9BQU87d0JBQ04sQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDOztnQ0FFbEIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDOztnQ0FFdkIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzVCLENBQUMsRUFDRCxVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxFQUF6QixDQUF5QixDQUNoQyxDQUFDO2dCQUNILENBQUM7Z0JBeEJEO29CQUFDLFlBQUssQ0FBQyxZQUFZLENBQUM7O3FFQUFBO2dCQUNwQjtvQkFBQyxZQUFLLENBQUMsVUFBVSxDQUFDOzttRUFBQTtnQkFDbEI7b0JBQUMsWUFBSyxDQUFDLE9BQU8sQ0FBQzs7Z0VBQUE7Z0JBQ2Y7b0JBQUMsYUFBTSxFQUFFOztrRUFBQTtnQkFDVDtvQkFBQyxhQUFNLEVBQUU7O29FQUFBO2dCQVhWO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGNBQWM7d0JBQ3hCLFdBQVcsRUFBRSxxQ0FBcUM7d0JBQ2xELFNBQVMsRUFBRSxDQUFDLG1DQUFlLENBQUM7cUJBRS9CLENBQUM7O3FDQUFBO2dCQTJCRix3QkFBQztZQUFELENBMUJBLEFBMEJDLElBQUE7WUExQkQsaURBMEJDLENBQUEiLCJmaWxlIjoic2hhcmVkL3ZvdGUtY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Vm90ZUNlbGxTZXJ2aWNlfSBmcm9tICcuL3ZvdGUtY2VsbC5zZXJ2aWNlJztcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncm8tdm90ZS1jZWxsJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9zaGFyZWQvdm90ZS1jZWxsLnRwbC5odG1sJyxcbiAgICBwcm92aWRlcnM6IFtWb3RlQ2VsbFNlcnZpY2VdLFxuICAgIC8qc3R5bGVVcmxzOiBbJ3NyYy9jc3Mvdm90ZS1jZWxsLmNzcyddKi9cbn0pXG5leHBvcnQgY2xhc3MgVm90ZUNlbGxDb21wb25lbnQge1xuXHRASW5wdXQoJ3NvdXJjZVR5cGUnKSBzb3VyY2VUeXBlOiBzdHJpbmc7XG5cdEBJbnB1dCgnc291cmNlSWQnKSBzb3VyY2VJZDogc3RyaW5nO1xuXHRASW5wdXQoJ3Njb3JlJykgc2NvcmU6IG51bWJlcjtcblx0QE91dHB1dCgpIHVwVm90ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRAT3V0cHV0KCkgZG93blZvdGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBfdm90ZUNlbGxTZXJ2aWNlOiBWb3RlQ2VsbFNlcnZpY2Upe31cblxuXHR2b3RlKHR5cGU6IHN0cmluZywgZXZlbnQ6IE1vdXNlRXZlbnQpIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR0aGlzLl92b3RlQ2VsbFNlcnZpY2UuYWRkVm90ZShcblx0XHRcdHRoaXMuc291cmNlVHlwZSwgXG5cdFx0XHR0aGlzLnNvdXJjZUlkLCBcblx0XHRcdHR5cGUpXG5cdFx0LnN1YnNjcmliZShcblx0XHRcdHN1Y2Nlc3MgPT4ge1xuXHRcdFx0XHQodHlwZSA9PT0gJ3Vwdm90ZScpXG5cdFx0XHRcdFx0P1xuXHRcdFx0XHRcdHRoaXMudXBWb3RlZC5lbWl0KG51bGwpXG5cdFx0XHRcdFx0OlxuXHRcdFx0XHRcdHRoaXMuZG93blZvdGVkLmVtaXQobnVsbCk7XG5cdFx0XHR9LFxuXHRcdFx0ZXJyID0+IGNvbnNvbGUubG9nKCdFcnI6ICcsIGVycilcblx0XHQpO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
