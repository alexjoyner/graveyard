import {Injectable} from 'angular2/core';
import {Issue} from './issue';
import {ISSUES} from '../mock/mock-issues';

@Injectable()
export class IssuesService {
	/* GET */
	getAllIssues() {
		return ISSUES;
	}
	getIssue(issue: Issue){
		//real examle will use id
	}
	/* POST */
	insertIssue(issue: Issue){
		ISSUES.push(issue);
	}
	/* DELETE */
	deleteIssue(issue: Issue){
		ISSUES.splice(ISSUES.indexOf(issue), 1);
	}

	/*VOTING ISSUES SUPPORT*/
	voteIssue(issue: Issue, voteType: string){
		if (voteType === 'upvote') {
			ISSUES[ISSUES.indexOf(issue)].ups++;
		} else
		if (voteType === 'downvote') {
			ISSUES[ISSUES.indexOf(issue)].downs++;
		} else {
			console.log('No type recognized')
		}
	}
}