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
    var IssueContainerService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            IssueContainerService = (function () {
                function IssueContainerService() {
                    this.selectedPoints = [];
                }
                IssueContainerService.prototype.insertPoint = function (point) {
                    this.points.unshift(point);
                };
                IssueContainerService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], IssueContainerService);
                return IssueContainerService;
            }());
            exports_1("IssueContainerService", IssueContainerService);
        }
    }
});
// import {Injectable} from 'angular2/core';
// import {Data} from '../../shared/data';
// @Injectable()
// export class IssueContainerService {
// 	data: Data[] = [];
// 	insertData(newData: Data) {
// 		this.data.unshift(newData);
// 	}
// }
// import {Component} from 'angular2/core';
// import {SharedServiceComponent}
// @Component({
//     selector: 'parent-compoent',
//     template: `
//     	<h1>Parent</h1>
//     	<div>
// 			<child-component></child-component>
// 			<child-sibling-component></child-sibling-component>
//     	</div>
//     `
// })
// export class  {
// }
// import {Component, OnInit} from 'angular2/core';
// import {SharedServiceComponent}
// @Component({
//     selector: 'child-component',
//     template: `
// 		<h1>I am a child</h1>
// 		<div>
// 			<ul *ngFor="#data in data">
// 				<li>{{data}}</li>
// 			</ul>
// 		</div>
//     `
// })
// export class ChildComponentService implements OnInit{
// 	data: string[] = [];
// 	constructor(
// 		private _sharedService: SharedServiceComponent) { }
// 	ngOnInit():any {
// 		this.data = this._sharedService.dataArray;
// 	}
// }
/*import {Component} from 'angular2/core';
import {SharedServiceComponent}

@Component({
    selector: 'child-sibling-component',
    template: `
        <h1>I am a child</h1>
        <input type="text" [(ngModel)]="data"/>
        <button (click)="addData()"></button>
    `
})
export class ChildSiblingComponent{
    data: string = 'Testing data';
    constructor(
        private _sharedService: SharedServiceComponent){}
    addData(){
        this._sharedService.insertData(this.data);
        this.data = '';
    }
}*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvaXNzdWUtY29udGFpbmVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQTtnQkFBQTtvQkFDQyxtQkFBYyxHQUFhLEVBQUUsQ0FBQztnQkFLL0IsQ0FBQztnQkFIQSwyQ0FBVyxHQUFYLFVBQVksS0FBWTtvQkFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzVCLENBQUM7Z0JBTkY7b0JBQUMsaUJBQVUsRUFBRTs7eUNBQUE7Z0JBT2IsNEJBQUM7WUFBRCxDQU5BLEFBTUMsSUFBQTtZQU5ELHlEQU1DLENBQUE7Ozs7QUFFRCw0Q0FBNEM7QUFDNUMsMENBQTBDO0FBRTFDLGdCQUFnQjtBQUNoQix1Q0FBdUM7QUFDdkMsc0JBQXNCO0FBRXRCLCtCQUErQjtBQUMvQixnQ0FBZ0M7QUFDaEMsS0FBSztBQUNMLElBQUk7QUFFSiwyQ0FBMkM7QUFDM0Msa0NBQWtDO0FBRWxDLGVBQWU7QUFDZixtQ0FBbUM7QUFDbkMsa0JBQWtCO0FBQ2xCLHVCQUF1QjtBQUN2QixhQUFhO0FBQ2IseUNBQXlDO0FBQ3pDLHlEQUF5RDtBQUN6RCxjQUFjO0FBQ2QsUUFBUTtBQUNSLEtBQUs7QUFDTCxrQkFBa0I7QUFFbEIsSUFBSTtBQUVKLG1EQUFtRDtBQUNuRCxrQ0FBa0M7QUFFbEMsZUFBZTtBQUNmLG1DQUFtQztBQUNuQyxrQkFBa0I7QUFDbEIsMEJBQTBCO0FBQzFCLFVBQVU7QUFDVixpQ0FBaUM7QUFDakMsd0JBQXdCO0FBQ3hCLFdBQVc7QUFDWCxXQUFXO0FBQ1gsUUFBUTtBQUNSLEtBQUs7QUFDTCx3REFBd0Q7QUFDeEQsd0JBQXdCO0FBQ3hCLGdCQUFnQjtBQUNoQix3REFBd0Q7QUFDeEQsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxLQUFLO0FBQ0wsSUFBSTtBQUVKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUJHIiwiZmlsZSI6ImNvbXBvbmVudHMvaXNzdWUvaXNzdWUtY29udGFpbmVyLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtQb2ludH0gZnJvbSAnLi4vLi4vc2hhcmVkL3BvaW50JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIElzc3VlQ29udGFpbmVyU2VydmljZSB7XG5cdHNlbGVjdGVkUG9pbnRzOiBzdHJpbmdbXSA9IFtdO1xuXG5cdGluc2VydFBvaW50KHBvaW50OiBQb2ludCl7XG5cdFx0dGhpcy5wb2ludHMudW5zaGlmdChwb2ludCk7XG5cdH1cbn1cblxuLy8gaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbi8vIGltcG9ydCB7RGF0YX0gZnJvbSAnLi4vLi4vc2hhcmVkL2RhdGEnO1xuXG4vLyBASW5qZWN0YWJsZSgpXG4vLyBleHBvcnQgY2xhc3MgSXNzdWVDb250YWluZXJTZXJ2aWNlIHtcbi8vIFx0ZGF0YTogRGF0YVtdID0gW107XG5cbi8vIFx0aW5zZXJ0RGF0YShuZXdEYXRhOiBEYXRhKSB7XG4vLyBcdFx0dGhpcy5kYXRhLnVuc2hpZnQobmV3RGF0YSk7XG4vLyBcdH1cbi8vIH1cblxuLy8gaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuLy8gaW1wb3J0IHtTaGFyZWRTZXJ2aWNlQ29tcG9uZW50fVxuXG4vLyBAQ29tcG9uZW50KHtcbi8vICAgICBzZWxlY3RvcjogJ3BhcmVudC1jb21wb2VudCcsXG4vLyAgICAgdGVtcGxhdGU6IGBcbi8vICAgICBcdDxoMT5QYXJlbnQ8L2gxPlxuLy8gICAgIFx0PGRpdj5cbi8vIFx0XHRcdDxjaGlsZC1jb21wb25lbnQ+PC9jaGlsZC1jb21wb25lbnQ+XG4vLyBcdFx0XHQ8Y2hpbGQtc2libGluZy1jb21wb25lbnQ+PC9jaGlsZC1zaWJsaW5nLWNvbXBvbmVudD5cbi8vICAgICBcdDwvZGl2PlxuLy8gICAgIGBcbi8vIH0pXG4vLyBleHBvcnQgY2xhc3MgIHtcblx0XG4vLyB9XG5cbi8vIGltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuLy8gaW1wb3J0IHtTaGFyZWRTZXJ2aWNlQ29tcG9uZW50fVxuXG4vLyBAQ29tcG9uZW50KHtcbi8vICAgICBzZWxlY3RvcjogJ2NoaWxkLWNvbXBvbmVudCcsXG4vLyAgICAgdGVtcGxhdGU6IGBcbi8vIFx0XHQ8aDE+SSBhbSBhIGNoaWxkPC9oMT5cbi8vIFx0XHQ8ZGl2PlxuLy8gXHRcdFx0PHVsICpuZ0Zvcj1cIiNkYXRhIGluIGRhdGFcIj5cbi8vIFx0XHRcdFx0PGxpPnt7ZGF0YX19PC9saT5cbi8vIFx0XHRcdDwvdWw+XG4vLyBcdFx0PC9kaXY+XG4vLyAgICAgYFxuLy8gfSlcbi8vIGV4cG9ydCBjbGFzcyBDaGlsZENvbXBvbmVudFNlcnZpY2UgaW1wbGVtZW50cyBPbkluaXR7XG4vLyBcdGRhdGE6IHN0cmluZ1tdID0gW107XG4vLyBcdGNvbnN0cnVjdG9yKFxuLy8gXHRcdHByaXZhdGUgX3NoYXJlZFNlcnZpY2U6IFNoYXJlZFNlcnZpY2VDb21wb25lbnQpIHsgfVxuLy8gXHRuZ09uSW5pdCgpOmFueSB7XG4vLyBcdFx0dGhpcy5kYXRhID0gdGhpcy5fc2hhcmVkU2VydmljZS5kYXRhQXJyYXk7XG4vLyBcdH1cbi8vIH1cblxuLyppbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1NoYXJlZFNlcnZpY2VDb21wb25lbnR9XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY2hpbGQtc2libGluZy1jb21wb25lbnQnLFxuICAgIHRlbXBsYXRlOiBgXG5cdFx0PGgxPkkgYW0gYSBjaGlsZDwvaDE+XG5cdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV09XCJkYXRhXCIvPlxuXHRcdDxidXR0b24gKGNsaWNrKT1cImFkZERhdGEoKVwiPjwvYnV0dG9uPlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgQ2hpbGRTaWJsaW5nQ29tcG9uZW50e1xuXHRkYXRhOiBzdHJpbmcgPSAnVGVzdGluZyBkYXRhJztcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBfc2hhcmVkU2VydmljZTogU2hhcmVkU2VydmljZUNvbXBvbmVudCl7fVxuXHRhZGREYXRhKCl7XG5cdFx0dGhpcy5fc2hhcmVkU2VydmljZS5pbnNlcnREYXRhKHRoaXMuZGF0YSk7XG5cdFx0dGhpcy5kYXRhID0gJyc7XG5cdH1cbn0qL1xuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
