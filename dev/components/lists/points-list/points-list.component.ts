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

    // Only needed in the template
    private searchText: string = '';
    private pointsTypeText: string;
    
    constructor(
        private _routeParams: RouteParams
    ){
    }
    ngOnInit():any {
        console.log(this.points)
        this.pointsTypeText = (this.questionType === 1)? 'claim' : 'support';
        var socket = io('/');
        socket.emit('change room', {
            newroom: 'question' +
            this._routeParams.get('id')
        })
        socket.on('NewPost', function(postData) {
            //this.points.unshift(postData);
        }.bind(this));
        socket.on('DeletedPost', function(postData) {
            // for (var i = this.points.length - 1; i >= 0; i--) {
            //     if(this.points[i]._id === +postData.main_point_id){
            //         this.points.splice(i, 1);
            //     }
            // }
        }.bind(this));
    }
    removePoint(pointIndx: number){
        this.points.splice(pointIndx, 1);
    }
}