import {Component, Input, OnInit}  from 'angular2/core';
import {Post} from "../../../ts/shared/structures/post";
import {SearchFilterPipe} from "../../../ts/pipes/searchFilter.pipe";
import {MainPointComponent} from "../../shared/point/point.component";
import {CreatePointFormComponent} from "../../forms/create-point-form/create-point-form.component";
import {AddSupportComponent} from "../../forms/create-support-form/create-support-form.component";
import {SupportPointComponent} from "../../shared/support-point/support-point.component";
import {PostComponent} from "../../shared/post/post.component";
@Component({
    selector: 'ro-points-list',
    template: require('./points-list.tpl.html'),
    directives: [MainPointComponent, CreatePointFormComponent, AddSupportComponent, SupportPointComponent, PostComponent],
    pipes: [SearchFilterPipe]
})

export class PointsListComponent implements OnInit{
    @Input() points: Post[];
    @Input() questionType: number;
    @Input() stackedMode: boolean;

    // Only needed in the template
    private pointsTypeText: string;
    
    constructor(
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