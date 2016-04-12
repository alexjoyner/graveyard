import {Component, Input, OnChanges} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Post} from '../../shared/post';
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
    providers: [SmoothScroll, WINDOW_PROVIDERS],
    pipes: [SearchFilterPipe]
})
export class PointsListComponent{
	showForm: boolean;
	@Input() points: Post[];
	type: string = this._routeParams.get('type');;
	issueId: string;
	searchText: string;

	constructor(
		private _routeParams: RouteParams,
		private _smoothScroll: SmoothScroll) { 
	}
	getPostIndx(point: Post): number{
		return this.points.indexOf(point);
	}
	onPointAdded(point: Post){
		console.log('New point: ', point);
		point['supports'] = [null];
		this.points.unshift(point);
		setTimeout(() => {
			this.addEvidence(point);
			this.smoothScroll('point' + 0, 20);
		}, 600);
	}
	addSupport(pointIndx: number, supportPost){
		this.points[pointIndx]['supports'].unshift(supportPost);
		this.viewAll(pointIndx)
	}
	removePoint(pointIndx: number){
		this.points.splice(pointIndx, 1);
	}
	removeSupport(point: Post, supportIndx: number){
		let pointIndx = this.getPostIndx(point);
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
	addEvidence(point: Post) {
		let index = this.getPostIndx(point);
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




