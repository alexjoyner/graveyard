System.register(['angular2/core', './vote-cell.service', './auth.service', './users.service'], function(exports_1, context_1) {
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
    var core_1, vote_cell_service_1, auth_service_1, users_service_1;
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
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            }],
        execute: function() {
            VoteCellComponent = (function () {
                function VoteCellComponent(_voteService, _authService, _usersService) {
                    this._voteService = _voteService;
                    this._authService = _authService;
                    this._usersService = _usersService;
                    this.modVote = new core_1.EventEmitter();
                    this.upVoted = false;
                    this.downVoted = false;
                }
                VoteCellComponent.prototype.ngOnInit = function () {
                    for (var i = this._usersService.profile.votes.length - 1; i >= 0; i--) {
                        if (this._usersService.profile.votes[i].post_id === this.sourceId) {
                            switch (this._usersService.profile.votes[i].vote_type_id) {
                                case 1:
                                    this.upVoted = true;
                                    break;
                                case 2:
                                    this.downVoted = true;
                                    break;
                            }
                        }
                    }
                };
                VoteCellComponent.prototype.vote = function (typeId, event) {
                    var _this = this;
                    event.stopPropagation();
                    if (this._authService.checkValid()) {
                        this._voteService.vote(this.sourceId, typeId)
                            .subscribe(function (data) {
                            console.log(data);
                            _this.score += data.modAmount;
                            _this.upVoted = false;
                            _this.downVoted = false;
                            switch (data.modTo) {
                                case 1:
                                    _this.upVoted = true;
                                    break;
                                case 2:
                                    _this.downVoted = true;
                                    break;
                            }
                        }, function (err) { return console.log('Err: ', err); });
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], VoteCellComponent.prototype, "sourceType", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], VoteCellComponent.prototype, "sourceId", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], VoteCellComponent.prototype, "score", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], VoteCellComponent.prototype, "modVote", void 0);
                VoteCellComponent = __decorate([
                    core_1.Component({
                        selector: 'ro-vote-cell',
                        templateUrl: 'templates/shared/vote-cell.tpl.html',
                        providers: [vote_cell_service_1.VoteService],
                        styleUrls: ['styles/vote-cell.css']
                    }), 
                    __metadata('design:paramtypes', [vote_cell_service_1.VoteService, auth_service_1.AuthService, users_service_1.UsersService])
                ], VoteCellComponent);
                return VoteCellComponent;
            }());
            exports_1("VoteCellComponent", VoteCellComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC92b3RlLWNlbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVUE7Z0JBT0MsMkJBQ1MsWUFBeUIsRUFDekIsWUFBeUIsRUFDekIsYUFBMkI7b0JBRjNCLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUN6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFDekIsa0JBQWEsR0FBYixhQUFhLENBQWM7b0JBTjFCLFlBQU8sR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7b0JBQ2xELFlBQU8sR0FBWSxLQUFLLENBQUM7b0JBQ3pCLGNBQVMsR0FBWSxLQUFLLENBQUM7Z0JBS25DLENBQUM7Z0JBQ0Qsb0NBQVEsR0FBUjtvQkFDQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7d0JBQ3ZFLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBLENBQUM7NEJBQ2pFLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2dDQUMxRCxLQUFLLENBQUM7b0NBQ0wsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7b0NBQ3BCLEtBQUssQ0FBQztnQ0FDUCxLQUFLLENBQUM7b0NBQ0wsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7b0NBQ3RCLEtBQUssQ0FBQzs0QkFDUixDQUFDO3dCQUNGLENBQUM7b0JBQ0YsQ0FBQztnQkFDRixDQUFDO2dCQUNELGdDQUFJLEdBQUosVUFBSyxNQUFjLEVBQUUsS0FBaUI7b0JBQXRDLGlCQXdCQztvQkF2QkEsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUN4QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDcEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQ3JCLElBQUksQ0FBQyxRQUFRLEVBQ2IsTUFBTSxDQUFDOzZCQUNOLFNBQVMsQ0FDVCxVQUFBLElBQUk7NEJBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDbEIsS0FBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFBOzRCQUM1QixLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzs0QkFDckIsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7NEJBQ3ZCLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dDQUNwQixLQUFLLENBQUM7b0NBQ0wsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7b0NBQ3BCLEtBQUssQ0FBQztnQ0FDUCxLQUFLLENBQUM7b0NBQ0wsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7b0NBQ3RCLEtBQUssQ0FBQzs0QkFDUixDQUFDO3dCQUNGLENBQUMsRUFDRCxVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxFQUF6QixDQUF5QixDQUNoQyxDQUFDO29CQUNKLENBQUM7Z0JBQ0YsQ0FBQztnQkFqREQ7b0JBQUMsWUFBSyxFQUFFOztxRUFBQTtnQkFDUjtvQkFBQyxZQUFLLEVBQUU7O21FQUFBO2dCQUNSO29CQUFDLFlBQUssRUFBRTs7Z0VBQUE7Z0JBQ1I7b0JBQUMsYUFBTSxFQUFFOztrRUFBQTtnQkFWVjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxjQUFjO3dCQUN4QixXQUFXLEVBQUUscUNBQXFDO3dCQUNsRCxTQUFTLEVBQUUsQ0FBQywrQkFBVyxDQUFDO3dCQUN4QixTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztxQkFDdEMsQ0FBQzs7cUNBQUE7Z0JBb0RGLHdCQUFDO1lBQUQsQ0FuREEsQUFtREMsSUFBQTtZQW5ERCxpREFtREMsQ0FBQSIsImZpbGUiOiJzaGFyZWQvdm90ZS1jZWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1ZvdGVTZXJ2aWNlfSBmcm9tICcuL3ZvdGUtY2VsbC5zZXJ2aWNlJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7VXNlcnNTZXJ2aWNlfSBmcm9tICcuL3VzZXJzLnNlcnZpY2UnO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdyby12b3RlLWNlbGwnLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3NoYXJlZC92b3RlLWNlbGwudHBsLmh0bWwnLFxuICAgIHByb3ZpZGVyczogW1ZvdGVTZXJ2aWNlXSxcbiAgICBzdHlsZVVybHM6IFsnc3R5bGVzL3ZvdGUtY2VsbC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBWb3RlQ2VsbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblx0QElucHV0KCkgc291cmNlVHlwZTogc3RyaW5nO1xuXHRASW5wdXQoKSBzb3VyY2VJZDogbnVtYmVyO1xuXHRASW5wdXQoKSBzY29yZTogbnVtYmVyO1xuXHRAT3V0cHV0KCkgbW9kVm90ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdHByaXZhdGUgdXBWb3RlZDogYm9vbGVhbiA9IGZhbHNlO1xuXHRwcml2YXRlIGRvd25Wb3RlZDogYm9vbGVhbiA9IGZhbHNlO1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIF92b3RlU2VydmljZTogVm90ZVNlcnZpY2UsXG5cdFx0cHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuXHRcdHByaXZhdGUgX3VzZXJzU2VydmljZTogVXNlcnNTZXJ2aWNlKXtcblx0fVxuXHRuZ09uSW5pdCgpOmFueXtcblx0XHRmb3IgKHZhciBpID0gdGhpcy5fdXNlcnNTZXJ2aWNlLnByb2ZpbGUudm90ZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcblx0XHRcdGlmKHRoaXMuX3VzZXJzU2VydmljZS5wcm9maWxlLnZvdGVzW2ldLnBvc3RfaWQgPT09IHRoaXMuc291cmNlSWQpe1xuXHRcdFx0XHRzd2l0Y2ggKHRoaXMuX3VzZXJzU2VydmljZS5wcm9maWxlLnZvdGVzW2ldLnZvdGVfdHlwZV9pZCkge1xuXHRcdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHRcdHRoaXMudXBWb3RlZCA9IHRydWU7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIDI6XG5cdFx0XHRcdFx0XHR0aGlzLmRvd25Wb3RlZCA9IHRydWU7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHR2b3RlKHR5cGVJZDogbnVtYmVyLCBldmVudDogTW91c2VFdmVudCkge1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdGlmICh0aGlzLl9hdXRoU2VydmljZS5jaGVja1ZhbGlkKCkpIHtcblx0XHRcdHRoaXMuX3ZvdGVTZXJ2aWNlLnZvdGUoXG5cdFx0XHRcdHRoaXMuc291cmNlSWQsXG5cdFx0XHRcdHR5cGVJZClcblx0XHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0XHRkYXRhID0+IHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEpO1xuXHRcdFx0XHRcdFx0dGhpcy5zY29yZSArPSBkYXRhLm1vZEFtb3VudFxuXHRcdFx0XHRcdFx0dGhpcy51cFZvdGVkID0gZmFsc2U7XG5cdFx0XHRcdFx0XHR0aGlzLmRvd25Wb3RlZCA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0c3dpdGNoIChkYXRhLm1vZFRvKSB7XG5cdFx0XHRcdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnVwVm90ZWQgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRjYXNlIDI6XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5kb3duVm90ZWQgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0ZXJyID0+IGNvbnNvbGUubG9nKCdFcnI6ICcsIGVycilcblx0XHRcdFx0KTtcblx0XHR9XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
