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
                function VoteCellComponent(_voteService, _authService) {
                    this._voteService = _voteService;
                    this._authService = _authService;
                    this.modVote = new core_1.EventEmitter();
                }
                VoteCellComponent.prototype.vote = function (typeId, event) {
                    var _this = this;
                    event.stopPropagation();
                    if (this._authService.checkValid()) {
                        this._voteService.vote(this.sourceId, typeId)
                            .subscribe(function (data) {
                            console.log(data);
                            _this.score += data.modAmount;
                        }, function (err) { return console.log('Err: ', err); });
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], VoteCellComponent.prototype, "sourceType", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
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
                    __metadata('design:paramtypes', [vote_cell_service_1.VoteService, auth_service_1.AuthService])
                ], VoteCellComponent);
                return VoteCellComponent;
            }());
            exports_1("VoteCellComponent", VoteCellComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC92b3RlLWNlbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBU0E7Z0JBS0MsMkJBQ1MsWUFBeUIsRUFDekIsWUFBeUI7b0JBRHpCLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUN6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFIeEIsWUFBTyxHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztnQkFHdEIsQ0FBQztnQkFFckMsZ0NBQUksR0FBSixVQUFLLE1BQWMsRUFBRSxLQUFpQjtvQkFBdEMsaUJBY0M7b0JBYkEsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUN4QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDcEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQ3JCLElBQUksQ0FBQyxRQUFRLEVBQ2IsTUFBTSxDQUFDOzZCQUNOLFNBQVMsQ0FDVCxVQUFBLElBQUk7NEJBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDbEIsS0FBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFBO3dCQUM3QixDQUFDLEVBQ0QsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsRUFBekIsQ0FBeUIsQ0FDaEMsQ0FBQztvQkFDSixDQUFDO2dCQUNGLENBQUM7Z0JBdEJEO29CQUFDLFlBQUssRUFBRTs7cUVBQUE7Z0JBQ1I7b0JBQUMsWUFBSyxFQUFFOzttRUFBQTtnQkFDUjtvQkFBQyxZQUFLLEVBQUU7O2dFQUFBO2dCQUNSO29CQUFDLGFBQU0sRUFBRTs7a0VBQUE7Z0JBVlY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsY0FBYzt3QkFDeEIsV0FBVyxFQUFFLHFDQUFxQzt3QkFDbEQsU0FBUyxFQUFFLENBQUMsK0JBQVcsQ0FBQzt3QkFDeEIsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7cUJBQ3RDLENBQUM7O3FDQUFBO2dCQXlCRix3QkFBQztZQUFELENBeEJBLEFBd0JDLElBQUE7WUF4QkQsaURBd0JDLENBQUEiLCJmaWxlIjoic2hhcmVkL3ZvdGUtY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Vm90ZVNlcnZpY2V9IGZyb20gJy4vdm90ZS1jZWxsLnNlcnZpY2UnO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdyby12b3RlLWNlbGwnLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3NoYXJlZC92b3RlLWNlbGwudHBsLmh0bWwnLFxuICAgIHByb3ZpZGVyczogW1ZvdGVTZXJ2aWNlXSxcbiAgICBzdHlsZVVybHM6IFsnc3R5bGVzL3ZvdGUtY2VsbC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBWb3RlQ2VsbENvbXBvbmVudCB7XG5cdEBJbnB1dCgpIHNvdXJjZVR5cGU6IHN0cmluZztcblx0QElucHV0KCkgc291cmNlSWQ6IHN0cmluZztcblx0QElucHV0KCkgc2NvcmU6IG51bWJlcjtcblx0QE91dHB1dCgpIG1vZFZvdGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIF92b3RlU2VydmljZTogVm90ZVNlcnZpY2UsXG5cdFx0cHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKXt9XG5cblx0dm90ZSh0eXBlSWQ6IG51bWJlciwgZXZlbnQ6IE1vdXNlRXZlbnQpIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRpZiAodGhpcy5fYXV0aFNlcnZpY2UuY2hlY2tWYWxpZCgpKSB7XG5cdFx0XHR0aGlzLl92b3RlU2VydmljZS52b3RlKFxuXHRcdFx0XHR0aGlzLnNvdXJjZUlkLFxuXHRcdFx0XHR0eXBlSWQpXG5cdFx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdFx0ZGF0YSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhKTtcblx0XHRcdFx0XHRcdHRoaXMuc2NvcmUgKz0gZGF0YS5tb2RBbW91bnRcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGVyciA9PiBjb25zb2xlLmxvZygnRXJyOiAnLCBlcnIpXG5cdFx0XHRcdCk7XG5cdFx0fVxuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
