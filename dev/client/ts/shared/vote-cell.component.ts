import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {VoteCellService} from './vote-cell.service';
@Component({
    selector: 'ro-vote-cell',
    templateUrl: 'templates/shared/vote-cell.tpl.html',
    providers: [VoteCellService],
    styleUrls: ['styles/vote-cell.css']
})
export class VoteCellComponent {
	@Input('sourceType') sourceType: string;
	@Input('sourceId') sourceId: string;
	@Input('score') score: number;
	@Output() upVoted: EventEmitter<any> = new EventEmitter();
	@Output() downVoted: EventEmitter<any> = new EventEmitter();
	constructor(
		private _voteCellService: VoteCellService){}

	vote(type: string, event: MouseEvent) {
		event.stopPropagation();
		this._voteCellService.addVote(
			this.sourceType, 
			this.sourceId, 
			type)
		.subscribe(
			success => {
				(type === 'upvote')
					?
					this.upVoted.emit(null)
					:
					this.downVoted.emit(null);
			},
			err => console.log('Err: ', err)
		);
	}
}