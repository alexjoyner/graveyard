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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC92b3RlLWNlbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT0E7Z0JBS0MsMkJBQ1MsZ0JBQWlDO29CQUFqQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO2dCQUFFLENBQUM7Z0JBRTdDLHFDQUFTLEdBQVQsVUFBVSxJQUFZLEVBQUUsS0FBaUI7b0JBQ3hDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFDeEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FDNUIsSUFBSSxDQUFDLFVBQVUsRUFDZixJQUFJLENBQUMsUUFBUSxFQUNiLElBQUksQ0FBQyxDQUFDO2dCQUNSLENBQUM7Z0JBYkQ7b0JBQUMsWUFBSyxDQUFDLFlBQVksQ0FBQzs7cUVBQUE7Z0JBQ3BCO29CQUFDLFlBQUssQ0FBQyxVQUFVLENBQUM7O21FQUFBO2dCQUNsQjtvQkFBQyxZQUFLLENBQUMsT0FBTyxDQUFDOztnRUFBQTtnQkFSaEI7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsY0FBYzt3QkFDeEIsV0FBVyxFQUFFLHFDQUFxQzt3QkFDbEQsU0FBUyxFQUFFLENBQUMsbUNBQWUsQ0FBQztxQkFDL0IsQ0FBQzs7cUNBQUE7Z0JBZ0JGLHdCQUFDO1lBQUQsQ0FmQSxBQWVDLElBQUE7WUFmRCxpREFlQyxDQUFBIiwiZmlsZSI6InNoYXJlZC92b3RlLWNlbGwuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Vm90ZUNlbGxTZXJ2aWNlfSBmcm9tICcuL3ZvdGUtY2VsbC5zZXJ2aWNlJztcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncm8tdm90ZS1jZWxsJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9zaGFyZWQvdm90ZS1jZWxsLnRwbC5odG1sJyxcbiAgICBwcm92aWRlcnM6IFtWb3RlQ2VsbFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFZvdGVDZWxsQ29tcG9uZW50IHtcblx0QElucHV0KCdzb3VyY2VUeXBlJykgc291cmNlVHlwZTogc3RyaW5nO1xuXHRASW5wdXQoJ3NvdXJjZUlkJykgc291cmNlSWQ6IHN0cmluZztcblx0QElucHV0KCdzY29yZScpIHNjb3JlOiBudW1iZXI7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBfdm90ZUNlbGxTZXJ2aWNlOiBWb3RlQ2VsbFNlcnZpY2Upe31cblxuXHR2b3RlSXNzdWUodHlwZTogc3RyaW5nLCBldmVudDogTW91c2VFdmVudCkge1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdHRoaXMuX3ZvdGVDZWxsU2VydmljZS5hZGRWb3RlKFxuXHRcdFx0dGhpcy5zb3VyY2VUeXBlLCBcblx0XHRcdHRoaXMuc291cmNlSWQsIFxuXHRcdFx0dHlwZSk7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
