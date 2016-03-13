import {Component, Input} from 'angular2/core';
import {VoteCellService} from './vote-cell.service';
@Component({
    selector: 'ro-vote-cell',
    templateUrl: 'templates/shared/vote-cell.tpl.html',
    providers: [VoteCellService]
})
export class VoteCellComponent {
	@Input('sourceType') sourceType: string;
	@Input('sourceId') sourceId: string;
	@Input('score') score: number;

	constructor(
		private _voteCellService: VoteCellService){}

	voteIssue(type: string, event: any) {
		event.stopPropagation();
		this._voteCellService.addVote(
			this.sourceType, 
			this.sourceId, 
			type);
	}
}