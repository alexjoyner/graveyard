import {Component, OnInit, OnChanges, EventEmitter} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {PointsService} from '../../shared/points.service';
import {SupportsService} from '../../shared/supports.service';
import {Point} from '../../shared/point.ts';
import {MainPointComponent} from './main-point.component';
import {TopSupportComponent} from './top-support.component';
import {MoreSupportComponent} from './more-support.component';
import {SearchFilterPipe} from '../../pipes/searchFilter.pipe';
import {AddSupportComponent} from './add-support.component';
@Component({
    selector: 'ro-points-list',
    templateUrl: 'templates/issue/points-list.tpl.html',
    styleUrls: ['src/css/points-list.css'],
    directives: [MainPointComponent, TopSupportComponent, MoreSupportComponent, AddSupportComponent],
    providers: [SupportsService],
    pipes: [SearchFilterPipe],
    inputs: ['searchText']
})
export class PointsListComponent implements OnInit{
	points: Point[];
	type: string;
	issueId: string;
	constructor(
		private _pointsService: PointsService,
		private _routeParams: RouteParams,
		private _supportsService: SupportsService) { }

	ngOnInit():any {
		this.issueId = this._routeParams.get('id');
		this.type = this._routeParams.get('type');
		this.points = this._pointsService.getPoints(this.issueId, this.type);
		if (this.points && this.points.length > 0)
			this.getSupports(this.points[0]._id, 0);
		console.log(this.points);
	}

	onRemoved(){
		this.ngOnInit();
	}
	getSupports(pointId: string, index: number){
		console.log(pointId, index);
		this.points[index]['supports'] = this._supportsService.getSupports(pointId);
	}
	viewAll(index: number){
		if (this.points[index]['viewAll']){
			this.points[index]['viewAll'] = !(this.points[index]['viewAll']);
		}else{
			this.points[index]['viewAll'] = true;
		}
		this.points[index]['addEvidence'] = false;
	}
	addEvidence(index: number){
		if (this.points[index]['addEvidence']) {
			this.points[index]['addEvidence'] = !(this.points[index]['addEvidence']);
		} else {
			this.points[index]['addEvidence'] = true;
		}
		this.points[index]['viewAll'] = false;
	}
}







