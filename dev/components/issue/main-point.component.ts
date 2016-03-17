import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {VoteCellComponent} from '../../shared/vote-cell.component';
import {Point} from '../../shared/point';
import {PointsService} from '../../shared/points.service';
@Component({
    selector: 'ro-main-point',
    templateUrl: 'templates/issue/main-point.tpl.html',
    directives: [VoteCellComponent]
})
export class MainPointComponent {
	@Input('point') point: Point;
	@Output() removed: EventEmitter<any> = new EventEmitter();
	constructor(
		private _pointsService: PointsService){};

	deletePoint(){
		this._pointsService
		.deletePoint(this.point)
		.subscribe(
			success => this.removed.emit(null),
			err => console.log('Err: ', err)
		);
	}
}