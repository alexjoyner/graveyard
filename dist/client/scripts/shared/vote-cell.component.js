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
                                    console.log('UPVOTED: ', this.sourceId);
                                    break;
                                case 2:
                                    this.downVoted = true;
                                    console.log('DOWNVOTED: ', this.sourceId);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC92b3RlLWNlbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVUE7Z0JBT0MsMkJBQ1MsWUFBeUIsRUFDekIsWUFBeUIsRUFDekIsYUFBMkI7b0JBRjNCLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUN6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFDekIsa0JBQWEsR0FBYixhQUFhLENBQWM7b0JBTjFCLFlBQU8sR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7b0JBQ2xELFlBQU8sR0FBWSxLQUFLLENBQUM7b0JBQ3pCLGNBQVMsR0FBWSxLQUFLLENBQUM7Z0JBS25DLENBQUM7Z0JBQ0Qsb0NBQVEsR0FBUjtvQkFDQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7d0JBQ3ZFLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBLENBQUM7NEJBQ2pFLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2dDQUMxRCxLQUFLLENBQUM7b0NBQ0wsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7b0NBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztvQ0FDeEMsS0FBSyxDQUFDO2dDQUNQLEtBQUssQ0FBQztvQ0FDTCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztvQ0FDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29DQUMxQyxLQUFLLENBQUM7NEJBQ1IsQ0FBQzt3QkFDRixDQUFDO29CQUNGLENBQUM7Z0JBQ0YsQ0FBQztnQkFDRCxnQ0FBSSxHQUFKLFVBQUssTUFBYyxFQUFFLEtBQWlCO29CQUF0QyxpQkF3QkM7b0JBdkJBLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFDeEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUNyQixJQUFJLENBQUMsUUFBUSxFQUNiLE1BQU0sQ0FBQzs2QkFDTixTQUFTLENBQ1QsVUFBQSxJQUFJOzRCQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ2xCLEtBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQTs0QkFDNUIsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7NEJBQ3JCLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDOzRCQUN2QixNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQ0FDcEIsS0FBSyxDQUFDO29DQUNMLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO29DQUNwQixLQUFLLENBQUM7Z0NBQ1AsS0FBSyxDQUFDO29DQUNMLEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO29DQUN0QixLQUFLLENBQUM7NEJBQ1IsQ0FBQzt3QkFDRixDQUFDLEVBQ0QsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsRUFBekIsQ0FBeUIsQ0FDaEMsQ0FBQztvQkFDSixDQUFDO2dCQUNGLENBQUM7Z0JBbkREO29CQUFDLFlBQUssRUFBRTs7cUVBQUE7Z0JBQ1I7b0JBQUMsWUFBSyxFQUFFOzttRUFBQTtnQkFDUjtvQkFBQyxZQUFLLEVBQUU7O2dFQUFBO2dCQUNSO29CQUFDLGFBQU0sRUFBRTs7a0VBQUE7Z0JBVlY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsY0FBYzt3QkFDeEIsV0FBVyxFQUFFLHFDQUFxQzt3QkFDbEQsU0FBUyxFQUFFLENBQUMsK0JBQVcsQ0FBQzt3QkFDeEIsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7cUJBQ3RDLENBQUM7O3FDQUFBO2dCQXNERix3QkFBQztZQUFELENBckRBLEFBcURDLElBQUE7WUFyREQsaURBcURDLENBQUEiLCJmaWxlIjoic2hhcmVkL3ZvdGUtY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtWb3RlU2VydmljZX0gZnJvbSAnLi92b3RlLWNlbGwuc2VydmljZSc7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuL2F1dGguc2VydmljZSc7XG5pbXBvcnQge1VzZXJzU2VydmljZX0gZnJvbSAnLi91c2Vycy5zZXJ2aWNlJztcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncm8tdm90ZS1jZWxsJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9zaGFyZWQvdm90ZS1jZWxsLnRwbC5odG1sJyxcbiAgICBwcm92aWRlcnM6IFtWb3RlU2VydmljZV0sXG4gICAgc3R5bGVVcmxzOiBbJ3N0eWxlcy92b3RlLWNlbGwuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVm90ZUNlbGxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cdEBJbnB1dCgpIHNvdXJjZVR5cGU6IHN0cmluZztcblx0QElucHV0KCkgc291cmNlSWQ6IG51bWJlcjtcblx0QElucHV0KCkgc2NvcmU6IG51bWJlcjtcblx0QE91dHB1dCgpIG1vZFZvdGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRwcml2YXRlIHVwVm90ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblx0cHJpdmF0ZSBkb3duVm90ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBfdm90ZVNlcnZpY2U6IFZvdGVTZXJ2aWNlLFxuXHRcdHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcblx0XHRwcml2YXRlIF91c2Vyc1NlcnZpY2U6IFVzZXJzU2VydmljZSl7XG5cdH1cblx0bmdPbkluaXQoKTphbnl7XG5cdFx0Zm9yICh2YXIgaSA9IHRoaXMuX3VzZXJzU2VydmljZS5wcm9maWxlLnZvdGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHRpZih0aGlzLl91c2Vyc1NlcnZpY2UucHJvZmlsZS52b3Rlc1tpXS5wb3N0X2lkID09PSB0aGlzLnNvdXJjZUlkKXtcblx0XHRcdFx0c3dpdGNoICh0aGlzLl91c2Vyc1NlcnZpY2UucHJvZmlsZS52b3Rlc1tpXS52b3RlX3R5cGVfaWQpIHtcblx0XHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0XHR0aGlzLnVwVm90ZWQgPSB0cnVlO1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ1VQVk9URUQ6ICcsIHRoaXMuc291cmNlSWQpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHRcdFx0dGhpcy5kb3duVm90ZWQgPSB0cnVlO1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0RPV05WT1RFRDogJywgdGhpcy5zb3VyY2VJZCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHR2b3RlKHR5cGVJZDogbnVtYmVyLCBldmVudDogTW91c2VFdmVudCkge1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdGlmICh0aGlzLl9hdXRoU2VydmljZS5jaGVja1ZhbGlkKCkpIHtcblx0XHRcdHRoaXMuX3ZvdGVTZXJ2aWNlLnZvdGUoXG5cdFx0XHRcdHRoaXMuc291cmNlSWQsXG5cdFx0XHRcdHR5cGVJZClcblx0XHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0XHRkYXRhID0+IHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEpO1xuXHRcdFx0XHRcdFx0dGhpcy5zY29yZSArPSBkYXRhLm1vZEFtb3VudFxuXHRcdFx0XHRcdFx0dGhpcy51cFZvdGVkID0gZmFsc2U7XG5cdFx0XHRcdFx0XHR0aGlzLmRvd25Wb3RlZCA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0c3dpdGNoIChkYXRhLm1vZFRvKSB7XG5cdFx0XHRcdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnVwVm90ZWQgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRjYXNlIDI6XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5kb3duVm90ZWQgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0ZXJyID0+IGNvbnNvbGUubG9nKCdFcnI6ICcsIGVycilcblx0XHRcdFx0KTtcblx0XHR9XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
