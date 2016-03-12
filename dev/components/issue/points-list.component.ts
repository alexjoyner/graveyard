import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {PointsService} from '../../shared/points.service';
import {Point} from '../../shared/point.ts';
import {MainPointComponent} from './main-point.component';
import {TopSupportComponent} from './top-support.component';
import {MoreSupportComponent} from './more-support.component';
@Component({
    selector: 'ro-points-list',
    templateUrl: 'templates/issue/points-list.tpl.html',
    styleUrls: ['src/css/points-list.css'],
    providers: [PointsService],
    directives: [MainPointComponent, TopSupportComponent, MoreSupportComponent]
})
export class PointsListComponent implements OnInit{
	points: Point[];
	constructor(
		private _pointsService: PointsService,
		private _routeParams: RouteParams){}

	ngOnInit():any {
		let issueId = this._routeParams.get('id');
		this.points = this._pointsService.getPoints();
	}

}