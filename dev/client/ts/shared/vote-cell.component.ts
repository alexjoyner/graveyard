import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {VoteService} from './vote-cell.service';
import {AuthService} from './auth.service';
@Component({
    selector: 'ro-vote-cell',
    templateUrl: 'templates/shared/vote-cell.tpl.html',
    providers: [VoteService],
    styleUrls: ['styles/vote-cell.css']
})
export class VoteCellComponent {
	@Input() sourceType: string;
	@Input() sourceId: string;
	@Input() score: number;
	@Output() modVote: EventEmitter<any> = new EventEmitter();
	constructor(
		private _voteService: VoteService,
		private _authService: AuthService){}

	vote(typeId: number, event: MouseEvent) {
		event.stopPropagation();
		if (this._authService.checkValid()) {
			this._voteService.vote(
				this.sourceId,
				typeId)
				.subscribe(
					data => {
						console.log(data);
						this.score += data.modAmount
					},
					err => console.log('Err: ', err)
				);
		}
	}
}