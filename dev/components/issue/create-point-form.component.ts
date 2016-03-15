import {Component, OnInit, EventEmitter, Output} from 'angular2/core';
import {Point} from '../../shared/point';
import {PointsService} from '../../shared/points.service';
import {RouteParams} from 'angular2/router';

@Component({
    selector: 'ro-create-point-form',
    templateUrl: 'templates/issue/create-point-form.tpl.html'
})
export class CreatePointFormComponent implements OnInit{
	newPoint: Point;
	private _issueId: string;
	@Output() added: EventEmitter<any> = new EventEmitter();

	constructor(
		private _pointsService: PointsService,
		private _routeParams: RouteParams) { }

	createPoint(){
		console.log(this.newPoint);
		this._pointsService.insertPoint(this.newPoint);
	}

	ngOnInit():any {
		this._issueId = this._routeParams.get('id');
		this.newPoint = new Point(this._issueId, '', '', 0, 0, '');
	}
}