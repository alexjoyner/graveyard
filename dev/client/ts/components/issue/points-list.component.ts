import {Component, OnInit, OnChanges} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {PointsService} from '../../shared/points.service';
import {SupportsService} from '../../shared/supports.service';
import {WINDOW, WINDOW_PROVIDERS} from '../../shared/window.service';
import {Point} from '../../shared/point.ts';
import {MainPointComponent} from './main-point.component';
import {TopSupportComponent} from './top-support.component';
import {MoreSupportComponent} from './more-support.component';
import {SearchFilterPipe} from '../../pipes/searchFilter.pipe';
import {AddSupportComponent} from './add-support.component';
import {CreatePointFormComponent} from './create-point-form.component';
@Component({
    selector: 'ro-points-list',
    templateUrl: 'templates/issue/points-list.tpl.html',
    styleUrls: ['styles/points-list.css'],
    directives: [MainPointComponent, TopSupportComponent, MoreSupportComponent, AddSupportComponent, CreatePointFormComponent],
    providers: [SupportsService, WINDOW_PROVIDERS],
    pipes: [SearchFilterPipe]
})
export class PointsListComponent implements OnInit{
	showForm: boolean;
	points: Point[];
	type: string;
	issueId: string;
	win: Window;
	searchText: string;

	constructor(
		private _pointsService: PointsService,
		private _routeParams: RouteParams,
		private _supportsService: SupportsService,
		private _win: WINDOW) { 
	}

	ngOnInit(): any {
		this.win = this._win.nativeWindow;
		console.log('Window: ', this.win);
		this.issueId = this._routeParams.get('id');
		this.type = this._routeParams.get('type');
		this._pointsService.getPoints(this.issueId, this.type)
			.subscribe(
				data => {
					this.points = data
					if (this.points && this.points.length > 0){
							this.getSupports(this.points[0], false);
							this.getSupports(this.points[1], false);
							this.getSupports(this.points[2], false);
						}

				},
				err => console.log('err: ', err)
			);
	}
	getPointIndx(point: Point): number{
		return this.points.indexOf(point);
	}
	onPointAdded(point: Point){
		this.points.unshift(point);
		this.getSupports(this.points[0], true);
		setTimeout(() => {
			this.smoothScroll('point' + 0, 20)
		}, 900);
	}
	removeSupport(point: Point, supportIndx: number){
		let pointIndx = this.getPointIndx(point);
		this.points[pointIndx]['supports'].splice(supportIndx, 1);
		if (this.points[pointIndx]['supports'].length === 1){
			this.viewAll(pointIndx);
		}
	}
	getSupports(point: Point, showAll: boolean){
		let index = this.getPointIndx(point);
		this._supportsService.getSupports(this.points[index]._id)
			.subscribe(
				data => {
					console.log(data);
					this.points[index]['supports'] = data;
					if (showAll) {
						if (data.length && data.length > 1) {
							// Will show view all
							this.viewAll(index);
						} else {
							// Will close add evidence
							this.addEvidence(point);
						}
					}
				},
				err => console.log('Error: ', err)
			);
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
	scrollTo(yPoint: number, duration: number) {
		setTimeout(() => {
			this.win.window.scrollTo(0, yPoint)
		}, duration);
		return;
	}
	smoothScroll(eID, offset: number) {
		var startY = currentYPosition();
		var stopY = (elmYPosition(eID) - offset);
		var distance = stopY > startY ? stopY - startY : startY - stopY;
		if (distance < 100) {
			this.win.window.scrollTo(0, stopY); return;
		}
		let timesFactor = 2;
		var speed = Math.round(distance / (100*timesFactor));
		if (speed >= 20) speed = 20;
		var step = Math.round(distance / 100);
		var leapY = stopY > startY ? startY + step : startY - step;
		var timer = 0;
		console.log('startY: ', startY);
		console.log('stopY: ', stopY);
		console.log('distance: ', distance);
		console.log('speed: ', speed);
		if (stopY > startY) {
			for (var i = startY; i < stopY; i += step) {
				this.scrollTo(leapY, timer * speed);
				leapY += step; if (leapY > stopY) leapY = stopY; timer++;
			} return;
		}
		for (var i = startY; i > stopY; i -= step) {
			this.scrollTo(leapY, timer * speed);
			leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
		}
	}
}

function currentYPosition() {
    // Firefox, Chrome, Opera, Safari
    if (self.pageYOffset) return self.pageYOffset;
    // Internet Explorer 6 - standards mode
    if (document.documentElement && document.documentElement.scrollTop)
        return document.documentElement.scrollTop;
    // Internet Explorer 6, 7 and 8
    if (document.body.scrollTop) return document.body.scrollTop;
    return 0;
}
function elmYPosition(eID) {
    var elm = document.getElementById(eID);
    var y = elm.offsetTop;
    var node = elm;
    while (node.offsetParent && node.offsetParent != document.body) {
        node = node.offsetParent;
        y += node.offsetTop;
    } return y;
}


