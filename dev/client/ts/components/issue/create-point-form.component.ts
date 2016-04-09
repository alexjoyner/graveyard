import {Component, OnInit, EventEmitter, Output} from 'angular2/core';
import {Point} from '../../shared/point';
import {PointsService} from '../../shared/points.service';
import {RouteParams} from 'angular2/router';
import { UsersService} from '../../shared/users.service';

@Component({
    selector: 'ro-create-point-form',
    templateUrl: 'templates/issue/create-point-form.tpl.html'
})
export class CreatePointFormComponent implements OnInit{
	newPoint: Point;
	private _issueId: number;
	@Output() added: EventEmitter<any> = new EventEmitter();
	@Output() cancel: EventEmitter<any> = new EventEmitter();

	constructor(
		private _pointsService: PointsService,
		private _routeParams: RouteParams,
		private _usersService: UsersService) { }

	createPoint(){
		this._pointsService.insertPoint(this.newPoint)
		.subscribe(
			pointData =>  this.added.emit(pointData),
			err => console.log('err', err)
		);
	}
	onCancel(){
		this.cancel.emit(null);
	}
	ngOnInit():any {
		this._issueId = +this._routeParams.get('id');
		let type = this._routeParams.get('type');
		this.newPoint = new Point(
			this._issueId, '', '', 
			type, 0, 0, '',
			this._usersService.profile._id);
	}
}