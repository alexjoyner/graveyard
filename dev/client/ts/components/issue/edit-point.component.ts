import {Component, Input, Output, OnInit, EventEmitter} from 'angular2/core';
import {Point} from '../../shared/point';
import {PointsService} from '../../shared/points.service';
import { Router } from 'angular2/router';
@Component({
    selector: 'ro-edit-point',
    templateUrl: 'templates/issue/edit-point.tpl.html',
    providers: [PointsService]
})
export class EditPointComponent implements OnInit {
	@Input() myPoint: Issue;
	@Input() editMode: boolean;
	@Output() edited: EventEmitter<any> = new EventEmitter();
	point: Point;
	ngOnInit(): any {
		this.point = new Point(
				this.myPoint.issue_id,
				this.myPoint.problem,
				this.myPoint.detail,
				this.myPoint.type,
				0,0,'',
				this.myPoint._id);

	}
	constructor(
		private _pointsService: PointsService,
		private _router: Router) { };

	onUpdate() {
		this._pointsService.updatePoint(this.point)
			.subscribe(
			data => {
				console.log('Success: ', data);
				this.myPoint.problem = this.point.problem;
				this.myPoint.detail = this.point.detail;
				this.edited.emit(null);
			},
			err => console.log('Error: ', err)
			);
	}
	onCancel(){
		let answer: boolean = confirm('Canceling will discard changes. Continue?');
		if (answer === true) {
			// Edit does the same thing that cancel would
			// I'm just using this! :)
			this.edited.emit(null);
		}
	}
}