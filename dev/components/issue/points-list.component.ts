import {Component, OnInit, OnChanges, EventEmitter} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {PointsService} from '../../shared/points.service';
import {Point} from '../../shared/point.ts';
import {MainPointComponent} from './main-point.component';
import {TopSupportComponent} from './top-support.component';
import {MoreSupportComponent} from './more-support.component';
import {SearchFilterPipe} from '../../pipes/searchFilter.pipe';
@Component({
    selector: 'ro-points-list',
    templateUrl: 'templates/issue/points-list.tpl.html',
    styleUrls: ['src/css/points-list.css'],
    directives: [MainPointComponent, TopSupportComponent, MoreSupportComponent],
    pipes: [SearchFilterPipe],
    inputs: ['searchText']
})
export class PointsListComponent implements OnInit{
	points: Point[];

	constructor(
		private _pointsService: PointsService,
		private _routeParams: RouteParams) { }

	ngOnInit():any {
		let issueId = this._routeParams.get('id');
		this.points = this._pointsService.getPoints(issueId);
	}

	onRemoved(){
		this.ngOnInit();
	}
}