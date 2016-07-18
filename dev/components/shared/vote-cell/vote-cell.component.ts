declare function require(name: string);
import {Component, Input, Output, EventEmitter, OnInit} from 'angular2/core';
import {VoteService} from '../../../ts/shared/net-services/vote-cell.service';
import {AuthService} from '../../../ts/shared/net-services/auth.service';
import {UsersService} from '../../../ts/shared/net-services/users.service';
@Component({
    selector: 'ro-vote-cell',
    template: require('dev/components/shared/vote-cell/vote-cell.tpl.html'),
    providers: [VoteService]
    //styleUrls: ['styles/vote-cell.css']
})
export class VoteCellComponent implements OnInit{
	@Input() sourceType: string;
	@Input() sourceId: number;
	@Input() score: number;
	@Input() upvoteText: string;
	@Input() downvoteText: string;
	@Input() whyVoteText: string;
	@Output() modVote: EventEmitter<any> = new EventEmitter();
	private upVoted: boolean = false;
	private downVoted: boolean = false;
	private indexInProfile: number;
	constructor(
		private _voteService: VoteService,
		private _authService: AuthService,
		private _usersService: UsersService){
	}
	ngOnInit():any{
		if (this._authService.checkTokenExists(true)) {
			for (var i = this._usersService.profile.votes.length - 1; i >= 0; i--) {
				if (this._usersService.profile.votes[i].post_id === this.sourceId) {
					this.indexInProfile = i
					switch (this._usersService.profile.votes[i].vote_type_id) {
						case 1:
							this.upVoted = true;
							break;
						case 2:
							this.downVoted = true;
							break;
					}
				}
			}
		}
	}
	vote(typeId: number, event: MouseEvent) {
		event.stopPropagation();
		if (this._authService.checkTokenExists()) {
			this._voteService.vote(
				this.sourceId,
				typeId)
				.subscribe(
					data => {
						console.log(data);
						this.score += data.modAmount
						if (this.indexInProfile) {
							this._usersService.profile.votes[
								this.indexInProfile].vote_type_id = data.modTo;
						}
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