import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {VoteCellComponent} from '../../shared/vote-cell.component';
import {Support} from '../../shared/support';
import {SupportsService} from '../../shared/supports.service';
@Component({
    selector: 'ro-more-support',
    templateUrl: 'templates/issue/more-support.tpl.html'
})
export class MoreSupportComponent {
	@Input('supports') supports: Support[];
	@Output() removed: EventEmitter<any> = new EventEmitter();
	constructor(
		private _supportService: SupportsService) { };


	removeSupport(supportId: string, supportIndex: number) {
		this._supportService.deleteSupport(supportId)
			.subscribe(
			success => {
				this.removed.emit(supportIndex+1);
			},
			err => console.log('Error: ', err)
			);
	};
}