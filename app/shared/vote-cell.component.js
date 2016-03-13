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
                }
                VoteCellComponent.prototype.voteIssue = function (type, event) {
                    event.stopPropagation();
                    this._voteCellService.addVote(this.sourceType, this.sourceId, type);
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
                VoteCellComponent = __decorate([
                    core_1.Component({
                        selector: 'ro-vote-cell',
                        templateUrl: 'templates/shared/vote-cell.tpl.html',
                        providers: [vote_cell_service_1.VoteCellService]
                    }), 
                    __metadata('design:paramtypes', [vote_cell_service_1.VoteCellService])
                ], VoteCellComponent);
                return VoteCellComponent;
            }());
            exports_1("VoteCellComponent", VoteCellComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC92b3RlLWNlbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT0E7Z0JBS0MsMkJBQ1MsZ0JBQWlDO29CQUFqQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO2dCQUFFLENBQUM7Z0JBRTdDLHFDQUFTLEdBQVQsVUFBVSxJQUFZLEVBQUUsS0FBVTtvQkFDakMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUN4QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUM1QixJQUFJLENBQUMsVUFBVSxFQUNmLElBQUksQ0FBQyxRQUFRLEVBQ2IsSUFBSSxDQUFDLENBQUM7Z0JBQ1IsQ0FBQztnQkFiRDtvQkFBQyxZQUFLLENBQUMsWUFBWSxDQUFDOztxRUFBQTtnQkFDcEI7b0JBQUMsWUFBSyxDQUFDLFVBQVUsQ0FBQzs7bUVBQUE7Z0JBQ2xCO29CQUFDLFlBQUssQ0FBQyxPQUFPLENBQUM7O2dFQUFBO2dCQVJoQjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxjQUFjO3dCQUN4QixXQUFXLEVBQUUscUNBQXFDO3dCQUNsRCxTQUFTLEVBQUUsQ0FBQyxtQ0FBZSxDQUFDO3FCQUMvQixDQUFDOztxQ0FBQTtnQkFnQkYsd0JBQUM7WUFBRCxDQWZBLEFBZUMsSUFBQTtZQWZELGlEQWVDLENBQUEiLCJmaWxlIjoic2hhcmVkL3ZvdGUtY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtWb3RlQ2VsbFNlcnZpY2V9IGZyb20gJy4vdm90ZS1jZWxsLnNlcnZpY2UnO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdyby12b3RlLWNlbGwnLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3NoYXJlZC92b3RlLWNlbGwudHBsLmh0bWwnLFxuICAgIHByb3ZpZGVyczogW1ZvdGVDZWxsU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgVm90ZUNlbGxDb21wb25lbnQge1xuXHRASW5wdXQoJ3NvdXJjZVR5cGUnKSBzb3VyY2VUeXBlOiBzdHJpbmc7XG5cdEBJbnB1dCgnc291cmNlSWQnKSBzb3VyY2VJZDogc3RyaW5nO1xuXHRASW5wdXQoJ3Njb3JlJykgc2NvcmU6IG51bWJlcjtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIF92b3RlQ2VsbFNlcnZpY2U6IFZvdGVDZWxsU2VydmljZSl7fVxuXG5cdHZvdGVJc3N1ZSh0eXBlOiBzdHJpbmcsIGV2ZW50OiBhbnkpIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR0aGlzLl92b3RlQ2VsbFNlcnZpY2UuYWRkVm90ZShcblx0XHRcdHRoaXMuc291cmNlVHlwZSwgXG5cdFx0XHR0aGlzLnNvdXJjZUlkLCBcblx0XHRcdHR5cGUpO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
