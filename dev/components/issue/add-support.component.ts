import {Component, Input, OnInit, Output, EventEmitter} from 'angular2/core';
import {Support} from '../../shared/support';
import {SupportsService} from '../../shared/supports.service';
import {PointsService} from '../../shared/points.service';
// Parent is points-list
@Component({
    selector: 'ro-add-support',
    templateUrl: 'templates/issue/add-support.tpl.html'
})
export class AddSupportComponent implements OnInit{
	@Input('pointId') pointId: string;
	@Input('pointIndex') pointIndex: number;
	newSupport: Support;
	@Output() added: EventEmitter<any> = new EventEmitter();

	constructor(
		private _supportsService: SupportsService,
		private _pointsService: PointsService) { };

	createSupport(){
		this._supportsService.insertSupport(this.newSupport);
		this._pointsService.insertSupport(this.pointIndex, this.newSupport);
		this.added.emit(null);
	}
	ngOnInit():any {
		this.newSupport = new Support(this.pointId, '', '', '', '', 0, 0);
	}
}