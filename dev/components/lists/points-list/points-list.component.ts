import {Component, Input, OnInit}  from 'angular2/core';
import {Post} from "../../../ts/shared/structures/post";
import {SearchFilterPipe} from "../../../ts/pipes/searchFilter.pipe";
import {MainPointComponent} from "../../shared/point/point.component";
import {CreatePointFormComponent} from "../../forms/create-point-form/create-point-form.component";
import {RouteParams} from "angular2/router";
import {AddSupportComponent} from "../../forms/create-support-form/create-support-form.component";
import {SupportPointComponent} from "../../shared/support-point/support-point.component";
declare function require(name: string);
declare function io(url: string);
interface Socket {
    on(event: string, callback: (data: any) => void);
    emit(event: string, data: any);
}
@Component({
    selector: 'ro-points-list',
    template: require('dev/components/lists/points-list/points-list.tpl.html'),
    directives: [MainPointComponent, CreatePointFormComponent, AddSupportComponent, SupportPointComponent],
    pipes: [SearchFilterPipe]
})

export class PointsListComponent implements OnInit{
    @Input() points: Post[];
    @Input() questionType: number;
    @Input() stackedMode: boolean;

    // Only needed in the template
    private searchText: string = '';
    private pointsTypeText: string;
    
    constructor(
        private _routeParams: RouteParams
    ){
    }
    ngOnInit():any {
        console.log(this.points);
        this.pointsTypeText = (this.questionType === 1)? 'claim' : 'support';
    }
    removePoint(pointIndx: number){
        this.points.splice(pointIndx, 1);
    }
}