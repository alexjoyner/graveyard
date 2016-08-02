declare function require(name:string);
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
export class VoteCellComponent {
    @Input() sourceType:string;
    @Input() sourceId:number;
    @Input() score:number;
    @Input() upvoteText:string;
    @Input() downvoteText:string;
    @Input() whyVoteText:string;
    @Input() upVoted:boolean;
    @Input() downVoted:boolean;
    @Input() indexOfVote:number;
    @Input() undoVoteMode:boolean = false;
    @Output() modVote:EventEmitter<any> = new EventEmitter();
    @Output() didDownVote:EventEmitter<any> = new EventEmitter();

    constructor(private _voteService:VoteService,
                private _authService:AuthService,
                private _usersService:UsersService) {
    }

    vote(typeId:number, event:MouseEvent) {
        event.stopPropagation();
        if (this._authService.checkTokenExists()) {
            this._voteService.vote(
                this.sourceId,
                typeId)
                .subscribe(
                    data => {
                        if (typeId === 2) {
                            this.didDownVote.emit(null);
                        }
                        console.log(data);
                        this.score += data['modAmount']
                        if (this.indexOfVote) {
                            this._usersService.profile.votes[this.indexOfVote].vote_type_id = data['modTo'];
                        }else{
                            this._usersService.profile.votes.push({'post_id': this.sourceId, 'vote_type_id': data['modTo']});
                        }
                        this.upVoted = false;
                        this.downVoted = false;
                        switch (data['modTo']) {
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