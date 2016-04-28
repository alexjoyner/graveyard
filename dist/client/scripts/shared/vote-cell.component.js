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
                    console.log('CHECKING: ', this.sourceId);
                    for (var i = this._usersService.profile.votes.length - 1; i >= 0; i--) {
                        if (this._usersService.profile.votes[i].post_id === this.sourceId) {
                            switch (this._usersService.profile.votes[i].vote_type_id) {
                                case 1:
                                    console.log('UPVOTED: ', this.sourceId);
                                    this.upVoted = true;
                                    break;
                                case 2:
                                    console.log('DOWN_VOTED: ', this.sourceId);
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
                        providers: [vote_cell_service_1.VoteService]
                    }), 
                    __metadata('design:paramtypes', [vote_cell_service_1.VoteService, auth_service_1.AuthService, users_service_1.UsersService])
                ], VoteCellComponent);
                return VoteCellComponent;
            }());
            exports_1("VoteCellComponent", VoteCellComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC92b3RlLWNlbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVUE7Z0JBT0MsMkJBQ1MsWUFBeUIsRUFDekIsWUFBeUIsRUFDekIsYUFBMkI7b0JBRjNCLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUN6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFDekIsa0JBQWEsR0FBYixhQUFhLENBQWM7b0JBTjFCLFlBQU8sR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7b0JBQ2xELFlBQU8sR0FBWSxLQUFLLENBQUM7b0JBQ3pCLGNBQVMsR0FBWSxLQUFLLENBQUM7Z0JBS25DLENBQUM7Z0JBQ0Qsb0NBQVEsR0FBUjtvQkFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3pDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzt3QkFDdkUsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUEsQ0FBQzs0QkFDakUsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7Z0NBQzFELEtBQUssQ0FBQztvQ0FDTCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7b0NBQ3hDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO29DQUNwQixLQUFLLENBQUM7Z0NBQ1AsS0FBSyxDQUFDO29DQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztvQ0FDM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7b0NBQ3RCLEtBQUssQ0FBQzs0QkFDUixDQUFDO3dCQUNGLENBQUM7b0JBQ0YsQ0FBQztnQkFDRixDQUFDO2dCQUNELGdDQUFJLEdBQUosVUFBSyxNQUFjLEVBQUUsS0FBaUI7b0JBQXRDLGlCQXdCQztvQkF2QkEsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUN4QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDcEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQ3JCLElBQUksQ0FBQyxRQUFRLEVBQ2IsTUFBTSxDQUFDOzZCQUNOLFNBQVMsQ0FDVCxVQUFBLElBQUk7NEJBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDbEIsS0FBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFBOzRCQUM1QixLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzs0QkFDckIsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7NEJBQ3ZCLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dDQUNwQixLQUFLLENBQUM7b0NBQ0wsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7b0NBQ3BCLEtBQUssQ0FBQztnQ0FDUCxLQUFLLENBQUM7b0NBQ0wsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7b0NBQ3RCLEtBQUssQ0FBQzs0QkFDUixDQUFDO3dCQUNGLENBQUMsRUFDRCxVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxFQUF6QixDQUF5QixDQUNoQyxDQUFDO29CQUNKLENBQUM7Z0JBQ0YsQ0FBQztnQkFwREQ7b0JBQUMsWUFBSyxFQUFFOztxRUFBQTtnQkFDUjtvQkFBQyxZQUFLLEVBQUU7O21FQUFBO2dCQUNSO29CQUFDLFlBQUssRUFBRTs7Z0VBQUE7Z0JBQ1I7b0JBQUMsYUFBTSxFQUFFOztrRUFBQTtnQkFWVjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxjQUFjO3dCQUN4QixXQUFXLEVBQUUscUNBQXFDO3dCQUNsRCxTQUFTLEVBQUUsQ0FBQywrQkFBVyxDQUFDO3FCQUUzQixDQUFDOztxQ0FBQTtnQkF1REYsd0JBQUM7WUFBRCxDQXREQSxBQXNEQyxJQUFBO1lBdERELGlEQXNEQyxDQUFBIiwiZmlsZSI6InNoYXJlZC92b3RlLWNlbGwuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Vm90ZVNlcnZpY2V9IGZyb20gJy4vdm90ZS1jZWxsLnNlcnZpY2UnO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHtVc2Vyc1NlcnZpY2V9IGZyb20gJy4vdXNlcnMuc2VydmljZSc7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3JvLXZvdGUtY2VsbCcsXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvc2hhcmVkL3ZvdGUtY2VsbC50cGwuaHRtbCcsXG4gICAgcHJvdmlkZXJzOiBbVm90ZVNlcnZpY2VdXG4gICAgLy9zdHlsZVVybHM6IFsnc3R5bGVzL3ZvdGUtY2VsbC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBWb3RlQ2VsbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblx0QElucHV0KCkgc291cmNlVHlwZTogc3RyaW5nO1xuXHRASW5wdXQoKSBzb3VyY2VJZDogbnVtYmVyO1xuXHRASW5wdXQoKSBzY29yZTogbnVtYmVyO1xuXHRAT3V0cHV0KCkgbW9kVm90ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdHByaXZhdGUgdXBWb3RlZDogYm9vbGVhbiA9IGZhbHNlO1xuXHRwcml2YXRlIGRvd25Wb3RlZDogYm9vbGVhbiA9IGZhbHNlO1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIF92b3RlU2VydmljZTogVm90ZVNlcnZpY2UsXG5cdFx0cHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuXHRcdHByaXZhdGUgX3VzZXJzU2VydmljZTogVXNlcnNTZXJ2aWNlKXtcblx0fVxuXHRuZ09uSW5pdCgpOmFueXtcblx0XHRjb25zb2xlLmxvZygnQ0hFQ0tJTkc6ICcsIHRoaXMuc291cmNlSWQpO1xuXHRcdGZvciAodmFyIGkgPSB0aGlzLl91c2Vyc1NlcnZpY2UucHJvZmlsZS52b3Rlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuXHRcdFx0aWYodGhpcy5fdXNlcnNTZXJ2aWNlLnByb2ZpbGUudm90ZXNbaV0ucG9zdF9pZCA9PT0gdGhpcy5zb3VyY2VJZCl7XG5cdFx0XHRcdHN3aXRjaCAodGhpcy5fdXNlcnNTZXJ2aWNlLnByb2ZpbGUudm90ZXNbaV0udm90ZV90eXBlX2lkKSB7XG5cdFx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ1VQVk9URUQ6ICcsIHRoaXMuc291cmNlSWQpO1xuXHRcdFx0XHRcdFx0dGhpcy51cFZvdGVkID0gdHJ1ZTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgMjpcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdET1dOX1ZPVEVEOiAnLCB0aGlzLnNvdXJjZUlkKTtcblx0XHRcdFx0XHRcdHRoaXMuZG93blZvdGVkID0gdHJ1ZTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHZvdGUodHlwZUlkOiBudW1iZXIsIGV2ZW50OiBNb3VzZUV2ZW50KSB7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0aWYgKHRoaXMuX2F1dGhTZXJ2aWNlLmNoZWNrVmFsaWQoKSkge1xuXHRcdFx0dGhpcy5fdm90ZVNlcnZpY2Uudm90ZShcblx0XHRcdFx0dGhpcy5zb3VyY2VJZCxcblx0XHRcdFx0dHlwZUlkKVxuXHRcdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0XHRcdGRhdGEgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZGF0YSk7XG5cdFx0XHRcdFx0XHR0aGlzLnNjb3JlICs9IGRhdGEubW9kQW1vdW50XG5cdFx0XHRcdFx0XHR0aGlzLnVwVm90ZWQgPSBmYWxzZTtcblx0XHRcdFx0XHRcdHRoaXMuZG93blZvdGVkID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRzd2l0Y2ggKGRhdGEubW9kVG8pIHtcblx0XHRcdFx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdFx0XHRcdHRoaXMudXBWb3RlZCA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdGNhc2UgMjpcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmRvd25Wb3RlZCA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRlcnIgPT4gY29uc29sZS5sb2coJ0VycjogJywgZXJyKVxuXHRcdFx0XHQpO1xuXHRcdH1cblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
