import {Component, OnInit, OnChanges} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {PointsService} from '../../shared/points.service';
import {SupportsService} from '../../shared/supports.service';
import {Point} from '../../shared/point.ts';
import {MainPointComponent} from './main-point.component';
import {TopSupportComponent} from './top-support.component';
import {MoreSupportComponent} from './more-support.component';
import {SearchFilterPipe} from '../../pipes/searchFilter.pipe';
import {AddSupportComponent} from './add-support.component';
import {CreatePointFormComponent} from './create-point-form.component';
import {SmoothScroll} from '../../shared/smooth-scroll.service';
import {WINDOW_PROVIDERS} from '../../shared/window.service';
@Component({
    selector: 'ro-points-list',
    templateUrl: 'templates/issue/points-list.tpl.html',
    styleUrls: ['styles/points-list.css'],
    directives: [MainPointComponent, TopSupportComponent, MoreSupportComponent, AddSupportComponent, CreatePointFormComponent],
    providers: [SupportsService, SmoothScroll, WINDOW_PROVIDERS],
    pipes: [SearchFilterPipe]
})
export class PointsListComponent implements OnInit{
	showForm: boolean;
	points: Point[];
	type: string;
	issueId: string;
	searchText: string;

	constructor(
		private _pointsService: PointsService,
		private _routeParams: RouteParams,
		private _supportsService: SupportsService,
		private _smoothScroll: SmoothScroll) { 
	}

	ngOnInit(): any {
		// this.win = this._win.nativeWindow;
		// console.log('Window: ', this.win);
		this.issueId = this._routeParams.get('id');
		this.type = this._routeParams.get('type');
		this._pointsService.getPoints(this.issueId, this.type)
			.subscribe(
				data => {
					this.points = data
					console.log('Data: ', data);

				},
				err => console.log('err: ', err)
			);
	}
	getPointIndx(point: Point): number{
		return this.points.indexOf(point);
	}
	onPointAdded(point: Point){
		this.points.unshift(point);
		setTimeout(() => {
			this.smoothScroll('point' + 0, 20)
		}, 900);
	}
	addSupport(pointIndx: number, supportPoint){
		this.points[pointIndx]['supports'].unshift(supportPoint);
		this.viewAll(pointIndx)
	}
	removeSupport(point: Point, supportIndx: number){
		let pointIndx = this.getPointIndx(point);
		this.points[pointIndx]['supports'].splice(supportIndx, 1);
		if (this.points[pointIndx]['supports'].length === 1){
			this.viewAll(pointIndx);
		}
	}
	viewAll(index: number){
		if (this.points[index]['viewAll']){
			this.points[index]['viewAll'] = !(this.points[index]['viewAll']);
		}else{
			this.points[index]['viewAll'] = true;
		}
		this.points[index]['addEvidence'] = false;
	}
	addEvidence(point: Point) {
		let index = this.getPointIndx(point);
		if (this.points[index]['addEvidence']) {
			this.points[index]['addEvidence'] = !(this.points[index]['addEvidence']);
		} else {
			this.points[index]['addEvidence'] = true;
		}
		this.points[index]['viewAll'] = false;
	}
	smoothScroll(eid, offset: number){
		this._smoothScroll.smoothScroll(eid, offset);
	}
}




