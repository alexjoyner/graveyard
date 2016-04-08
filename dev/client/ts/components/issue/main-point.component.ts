import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {VoteCellComponent} from '../../shared/vote-cell.component';
import {Point} from '../../shared/point';
import {PointsService} from '../../shared/points.service';
import {EditPointComponent} from './edit-point.component';
import { UsersService} from '../../shared/users.service';
@Component({
    selector: 'ro-main-point',
    templateUrl: 'templates/issue/main-point.tpl.html',
    directives: [VoteCellComponent, EditPointComponent],
    styleUrls: ['styles/point.css']
})
export class MainPointComponent {
	@Input('point') point: Point;
	@Output() removed: EventEmitter<any> = new EventEmitter();
	@Output() smoothScroll: EventEmitter<any> = new EventEmitter();
	constructor(
		private _pointsService: PointsService,
		private _usersService: UsersService){};
	editPoint(point: Point, event: MouseEvent, cancelFlag: boolean) {
		event.stopPropagation();
		this.smoothScroll.emit(null)
		let answer: boolean;
		if (cancelFlag) {
			answer = confirm('Canceling will discard changes. Continue?');
		}
		if (answer || !cancelFlag) {
			this.point['editPoint'] =
				(this.point['editPoint']) ? !this.point['editIssue'] : true;
		}
	}
	deletePoint(){
		let answer: boolean = confirm(`Are you sure you want to delete this main point? This action can't be undone`);
		if (answer === true) {
			this._pointsService
				.deletePoint(this.point)
				.subscribe(
				success => {
					this.removed.emit(null)
				},
				err => console.log('Err: ', err)
				);
		}
	}
	stringToDate(string: string) {
		return new Date(string);
	}
	isOwner(username: string) {
		return (username === this._usersService.profile.email);
	}
}