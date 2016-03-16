import {Injectable} from 'angular2/core';
import {ISSUES} from '../mock/mock-issues';
import {POINTS} from '../mock/mock-points';
import {SUPPORTS} from '../mock/mock-supports';
@Injectable()
export class VoteCellService {
	/*POST*/
	addVote(
		srcType: string, 
		srcId: string, 
		voteType: string){
		console.log(srcType, srcId, voteType);
		if(srcType === 'issue'){
			for (var i = ISSUES.length - 1; i >= 0; i--) {
				if (ISSUES[i]._id === srcId) {
					if (voteType === 'upvote') {
						ISSUES[i].ups++;
					} else
					if (voteType === 'downvote') {
						ISSUES[i].downs++;
					} else {
						console.log('No type recognized')
					}
				}
			}
		}else
		if (srcType === 'point') {
			for (var i = POINTS.length - 1; i >= 0; i--) {
				if (POINTS[i]._id === srcId) {
					if (voteType === 'upvote') {
						POINTS[i].ups++;
					} else
						if (voteType === 'downvote') {
							POINTS[i].downs++;
						} else {
							console.log('No type recognized')
						}
				}
			}
		} else
		if (srcType === 'support') {
			for (var i = SUPPORTS.length - 1; i >= 0; i--) {
				if (SUPPORTS[i]._id === srcId) {
					if (voteType === 'upvote') {
						SUPPORTS[i].ups++;
					} else
						if (voteType === 'downvote') {
							SUPPORTS[i].downs++;
						} else {
							console.log('No type recognized')
						}
				}
			}
		} else {
			console.log('No source type found');
		}
	}
}








