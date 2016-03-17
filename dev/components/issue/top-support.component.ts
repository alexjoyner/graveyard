import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {VoteCellComponent} from '../../shared/vote-cell.component';
import {Support} from '../../shared/support';
import {SupportsService} from '../../shared/supports.service';
@Component({
    selector: 'ro-top-support',
    templateUrl: 'templates/issue/top-support.tpl.html',
    directives: [VoteCellComponent]
})
export class TopSupportComponent {
	@Input('support') support: Support;

	@Output() addEvidence: EventEmitter<any> = new EventEmitter();
	@Output() viewAll: EventEmitter<any> = new EventEmitter();
	@Output() removed: EventEmitter<any> = new EventEmitter();
	constructor(
		private _supportService: SupportsService) { };


	removeSupport(supportId: string) {
		this._supportService.deleteSupport(supportId)
		.subscribe(
			success => {
				this.removed.emit(null);
			},
			err => console.log('Error: ', err)
		);
	};

	toggleViewAll(){
		this.viewAll.emit(null);
	}

	toggleAddEvidence() {
		this.addEvidence.emit(null);
	}
}