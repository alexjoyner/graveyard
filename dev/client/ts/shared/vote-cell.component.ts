import {Component, Input, Output, EventEmitter, OnInit} from 'angular2/core';
import {VoteService} from './vote-cell.service';
import {AuthService} from './auth.service';
import {UsersService} from './users.service';
@Component({
    selector: 'ro-vote-cell',
    templateUrl: 'templates/shared/vote-cell.tpl.html',
    providers: [VoteService],
    styleUrls: ['styles/vote-cell.css']
})
export class VoteCellComponent implements OnInit{
	@Input() sourceType: string;
	@Input() sourceId: number;
	@Input() score: number;
	@Output() modVote: EventEmitter<any> = new EventEmitter();
	private upVoted: boolean = false;
	private downVoted: boolean = false;
	constructor(
		private _voteService: VoteService,
		private _authService: AuthService,
		private _usersService: UsersService){
	}
	ngOnInit():any{
		for (var i = this._usersService.profile.votes.length - 1; i >= 0; i--) {
			if(this._usersService.profile.votes[i].post_id === this.sourceId){
				switch (this._usersService.profile.votes[i].vote_type_id) {
					case 1:
						this.upVoted = true;
						console.log('UPVOTED: ', this.sourceId);
						break;
					case 2:
						this.downVoted = true;
						console.log('DOWNVOTED: ', this.sourceId);
						break;
				}
			}
		}
	}
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
						this.upVoted = false;
						this.downVoted = false;
						switch (data.modTo) {
							case 1:
								this.upVoted = true;
								break;
							case 2:
								this.downVoted = true;
								break;
						}
					},
					err => console.log('Err: ', err)
				);
		}
	}
}