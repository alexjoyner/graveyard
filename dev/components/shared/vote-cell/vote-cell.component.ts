import {Post} from "../../../ts/shared/structures/post";
import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {VoteService} from '../../../ts/shared/net-services/vote-cell.service';
import {AuthService} from '../../../ts/shared/net-services/auth.service';
import {UsersService} from '../../../ts/shared/net-services/users.service';
@Component({
    selector: 'mt-vote-cell',
    template: require('./vote-cell.tpl.html'),
    providers: [VoteService],
    styles: [require('./_vote-cell.sass')]
})
export class VoteCellComponent {
    @Input() post: Post;
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