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
		this._pointsService.insertPoint(this.newPoint)
		.subscribe(
			success => this.added.emit(null),
			err => console.log('err', err)
		);
	}

	ngOnInit():any {
		this._issueId = this._routeParams.get('id');
		let type = this._routeParams.get('type');
		this.newPoint = new Point(this._issueId, '', type, 0, 0, '');
	}
}