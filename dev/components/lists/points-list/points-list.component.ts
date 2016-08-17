import {Component, Input, OnInit}  from '@angular/core';
import {Post} from "../../../ts/shared/structures/post";
import {SearchFilterPipe} from "../../../ts/pipes/searchFilter.pipe";
import {CreatePointFormComponent} from "../../forms/create-point-form/create-point-form.component";
import {AddSupportComponent} from "../../forms/create-support-form/create-support-form.component";
import {PostComponent} from "../../shared/post/post.component";
@Component({
    selector: 'ro-points-list',
    template: require('./points-list.tpl.html'),
    directives: [CreatePointFormComponent, AddSupportComponent, PostComponent],
    styles: [require('./_points-list.sass')]
})

export class PointsListComponent implements OnInit{
    @Input() points: Post[];
    @Input() questionType: number;
    @Input() stackedMode: boolean;

    // Only needed in the template
    private pointsTypeText: string;
    private showForm: boolean = false;

    constructor(
    ){
    }
    ngOnInit():any {
        console.log(this.points);
        this.pointsTypeText = (this.questionType === 1)? 'thought' : 'support';
    }
    removePoint(pointIndx: number){
        this.points.splice(pointIndx, 1);
    }
}